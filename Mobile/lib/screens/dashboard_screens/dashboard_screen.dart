import 'package:OrganDonorApp/providers/donor_provider.dart';
import 'package:OrganDonorApp/providers/patient_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({Key? key}) : super(key: key);

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  final storage = const FlutterSecureStorage();
  late DonorProvider donorProvider;
  late PatientProvider patientProvider;
  @override
  void initState() {
    donorProvider = context.read<DonorProvider>();
    patientProvider = context.read<PatientProvider>();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple.shade300,
      ),
      drawer: Drawer(
        backgroundColor: Colors.purple.shade500,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 50, horizontal: 10),
          child: Column(
            children: [
              Center(
                child: storage.read(key: 'role') == 'donor'
                    ? donorProvider.donor.gender.toLowerCase() == 'male'
                        ? Image.asset(
                            'assets/Male Profile.png',
                            width: MediaQuery.of(context).size.width * 0.4,
                          )
                        : Image.asset(
                            'assets/Female Profile.png',
                            width: MediaQuery.of(context).size.width * 0.4,
                          )
                    : patientProvider.patient.gender.toLowerCase() == 'male'
                        ? Image.asset(
                            'assets/Male Profile.png',
                            width: MediaQuery.of(context).size.width * 0.4,
                          )
                        : Image.asset(
                            'assets/Female Profile.png',
                            width: MediaQuery.of(context).size.width * 0.4,
                          ),
              ),
              Divider(
                thickness: 2,
                color: Colors.grey.shade500,
              ),
              ListTile(
                leading: const Icon(
                  Icons.person,
                  size: 30,
                  color: Colors.white,
                ),
                title: const Text(
                  'Profile',
                  style: TextStyle(
                    fontSize: 21,
                    color: Colors.white,
                  ),
                ),
                onTap: () async {
                  await storage.read(key: 'role') == 'donor'
                      ? donorProvider.getDonor(context)
                      : patientProvider.getPatient(context);
                },
              ),
              ListTile(
                leading: const Icon(
                  Icons.boy_rounded,
                  size: 30,
                  color: Colors.white,
                ),
                title: const Text(
                  'Organs',
                  style: TextStyle(
                    fontSize: 21,
                    color: Colors.white,
                  ),
                ),
                onTap: () {
                  Navigator.pushNamed(context, '/organList');
                },
              ),
              SizedBox(height: MediaQuery.of(context).size.height * 0.4),
              ListTile(
                leading: const Icon(
                  Icons.logout,
                  size: 30,
                  color: Colors.white,
                ),
                title: const Text(
                  'Sign Out',
                  style: TextStyle(
                    fontSize: 21,
                    color: Colors.white,
                  ),
                ),
                onTap: () async {
                  await storage.deleteAll();
                  Navigator.pushNamedAndRemoveUntil(
                      context, '/landing', ModalRoute.withName('/landing'));
                },
              ),
            ],
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 10),
            child: Column(
              children: [
                Center(
                  child: Text(
                    'Welcome To Organ Donor',
                    style: GoogleFonts.raleway(
                      fontSize: 48,
                      fontWeight: FontWeight.w700,
                      color: Colors.purple.shade400,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                const SizedBox(height: 20),
                Center(
                  child: Image.asset(
                    'assets/Body.png',
                    width: MediaQuery.of(context).size.width * 0.9,
                  ),
                ),
                const SizedBox(height: 20),
                Container(
                  padding: const EdgeInsets.all(10.0),
                  decoration: BoxDecoration(
                    color: Colors.purple.shade50,
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(
                      color: Colors.purple.shade700,
                      width: 1,
                    ),
                  ),
                  child: Center(
                    child: Text(
                      'To the world you may be one person, but to one person you may be the world.',
                      style: GoogleFonts.raleway(
                        fontSize: 25,
                        fontWeight: FontWeight.w700,
                        color: Colors.purple.shade400,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
