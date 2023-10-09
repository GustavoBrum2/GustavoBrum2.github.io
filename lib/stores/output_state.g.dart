// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'output_state.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic, no_leading_underscores_for_local_identifiers

mixin _$OutputState on _OutputStateBase, Store {
  late final _$nameAtom = Atom(name: '_OutputStateBase.name', context: context);

  @override
  String get name {
    _$nameAtom.reportRead();
    return super.name;
  }

  @override
  set name(String value) {
    _$nameAtom.reportWrite(value, super.name, () {
      super.name = value;
    });
  }

  late final _$onAtom = Atom(name: '_OutputStateBase.on', context: context);

  @override
  bool get on {
    _$onAtom.reportRead();
    return super.on;
  }

  @override
  set on(bool value) {
    _$onAtom.reportWrite(value, super.on, () {
      super.on = value;
    });
  }

  late final _$isLoadingAtom =
      Atom(name: '_OutputStateBase.isLoading', context: context);

  @override
  bool get isLoading {
    _$isLoadingAtom.reportRead();
    return super.isLoading;
  }

  @override
  set isLoading(bool value) {
    _$isLoadingAtom.reportWrite(value, super.isLoading, () {
      super.isLoading = value;
    });
  }

  late final _$onAutAtom =
      Atom(name: '_OutputStateBase.onAut', context: context);

  @override
  bool get onAut {
    _$onAutAtom.reportRead();
    return super.onAut;
  }

  @override
  set onAut(bool value) {
    _$onAutAtom.reportWrite(value, super.onAut, () {
      super.onAut = value;
    });
  }

  late final _$_OutputStateBaseActionController =
      ActionController(name: '_OutputStateBase', context: context);

  @override
  void changeIsLoading(bool newValue) {
    final _$actionInfo = _$_OutputStateBaseActionController.startAction(
        name: '_OutputStateBase.changeIsLoading');
    try {
      return super.changeIsLoading(newValue);
    } finally {
      _$_OutputStateBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  void changeTurnOnOff() {
    final _$actionInfo = _$_OutputStateBaseActionController.startAction(
        name: '_OutputStateBase.changeTurnOnOff');
    try {
      return super.changeTurnOnOff();
    } finally {
      _$_OutputStateBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
name: ${name},
on: ${on},
isLoading: ${isLoading},
onAut: ${onAut}
    ''';
  }
}
