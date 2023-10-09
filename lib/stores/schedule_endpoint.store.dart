import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mobx/mobx.dart';
import 'package:output/contracts/device_endpoint_schedule.contract.dart';
import 'package:output/stores/device_schedule_endpoint.store.dart';

part 'schedule_endpoint.store.g.dart';

class ScheduleEndpointStore = _ScheduleEndpointStoreBase
    with _$ScheduleEndpointStore;

abstract class _ScheduleEndpointStoreBase with Store {
  late final String thingId;

  late final String keyName;

  late final String? key;

  @observable
  ObservableList<IDeviceEndpointSchedule> schedules =
      <IDeviceEndpointSchedule>[].asObservable();

  StreamSubscription<List<IDeviceEndpointSchedule>>? _subscription;

  @observable
  ScheduleEndpointBottomSheetState bottomSheetState =
      ScheduleEndpointBottomSheetState.ListSchedules;

  DeviceScheduleEndpointStore selectedScheduleStore =
      DeviceScheduleEndpointStore();


  @action
  void changeSchedules(List<IDeviceEndpointSchedule> value) =>
      schedules = value.asObservable();

  @action
  void changeBottomSheetState(ScheduleEndpointBottomSheetState value) =>
      bottomSheetState = value;

  Future<bool> initScheduleBottomSheet(BuildContext context,
      {String? key, required String keyName, required String thingId}) async {
    this.thingId = thingId;
    this.key = key;
    this.keyName = keyName;
    // final bool response = await _initStreamAndBottomSheetSchedule(context);
    // return response;
    return true;
  }

  // void finishStreamAndBottomSheetSchedule() {
  //   Modular.get<IFinishStreamScheduleUseCase>()
  //       .execute(thingId: thingId, keyName: keyName);
  //   _subscription?.cancel();
  // }

  // Future<bool> _initStreamAndBottomSheetSchedule(BuildContext context) async {
  //   final IGetStreamScheduleUseCase useCase =
  //       Modular.get<IGetStreamScheduleUseCase>();
  //   final Stream<List<IDeviceEndpointSchedule>> stream =
  //       useCase.execute(thingId: thingId, keyName: keyName, key: key);
  //   _subscription = stream.listen((schedule) {
  //     changeSchedules(schedule);
  //   });
  //   final List<IDeviceEndpointSchedule> response = await stream.first.timeout(
  //     Duration(seconds: 10),
  //     onTimeout: () => [],
  //   );
  //   return response.isNotEmpty;
  // }

  void onTapScheduleOnListSchedules(IDeviceEndpointSchedule selectedSchedule) {
    selectedScheduleStore.initStore(selectedSchedule);
    changeBottomSheetState(ScheduleEndpointBottomSheetState.SelectedSchedule);
  }

  // void onTapSelectedScheduleCancel() {
  //   if (selectedScheduleStore.verifyHasChanged()) {
  //     changeErrorOnScheduleEndpointStore(UnsavedDataError());
  //   } else {
  //     changeBottomSheetState(ScheduleEndpointBottomSheetState.ListSchedules);
  //   }
  // }

  // void onTapSelectedScheduleSave() async {
  //   if (selectedScheduleStore.verifyHasChanged()) {
  //     final ISetScheduleUseCase useCase = Modular.get<ISetScheduleUseCase>();
  //     final response = await useCase.execute(
  //       listSchedule: List<IDeviceEndpointSchedule>.from(schedules),
  //       newSchedule: selectedScheduleStore.getNewEndpointSchedule(),
  //       thingId: thingId,
  //       keyName: keyName,
  //       key: key,
  //     );
  //     if (response.isLeft()) {
  //       changeErrorOnScheduleEndpointStore(response.fold(id, id) as ICoreError);
  //     }
  //     final bool eventInConflitct = !(response.fold(id, id) as bool);
  //     if (eventInConflitct) {
  //       changeErrorOnScheduleEndpointStore(ConflictDataError());
  //     } else {
  //       changeBottomSheetState(ScheduleEndpointBottomSheetState.ListSchedules);
  //     }
  //   } else {
  //     changeBottomSheetState(ScheduleEndpointBottomSheetState.ListSchedules);
  //   }
  // }

  void onTapSelectedScheduleColor() {
    selectedScheduleStore
        .changeHolderColor(selectedScheduleStore.color!.toList());
    selectedScheduleStore
        .changeHolderBrightness(selectedScheduleStore.brightness);
    changeBottomSheetState(
        ScheduleEndpointBottomSheetState.SelectedScheduleColorSelection);
  }

  void onTapColorSelectionSelectedScheduleCancel() {
    selectedScheduleStore.resetColorAndBrightness();
    changeBottomSheetState(ScheduleEndpointBottomSheetState.SelectedSchedule);
  }

  void onTapColorSelectionSelectedScheduleSave() {
    selectedScheduleStore
        .changeHolderColor(selectedScheduleStore.color!.toList());
    selectedScheduleStore
        .changeHolderBrightness(selectedScheduleStore.brightness);
    changeBottomSheetState(ScheduleEndpointBottomSheetState.SelectedSchedule);
  }

  // void onTapChangeScheduleWithWarning() async {
  //   final ISetScheduleUseCase useCase = Modular.get<ISetScheduleUseCase>();
  //   await useCase.execute(
  //       listSchedule: List<IDeviceEndpointSchedule>.from(schedules),
  //       newSchedule: selectedScheduleStore.getNewEndpointSchedule(),
  //       thingId: thingId,
  //       keyName: keyName,
  //       key: key,
  //       saveWithWarning: true);
  //   changeBottomSheetState(ScheduleEndpointBottomSheetState.ListSchedules);
  // }
}

enum ScheduleEndpointBottomSheetState {
  ListSchedules,
  SelectedSchedule,
  SelectedScheduleColorSelection,
}
