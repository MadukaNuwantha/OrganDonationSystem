import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  final storage = const FlutterSecureStorage();
  late List<dynamic> colors;
  late int position;

  @override
  void initState() {
    position = 0;
    colors = [
      Colors.orangeAccent,
      Colors.orange,
      Colors.red,
      Colors.deepPurpleAccent,
      Colors.deepPurple,
      Colors.blue,
      Colors.teal
    ];
    changeColor();
    autoLogin();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Center(
            child: SpinKitFadingCube(
          color: colors[position],
          size: size.width * 0.35,
        )),
      ),
    );
  }

  changeColor() {
    Future.delayed(
      const Duration(milliseconds: 400),
      () {
        if (mounted) {
          setState(() {
            if (position < 6) {
              position++;
            } else {
              position = 0;
            }
          });
          changeColor();
        }
      },
    );
  }

  Future<void> autoLogin() async {
    await storage.read(key: 'role') != null
        ? Navigator.pushNamed(context, '/dashboard')
        : Navigator.pushNamed(context, '/landing');
  }
}
