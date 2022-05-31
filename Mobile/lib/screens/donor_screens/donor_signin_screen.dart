import 'package:OrganDonorApp/providers/donor_provider.dart';
import 'package:OrganDonorApp/widgets/submit_button.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class DonorSignInScreen extends StatefulWidget {
  const DonorSignInScreen({Key? key}) : super(key: key);

  @override
  State<DonorSignInScreen> createState() => _DonorSignInScreenState();
}

class _DonorSignInScreenState extends State<DonorSignInScreen> {
  final _formKey = GlobalKey<FormState>();
  late FocusScopeNode node;
  late TextEditingController email = TextEditingController();
  late TextEditingController password = TextEditingController();
  late bool showPassword;
  late DonorProvider donorProvider;

  @override
  void initState() {
    donorProvider = (context).read<DonorProvider>();
    showPassword = false;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    node = FocusScope.of(context);
    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                'Donor Login',
                style: GoogleFonts.raleway(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: Colors.purple.shade400,
                ),
              ),
              Image.asset(
                'assets/Hospital Bed.png',
                width: MediaQuery.of(context).size.width * 0.8,
              ),
              const SizedBox(height: 30),
              Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    emailFormField(),
                    const SizedBox(height: 15),
                    passwordFormField(),
                    const SizedBox(height: 20),
                    SubmitButton(() {
                      donorProvider.login(context, email.text, password.text);
                    }, 'Login'),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget emailFormField() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5),
      child: TextFormField(
        keyboardType: TextInputType.emailAddress,
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter your email address';
          }
          return null;
        },
        controller: email,
        textInputAction: TextInputAction.next,
        onEditingComplete: () => node.nextFocus(),
        decoration: const InputDecoration(
          labelText: "Preffered Name",
          hintText: "Preffered Name",
          floatingLabelBehavior: FloatingLabelBehavior.auto,
        ),
      ),
    );
  }

  Widget passwordFormField() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5),
      child: TextFormField(
        obscureText: !showPassword,
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter valid password';
          }
          return null;
        },
        controller: password,
        textInputAction: TextInputAction.done,
        onEditingComplete: () => node.unfocus(),
        decoration: InputDecoration(
          suffix: GestureDetector(
            onTap: () {
              setState(() {
                showPassword = !showPassword;
              });
            },
            child: FaIcon(
              showPassword ? FontAwesomeIcons.eye : FontAwesomeIcons.eyeSlash,
              color: Colors.grey,
              size: 16,
            ),
          ),
          labelText: "NIC Number",
          hintText: "NIC Number",
          floatingLabelBehavior: FloatingLabelBehavior.auto,
        ),
      ),
    );
  }
}
