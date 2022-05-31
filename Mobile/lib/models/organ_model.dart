import 'dart:convert';

List<Organ> organListFromJson(String str) =>
    List<Organ>.from(json.decode(str).map((x) => Organ.fromJson(x)));

String organListToJson(List<Organ> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

Organ organFromJson(String str) => Organ.fromJson(json.decode(str));

String organToJson(Organ data) => json.encode(data.toJson());

class Organ {
  String organId;
  String organ;
  String organSize;
  String bloodType;
  String age;
  String gender;
  String location;

  Organ({
    required this.organId,
    required this.organ,
    required this.organSize,
    required this.bloodType,
    required this.age,
    required this.gender,
    required this.location,
  });

  factory Organ.fromJson(Map<String, dynamic> json) => Organ(
        organId: json["organId"],
        organ: json["organ"],
        organSize: json["organSize"],
        bloodType: json["bloodType"],
        age: json["age"],
        gender: json["gender"],
        location: json["location"],
      );

  Map<String, dynamic> toJson() => {
        "organId": organId,
        "organ": organ,
        "organSize": organSize,
        "bloodType": bloodType,
        "age": age,
        "gender": gender,
        "location": location,
      };
}
