import 'dart:ui';

import 'package:get/get.dart';
import 'package:intl/intl.dart';

import '../../../../generated/l10n.dart';

class HomeController extends GetxController {

  final imageList = [
    "assets/ic_tiki_en.webp",
    // "assets/ic_tiki_en_1.webp",
    // "assets/ic_tiki_en_2.webp",
    // "assets/ic_tiki_en_3.webp",
    // "assets/ic_tiki_en_4.webp",

  ];
  @override
  void onInit() {
    super.onInit();
    print("屏幕宽 = ${Get.width}");
    print("屏幕高 = ${Get.height}");
    // 更改当前语言环境
    // S.load(Locale('de','DE'));


   print("CurrentLocale =  ${ Intl.getCurrentLocale()}");

  }

}
