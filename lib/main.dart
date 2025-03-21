import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'package:get/get.dart';

import 'app/routes/app_pages.dart';
import 'generated/l10n.dart';

void main() {
  runApp(
    ScreenUtilInit(
        designSize: const Size(375, 812), // 设计稿宽高
        minTextAdapt: true, // 是否根据宽度/高度中的最小值适配文字
        splitScreenMode: true, // 支持分屏尺寸
        builder: (context, child) {
          return  GetMaterialApp(
            title: "Tiki",
            debugShowCheckedModeBanner: false,
            initialRoute: AppPages.INITIAL,
            getPages: AppPages.routes,
            // 使用flutter_intl国际化
            localizationsDelegates: const [
              GlobalMaterialLocalizations.delegate,
              GlobalWidgetsLocalizations.delegate,
              GlobalCupertinoLocalizations.delegate,
              S.delegate,
            ],
            supportedLocales: S.delegate.supportedLocales,
          );
        }),
  );
}
