import 'dart:ui';

import 'package:get/get.dart';
import 'package:intl/intl.dart';

import '../../../../generated/l10n.dart';

class HomeController extends GetxController {
  var imageList = [
    "assets/ic_tiki_en.webp",
    // "assets/ic_tiki_en_1.webp",
    // "assets/ic_tiki_en_2.webp",
    // "assets/ic_tiki_en_3.webp",
    // "assets/ic_tiki_en_4.webp",
  ].obs;

  @override
  void onInit() {
    super.onInit();
    print("屏幕宽 = ${Get.width}");
    print("屏幕高 = ${Get.height}");
    // 更改当前语言环境
    // S.load(Locale('de','DE'));

    final String currentLocale = Intl.getCurrentLocale();
    print("CurrentLocale =  $currentLocale");
    if (currentLocale.contains("ar")) {
      imageList.value = ["assets/ic_tiki_ar.webp"];
    } else if (currentLocale.contains("hi")) {
      imageList.value = ["assets/ic_tiki_hi.webp"];
    } else if (currentLocale.contains("id")) {
      imageList.value = ["assets/ic_tiki_id.webp"];
    } else if (currentLocale.contains("pt")) {
      imageList.value = ["assets/ic_tiki_pt.webp"];
    } else if (currentLocale.contains("th")) {
      imageList.value = ["assets/ic_tiki_th.webp"];
    } else if (currentLocale.contains("tr")) {
      imageList.value = ["assets/ic_tiki_tr.webp"];
    } else if (currentLocale.contains("vi")) {
      imageList.value = ["assets/ic_tiki_vi.webp"];
    } else {
      imageList.value = ["assets/ic_tiki_en.webp"];
    }
  }
}
