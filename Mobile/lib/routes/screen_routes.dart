import 'package:OrganDonorApp/screens/dashboard_screens/dashboard_screen.dart';
import 'package:OrganDonorApp/screens/dashboard_screens/landing_screen.dart';
import 'package:OrganDonorApp/screens/donor_screens/donor_profile_screen.dart';
import 'package:OrganDonorApp/screens/donor_screens/donor_signin_screen.dart';
import 'package:OrganDonorApp/screens/donor_screens/donor_signup_screen.dart';
import 'package:OrganDonorApp/screens/organ_screens/organ_list_screen.dart';
import 'package:OrganDonorApp/screens/patient_screens/patient_profile_screen.dart';
import 'package:OrganDonorApp/screens/patient_screens/patient_signin_screen.dart';
import 'package:OrganDonorApp/test_screen.dart';
import 'package:flutter/material.dart';

class PageRoutes {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {

      // Test Routes
      case "/test":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const TestScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      // Landing Routes
      case "/landing":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const LandingScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      // Dashboard Routes
      case "/dashboard":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const DashboardScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      // Donor Routes
      case "/donorSignIn":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const DonorSignInScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      case "/donorSignUp":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const DonorSignUpScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      case "/donorProfile":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const DonorProfileScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      // Patient Routes
      case "/patientSignIn":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const PatientSignInScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      case "/patientSignUp":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const TestScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      case "/patientProfile":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const PatientProfileScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      case "/patientOrganAvailability":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const TestScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      // Organ Routes
      case "/organList":
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const OrganListScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );

      // Admin Routes
      // case "/applicationform":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const ApplicationFormScreen(),
      //     settings: settings,
      //     transitionsBuilder: (context, animation, secondaryAnimation, child) =>
      //         SlideTransition(
      //       child: child,
      //       position: Tween<Offset>(
      //         begin: const Offset(1.0, 0.0),
      //         end: Offset.zero,
      //       ).animate(animation),
      //     ),
      //   );
      // case "/add-experience":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const AddExperienceScreen(),
      //     settings: settings,
      //     transitionsBuilder: (context, animation, secondaryAnimation, child) =>
      //         SlideTransition(
      //       child: child,
      //       position: Tween<Offset>(
      //         begin: const Offset(1.0, 0.0),
      //         end: Offset.zero,
      //       ).animate(animation),
      //     ),
      //   );
      // case "/add-education":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const AddEducation(),
      //     settings: settings,
      //     transitionsBuilder: (context, animation, secondaryAnimation, child) =>
      //         SlideTransition(
      //       child: child,
      //       position: Tween<Offset>(
      //         begin: const Offset(1.0, 0.0),
      //         end: Offset.zero,
      //       ).animate(animation),
      //     ),
      //   );
      // case "/opentoworkform":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const ApplicationFormScreen(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/signup":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const SignUpScreen(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/login":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => LoginScreen(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/profile":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const ProfileScreen(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/feed":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const NewsFeedScreen(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/my-companies":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const MyCompanyScreen(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/add-skill":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const AddSkills(),
      //     settings: settings,
      //     transitionsBuilder: (_, opacity, __, child) => FadeTransition(
      //       opacity: opacity,
      //       child: child,
      //     ),
      //   );
      // case "/edit-profile":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const EditProfileScreen(),
      //     settings: settings,
      //     transitionsBuilder: (context, animation, secondaryAnimation, child) =>
      //         SlideTransition(
      //       child: child,
      //       position: Tween<Offset>(
      //         begin: const Offset(1.0, 0.0),
      //         end: Offset.zero,
      //       ).animate(animation),
      //     ),
      //   );
      // case "/my-posts":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const MyPostScreen(),
      //     settings: settings,
      //     transitionsBuilder: (context, animation, secondaryAnimation, child) =>
      //         SlideTransition(
      //       child: child,
      //       position: Tween<Offset>(
      //         begin: const Offset(1.0, 0.0),
      //         end: Offset.zero,
      //       ).animate(animation),
      //     ),
      //   );
      // case "/my-jobs":
      //   return PageRouteBuilder(
      //     pageBuilder: (_, __, ___) => const MyJobsScreen(),
      //     settings: settings,
      //     transitionsBuilder: (context, animation, secondaryAnimation, child) =>
      //         SlideTransition(
      //       child: child,
      //       position: Tween<Offset>(
      //         begin: const Offset(1.0, 0.0),
      //         end: Offset.zero,
      //       ).animate(animation),
      //     ),
      //   );
      default:
        return PageRouteBuilder(
          pageBuilder: (_, __, ___) => const TestScreen(),
          settings: settings,
          transitionsBuilder: (_, opacity, __, child) => FadeTransition(
            opacity: opacity,
            child: child,
          ),
        );
    }
  }
}
