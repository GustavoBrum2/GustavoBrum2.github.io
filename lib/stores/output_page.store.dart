// ignore_for_file: library_private_types_in_public_api

import 'package:mobx/mobx.dart';
import 'package:output/stores/output_state.dart';
import 'package:output/utils/debounce_time.dart';

part 'output_page.store.g.dart';

class OutputPageStore = _OutputPageStoreBase with _$OutputPageStore;

abstract class _OutputPageStoreBase with Store {
  // final DeviceOutputStateStore state;

  final OutputState state;

  _OutputPageStoreBase({required this.state});

  late ReactionDisposer connectionReaction;

  late ReactionDisposer iotConnectionReaction;

  // String name(BuildContext context) => state.getName(context);

  @computed
  bool get isOn => state.on;

  @observable
  bool isLoadingSchedule = false;

  @action
  void changeIsLoadingSchedule(bool value) => isLoadingSchedule = value;

  @observable
  bool showLoadingCommand = false;

  @action
  void changeShowLoadingCommand(bool value) => showLoadingCommand = value;

  @observable
  bool? commandResponse = false;

  @action
  void changeCommandResponse(bool? value) => commandResponse = value;

  void closeLoadingCommand() {
    DebounceTime.execute(() {
      changeShowLoadingCommand(false);
    });
  }

  void onTapTurnOnOff() async {
    changeShowLoadingCommand(true);

    changeCommandResponse(false);
    Future.delayed(
      const Duration(milliseconds: 400),
      (() {
        changeCommandResponse(true);
      }),
    );

    Future.delayed(
      const Duration(milliseconds: 600),
      (() {
        closeLoadingCommand();
      }),
    );
  }
}
