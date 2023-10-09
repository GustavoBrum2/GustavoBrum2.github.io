import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:output/theme/app_colors.theme_extension.dart';
import 'package:output/theme/app_shadows.theme_extension.dart';
import 'package:output/utils/tholz_padding.dart';

class LoadingCommandWidget extends StatelessWidget {
  final bool? commandResponse;
  final bool showWidget;

  const LoadingCommandWidget({
    Key? key,
    required this.commandResponse,
    required this.showWidget,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final AppShadows appShadows = Theme.of(context).extension<AppShadows>()!;
    final TholzPadding padding = TholzPadding(context);
    final AppColors appColors = Theme.of(context).extension<AppColors>()!;
    final TextTheme textTheme = Theme.of(context).textTheme;
    // final AppLocalizations appLocalizations = AppLocalizations.of(context);
    return showWidget
        ? Align(
            alignment: Alignment.topCenter,
            child: SafeArea(
              child: Padding(
                padding: EdgeInsets.only(top: padding.p32 + padding.p32 + padding.p12),
                child: commandResponse!
                    ? AnimatedContainer(
                        duration: const Duration(milliseconds: 400),
                        curve: Curves.decelerate,
                        height: padding.p08 + padding.p24,
                        width: 120, //TODO change width to 105
                        padding: EdgeInsets.symmetric(horizontal: padding.p16, vertical: padding.p08),
                        decoration: BoxDecoration(
                          boxShadow: appShadows.buttonElevation,
                          borderRadius: BorderRadius.circular(100),
                          color: commandResponse! ? appColors.green : appColors.red,
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Flexible(
                              flex: 1,
                              child: Text(
                                commandResponse! ? 'Enviado ' : 'Falhou ',
                                maxLines: 1,
                                style: textTheme.titleSmall!.copyWith(
                                  color: Colors.white,
                                ),
                              ),
                            ),
                            SvgPicture.asset(
                              commandResponse! ? 'assets/icons/configure_device/finish.svg' : 'assets/icons/configure_device/error.svg',
                              height: padding.p16,
                              width: padding.p16,
                              color: Colors.white,
                            )
                          ],
                        ))
                    : AnimatedContainer(
                        duration: const Duration(milliseconds: 400),
                        height: padding.p08 + padding.p24,
                        width: padding.p08 + padding.p24,
                        alignment: Alignment.center,
                        padding: EdgeInsets.symmetric(horizontal: padding.p08, vertical: padding.p08),
                        decoration: BoxDecoration(boxShadow: appShadows.buttonElevation, borderRadius: BorderRadius.circular(100), color: appColors.primary),
                        child: SizedBox(
                          height: padding.p16,
                          width: padding.p16,
                          child: Center(
                            child: CircularProgressIndicator(
                              color: Colors.white,
                              strokeWidth: padding.p02,
                            ),
                          ),
                        ),
                      ),
              ),
            ),
          )
        : SizedBox();
  }
}
