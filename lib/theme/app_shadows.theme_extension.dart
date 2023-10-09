import 'package:flutter/material.dart';

class AppShadows extends ThemeExtension<AppShadows> {
  final List<BoxShadow> cardElevation;
  final List<BoxShadow> buttonElevation;
  final List<BoxShadow> buttonPrimaryElevation;

  const AppShadows({
    required this.cardElevation,
    required this.buttonElevation,
    required this.buttonPrimaryElevation,
  });

  List<BoxShadow> buttonElevationOnOff(bool state) {
    return state ? buttonPrimaryElevation : buttonElevation;
  }

  @override
  AppShadows copyWith({
    List<BoxShadow>? cardElevation,
    List<BoxShadow>? buttonElevation,
    List<BoxShadow>? buttonPrimaryElevation,
  }) {
    return AppShadows(
      cardElevation: cardElevation ?? this.cardElevation,
      buttonElevation: buttonElevation ?? this.buttonElevation,
      buttonPrimaryElevation:
          buttonPrimaryElevation ?? this.buttonPrimaryElevation,
    );
  }

  @override
  AppShadows lerp(ThemeExtension<AppShadows>? other, double t) {
    if (other is! AppShadows) {
      return this;
    }
    return AppShadows(
      cardElevation: other.cardElevation,
      buttonElevation: other.buttonElevation,
      buttonPrimaryElevation: other.buttonPrimaryElevation,
    );
  }
}
