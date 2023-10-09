// ignore_for_file: unnecessary_this

import 'package:flutter/material.dart';

class AppColors extends ThemeExtension<AppColors> {
  final Color? primary;
  final Color? red;
  final Color? green;
  final Color? blue;
  final Color? grey;
  final Color? lightGrey;
  final Color? darkGrey;
  final Color? backgroundColor;
  final Color? secondaryColor;

  final Color? colorCard;
  final Color? colorSecondaryCard;
  final Color? disabledCardColor;
  final Color? shadow;
  final Color? buttonColor;

  final Color? dividerColor;

  final Color? switchColor;

  final Color? wifiSignal1Color;

  final Color? wifiSignal2Color;

  const AppColors(
      {required this.primary,
      required this.secondaryColor,
      required this.red,
      required this.green,
      required this.blue,
      required this.grey,
      required this.lightGrey,
      required this.darkGrey,
      required this.backgroundColor,
      required this.colorCard,
      required this.colorSecondaryCard,
      required this.disabledCardColor,
      required this.shadow,
      required this.buttonColor,
      required this.dividerColor,
      required this.switchColor,
      required this.wifiSignal1Color,
      required this.wifiSignal2Color});

  Color? onOff(bool isOn) => isOn ? this.primary : this.grey;

  Color? onOffEnable({required bool onOff, required enable}) {
    return enable ? this.onOff(onOff)! : this.onOff(onOff)!.withOpacity(.5);
  }

  Color? shadowOnOff(bool isOn) => isOn ? this.primary : this.shadow;

  Color? cardEnableDisable(bool isEnable) =>
      isEnable ? this.colorCard : this.disabledCardColor;

  Color? invalidField(bool isInvalid) => isInvalid ? this.red : this.primary;

  Color? switchOnOff(bool isOn) => isOn ? this.primary : this.switchColor;

  @override
  AppColors copyWith({
    Color? primary,
    Color? red,
    Color? green,
    Color? blue,
    Color? grey,
    Color? lightGrey,
    Color? darkGrey,
    Color? backgroundColor,
    Color? colorCard,
    Color? colorSecondaryCard,
    Color? disabledCardColor,
    Color? shadow,
    Color? buttonColor,
    Color? dividerColor,
    Color? switchColor,
    Color? wifiSignal1Color,
    Color? wifiSignal2Color,
  }) {
    return AppColors(
      primary: primary ?? this.primary,
      secondaryColor: secondaryColor ?? this.secondaryColor,
      red: red ?? this.red,
      green: green ?? this.green,
      blue: blue ?? this.blue,
      grey: grey ?? this.grey,
      lightGrey: lightGrey ?? this.lightGrey,
      darkGrey: darkGrey ?? this.darkGrey,
      backgroundColor: backgroundColor ?? this.backgroundColor,
      colorCard: colorCard ?? this.colorCard,
      colorSecondaryCard: colorSecondaryCard ?? this.colorSecondaryCard,
      disabledCardColor: disabledCardColor ?? this.disabledCardColor,
      shadow: shadow ?? this.shadow,
      buttonColor: buttonColor ?? this.buttonColor,
      dividerColor: dividerColor ?? this.dividerColor,
      switchColor: switchColor ?? this.switchColor,
      wifiSignal1Color: wifiSignal1Color ?? this.wifiSignal1Color,
      wifiSignal2Color: wifiSignal2Color ?? this.wifiSignal2Color,
    );
  }

  @override
  AppColors lerp(ThemeExtension<AppColors>? other, double t) {
    if (other is! AppColors) {
      return this;
    }
    return AppColors(
      primary: Color.lerp(primary, other.primary, t),
      secondaryColor: Color.lerp(secondaryColor, other.secondaryColor, t),
      red: Color.lerp(red, other.red, t),
      green: Color.lerp(green, other.green, t),
      blue: Color.lerp(blue, other.blue, t),
      grey: Color.lerp(grey, other.grey, t),
      lightGrey: Color.lerp(lightGrey, other.lightGrey, t),
      darkGrey: Color.lerp(darkGrey, other.darkGrey, t),
      backgroundColor: Color.lerp(backgroundColor, other.backgroundColor, t),
      colorCard: Color.lerp(colorCard, other.colorCard, t),
      colorSecondaryCard:
          Color.lerp(colorSecondaryCard, other.colorSecondaryCard, t),
      disabledCardColor:
          Color.lerp(disabledCardColor, other.disabledCardColor, t),
      shadow: Color.lerp(shadow, other.shadow, t),
      buttonColor: Color.lerp(buttonColor, other.buttonColor, t),
      dividerColor: Color.lerp(dividerColor, other.dividerColor, t),
      switchColor: Color.lerp(switchColor, other.switchColor, t),
      wifiSignal1Color: Color.lerp(wifiSignal1Color, other.wifiSignal1Color, t),
      wifiSignal2Color: Color.lerp(wifiSignal2Color, other.wifiSignal2Color, t),
    );
  }
}
