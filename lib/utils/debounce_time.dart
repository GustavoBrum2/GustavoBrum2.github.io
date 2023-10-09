import 'package:easy_debounce/easy_debounce.dart';

class DebounceTime {
  static void execute(
    void Function() onExecute, {
    String? tag,
    Duration? duration,
  }) async {
    return EasyDebounce.debounce(
      tag ?? 'debouncer',
      duration ?? Duration(milliseconds: 500),
      onExecute,
    );
  }

  static void cancel(String tag) => EasyDebounce.cancel(tag);
}
