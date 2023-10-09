import 'package:flutter/material.dart';
import 'package:output/output.page.dart';
import 'package:output/stores/output_state.dart';

class MyPage extends StatefulWidget {
  const MyPage({super.key});

  @override
  State<MyPage> createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  late final OutputState state;

  @override
  void initState() {
    super.initState();
    state = OutputState();
  }

  @override
  Widget build(BuildContext context) {
    return OutputPage(
      state: state,
    );
  }
}
