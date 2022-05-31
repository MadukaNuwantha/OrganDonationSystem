import 'package:flutter/material.dart';

class TextInputField extends StatelessWidget {
  final TextEditingController textEditingController;
  final String labelText;
  final String hintText;

  const TextInputField(
    this.textEditingController,
    this.labelText,
    this.hintText,
  );

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 10),
      child: TextFormField(
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please fill this filed to continue';
          }
          return null;
        },
        keyboardType: TextInputType.text,
        controller: textEditingController,
        textInputAction: TextInputAction.next,
        decoration: InputDecoration(
          labelText: labelText,
          hintText: hintText,
          floatingLabelBehavior: FloatingLabelBehavior.auto,
        ),
      ),
    );
  }
}
