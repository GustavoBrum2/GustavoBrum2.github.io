abstract class IDeviceEndpointSchedule {
  String get key;
  bool? get active;
  int? get turnOnHour;
  int? get turnOnMin;
  int? get turnOffHour;
  int? get turnOffMin;
  int? get rept;
  List<int> convertRepetitionsToDays();
  IDeviceEndpointSchedule copyWithWithMap(Map<String, dynamic> map);
  IDeviceEndpointSchedule copyWith({
    bool? active,
    int? rept,
    int? turnOffHour,
    int? turnOffMin,
    int? turnOnHour,
    int? turnOnMin,
  });
  Map<String, dynamic> toMap();
}
