// ignore_for_file: prefer_const_constructors_in_immutables

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:output/theme/theme.dart';

class ThemeBuilder extends StatefulWidget {
  final Widget Function(BuildContext context, ThemeMode theme) builder;
  ThemeBuilder({super.key, required this.builder});

  @override
  State<ThemeBuilder> createState() => _ThemeBuilderState();
}

class _ThemeBuilderState extends State<ThemeBuilder> {
  late ThemeMode _theme = ThemeMode.system;

  @override
  void initState() {
    super.initState();
    final window = WidgetsBinding.instance.window;
    window.onPlatformBrightnessChanged = () {
      if (window.platformBrightness == Brightness.light) {
        SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
          systemNavigationBarColor: lightTheme().backgroundColor,
          systemNavigationBarIconBrightness: Brightness.dark,
        ));
        setState(() {
          _theme = ThemeMode.light;
        });
      } else {
        SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
          systemNavigationBarColor: darkTheme().backgroundColor,
          systemNavigationBarIconBrightness: Brightness.light,
        ));
        setState(() {
          _theme = ThemeMode.dark;
        });
      }
    };
  }

  @override
  Widget build(BuildContext context) {
    return widget.builder(context, _theme);
  }
}
