// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:output/theme/app_colors.theme_extension.dart';
import 'package:output/utils/tholz_padding.dart';
import 'package:output/widgets/animated_reticence.widget.dart';

class ScheduleButtonWidget extends StatelessWidget {
  final Function() onTap;
  final bool isLoading;
  const ScheduleButtonWidget({Key? key, required this.onTap, required this.isLoading}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final AppColors appColors = Theme.of(context).extension<AppColors>()!;
    final TextTheme textTheme = Theme.of(context).textTheme;
    final TholzPadding padding = TholzPadding(context);
    return InkWell(
        onTap: () => isLoading ? null : onTap(),
        child: Container(
          padding: EdgeInsets.all(padding.p16),
          constraints: BoxConstraints(minHeight: 50),
          decoration: BoxDecoration(color: appColors.primary, borderRadius: BorderRadius.circular(10000)),
          child: isLoading
              ? const Center(
                  child: AnimatedReticenceWidget(),
                )
              : Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.watch_later_rounded,
                      size: padding.p24,
                      color: Colors.white,
                    ),
                    SizedBox(
                      width: padding.p08,
                    ),
                    Flexible(
                      child: Text(
                        'Agenda',
                        style: textTheme.titleMedium!.copyWith(color: Colors.white),
                      ),
                    )
                  ],
                ),
        ));
  }
}
