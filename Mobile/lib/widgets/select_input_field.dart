import 'package:flutter/material.dart';

class SelectInputField extends StatelessWidget {
  final TextEditingController textEditingController;
  final String labelText;
  final String hintText;
  final Function()? function;

  const SelectInputField(
    this.function,
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
        readOnly: true,
        keyboardType: TextInputType.text,
        controller: textEditingController,
        textInputAction: TextInputAction.next,
        onTap: function,
        decoration: InputDecoration(
          labelText: labelText,
          hintText: hintText,
          suffixIcon: const Icon(Icons.navigate_next),
          floatingLabelBehavior: FloatingLabelBehavior.auto,
        ),
      ),
    );
  }
}
