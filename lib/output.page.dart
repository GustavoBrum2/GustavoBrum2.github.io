// ignore_for_file: avoid_returning_null_for_void

import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:output/stores/output_page.store.dart';
import 'package:output/stores/output_state.dart';
import 'package:output/theme/app_colors.theme_extension.dart';
import 'package:output/utils/tholz_padding.dart';
import 'package:output/widgets/loading_command.widget.dart';
import 'package:output/widgets/schedule_button.widget.dart';
import 'package:output/widgets/switch_button.widget.dart';
import 'package:output/widgets/top_bar.widget.dart';

class OutputPage extends StatefulWidget {
  // final DeviceOutputStateStore state;
  final OutputState state;

  const OutputPage({Key? key, required this.state}) : super(key: key);

  @override
  State<OutputPage> createState() => _OutputPageState();
}

class _OutputPageState extends State<OutputPage> {
  // late final ReactionDisposer _errorReaction;
  // late final ReactionDisposer _connectionReaction;
  // final OutputPageErrorController _errorController = OutputPageErrorController();
  late final OutputPageStore _store = OutputPageStore(state: widget.state);
  @override
  void initState() {
    super.initState();
    // _errorReaction = reaction((_) => _store.errorOnOutputPageStore, (ICoreError? error) => _errorController.reactOutputPageStoreError(error, context));
    // _connectionReaction = reaction((_) => (_store.state.enable ?? false), _errorController.reactOutputPageStoreConnection);
    // widget.state.changeIsOpen(true);
    // _store.initReaction();
  }

  @override
  void dispose() {
    // _store.disposeReaction();
    // _errorReaction();
    // _connectionReaction();
    // widget.state.changeIsOpen(true);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    final AppColors appColors = Theme.of(context).extension<AppColors>()!;
    final TextTheme textTheme = Theme.of(context).textTheme;
    final TholzPadding padding = TholzPadding(context);
    // final AppLocalizations appLocalizations = AppLocalizations.of(context);
    return Scaffold(
      body: Stack(
        alignment: Alignment.bottomCenter,
        children: [
          Column(
            children: [
              TopBarWidget(
                isLoading: false,
                middleWidget: Observer(builder: (_) {
                  return Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        widget.state.getName(),
                        style: textTheme.titleMedium,
                      ),
                      if (widget.state.onAut) ...[
                        SizedBox(
                          height: padding.p08,
                        ),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.watch_later_rounded,
                              size: padding.p12,
                              color: appColors.grey,
                            ),
                            SizedBox(
                              width: padding.p08,
                            ),
                            Text(
                              'Em evento',
                              style: textTheme.titleSmall!.copyWith(color: appColors.grey),
                            )
                          ],
                        )
                      ]
                    ],
                  );
                }),
                sufixWidget: InkWell(
                  onTap: () => null, //_store.onTapSufixWidgetTopBar(context),
                  child: Container(
                    width: size.width * .15,
                    alignment: Alignment.centerRight,
                    child: Icon(
                      Icons.more_vert_outlined,
                      size: padding.p32,
                      color: appColors.grey,
                    ),
                  ),
                ),
              ),
              Expanded(
                child: Padding(
                  padding: EdgeInsets.only(
                    left: padding.p32,
                    right: padding.p32,
                    top: padding.p32,
                    bottom: padding.p24 * 2,
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Align(
                          alignment: Alignment.center,
                          child: Observer(
                            builder: (_) {
                              return SwitchButtonWidget(
                                onTap: () {
                                  widget.state.changeTurnOnOffAux();
                                  _store.onTapTurnOnOff();
                                },
                                buttonSize: size.width * .35,
                                state: widget.state.on,
                              );
                            },
                          ),
                        ),
                      ),
                      SizedBox(height: padding.p24),
                      Observer(builder: (_) {
                        return ScheduleButtonWidget(
                          isLoading: _store.isLoadingSchedule,
                          onTap: () => null,
                        );
                      })
                    ],
                  ),
                ),
              )
            ],
          ),
          Observer(builder: (_) {
            return LoadingCommandWidget(
              commandResponse: _store.commandResponse,
              showWidget: _store.showLoadingCommand,
            );
          }),
        ],
      ),
    );
  }
}
