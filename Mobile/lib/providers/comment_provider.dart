import 'dart:convert';
import 'dart:io';

import 'package:OrganDonorApp/main.dart';
import 'package:OrganDonorApp/models/comment_model.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:http/http.dart' as http;

class CommentProvider extends ChangeNotifier {
  Comment comment = Comment(
    commentId: '',
    name: '',
    comment: '',
    time: DateTime.now(),
  );

  List<Comment> commentList = [];

  Future<List<Comment>> getCommentList(BuildContext context) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.get(
      Uri.parse('https://10.0.2.2:7064/api/Comment'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
    );
    if (response.statusCode == 200) {
      commentList.clear();
      final data = jsonDecode(response.body) as List;
      for (Map<String, dynamic> comment in data) {
        commentList.add(Comment.fromJson(comment));
      }
      notifyListeners();
      return commentList;
    } else if (response.statusCode == 400) {
      Fluttertoast.showToast(msg: 'Authentication Failed');
      notifyListeners();
      return commentList;
    } else {
      Fluttertoast.showToast(msg: 'Server Error');
      notifyListeners();
      return commentList;
    }
  }

  Future createPost(
    BuildContext context,
    String commentId,
    String name,
    String comment,
    DateTime time,
  ) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.post(
      Uri.parse('https://10.0.2.2:7064/api/Comment'),
      headers: {
        HttpHeaders.acceptHeader: "application/json",
        HttpHeaders.contentTypeHeader: "application/json",
      },
      body: commentToJson(
        Comment(
          commentId: commentId,
          name: name,
          comment: comment,
          time: time,
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

  void deleteComment(BuildContext context, String commentID) async {
    HttpOverrides.global = MyHttpOverrides();
    final response = await http.delete(
      Uri.parse('https://10.0.2.2:7064/api/Comment/$commentID'),
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
