import 'package:OrganDonorApp/utils/select_util.dart';
import 'package:flutter/material.dart';

class SelectStringScreen extends StatefulWidget {
  const SelectStringScreen(this.stringList);
  final List<String> stringList;
  @override
  State<SelectStringScreen> createState() => _SelectStringScreenState();
}

class _SelectStringScreenState extends State<SelectStringScreen> {
  late List<String> stringList;

  @override
  void initState() {
    Selected().clear();
    stringList = widget.stringList;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text(""),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              "Please select to continue",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w500,
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: stringList.length,
                itemBuilder: (context, index) => GestureDetector(
                  onTap: () {
                    Selected.selectedString = stringList[index];
                    Navigator.pop(context);
                  },
                  child: Card(
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      side: BorderSide(color: Colors.grey.shade300, width: 1.0),
                      borderRadius: BorderRadius.circular(5),
                    ),
                    child: ListTile(
                      title: Text(
                        stringList[index],
                      ),
                      trailing: Visibility(
                        visible: Selected.selectedString == stringList[index],
                        child: const Icon(
                          Icons.check,
                          color: Colors.grey,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
