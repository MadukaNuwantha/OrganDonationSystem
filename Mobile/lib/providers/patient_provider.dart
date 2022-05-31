import 'dart:convert';
import 'dart:io';

import 'package:OrganDonorApp/main.dart';
import 'package:OrganDonorApp/models/patient_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:http/http.dart' as http;

class PatientProvider extends ChangeNotifier {
  final storage = const FlutterSecureStorage();
  Patient patient = Patient(
    patientId: '',
    userName: '',
    age: -1,
    dob: DateTime.now(),
    gender: '',
    email: '',
    hospital: '',
    gardName: '',
    gardContact: '',
    gardRel: '',
    gardAddress: '',
    organ: '',
    bloodType: '',
    organSize: '',
    condition: '',
    dateOfReg: DateTime.now(),
    waitingList: '',
    points: -1,
    medicalurgency: '',
    distance: -1,
    compatability: '',
    oneyearpost: '',
  );

  List<Patient> patientList = [];

  void login(BuildContext context, String email, String password) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.post(
      Uri.parse('https://10.0.2.2:7064/api/Patient/login'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: jsonEncode(
        <String, String>{
          'username': email,
          'password': password,
        },
      ),
    );
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      patient = Patient.fromJson(data);
      notifyListeners();
      await storage.write(key: 'userId', value: patient.patientId);
      await storage.write(key: 'name', value: patient.userName);
      await storage.write(key: 'role', value: 'patient');
      Fluttertoast.showToast(msg: 'Login Success');
      Navigator.pushNamed(context, '/dashboard');
    } else {
      notifyListeners();
      Fluttertoast.showToast(msg: 'Login Failed');
    }
  }

  Future<List<Patient>> getPatientList(BuildContext context) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Patient'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      patientList.clear();
      final data = jsonDecode(response.body) as List;
      for (Map<String, dynamic> patient in data) {
        patientList.add(Patient.fromJson(patient));
      }
      notifyListeners();
      return patientList;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return patientList;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return patientList;
    }
  }

  Future<Patient> getPatient(BuildContext context) async {
    final patientID = await storage.read(key: 'userId');
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Patient/$patientID'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      patient = Patient.fromJson(data);
      notifyListeners();
      Navigator.pushNamed(context, '/patientProfile');
      return patient;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return patient;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return patient;
    }
  }

  Future<List<Patient>> getPatientListByOrgan(
      BuildContext context, String organ) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Patient/byorgon/$organ'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      patientList.clear();
      final data = jsonDecode(response.body) as List;
      for (Map<String, dynamic> patient in data) {
        patientList.add(Patient.fromJson(patient));
      }
      notifyListeners();
      return patientList;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return patientList;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return patientList;
    }
  }

  Future createPatient(
    BuildContext context,
    String patientId,
    String userName,
    int age,
    DateTime dob,
    String gender,
    String email,
    String hospital,
    String gardName,
    String gardContact,
    String gardRel,
    String gardAddress,
    String organ,
    String bloodType,
    String organSize,
    String condition,
    DateTime dateOfReg,
    String waitingList,
    int points,
    String medicalurgency,
    int distance,
    String compatability,
    String oneyearpost,
  ) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.post(
      Uri.parse('https://10.0.2.2:7064/api/Patient'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: patientToJson(
        Patient(
          patientId: patientId,
          userName: userName,
          age: age,
          dob: dob,
          gender: gender,
          email: email,
          hospital: hospital,
          gardName: gardName,
          gardContact: gardContact,
          gardRel: gardRel,
          gardAddress: gardAddress,
          organ: organ,
          bloodType: bloodType,
          organSize: organSize,
          condition: condition,
          dateOfReg: dateOfReg,
          waitingList: waitingList,
          points: points,
          medicalurgency: medicalurgency,
          distance: distance,
          compatability: compatability,
          oneyearpost: oneyearpost,
        ),
      ),
    );
    if (response.statusCode == 200) {
      notifyListeners();
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
    }
  }

  Future updatePatient(
    BuildContext context,
    String patientId,
    String userName,
    int age,
    DateTime dob,
    String gender,
    String email,
    String hospital,
    String gardName,
    String gardContact,
    String gardRel,
    String gardAddress,
    String organ,
    String bloodType,
    String organSize,
    String condition,
    DateTime dateOfReg,
    String waitingList,
    int points,
    String medicalurgency,
    int distance,
    String compatability,
    String oneyearpost,
  ) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.put(
      Uri.parse('https://10.0.2.2:7064/api/Patient/$patientId'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: patientToJson(
        Patient(
          patientId: patientId,
          userName: userName,
          age: age,
          dob: dob,
          gender: gender,
          email: email,
          hospital: hospital,
          gardName: gardName,
          gardContact: gardContact,
          gardRel: gardRel,
          gardAddress: gardAddress,
          organ: organ,
          bloodType: bloodType,
          organSize: organSize,
          condition: condition,
          dateOfReg: dateOfReg,
          waitingList: waitingList,
          points: points,
          medicalurgency: medicalurgency,
          distance: distance,
          compatability: compatability,
          oneyearpost: oneyearpost,
        ),
      ),
    );
    if (response.statusCode == 200) {
      notifyListeners();
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
    }
  }

  void deletePatient(BuildContext context, String patientID) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.delete(
      Uri.parse('https://10.0.2.2:7064/api/Patient/$patientID'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      notifyListeners();
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
    }
  }
}
