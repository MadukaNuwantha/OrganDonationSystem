import 'dart:convert';

List<Patient> patientListFromJson(String str) =>
    List<Patient>.from(json.decode(str).map((x) => Patient.fromJson(x)));

String patientListToJson(List<Patient> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

Patient patientFromJson(String str) => Patient.fromJson(json.decode(str));

String patientToJson(Patient data) => json.encode(data.toJson());

class Patient {
  String patientId;
  String userName;
  int age;
  DateTime dob;
  String gender;
  String email;
  String hospital;
  String gardName;
  String gardContact;
  String gardRel;
  String gardAddress;
  String organ;
  String bloodType;
  String organSize;
  String condition;
  DateTime dateOfReg;
  String waitingList;
  int points;
  String medicalurgency;
  int distance;
  String compatability;
  String oneyearpost;

  Patient({
    required this.patientId,
    required this.userName,
    required this.age,
    required this.dob,
    required this.gender,
    required this.email,
    required this.hospital,
    required this.gardName,
    required this.gardContact,
    required this.gardRel,
    required this.gardAddress,
    required this.organ,
    required this.bloodType,
    required this.organSize,
    required this.condition,
    required this.dateOfReg,
    required this.waitingList,
    required this.points,
    required this.medicalurgency,
    required this.distance,
    required this.compatability,
    required this.oneyearpost,
  });

  factory Patient.fromJson(Map<String, dynamic> json) => Patient(
        patientId: json["patientId"],
        userName: json["userName"],
        age: json["age"],
        dob: DateTime.parse(json["dob"]),
        gender: json["gender"],
        email: json["email"],
        hospital: json["hospital"],
        gardName: json["gardName"],
        gardContact: json["gardContact"],
        gardRel: json["gardRel"],
        gardAddress: json["gardAddress"],
        organ: json["organ"],
        bloodType: json["bloodType"],
        organSize: json["organSize"],
        condition: json["condition"],
        dateOfReg: DateTime.parse(json["dateOfReg"]),
        waitingList: json["waitingList"],
        points: json["points"],
        medicalurgency: json["medicalurgency"],
        distance: json["distance"],
        compatability: json["compatability"],
        oneyearpost: json["oneyearpost"],
      );

  Map<String, dynamic> toJson() => {
        "patientId": patientId,
        "userName": userName,
        "age": age,
        "dob":
            "${dob.year.toString().padLeft(4, '0')}-${dob.month.toString().padLeft(2, '0')}-${dob.day.toString().padLeft(2, '0')}",
        "gender": gender,
        "email": email,
        "hospital": hospital,
        "gardName": gardName,
        "gardContact": gardContact,
        "gardRel": gardRel,
        "gardAddress": gardAddress,
        "organ": organ,
        "bloodType": bloodType,
        "organSize": organSize,
        "condition": condition,
        "dateOfReg": dateOfReg.toIso8601String(),
        "waitingList": waitingList,
        "points": points,
        "medicalurgency": medicalurgency,
        "distance": distance,
        "compatability": compatability,
        "oneyearpost": oneyearpost,
      };
}
