// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'output_page.store.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic, no_leading_underscores_for_local_identifiers

mixin _$OutputPageStore on _OutputPageStoreBase, Store {
  Computed<bool>? _$isOnComputed;

  @override
  bool get isOn => (_$isOnComputed ??=
          Computed<bool>(() => super.isOn, name: '_OutputPageStoreBase.isOn'))
      .value;

  late final _$isLoadingScheduleAtom =
      Atom(name: '_OutputPageStoreBase.isLoadingSchedule', context: context);

  @override
  bool get isLoadingSchedule {
    _$isLoadingScheduleAtom.reportRead();
    return super.isLoadingSchedule;
  }

  @override
  set isLoadingSchedule(bool value) {
    _$isLoadingScheduleAtom.reportWrite(value, super.isLoadingSchedule, () {
      super.isLoadingSchedule = value;
    });
  }

  late final _$showLoadingCommandAtom =
      Atom(name: '_OutputPageStoreBase.showLoadingCommand', context: context);

  @override
  bool get showLoadingCommand {
    _$showLoadingCommandAtom.reportRead();
    return super.showLoadingCommand;
  }

  @override
  set showLoadingCommand(bool value) {
    _$showLoadingCommandAtom.reportWrite(value, super.showLoadingCommand, () {
      super.showLoadingCommand = value;
    });
  }

  late final _$commandResponseAtom =
      Atom(name: '_OutputPageStoreBase.commandResponse', context: context);

  @override
  bool? get commandResponse {
    _$commandResponseAtom.reportRead();
    return super.commandResponse;
  }

  @override
  set commandResponse(bool? value) {
    _$commandResponseAtom.reportWrite(value, super.commandResponse, () {
      super.commandResponse = value;
    });
  }

  late final _$_OutputPageStoreBaseActionController =
      ActionController(name: '_OutputPageStoreBase', context: context);

  @override
  void changeIsLoadingSchedule(bool value) {
    final _$actionInfo = _$_OutputPageStoreBaseActionController.startAction(
        name: '_OutputPageStoreBase.changeIsLoadingSchedule');
    try {
      return super.changeIsLoadingSchedule(value);
    } finally {
      _$_OutputPageStoreBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  void changeShowLoadingCommand(bool value) {
    final _$actionInfo = _$_OutputPageStoreBaseActionController.startAction(
        name: '_OutputPageStoreBase.changeShowLoadingCommand');
    try {
      return super.changeShowLoadingCommand(value);
    } finally {
      _$_OutputPageStoreBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  void changeCommandResponse(bool? value) {
    final _$actionInfo = _$_OutputPageStoreBaseActionController.startAction(
        name: '_OutputPageStoreBase.changeCommandResponse');
    try {
      return super.changeCommandResponse(value);
    } finally {
      _$_OutputPageStoreBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
isLoadingSchedule: ${isLoadingSchedule},
showLoadingCommand: ${showLoadingCommand},
commandResponse: ${commandResponse},
isOn: ${isOn}
    ''';
  }
}
