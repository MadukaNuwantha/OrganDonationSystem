import 'package:OrganDonorApp/constants.dart';
import 'package:OrganDonorApp/providers/donor_provider.dart';
import 'package:OrganDonorApp/screens/secondary_screens/select_string_screen.dart';
import 'package:OrganDonorApp/utils/select_util.dart';
import 'package:OrganDonorApp/widgets/checkbox_input_field.dart';
import 'package:OrganDonorApp/widgets/select_input_field.dart';
import 'package:OrganDonorApp/widgets/submit_button.dart';
import 'package:OrganDonorApp/widgets/text_input_field.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

class DonorSignUpScreen extends StatefulWidget {
  const DonorSignUpScreen({Key? key}) : super(key: key);

  @override
  State<DonorSignUpScreen> createState() => _DonorSignUpScreenState();
}

class _DonorSignUpScreenState extends State<DonorSignUpScreen> {
  final _formKey = GlobalKey<FormState>();
  late DonorProvider donorProvider;
  late TextEditingController title = TextEditingController();
  late TextEditingController firstName = TextEditingController();
  late TextEditingController lastName = TextEditingController();
  late TextEditingController middleName = TextEditingController();
  late TextEditingController username = TextEditingController();
  late TextEditingController dateOfBirth = TextEditingController();
  late TextEditingController gender = TextEditingController();
  late TextEditingController nicNumber = TextEditingController();
  late TextEditingController addressLineOne = TextEditingController();
  late TextEditingController addressLineTwo = TextEditingController();
  late TextEditingController city = TextEditingController();
  late TextEditingController district = TextEditingController();
  late TextEditingController province = TextEditingController();
  late TextEditingController postalCode = TextEditingController();
  late TextEditingController email = TextEditingController();
  late TextEditingController landline = TextEditingController();
  late TextEditingController mobile = TextEditingController();
  late TextEditingController formOfContact = TextEditingController();
  late TextEditingController donateOrgan = TextEditingController();
  late TextEditingController ethnicity = TextEditingController();
  late TextEditingController religion = TextEditingController();
  late DateTime dob;
  late bool hasHiv;
  late bool hasCancer;
  late bool hasDiabetes;
  late bool hasKidneyDisease;
  late bool hasHeartDisease;
  late bool hasReadTerms;
  late bool hasnone;

