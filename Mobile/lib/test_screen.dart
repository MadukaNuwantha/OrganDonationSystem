import 'package:OrganDonorApp/providers/comment_provider.dart';
import 'package:OrganDonorApp/providers/donor_provider.dart';
import 'package:OrganDonorApp/providers/organ_provider.dart';
import 'package:OrganDonorApp/providers/patient_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class TestScreen extends StatefulWidget {
  const TestScreen({Key? key}) : super(key: key);

  @override
  State<TestScreen> createState() => _TestScreenState();
}

class _TestScreenState extends State<TestScreen> {
  late DonorProvider donorProvider;
  late PatientProvider patientProvider;
  late OrganProvider organProvider;
  late CommentProvider commentProvider;

  @override
  void initState() {
    donorProvider = context.read<DonorProvider>();
    patientProvider = context.read<PatientProvider>();
    organProvider = context.read<OrganProvider>();
    commentProvider = context.read<CommentProvider>();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/organList');
                },
                child: const Text('Organ List'),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/dashboard');
                },
                child: const Text('Dashboard'),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/donorSignIn');
                },
                child: const Text('Donor SignIn'),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/donorSignUp');
                },
                child: const Text('Donor SignUp'),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/patientSignIn');
                },
                child: const Text('Patient SignIn'),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  patientProvider.getPatient(context);
                },
                child: const Text('Patient Profile'),
              ),
            ),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  donorProvider.getDonor(context);
                },
                child: const Text('Donor Profile'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
