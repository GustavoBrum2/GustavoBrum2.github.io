// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, sized_box_for_whitespace

import 'dart:async';

import 'package:flutter/material.dart';

class AnimatedReticenceWidget extends StatefulWidget {
  const AnimatedReticenceWidget({key, this.color = Colors.white});
  final Color? color;

  @override
  State<AnimatedReticenceWidget> createState() => _AnimatedReticenceWidgetState();
}

class _AnimatedReticenceWidgetState extends State<AnimatedReticenceWidget> {
  late final Timer timer;
  int dot = 0;
  @override
  void initState() {
    timer = Timer.periodic(Duration(milliseconds: 150), (timer) {
      setState(() {
        dot += 1;
        if (dot >= 7) {
          dot = 0;
        }
      });
    });
    super.initState();
  }

  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 40,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          AnimatedContainer(
            duration: Duration(milliseconds: 500),
            curve: Curves.fastOutSlowIn,
            width: 8,
            height: dot >= 1 && dot <= 4 ? 8 : 0,
            decoration: BoxDecoration(color: widget.color, shape: BoxShape.circle),
          ),
          AnimatedContainer(
            duration: Duration(milliseconds: 500),
            curve: Curves.fastOutSlowIn,
            width: 8,
            height: dot >= 2 && dot <= 5 ? 8 : 0,
            decoration: BoxDecoration(color: widget.color, shape: BoxShape.circle),
          ),
          AnimatedContainer(
            duration: Duration(milliseconds: 500),
            curve: Curves.fastOutSlowIn,
            width: 8,
            height: dot >= 3 && dot <= 6 ? 8 : 0,
            decoration: BoxDecoration(color: widget.color, shape: BoxShape.circle),
          ),
        ],
      ),
    );
  }
}
