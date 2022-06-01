import 'dart:convert';

List<Donor> donorListFromJson(String str) =>
    List<Donor>.from(json.decode(str).map((x) => Donor.fromJson(x)));

String donorListToJson(List<Donor> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

Donor donorFromJson(String str) => Donor.fromJson(json.decode(str));

String donorToJson(Donor data) => json.encode(data.toJson());

class Donor {
  String donateId;
  String title;
  String firstName;
  String lastName;
  String middleName;
  String prefferedName;
  DateTime dob;
  String gender;
  String nic;
  String addLine1;
  String addLine2;
  String city;
  String province;
  int postalCode;
  String email;
  String telephone;
  String mobile;
  String prefContact;
  String donateType;
  String hiv;
  String asc;
  String diabets;
  String kidneyDisease;
  String heartDisease;
  String none;

  Donor({
    required this.donateId,
    required this.title,
    required this.firstName,
    required this.lastName,
    required this.middleName,
    required this.prefferedName,
    required this.dob,
    required this.gender,
    required this.nic,
    required this.addLine1,
    required this.addLine2,
    required this.city,
    required this.province,
    required this.postalCode,
    required this.email,
    required this.telephone,
    required this.mobile,
    required this.prefContact,
    required this.donateType,
    required this.hiv,
    required this.asc,
    required this.diabets,
    required this.kidneyDisease,
    required this.heartDisease,
    required this.none,
  });

  factory Donor.fromJson(Map<String, dynamic> json) => Donor(
        donateId: json["donateId"],
        title: json["title"],
        firstName: json["firstName"],
        lastName: json["lastName"],
        middleName: json["middleName"],
        prefferedName: json["prefferedName"],
        dob: DateTime.parse(json["dob"]),
        gender: json["gender"],
        nic: json["nic"],
        addLine1: json["addLine1"],
        addLine2: json["addLine2"],
        city: json["city"],
        province: json["province"],
        postalCode: json["postalCode"],
        email: json["email"],
        telephone: json["telephone"],
        mobile: json["mobile"],
        prefContact: json["prefContact"],
        donateType: json["donateType"],
        hiv: json["hiv"],
        asc: json["asc"],
        diabets: json["diabets"],
        kidneyDisease: json["kidneyDisease"],
        heartDisease: json["heartDisease"],
        none: json["none"],
      );

  Map<String, dynamic> toJson() => {
        "donateId": donateId,
        "title": title,
        "firstName": firstName,
        "lastName": lastName,
        "middleName": middleName,
        "prefferedName": prefferedName,
        "dob":
            "${dob.year.toString().padLeft(4, '0')}-${dob.month.toString().padLeft(2, '0')}-${dob.day.toString().padLeft(2, '0')}",
        "gender": gender,
        "nic": nic,
        "addLine1": addLine1,
        "addLine2": addLine2,
        "city": city,
        "province": province,
        "postalCode": postalCode,
        "email": email,
        "telephone": telephone,
        "mobile": mobile,
        "prefContact": prefContact,
        "donateType": donateType,
        "hiv": hiv,
        "asc": asc,
        "diabets": diabets,
        "kidneyDisease": kidneyDisease,
        "heartDisease": heartDisease,
        "none": none,
      };
}
