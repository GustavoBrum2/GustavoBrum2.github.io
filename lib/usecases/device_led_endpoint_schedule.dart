import 'package:output/contracts/device_endpoint_schedule.contract.dart';

class DeviceLedEndpointSchedule implements IDeviceEndpointSchedule {
  @override
  final String key;
  @override
  final bool? active;
  @override
  final int? rept;
  @override
  final int? turnOffHour;
  @override
  final int? turnOffMin;
  @override
  final int? turnOnHour;
  @override
  final int? turnOnMin;
  final List<int>? color;
  final int? brightness;
  DeviceLedEndpointSchedule({
    required this.key,
    this.active,
    this.rept,
    this.turnOffHour,
    this.turnOffMin,
    this.turnOnHour,
    this.turnOnMin,
    this.color,
    this.brightness,
  });

  factory DeviceLedEndpointSchedule.fromMap(
      String key, Map<String, dynamic> map) {
    return DeviceLedEndpointSchedule(
      key: key,
      active: map['active'] != null ? map['active'] as bool : null,
      rept: map['rept'] != null ? map['rept'] as int : null,
      turnOnHour: map['turnOn']?['hr'],
      turnOnMin: map['turnOn']?['min'],
      turnOffHour: map['turnOff']?['hr'],
      turnOffMin: map['turnOff']?['min'],
      color: map['color'] != null ? List<int>.from((map['color'])) : null,
      brightness: map['brightness'] != null ? map['brightness'] as int : null,
    );
  }

  @override
  List<int> convertRepetitionsToDays() {
    if (rept == null) return [];
    var rptTemp = rept as int;
    return List.generate(7, (index) {
      var rest = rptTemp % 2;
      rptTemp ~/= 2;
      return rest;
    }).reversed.toList();
  }

  @override
  DeviceLedEndpointSchedule copyWithWithMap(Map<String, dynamic> map) {
    return DeviceLedEndpointSchedule(
      key: key,
      active: map['active'] != null ? map['active'] as bool : active,
      rept: map['rept'] != null ? map['rept'] as int : rept,
      turnOnHour: map['turnOn']?['hr'] ?? turnOnHour,
      turnOnMin: map['turnOn']?['min'] ?? turnOnMin,
      turnOffHour: map['turnOff']?['hr'] ?? turnOffHour,
      turnOffMin: map['turnOff']?['min'] ?? turnOffMin,
      color: map['color'] != null ? List<int>.from((map['color'])) : color,
      brightness:
          map['brightness'] != null ? map['brightness'] as int : brightness,
    );
  }

  @override
  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      key: {
        'color': color,
        'brightness': brightness,
        'rept': rept,
        'active': active,
        'turnOn': {
          'hr': turnOnHour,
          'min': turnOnMin,
        },
        'turnOff': {
          'hr': turnOffHour,
          'min': turnOffMin,
        }
      }
    };
  }

  @override
  DeviceLedEndpointSchedule copyWith({
    String? key,
    bool? active,
    int? rept,
    int? turnOffHour,
    int? turnOffMin,
    int? turnOnHour,
    int? turnOnMin,
    List<int>? color,
    int? brightness,
  }) {
    return DeviceLedEndpointSchedule(
      key: key ?? this.key,
      active: active ?? this.active,
      rept: rept ?? this.rept,
      turnOffHour: turnOffHour ?? this.turnOffHour,
      turnOffMin: turnOffMin ?? this.turnOffMin,
      turnOnHour: turnOnHour ?? this.turnOnHour,
      turnOnMin: turnOnMin ?? this.turnOnMin,
      color: color ?? this.color,
      brightness: brightness ?? this.brightness,
    );
  }
}
