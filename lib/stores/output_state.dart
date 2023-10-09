// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';
import 'package:mobx/mobx.dart';
part 'output_state.g.dart';

class OutputState = _OutputStateBase with _$OutputState;

abstract class _OutputStateBase with Store {
  @observable
  String name = 'Auxiliar 1';

  @observable
  bool on = false;

  @observable
  bool isLoading = false;

  @action
  void changeIsLoading(bool newValue) => isLoading = newValue;

  @observable
  bool onAut = false;

  String getName() => name;

  Future<bool?> changeTurnOnOffAux() async {
    changeTurnOnOff();
    final Map<String, dynamic> desiredState = {'on': !on};
    return _changeState(desiredState);
  }

  // void onTapSchedule(BuildContext context) async {
  //   changeIsLoadingSchedule(true);
  //   final response = await EndpointsBottomSheetsWidget.openSchedule(
  //     context,
  //     thingId: state.thingId,
  //     keyName: state.key,
  //     key: 'outputs',
  //   );

  //   changeIsLoadingSchedule(false);
  // }

  Future<bool> _changeState(Map<String, dynamic> desiredState) async {
    return true;
  }

  @action
  void changeTurnOnOff() {
    on = !on;
  }
}
