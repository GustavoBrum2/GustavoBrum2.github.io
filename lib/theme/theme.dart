import 'package:flutter/material.dart';
import 'package:output/theme/app_shadows.theme_extension.dart';
import 'package:output/theme/text_theme.dart';

import 'app_colors.theme_extension.dart';

const String fontName = 'Mulish';
const int _primaryColorSwatch = 0xFFFF9400;
const Color kTHprimaryColor = Color(_primaryColorSwatch);

const MaterialColor primarySwatch = MaterialColor(
  _primaryColorSwatch,
  <int, Color>{
    50: Color(_primaryColorSwatch),
    100: Color(_primaryColorSwatch),
    200: Color(_primaryColorSwatch),
    300: Color(_primaryColorSwatch),
    400: Color(_primaryColorSwatch),
    500: Color(_primaryColorSwatch), // * FLOATINGACTIONBUTTON
    600: Color(_primaryColorSwatch), // * SWITCH - CHECKBOX
    700: Color(_primaryColorSwatch), // * CIRCLE AVATAR
    800: Color(_primaryColorSwatch),
    900: Color(_primaryColorSwatch),
  },
);

ThemeData lightTheme() {
  return ThemeData(
    primaryColor: kTHprimaryColor,
    brightness: Brightness.light,
    hintColor: const Color(0XFF9EA1A3),
    backgroundColor: const Color(0xFFF5F5F5),
    scaffoldBackgroundColor: const Color(0xFFF5F5F5),
    dialogBackgroundColor: Colors.white,
    cardColor: Colors.white, // Containers and Cards background
    canvasColor: const Color(0xFFF5F5F5), // Dropdown background
    splashColor: Colors.transparent,
    highlightColor: Colors.transparent,
    visualDensity: VisualDensity.adaptivePlatformDensity,
    progressIndicatorTheme: const ProgressIndicatorThemeData(
      color: kTHprimaryColor,
    ),
    snackBarTheme: const SnackBarThemeData(
      backgroundColor: kTHprimaryColor,
      behavior: SnackBarBehavior.floating,
    ),

    buttonTheme: const ButtonThemeData(
      buttonColor: kTHprimaryColor,
      textTheme: ButtonTextTheme.accent,
    ),
    fontFamily: fontName,
    textTheme: lightTextTheme(),
    inputDecorationTheme: const InputDecorationTheme(
      enabledBorder: UnderlineInputBorder(
        borderSide: BorderSide(
          width: 1,
          color: Color(0xFFFF9400),
        ),
      ),
      focusedBorder: UnderlineInputBorder(
        borderSide: BorderSide(
          width: 2,
          color: Color(0xFFFF9400),
        ),
      ),
      hintStyle: TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.normal,
      ),
      focusedErrorBorder: UnderlineInputBorder(
          borderSide: BorderSide(
        width: 2,
        color: Color(0xFFBD0A0A),
      )),
      errorBorder: UnderlineInputBorder(
          borderSide: BorderSide(
        width: 1,
        color: Color(0xFFBD0A0A),
      )),
      contentPadding: EdgeInsets.all(16),
      fillColor: Color(0XFFEEEEEE), // Cinza Claro
      filled: true,
    ),
    colorScheme: ColorScheme.fromSwatch(primarySwatch: primarySwatch).copyWith(
      secondary: Colors.black,
    ),
    extensions: [
      AppShadows(
        cardElevation: [
          BoxShadow(
            blurRadius: 10,
            spreadRadius: 0,
            offset: const Offset(0, 2),
            color: Colors.black.withOpacity(.04),
          ),
          BoxShadow(
            blurRadius: 12,
            spreadRadius: 0,
            offset: const Offset(0, 4),
            color: Colors.black.withOpacity(.02),
          ),
          BoxShadow(
            blurRadius: 6,
            spreadRadius: 0,
            offset: Offset.zero,
            color: Colors.black.withOpacity(.02),
          ),
        ],
        buttonElevation: [
          BoxShadow(
            blurRadius: 12,
            spreadRadius: 0,
            offset: const Offset(0, 0),
            color: Colors.black.withOpacity(.08),
          ),
          BoxShadow(
            blurRadius: 10,
            spreadRadius: 0,
            offset: const Offset(0, 4),
            color: Colors.black.withOpacity(.12),
          ),
          BoxShadow(
            blurRadius: 6,
            spreadRadius: -1,
            offset: const Offset(0, 2),
            color: Colors.black.withOpacity(.24),
          ),
        ],
        buttonPrimaryElevation: [
          BoxShadow(
            blurRadius: 12,
            spreadRadius: 0,
            offset: const Offset(0, 0),
            color: kTHprimaryColor.withOpacity(.12),
          ),
          BoxShadow(
            blurRadius: 16,
            spreadRadius: 0,
            offset: const Offset(0, 4),
            color: kTHprimaryColor.withOpacity(.16),
          ),
          BoxShadow(
            blurRadius: 6,
            spreadRadius: -2,
            offset: const Offset(0, 0),
            color: kTHprimaryColor.withOpacity(.56),
          ),
        ],
      ),
      AppColors(
        primary: kTHprimaryColor,
        secondaryColor: Colors.black,
        red: const Color(0xFFBD0A0A),
        green: const Color(0xFF0DBD0A),
        blue: const Color(0xFF0963BD),
        grey: const Color(0XFF9EA1A3), // Cinza
        lightGrey: const Color(0XFFE8E8E8), // CinzaClaro
        darkGrey: Colors.black.withOpacity(0.25),
        backgroundColor: const Color(0xFFF5F5F5), //  kColorTHCinzaClaro
        colorCard: const Color(0XFFFFFFFF),
        colorSecondaryCard: const Color(0xFFEEE9E1),
        disabledCardColor: const Color(0XFFEEEEEE),
        shadow: Colors.black.withOpacity(.3),
        buttonColor: const Color(0XFFFFFFFF),
        dividerColor: const Color(0XFFEEEEEE), // Cinza Claro
        switchColor: const Color(0XFF9EA1A3),
        wifiSignal1Color: const Color(0XFF9EA1A3),
        wifiSignal2Color: Colors.black.withOpacity(0.10),
      )
    ],
  );
}

