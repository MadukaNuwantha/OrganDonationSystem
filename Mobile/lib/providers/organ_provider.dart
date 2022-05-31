import 'dart:convert';
import 'dart:io';

import 'package:OrganDonorApp/main.dart';
import 'package:OrganDonorApp/models/organ_model.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:http/http.dart' as http;

class OrganProvider extends ChangeNotifier {
  Organ organ = Organ(
    organId: '',
    organ: '',
    organSize: '',
    bloodType: '',
    age: '',
    gender: '',
    location: '',
  );
  List<Organ> organList = [];

  Future<List<Organ>> getOrganList(BuildContext context) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Orgon'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      organList.clear();
      final data = jsonDecode(response.body) as List;
      for (Map<String, dynamic> organ in data) {
        organList.add(Organ.fromJson(organ));
      }
      notifyListeners();
      return organList;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return organList;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return organList;
    }
  }

  Future createOrgan(
    BuildContext context,
    String organId,
    String organ,
    String organSize,
    String bloodType,
    String age,
    String gender,
    String location,
  ) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.post(
      Uri.parse('https://10.0.2.2:7064/api/Orgon'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: organToJson(
        Organ(
          organId: organId,
          organ: organ,
          organSize: organSize,
          bloodType: bloodType,
          age: age,
          gender: gender,
          location: location,
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
}
