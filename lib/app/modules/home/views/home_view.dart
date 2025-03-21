import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../generated/l10n.dart';
import '../../../common/AppConstants.dart';
import '../controllers/home_controller.dart';

class HomeView extends StatefulWidget {
  const HomeView({super.key});

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  final controller = Get.put(HomeController());

  final String playStoreUrl = "https://play.google.com/store/apps/details?id=${AppConstants.bundleId}";

  void _launchURL() async {
    if (await canLaunchUrl(Uri.parse(playStoreUrl))) {
      await launchUrl(Uri.parse(playStoreUrl));
    } else {
      throw 'Could not launch $playStoreUrl';
    }
    // //打开网页
    // window.open(playStoreUrl,"");
  }

  @override
  void initState() {
    super.initState();
    // //监听event
    // window.addEventListener("mousedown", (event) => {
    //   //do something
    // });
  }

  @override
  void dispose() {
    Get.delete<HomeController>();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: Get.width,
        height: Get.height * 3,
        decoration: BoxDecoration(
            image: DecorationImage(
          image: AssetImage("assets/ic_bg.webp"),
          fit: BoxFit.fill,
        )),
        child: Stack(
          children: [
            CustomScrollView(
              slivers: [
                // 头部
                SliverToBoxAdapter(
                  child: Container(
                    padding: EdgeInsets.all(16),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadiusDirectional.circular(20),
                                border: Border.all(color: Colors.white, width: 1),
                              ),
                              child: ClipRRect(
                                borderRadius: BorderRadiusDirectional.circular(20),
                                child: Image.asset(
                                  'assets/ic_logo.webp',
                                  fit: BoxFit.cover,
                                  width: 124,
                                  height: 124,
                                ),
                              ),
                            ),
                            SizedBox(width: 15),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  AppConstants.appName,
                                  style: TextStyle(
                                    fontSize: 24,
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                const SizedBox(height: 15),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Icon(
                                          Icons.apple,
                                          size: 30,
                                          color: Colors.white,
                                        ),
                                        const SizedBox(width: 5),
                                        Text(
                                          "iOS",
                                          style: TextStyle(
                                            fontSize: 20,
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(width: 10),
                                    Row(
                                      children: [
                                        Icon(
                                          Icons.android,
                                          size: 30,
                                          color: Colors.white,
                                        ),
                                        const SizedBox(width: 5),
                                        Text(
                                          "iOS",
                                          style: TextStyle(
                                            fontSize: 20,
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                )
                              ],
                            ),
                          ],
                        ),
                        const SizedBox(height: 20),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.star,
                              color: Color(0xFFFFE66C),
                              size: 25,
                            ),
                            Icon(
                              Icons.star,
                              color: Color(0xFFFFE66C),
                              size: 25,
                            ),
                            Icon(
                              Icons.star,
                              color: Color(0xFFFFE66C),
                              size: 25,
                            ),
                            Icon(
                              Icons.star,
                              color: Color(0xFFFFE66C),
                              size: 25,
                            ),
                            Icon(
                              Icons.star,
                              color: Color(0xFFFFE66C),
                              size: 25,
                            ),
                            const SizedBox(width: 10),
                            Text(
                              S.current.recommend,
                              style: const TextStyle(
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: FontWeight.normal,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 20),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              decoration: BoxDecoration(
                                color: Color(0xFFFF547B),
                                borderRadius: BorderRadiusDirectional.circular(25),
                              ),
                              height: 50,
                              alignment: AlignmentDirectional.center,
                              padding: EdgeInsetsDirectional.symmetric(horizontal: 20),
                              child: Text(
                                S.current.video_chat,
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 16,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                            ),
                            Container(
                              decoration: BoxDecoration(
                                color: Color(0xFFFF547B),
                                borderRadius: BorderRadiusDirectional.circular(25),
                              ),
                              height: 50,
                              alignment: AlignmentDirectional.center,
                              padding: EdgeInsetsDirectional.symmetric(horizontal: 20),
                              margin: EdgeInsetsDirectional.symmetric(horizontal: 20),
                              child: Text(
                                S.current.chat_with_strangers,
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 16,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                            ),
                            Container(
                              decoration: BoxDecoration(
                                color: Color(0xFFFF547B),
                                borderRadius: BorderRadiusDirectional.circular(25),
                              ),
                              height: 50,
                              alignment: AlignmentDirectional.center,
                              padding: EdgeInsetsDirectional.symmetric(horizontal: 20),
                              child: Text(
                                S.current.make_friends,
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 16,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                            )
                          ],
                        ),
                        const SizedBox(height: 20),
                        InkWell(
                          onTap: _launchURL,
                          child: Container(
                            height: 80,
                            padding: EdgeInsetsDirectional.symmetric(horizontal: 20),
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(40),
                                border: Border.all(color: Colors.white, width: 1),
                                gradient: LinearGradient(
                                  colors: [
                                    Color(0xFFFF3BA0),
                                    Color(0xFFFF547B),
                                  ],
                                  begin: AlignmentDirectional.centerStart,
                                  end: AlignmentDirectional.centerEnd,
                                )),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Image.asset(
                                  "assets/ic_install.webp",
                                  fit: BoxFit.cover,
                                ),
                                const SizedBox(width: 10),
                                Text(
                                  S.current.install,
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontSize: 22,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
                // 中部图片
                SliverPadding(
                  padding: EdgeInsetsDirectional.symmetric(vertical: 10),
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (context, index) {
                        final image = controller.imageList[index];
                        return Container(
                          margin: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                          padding: EdgeInsets.symmetric(vertical: 8),
                          child: Image.asset(
                            image,
                            fit: BoxFit.cover,
                          ),
                        );
                      },
                      childCount: controller.imageList.length,
                    ),
                  ),
                ),
              ],
            ),
            // 顶部悬浮按钮
            PositionedDirectional(
              top: 20,
              end: 20,
              child: FloatingActionButton(
                onPressed: _launchURL,
                child: Icon(Icons.download),
              ),
            ),
            PositionedDirectional(
              bottom: 20,
              start: 20,
              end: 20,
              child: InkWell(
                onTap: _launchURL,
                child: Container(
                  height: 80,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(40),
                      border: Border.all(color: Colors.white, width: 1),
                      gradient: LinearGradient(
                        colors: [
                          Color(0xFFFF3BA0),
                          Color(0xFFFF547B),
                        ],
                        begin: AlignmentDirectional.centerStart,
                        end: AlignmentDirectional.centerEnd,
                      )),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset(
                        "assets/ic_install.webp",
                        fit: BoxFit.cover,
                      ),
                      const SizedBox(width: 10),
                      Text(
                        S.current.install,
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 22,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
