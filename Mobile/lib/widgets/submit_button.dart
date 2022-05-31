import 'package:flutter/material.dart';

class SubmitButton extends StatelessWidget {
  final Function()? function;
  final String buttonTitle;
  const SubmitButton(this.function, this.buttonTitle);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: function,
      child: Card(
        elevation: 0.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(5),
        ),
        color: Colors.purple.shade400,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 15),
          child: Center(
            child: Text(
              buttonTitle,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
                letterSpacing: 1,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