ThemeData darkTheme() {
  return ThemeData(
    primaryColor: const Color(0XFFFFA726),
    brightness: Brightness.dark,
    hintColor: const Color(0XFF9EA1A3),
    backgroundColor: const Color(0XFF262626),
    scaffoldBackgroundColor: const Color(0XFF262626),
    dialogBackgroundColor: const Color(0XFF383838),
    cardColor: const Color(0XFF383838), // Containers and Cards background
    canvasColor: const Color(0XFF262626), // Dropdown background
    splashColor: Colors.transparent,
    highlightColor: Colors.transparent,
    visualDensity: VisualDensity.adaptivePlatformDensity,
    progressIndicatorTheme: const ProgressIndicatorThemeData(
      color: Color(0XFFFFA726),
    ),
    snackBarTheme: const SnackBarThemeData(
      backgroundColor: kTHprimaryColor,
      behavior: SnackBarBehavior.floating,
    ),
    buttonTheme: const ButtonThemeData(
      buttonColor: Color(0XFFFFA726),
      textTheme: ButtonTextTheme.accent,
    ),
    fontFamily: fontName,
    textTheme: darkTextTheme(),
    inputDecorationTheme: const InputDecorationTheme(
      enabledBorder: UnderlineInputBorder(
        borderSide: BorderSide(
          width: 1,
          color: Color(0XFFFFA726),
        ),
      ),
      focusedBorder: UnderlineInputBorder(
        borderSide: BorderSide(
          width: 2,
          color: Color(0XFFFFA726),
        ),
      ),
      hintStyle: TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.normal,
      ),
      contentPadding: EdgeInsets.all(16),
      fillColor: Color(0XFF2F2F2F),
      filled: true,
      errorStyle: TextStyle(color: Color(0XFFFF6E6E)),
      focusedErrorBorder: UnderlineInputBorder(
          borderSide: BorderSide(
              width: 2,
              color: Color(
                0XFFFF6E6E,
              ))),
      errorBorder: UnderlineInputBorder(
          borderSide: BorderSide(
              width: 1,
              color: Color(
                0XFFFF6E6E,
              ))),
    ),
    colorScheme: ColorScheme.fromSwatch(primarySwatch: primarySwatch).copyWith(
      brightness: Brightness.dark,
      secondary: Colors.white,
    ),

    extensions: [
      AppShadows(
        cardElevation: [
          BoxShadow(
            blurRadius: 10,
            spreadRadius: 0,
            offset: const Offset(0, 2),
            color: Colors.black.withOpacity(.04),
          ),
          BoxShadow(
            blurRadius: 12,
            spreadRadius: 0,
            offset: const Offset(0, 4),
            color: Colors.black.withOpacity(.02),
          ),
          BoxShadow(
            blurRadius: 6,
            spreadRadius: 0,
            offset: Offset.zero,
            color: Colors.black.withOpacity(.02),
          ),
        ],
        buttonElevation: [
          BoxShadow(
            blurRadius: 12,
            spreadRadius: 0,
            offset: const Offset(0, 0),
            color: Colors.white.withOpacity(.08),
          ),
          BoxShadow(
            blurRadius: 10,
            spreadRadius: 0,
            offset: const Offset(0, 4),
            color: Colors.white.withOpacity(.12),
          ),
          BoxShadow(
            blurRadius: 6,
            spreadRadius: -1,
            offset: const Offset(0, 2),
            color: Colors.white.withOpacity(.24),
          ),
        ],
        buttonPrimaryElevation: [
          BoxShadow(
            blurRadius: 12,
            spreadRadius: 0,
            offset: const Offset(0, 0),
            color: const Color(0XFFFFA726).withOpacity(.12),
          ),
          BoxShadow(
            blurRadius: 16,
            spreadRadius: 0,
            offset: const Offset(0, 4),
            color: const Color(0XFFFFA726).withOpacity(.16),
          ),
          BoxShadow(
            blurRadius: 6,
            spreadRadius: -2,
            offset: const Offset(0, 0),
            color: const Color(0XFFFFA726).withOpacity(.56),
          ),
        ],
      ),
      AppColors(
        primary: const Color(0XFFFFA726),
        secondaryColor: Colors.white,
        red: const Color(0XFFFF6E6E),
        green: const Color(0XFF6EFFB6),
        blue: const Color(0XFF6EB6FF),
        grey: const Color(0XFFAFAFAF), // Cinza
        lightGrey: const Color(0XFFE8E8E8), // CinzaClaro
        darkGrey: Colors.black.withOpacity(0.25),
        backgroundColor: const Color(0XFF262626),
        colorCard: const Color(0XFF383838),
        colorSecondaryCard: const Color(0XFF2A2A2A),
        disabledCardColor: const Color(0XFF2A2A2A),
        shadow: Colors.black.withOpacity(.3),
        buttonColor: const Color(0XFF404040),
        dividerColor: const Color(0XFF5F554E),
        switchColor: const Color(0XFF2D2825),
        wifiSignal1Color: const Color(0XFFE8E8E8),
        wifiSignal2Color: Colors.white.withOpacity(0.25),
      )
    ],
  );
}
