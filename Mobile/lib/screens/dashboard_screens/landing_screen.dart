import 'package:OrganDonorApp/widgets/submit_button.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class LandingScreen extends StatelessWidget {
  const LandingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Organ Donor',
                style: GoogleFonts.raleway(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: Colors.purple.shade400,
                ),
              ),
              Image.asset(
                'assets/Landing.png',
                width: MediaQuery.of(context).size.width * 1,
              ),
              const SizedBox(height: 20),
              SubmitButton(() {
                Navigator.pushNamed(context, '/patientSignIn');
              }, 'Login As Patient'),
              SubmitButton(() {
                Navigator.pushNamed(context, '/donorSignIn');
              }, 'Login As Donor'),
              SubmitButton(() {
                Navigator.pushNamed(context, '/donorSignUp');
              }, 'Register As Donor'),
            ],
          ),
        ),
      ),
    );
  }
}
