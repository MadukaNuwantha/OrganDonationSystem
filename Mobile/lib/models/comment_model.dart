import 'dart:convert';

List<Comment> commentListFromJson(String str) =>
    List<Comment>.from(json.decode(str).map((x) => Comment.fromJson(x)));

String commentListToJson(List<Comment> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

Comment commentFromJson(String str) => Comment.fromJson(json.decode(str));

String commentToJson(Comment data) => json.encode(data.toJson());

class Comment {
  String commentId;
  String name;
  String comment;
  DateTime time;

  Comment({
    required this.commentId,
    required this.name,
    required this.comment,
    required this.time,
  });

  factory Comment.fromJson(Map<String, dynamic> json) => Comment(
        commentId: json["commentId"],
        name: json["name"],
        comment: json["comment"],
        time: DateTime.parse(json["time"]),
      );

  Map<String, dynamic> toJson() => {
        "commentId": commentId,
        "name": name,
        "comment": comment,
        "time": time.toIso8601String(),
      };
}
