import 'package:flutter/material.dart';

class TholzPadding {
  final BuildContext context;
  late final double p02;
  late final double p04;
  late final double p08;
  late final double p12;
  late final double p16;
  late final double p18;
  late final double p24;
  late final double p32;

  TholzPadding(
    this.context,
  ) {
    final Size size = MediaQuery.of(context).size;
    final bool isTablet = size.shortestSide > 600;
    p02 = isTablet ? 02 : size.width * .0049;
    p04 = isTablet ? 04 : size.width * .0098;
    p08 = isTablet ? 08 : size.width * .0186;
    p12 = isTablet ? 12 : size.width * .0294;
    p16 = isTablet ? 16 : size.width * .0371;
    p18 = isTablet ? 18 : size.width * .0420;
    p24 = isTablet ? 24 : size.width * .0558;
    p32 = isTablet ? 32 : size.width * .0742;
  }
}