  @override
  void initState() {
    donorProvider = context.read<DonorProvider>();
    dob = DateTime.now();
    hasHiv = false;
    hasCancer = false;
    hasDiabetes = false;
    hasKidneyDisease = false;
    hasHeartDisease = false;
    hasReadTerms = false;
    hasnone = false;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Form(
              key: _formKey,
              child: Column(
                children: [
                  const SizedBox(height: 18),
                  Text(
                    'Donor Registration',
                    style: GoogleFonts.raleway(
                      fontSize: 35,
                      fontWeight: FontWeight.w700,
                      color: Colors.purple.shade400,
                    ),
                  ),
                  Image.asset(
                    'assets/SignUp.png',
                    width: MediaQuery.of(context).size.width * 0.8,
                  ),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Demographic Data',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  TextInputField(firstName, 'First Name', 'First Name'),
                  TextInputField(lastName, 'Last Name', 'Last Name'),
                  TextInputField(middleName, 'Middle Name', 'Middle Name'),
                  TextInputField(username, 'Username', 'Username'),
                  SelectInputField(() async {
                    await showDatePicker(
                      context: context,
                      initialDate: DateTime.now(),
                      firstDate: DateTime(1900, 1),
                      lastDate: DateTime(2045),
                    ).then((pickedDate) {
                      if (pickedDate != null) {
                        dob = pickedDate;
                        dateOfBirth.text =
                            DateFormat('MM-dd-yyy').format(pickedDate);
                      }
                    });
                  }, dateOfBirth, 'Date Of Birth', 'Date Of Birth'),
                  SelectInputField(() {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: ((context) =>
                            SelectStringScreen(Constants.genderList)),
                      ),
                    ).whenComplete(
                      () {
                        gender.text = Selected.selectedString;
                      },
                    );
                  }, gender, 'Gender', 'Gender'),
                  TextInputField(nicNumber, 'NIC Number', 'NIC Number'),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Address Details',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  TextInputField(
                      addressLineOne, 'Address Line One', 'Address Line One'),
                  TextInputField(
                      addressLineTwo, 'Address Line Two', 'Address Line Two'),
                  TextInputField(city, 'City', 'City'),
                  TextInputField(district, 'District', 'District'),
                  TextInputField(province, 'Province', 'Province'),
                  TextInputField(postalCode, 'Postal Code', 'Postal Code'),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Contact Details',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  TextInputField(email, 'Email', 'Email'),
                  TextInputField(landline, 'Landline', 'Landline'),
                  TextInputField(mobile, 'Mobile', 'Mobile'),
                  SelectInputField(() {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: ((context) =>
                            SelectStringScreen(Constants.prefContactList)),
                      ),
                    ).whenComplete(
                      () {
                        formOfContact.text = Selected.selectedString;
                      },
                    );
                  }, formOfContact, 'Preferred Form Of Contact',
                      'Preferred Form Of Contact'),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Organ Choice',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  SelectInputField(() {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: ((context) =>
                            SelectStringScreen(Constants.organList)),
                      ),
                    ).whenComplete(
                      () {
                        donateOrgan.text = Selected.selectedString;
                      },
                    );
                  }, donateOrgan, 'Donate Organ', 'Donate Organ'),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Additional infomation',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  SelectInputField(() {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: ((context) =>
                            SelectStringScreen(Constants.ethnicList)),
                      ),
                    ).whenComplete(
                      () {
                        ethnicity.text = Selected.selectedString;
                      },
                    );
                  }, ethnicity, 'Ethnicity', 'Ethnicity'),
                  SelectInputField(() {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: ((context) =>
                            SelectStringScreen(Constants.religionList)),
                      ),
                    ).whenComplete(
                      () {
                        religion.text = Selected.selectedString;
                      },
                    );
                  }, religion, 'Religion', 'Religion'),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Medical information',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  hivCheckBox(),
                  cancerCheckBox(),
                  diabetesCheckBox(),
                  kidneyDiseaseCheckBox(),
                  heartDiseaseCheckBox(),
                  noneCheckBox(),
                  const SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        'Confirmation',
                        style: GoogleFonts.raleway(
                          fontSize: 20,
                          fontWeight: FontWeight.w500,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  confirmationCheckBox(),
                  const SizedBox(height: 15),
                  SubmitButton(() {
                    createDonor();
                  }, 'Register'),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget hivCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasHiv,
            onChanged: (bool? value) {
              setState(() {
                hasHiv = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'HIV',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget cancerCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasCancer,
            onChanged: (bool? value) {
              setState(() {
                hasCancer = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'Cancer',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget diabetesCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasDiabetes,
            onChanged: (bool? value) {
              setState(() {
                hasDiabetes = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'Diabetes',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget kidneyDiseaseCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasKidneyDisease,
            onChanged: (bool? value) {
              setState(() {
                hasKidneyDisease = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'Kidney Disease',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget heartDiseaseCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasHeartDisease,
            onChanged: (bool? value) {
              setState(() {
                hasHeartDisease = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'Heart Disease',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget noneCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasnone,
            onChanged: (bool? value) {
              setState(() {
                hasnone = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'None',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget confirmationCheckBox() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: hasReadTerms,
            onChanged: (bool? value) {
              setState(() {
                hasReadTerms = value!;
              });
            },
          ),
          const Flexible(
            child: Text(
              'I have read the privacy statements and give consent for the use of my infomation accordance with the terms.',
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }

  void createDonor() {
    if (!hasReadTerms) {
      Fluttertoast.showToast(
        msg: 'Agree to terms and conditions to continue',
        textColor: Colors.white,
        backgroundColor: Colors.red.shade800,
      );
    }
    if (_formKey.currentState!.validate()) {
      donorProvider.createDonor(
        context,
        '0',
        title.text,
        firstName.text,
        lastName.text,
        middleName.text,
        username.text,
        dob,
        gender.text,
        nicNumber.text,
        addressLineOne.text,
        addressLineTwo.text,
        city.text,
        province.text,
        int.parse(postalCode.text),
        email.text,
        landline.text,
        mobile.text,
        formOfContact.text,
        donateOrgan.text,
        ethnicity.text,
        religion.text,
        hasHiv.toString(),
        hasCancer.toString(),
        hasDiabetes.toString(),
        hasKidneyDisease.toString(),
        hasHeartDisease.toString(),
        hasnone.toString(),
      );
    }
  }
}
