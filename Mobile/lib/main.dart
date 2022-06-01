import 'dart:io';

import 'package:OrganDonorApp/providers/comment_provider.dart';
import 'package:OrganDonorApp/providers/donor_provider.dart';
import 'package:OrganDonorApp/providers/organ_provider.dart';
import 'package:OrganDonorApp/providers/patient_provider.dart';
import 'package:OrganDonorApp/routes/screen_routes.dart';
import 'package:OrganDonorApp/screens/dashboard_screens/splash_screen.dart';
import 'package:OrganDonorApp/theme.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() => runApp(
      MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (_) => DonorProvider()),
          ChangeNotifierProvider(create: (_) => OrganProvider()),
          ChangeNotifierProvider(create: (_) => CommentProvider()),
          ChangeNotifierProvider(create: (_) => PatientProvider()),
        ],
        child: const OrganDonorApp(),
      ),
    );

class OrganDonorApp extends StatelessWidget {
  const OrganDonorApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Organ Donor App',
      debugShowCheckedModeBanner: false,
      theme: theme(),
      home: const SplashScreen(),
      onGenerateRoute: PageRoutes.generateRoute,
    );
  }
}

class MyHttpOverrides extends HttpOverrides {
  @override
  HttpClient createHttpClient(SecurityContext? context) {
    return super.createHttpClient(context)
      ..badCertificateCallback =
          (X509Certificate cert, String host, int port) => true;
  }
}
