import 'package:flutter/material.dart';

class CheckBoxInputField extends StatelessWidget {
  final bool checkboxState;
  final Function(bool?) toggleCheckboxState;
  final String title;
  const CheckBoxInputField(
      this.checkboxState, this.toggleCheckboxState, this.title);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 5),
      child: Row(
        children: [
          Checkbox(
            checkColor: Colors.white,
            activeColor: Colors.purple,
            value: checkboxState,
            onChanged: toggleCheckboxState,
          ),
          Flexible(
            child: Text(
              title,
              style: const TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
