// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'device_schedule_endpoint.store.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic, no_leading_underscores_for_local_identifiers

mixin _$DeviceScheduleEndpointStore on _DeviceScheduleEndpointStoreBase, Store {
  late final _$timeTurnOnAtom = Atom(
      name: '_DeviceScheduleEndpointStoreBase.timeTurnOn', context: context);

  @override
  DateTime? get timeTurnOn {
    _$timeTurnOnAtom.reportRead();
    return super.timeTurnOn;
  }

  @override
  set timeTurnOn(DateTime? value) {
    _$timeTurnOnAtom.reportWrite(value, super.timeTurnOn, () {
      super.timeTurnOn = value;
    });
  }

  late final _$timeTurnOffAtom = Atom(
      name: '_DeviceScheduleEndpointStoreBase.timeTurnOff', context: context);

  @override
  DateTime? get timeTurnOff {
    _$timeTurnOffAtom.reportRead();
    return super.timeTurnOff;
  }

  @override
  set timeTurnOff(DateTime? value) {
    _$timeTurnOffAtom.reportWrite(value, super.timeTurnOff, () {
      super.timeTurnOff = value;
    });
  }

  late final _$daysAtom =
      Atom(name: '_DeviceScheduleEndpointStoreBase.days', context: context);

  @override
  ObservableList<int>? get days {
    _$daysAtom.reportRead();
    return super.days;
  }

  @override
  set days(ObservableList<int>? value) {
    _$daysAtom.reportWrite(value, super.days, () {
      super.days = value;
    });
  }

  late final _$activeAtom =
      Atom(name: '_DeviceScheduleEndpointStoreBase.active', context: context);

  @override
  bool? get active {
    _$activeAtom.reportRead();
    return super.active;
  }

  @override
  set active(bool? value) {
    _$activeAtom.reportWrite(value, super.active, () {
      super.active = value;
    });
  }

  late final _$colorAtom =
      Atom(name: '_DeviceScheduleEndpointStoreBase.color', context: context);

  @override
  ObservableList<int>? get color {
    _$colorAtom.reportRead();
    return super.color;
  }

  @override
  set color(ObservableList<int>? value) {
    _$colorAtom.reportWrite(value, super.color, () {
      super.color = value;
    });
  }

  late final _$brightnessAtom = Atom(
      name: '_DeviceScheduleEndpointStoreBase.brightness', context: context);

  @override
  int? get brightness {
    _$brightnessAtom.reportRead();
    return super.brightness;
  }

  @override
  set brightness(int? value) {
    _$brightnessAtom.reportWrite(value, super.brightness, () {
      super.brightness = value;
    });
  }

  late final _$_DeviceScheduleEndpointStoreBaseActionController =
      ActionController(
          name: '_DeviceScheduleEndpointStoreBase', context: context);

  @override
  void changeTimeTurnOn(DateTime? value) {
    final _$actionInfo = _$_DeviceScheduleEndpointStoreBaseActionController
        .startAction(name: '_DeviceScheduleEndpointStoreBase.changeTimeTurnOn');
    try {
      return super.changeTimeTurnOn(value);
    } finally {
      _$_DeviceScheduleEndpointStoreBaseActionController
          .endAction(_$actionInfo);
    }
  }

  @override
  void changeTimeTurnOff(DateTime? value) {
    final _$actionInfo =
        _$_DeviceScheduleEndpointStoreBaseActionController.startAction(
            name: '_DeviceScheduleEndpointStoreBase.changeTimeTurnOff');
    try {
      return super.changeTimeTurnOff(value);
    } finally {
      _$_DeviceScheduleEndpointStoreBaseActionController
          .endAction(_$actionInfo);
    }
  }

  @override
  void changeDays(List<int> value) {
    final _$actionInfo = _$_DeviceScheduleEndpointStoreBaseActionController
        .startAction(name: '_DeviceScheduleEndpointStoreBase.changeDays');
    try {
      return super.changeDays(value);
    } finally {
      _$_DeviceScheduleEndpointStoreBaseActionController
          .endAction(_$actionInfo);
    }
  }

  @override
  void changeActive(bool? value) {
    final _$actionInfo = _$_DeviceScheduleEndpointStoreBaseActionController
        .startAction(name: '_DeviceScheduleEndpointStoreBase.changeActive');
    try {
      return super.changeActive(value);
    } finally {
      _$_DeviceScheduleEndpointStoreBaseActionController
          .endAction(_$actionInfo);
    }
  }

  @override
  void changeColor(List<int> value) {
    final _$actionInfo = _$_DeviceScheduleEndpointStoreBaseActionController
        .startAction(name: '_DeviceScheduleEndpointStoreBase.changeColor');
    try {
      return super.changeColor(value);
    } finally {
      _$_DeviceScheduleEndpointStoreBaseActionController
          .endAction(_$actionInfo);
    }
  }

  @override
  void changeBrightness(int? value) {
    final _$actionInfo = _$_DeviceScheduleEndpointStoreBaseActionController
        .startAction(name: '_DeviceScheduleEndpointStoreBase.changeBrightness');
    try {
      return super.changeBrightness(value);
    } finally {
      _$_DeviceScheduleEndpointStoreBaseActionController
          .endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
timeTurnOn: ${timeTurnOn},
timeTurnOff: ${timeTurnOff},
days: ${days},
active: ${active},
color: ${color},
brightness: ${brightness}
    ''';
  }
}
