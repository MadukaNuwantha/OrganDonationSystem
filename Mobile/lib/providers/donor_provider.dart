import 'dart:convert';
import 'dart:io';

import 'package:OrganDonorApp/main.dart';
import 'package:OrganDonorApp/models/donor_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:http/http.dart' as http;

class DonorProvider extends ChangeNotifier {
  final storage = const FlutterSecureStorage();
  Donor donor = Donor(
    donateId: '',
    title: '',
    firstName: '',
    lastName: '',
    middleName: '',
    prefferedName: '',
    dob: DateTime.now(),
    gender: '',
    nic: '',
    addLine1: '',
    addLine2: '',
    city: '',
    province: '',
    postalCode: -1,
    email: '',
    telephone: '',
    mobile: '',
    prefContact: '',
    donateType: '',
    ethnicity: '',
    religion: '',
    hiv: '',
    asc: '',
    diabets: '',
    kidneyDisease: '',
    heartDisease: '',
    none: '',
  );

  List<Donor> donorList = [];

  void login(BuildContext context, String username, String password) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.post(
      Uri.parse('https://10.0.2.2:7064/api/Donate/login'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: jsonEncode(
        <String, String>{
          'username': username,
          'password': password,
        },
      ),
    );
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      donor = Donor.fromJson(data);
      notifyListeners();
      await storage.write(key: 'userId', value: donor.donateId);
      await storage.write(key: 'name', value: donor.prefferedName);
      await storage.write(key: 'role', value: 'donor');
      Fluttertoast.showToast(msg: 'Login Success');
      Navigator.pushNamed(context, '/dashboard');
    } else {
      notifyListeners();
      print(response.body);
      Fluttertoast.showToast(msg: 'Login Failed');
    }
  }

  Future<List<Donor>> getDonorList(BuildContext context) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Donate'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      donorList.clear();
      final data = jsonDecode(response.body) as List;
      for (Map<String, dynamic> donor in data) {
        donorList.add(Donor.fromJson(donor));
      }
      notifyListeners();
      return donorList;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return donorList;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return donorList;
    }
  }

  Future<Donor> getDonor(BuildContext context) async {
    final donorID = await storage.read(key: 'userId');
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Donate/$donorID'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      donor = Donor.fromJson(data);
      notifyListeners();
      Navigator.pushNamed(context, '/donorProfile');
      return donor;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return donor;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return donor;
    }
  }

  Future createDonor(
    BuildContext context,
    String donateId,
    String title,
    String firstName,
    String lastName,
    String middleName,
    String prefferedName,
    DateTime dob,
    String gender,
    String nic,
    String addLine1,
    String addLine2,
    String city,
    String province,
    int postalCode,
    String email,
    String telephone,
    String mobile,
    String prefContact,
    String donateType,
    String ethnicity,
    String religion,
    String hiv,
    String asc,
    String diabets,
    String kidneyDisease,
    String heartDisease,
    String none,
  ) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.post(
      Uri.parse('https://10.0.2.2:7064/api/Donate'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: donorToJson(
        Donor(
          donateId: donateId,
          title: title,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          prefferedName: prefferedName,
          dob: dob,
          gender: gender,
          nic: nic,
          addLine1: addLine1,
          addLine2: addLine2,
          city: city,
          province: province,
          postalCode: postalCode,
          email: email,
          telephone: telephone,
          mobile: mobile,
          prefContact: prefContact,
          donateType: donateType,
          ethnicity: ethnicity,
          religion: religion,
          hiv: hiv,
          asc: asc,
          diabets: diabets,
          kidneyDisease: kidneyDisease,
          heartDisease: heartDisease,
          none: none,
        ),
      ),
    );
    if (response.statusCode == 200) {
      notifyListeners();
      Fluttertoast.showToast(msg: 'Donor Added Successfully');
      Navigator.pushNamed(context, '/donorSignIn');
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
    }
  }
}
