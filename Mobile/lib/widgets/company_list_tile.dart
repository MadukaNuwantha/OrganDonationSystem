// import 'package:RhinoCRM/models/company_model.dart';
// import 'package:flutter/material.dart';
// import 'package:font_awesome_flutter/font_awesome_flutter.dart';

// class CompanyListTile extends StatelessWidget {
//   final Company company;

//   const CompanyListTile(this.company);

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
//       width: double.infinity,
//       child: Column(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           Row(
//             mainAxisAlignment: MainAxisAlignment.start,
//             crossAxisAlignment: CrossAxisAlignment.start,
//             children: [
//               FaIcon(
//                 FontAwesomeIcons.shop,
//                 color: Colors.grey.shade500,
//                 size: 14,
//               ),
//               const SizedBox(width: 10),
//               Expanded(
//                 child: Text(
//                   company.businessName,
//                   style: TextStyle(
//                     color: Colors.grey[700],
//                     fontWeight: FontWeight.bold,
//                     fontSize: 16,
//                   ),
//                 ),
//               ),
//             ],
//           ),
//           const SizedBox(height: 8),
//           Row(
//             mainAxisAlignment: MainAxisAlignment.start,
//             crossAxisAlignment: CrossAxisAlignment.start,
//             children: [
//               FaIcon(
//                 FontAwesomeIcons.mapLocationDot,
//                 color: Colors.grey[500],
//                 size: 14,
//               ),
//               const SizedBox(width: 15),
//               Expanded(
//                 child: Text("${company.registeredAddress}\n${company.city}",
//                     style: TextStyle(
//                       color: Colors.grey.shade700,
//                     )),
//               ),
//             ],
//           )
//         ],
//       ),
//     );
//   }
// }
