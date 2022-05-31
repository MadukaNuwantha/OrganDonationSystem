import 'package:OrganDonorApp/models/organ_model.dart';
import 'package:OrganDonorApp/providers/organ_provider.dart';
import 'package:OrganDonorApp/widgets/orgen_list_tile.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class OrganListScreen extends StatefulWidget {
  const OrganListScreen({Key? key}) : super(key: key);

  @override
  State<OrganListScreen> createState() => _OrganListScreenState();
}

class _OrganListScreenState extends State<OrganListScreen> {
  late OrganProvider organProvider;
  @override
  void initState() {
    organProvider = context.read<OrganProvider>();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple.shade400,
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          children: [
            const SizedBox(
              height: 10,
            ),
            Expanded(
              child: FutureBuilder<List<Organ>>(
                future: organProvider.getOrganList(context),
                builder: (context, snapshot) {
                  return Align(
                    alignment: Alignment.topCenter,
                    child: listView(snapshot),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget listView(AsyncSnapshot snapshot) {
    switch (snapshot.connectionState) {
      case ConnectionState.waiting:
        return const Center(
          child: CircularProgressIndicator(
            strokeWidth: 5,
          ),
        );
      default:
        if (snapshot.hasData) {
          return ListView.builder(
            itemCount: snapshot.data.length,
            itemBuilder: ((context, index) {
              return OrganListTile(snapshot.data[index]);
            }),
          );
        } else if (snapshot.hasError) {
          return const Text(
            'Unable load organs',
            style: TextStyle(
              fontSize: 16,
            ),
          );
        } else {
          return const Center(
            child: Text('No matching organs found'),
          );
        }
    }
  }
}
