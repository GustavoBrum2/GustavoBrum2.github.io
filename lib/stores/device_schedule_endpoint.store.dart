import 'dart:math';

import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:mobx/mobx.dart';
import 'package:output/contracts/device_endpoint_schedule.contract.dart';
import 'package:output/usecases/device_led_endpoint_schedule.dart';

part 'device_schedule_endpoint.store.g.dart';

class DeviceScheduleEndpointStore = _DeviceScheduleEndpointStoreBase
    with _$DeviceScheduleEndpointStore;

abstract class _DeviceScheduleEndpointStoreBase with Store {
  @observable
  DateTime? timeTurnOn;

  @observable
  DateTime? timeTurnOff;

  @observable
  ObservableList<int>? days;

  @observable
  bool? active;

  @observable
  ObservableList<int>? color;

  @observable
  int? brightness;

  List<int>? _holderColor;

  int? _holderBrightness;

  late IDeviceEndpointSchedule endpointSchedule;

  @action
  void changeTimeTurnOn(DateTime? value) => timeTurnOn = value;

  @action
  void changeTimeTurnOff(DateTime? value) => timeTurnOff = value;

  @action
  void changeDays(List<int> value) => days = value.asObservable();

  @action
  void changeActive(bool? value) => active = value;

  @action
  void changeColor(List<int> value) => color = value.asObservable();

  void changeColorToList(Color value) {
    changeColor([value.red, value.green, value.blue]);
  }

  @action
  void changeBrightness(int? value) => brightness = value;

  void changeHolderColor(List<int> value) =>
      _holderColor = value.asObservable();

  void changeHolderBrightness(int? value) => _holderBrightness = value;

  void initStore(IDeviceEndpointSchedule deviceEndpointSchedule) {
    endpointSchedule = deviceEndpointSchedule;
    _changeTimeVariables(deviceEndpointSchedule);
    changeDays(deviceEndpointSchedule.convertRepetitionsToDays());
    changeActive(deviceEndpointSchedule.active);
    if (deviceEndpointSchedule is DeviceLedEndpointSchedule) {
      if (deviceEndpointSchedule.color != null) {
        changeColor(deviceEndpointSchedule.color!);
      }
      changeBrightness(deviceEndpointSchedule.brightness);
    }
  }

  void _changeTimeVariables(IDeviceEndpointSchedule deviceEndpointSchedule) {
    final DateTime _timeTurnOff = _convertMinAndHourToDateTime(
        hour: deviceEndpointSchedule.turnOffHour!,
        minute: deviceEndpointSchedule.turnOffMin!);
    final DateTime _timeTurnOn = _convertMinAndHourToDateTime(
        hour: deviceEndpointSchedule.turnOnHour!,
        minute: deviceEndpointSchedule.turnOnMin!);
    changeTimeTurnOff(_timeTurnOff);
    changeTimeTurnOn(_timeTurnOn);
  }

  DateTime _convertMinAndHourToDateTime({
    required int minute,
    required int hour,
  }) {
    final DateTime now = DateTime.now();
    return DateTime(
      now.year,
      now.month,
      now.day,
      hour,
      minute,
    );
  }

  void onTapDay(int day, bool? value) {
    days![day] = value ?? false ? 1 : 0;
    changeDays(days!);
  }

  bool verifyHasChanged() {
    final bool activeHasChanged = active != endpointSchedule.active;
    final bool daysHasChanged = !DeepCollectionEquality()
        .equals(days!.toList(), endpointSchedule.convertRepetitionsToDays());
    final DateTime _timeTurnOff = _convertMinAndHourToDateTime(
        hour: endpointSchedule.turnOffHour!,
        minute: endpointSchedule.turnOffMin!);
    final DateTime _timeTurnOn = _convertMinAndHourToDateTime(
        hour: endpointSchedule.turnOnHour!,
        minute: endpointSchedule.turnOnMin!);
    final bool timeTurnOnHasChanged =
        !timeTurnOn!.isAtSameMomentAs(_timeTurnOn);
    final bool timeTurnOffHasChanged =
        !timeTurnOff!.isAtSameMomentAs(_timeTurnOff);
    bool colorHasChanged = false;
    bool brightnessHasChanged = false;
    if (endpointSchedule is DeviceLedEndpointSchedule) {
      colorHasChanged = !DeepCollectionEquality()
          .equals(color, (endpointSchedule as DeviceLedEndpointSchedule).color);
      brightnessHasChanged = brightness !=
          (endpointSchedule as DeviceLedEndpointSchedule).brightness;
    }
    return activeHasChanged ||
        daysHasChanged ||
        timeTurnOnHasChanged ||
        timeTurnOffHasChanged ||
        colorHasChanged ||
        brightnessHasChanged;
  }

  int _convertDaysToRepetitions(List<int> days) {
    return List.generate(
      days.length,
      (index) => days.reversed.toList()[index] == 0 ? 0 : pow(2, index),
    ).reduce((value, element) => value + element).toInt();
  }

  IDeviceEndpointSchedule getNewEndpointSchedule() {
    final int rept = _convertDaysToRepetitions(days!);
    if (endpointSchedule is DeviceLedEndpointSchedule) {
      return (endpointSchedule as DeviceLedEndpointSchedule).copyWith(
        brightness: brightness,
        color: color,
        active: active,
        rept: rept,
        turnOffHour: timeTurnOff!.hour,
        turnOffMin: timeTurnOff!.minute,
        turnOnHour: timeTurnOn!.hour,
        turnOnMin: timeTurnOn!.minute,
      );
    }
    return endpointSchedule.copyWith(
      active: active,
      rept: rept,
      turnOffHour: timeTurnOff!.hour,
      turnOffMin: timeTurnOff!.minute,
      turnOnHour: timeTurnOn!.hour,
      turnOnMin: timeTurnOn!.minute,
    );
  }

  void resetColorAndBrightness() {
    changeColor(_holderColor!);
    changeBrightness(_holderBrightness);
  }
}
