// ignore_for_file: avoid_unnecessary_containers, prefer_const_constructors, prefer_const_constructors_in_immutables, sized_box_for_whitespace

// import 'dart:io' show Platform;

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:output/theme/app_colors.theme_extension.dart';
import 'package:output/utils/tholz_padding.dart';

class TopBarWidget extends StatelessWidget {
  final bool isLoading;
  final bool isExpanded;
  final bool mantainSizeAfterReduce;
  final Widget? middleWidget;
  final Widget? sufixWidget;
  final List<Widget>? widgets;
  final Function()? onTapBack;

  TopBarWidget({
    Key? key,
    this.isLoading = false,
    this.isExpanded = true,
    this.mantainSizeAfterReduce = false,
    this.widgets,
    this.middleWidget,
    this.sufixWidget,
    this.onTapBack,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    final AppColors appColors = Theme.of(context).extension<AppColors>()!;
    final TholzPadding padding = TholzPadding(context);
    final double topPadding = MediaQuery.of(context).viewPadding.top - padding.p24; //: MediaQuery.of(context).viewPadding.top;

    return Stack(
      children: [
        if (mantainSizeAfterReduce)
          Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                height: topPadding,
              ),
              Container(
                constraints: BoxConstraints(
                  minHeight: 80,
                ),
                height: size.height * .1,
              ),
            ],
          ),
        Hero(
          tag: 'TopBarWidget',
          child: AnimatedAlign(
            duration: Duration(milliseconds: 150),
            curve: Curves.linear,
            heightFactor: isExpanded ? 1 : 0,
            alignment: Alignment.bottomCenter,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  height: topPadding < 0 ? 0 : topPadding,
                  color: appColors.colorCard,
                ),
                Container(
                  constraints: BoxConstraints(
                    minHeight: 80,
                  ),
                  height: size.height * .1,
                  padding: EdgeInsets.all(padding.p24),
                  decoration: BoxDecoration(
                      color: appColors.colorCard,
                      borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(size.width * .1),
                        bottomRight: Radius.circular(size.width * .1),
                      ),
                      boxShadow: [BoxShadow(blurRadius: 8, spreadRadius: -6, offset: Offset(0, 10), color: appColors.shadow!.withOpacity(.2))]),
                  child: Container(
                    // color: Colors.black,
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: widgets != null
                            ? widgets!
                            : [
                                InkWell(
                                  onTap: null,
                                  child: Container(
                                    width: size.width * .15,
                                    child: Align(
                                        alignment: Alignment.centerLeft,
                                        child: SvgPicture.asset(
                                          'assets/icons/core/back.svg',
                                          cacheColorFilter: true,
                                          color: appColors.grey,
                                        )),
                                  ),
                                ),
                                middleWidget != null ? middleWidget! : Flexible(child: SizedBox()),
                                sufixWidget != null ? sufixWidget! : Container(width: size.width * .15),
                              ]),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
