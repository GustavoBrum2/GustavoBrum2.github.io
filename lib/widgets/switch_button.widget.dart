// ignore_for_file: sized_box_for_whitespace

import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:output/theme/app_colors.theme_extension.dart';
import 'package:output/theme/app_shadows.theme_extension.dart';
import 'package:output/utils/tholz_padding.dart';

class SwitchButtonWidget extends StatelessWidget {
  final Function() onTap;
  final double buttonSize;
  final bool state;
  const SwitchButtonWidget({Key? key, required this.buttonSize, required this.state, required this.onTap}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final AppColors appColors = Theme.of(context).extension<AppColors>()!;
    final AppShadows appShadows = Theme.of(context).extension<AppShadows>()!;
    final TextTheme textTheme = Theme.of(context).textTheme;
    final TholzPadding padding = TholzPadding(context);
    // final AppLocalizations appLocalizations = AppLocalizations.of(context);

    Widget onStateWidget() {
      return Container(
        height: buttonSize,
        width: buttonSize,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SvgPicture.asset(
              'assets/icons/core/power.svg',
              cacheColorFilter: true,
              color: appColors.primary,
            ),
            SizedBox(
              height: padding.p16,
            ),
            Text(
              'Ligado',
              textAlign: TextAlign.center,
              style: textTheme.labelMedium!.copyWith(color: appColors.primary),
            )
          ],
        ),
      );
    }

    Widget offStateWidget() {
      return Container(
        height: buttonSize,
        width: buttonSize,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SvgPicture.asset(
              'assets/icons/core/power.svg',
              cacheColorFilter: true,
              color: appColors.grey,
            ),
            SizedBox(
              height: padding.p16,
            ),
            Text(
              'Desligado',
              textAlign: TextAlign.center,
              style: textTheme.labelMedium!.copyWith(color: appColors.grey),
            )
          ],
        ),
      );
    }

    return GestureDetector(
      onTap: onTap,
      onHorizontalDragStart: (_) => onTap(),
      child: Container(
        height: buttonSize * 2,
        width: buttonSize,
        decoration: BoxDecoration(
            color: appColors.colorSecondaryCard,
            borderRadius: BorderRadius.circular(
              padding.p32 + padding.p08,
            )),
        child: AnimatedAlign(
          alignment: state ? Alignment.topCenter : Alignment.bottomCenter,
          duration: const Duration(milliseconds: 300),
          curve: Curves.decelerate,
          child: Container(
              height: buttonSize,
              width: buttonSize,
              decoration: BoxDecoration(color: appColors.colorCard, boxShadow: appShadows.cardElevation, borderRadius: BorderRadius.circular(padding.p32 + padding.p08)),
              child: AnimatedCrossFade(
                  alignment: Alignment.center,
                  firstChild: onStateWidget(),
                  secondChild: offStateWidget(),
                  crossFadeState: state ? CrossFadeState.showFirst : CrossFadeState.showSecond,
                  secondCurve: Curves.decelerate,
                  firstCurve: Curves.decelerate,
                  duration: const Duration(milliseconds: 300))),
        ),
      ),
    );
  }
}
