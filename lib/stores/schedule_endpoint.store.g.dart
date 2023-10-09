// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'schedule_endpoint.store.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic, no_leading_underscores_for_local_identifiers

mixin _$ScheduleEndpointStore on _ScheduleEndpointStoreBase, Store {
  late final _$schedulesAtom =
      Atom(name: '_ScheduleEndpointStoreBase.schedules', context: context);

  @override
  ObservableList<IDeviceEndpointSchedule> get schedules {
    _$schedulesAtom.reportRead();
    return super.schedules;
  }

  @override
  set schedules(ObservableList<IDeviceEndpointSchedule> value) {
    _$schedulesAtom.reportWrite(value, super.schedules, () {
      super.schedules = value;
    });
  }

  late final _$bottomSheetStateAtom = Atom(
      name: '_ScheduleEndpointStoreBase.bottomSheetState', context: context);

  @override
  ScheduleEndpointBottomSheetState get bottomSheetState {
    _$bottomSheetStateAtom.reportRead();
    return super.bottomSheetState;
  }

  @override
  set bottomSheetState(ScheduleEndpointBottomSheetState value) {
    _$bottomSheetStateAtom.reportWrite(value, super.bottomSheetState, () {
      super.bottomSheetState = value;
    });
  }

  late final _$_ScheduleEndpointStoreBaseActionController =
      ActionController(name: '_ScheduleEndpointStoreBase', context: context);

  @override
  void changeSchedules(List<IDeviceEndpointSchedule> value) {
    final _$actionInfo = _$_ScheduleEndpointStoreBaseActionController
        .startAction(name: '_ScheduleEndpointStoreBase.changeSchedules');
    try {
      return super.changeSchedules(value);
    } finally {
      _$_ScheduleEndpointStoreBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  void changeBottomSheetState(ScheduleEndpointBottomSheetState value) {
    final _$actionInfo = _$_ScheduleEndpointStoreBaseActionController
        .startAction(name: '_ScheduleEndpointStoreBase.changeBottomSheetState');
    try {
      return super.changeBottomSheetState(value);
    } finally {
      _$_ScheduleEndpointStoreBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
schedules: ${schedules},
bottomSheetState: ${bottomSheetState}
    ''';
  }
}
