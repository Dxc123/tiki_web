'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"index.html": "49ee70bd6271c007d2ca9f15ceb27f90",
"/": "49ee70bd6271c007d2ca9f15ceb27f90",
"assets/NOTICES": "b6cf4e057d48f98b041c0e0c2de7b1ba",
"assets/assets/ic_tiki_ar.webp": "d4df407d4a3b650613231de0ea009c14",
"assets/assets/ic_tiki_es.webp": "97a8e97e48285f370037facc74f770bc",
"assets/assets/2.0x/ic_tiki_ar.webp": "853c7c5e23064edf0af53dc41d0d9e75",
"assets/assets/2.0x/ic_tiki_es.webp": "9be22a29c5faff9aee57c2bfc9298c06",
"assets/assets/2.0x/ic_bg.webp": "9da76ced7061978729b606dc7913e2ab",
"assets/assets/2.0x/ic_tiki_pt.webp": "2f7fc1ac3469ca977bb2a00c47264f90",
"assets/assets/2.0x/ic_tiki_en_3.webp": "958e16ba2910be28d49354cb0aaa25c6",
"assets/assets/2.0x/ic_tiki_tr.webp": "1dbc949b8d878239c659a47d021b5fd9",
"assets/assets/2.0x/ic_tiki_th.webp": "fe19ff3986fffb625cc586eb53d64bed",
"assets/assets/2.0x/ic_tiki_id.webp": "85bf3a608778eae59d7253c4b5fdd8ad",
"assets/assets/2.0x/ic_tiki_en_4.webp": "d9ada2dd60298e80a9a6ca38d28d012c",
"assets/assets/2.0x/ic_tiki_en_1.webp": "25b989f94b2bcc920626cab173847b37",
"assets/assets/2.0x/ic_logo.webp": "ccee7203fbf2b156c5856e2454b7ff60",
"assets/assets/2.0x/ic_tiki_en.webp": "672496ee0ef077a8bd254e985022321d",
"assets/assets/2.0x/ic_tiki_en_2.webp": "4ab7b367d492aaa1cab0a950921dd60a",
"assets/assets/2.0x/ic_install.webp": "0bbcc248ce09d768ad37343c83f4ee85",
"assets/assets/2.0x/ic_tiki_vi.webp": "b1339decbb6a5f1e0f8c4afae9e6d2bd",
"assets/assets/ic_bg.webp": "44237fb4697195140483e27efe590aa6",
"assets/assets/ic_tiki_pt.webp": "e75105b2ff482ea65c28c713cf37e456",
"assets/assets/ic_tiki_en_3.webp": "eead10e128e039362b360ba778c4645c",
"assets/assets/ic_tiki_tr.webp": "6100c02164a2d0f6ef4d68d742a4fbdf",
"assets/assets/ic_tiki_th.webp": "a02e9b9c07fe5b48e2efde46a5de9a1e",
"assets/assets/ic_tiki_id.webp": "bc6bbd8206de49b753f5c0afb5e534ed",
"assets/assets/ic_tiki_en_4.webp": "9b84bdb477e9f4b636fd96a0a11c1743",
"assets/assets/ic_tiki_en_1.webp": "5513dd610979fc4a02f9dbf6bbce4927",
"assets/assets/ic_logo.webp": "ef92b75b72d9d9d97d547b80a5dee8f2",
"assets/assets/ic_tiki_en.webp": "f52d384a4f0e2ad20d842e579113bc81",
"assets/assets/3.0x/ic_tiki_ar.webp": "cf78ae8f517238c73a3f95b974075b6e",
"assets/assets/3.0x/ic_tiki_es.webp": "a859906e3dc5761debf24a6b3c95d2e9",
"assets/assets/3.0x/ic_bg.webp": "abc988d400f8e6aec4c4cf09276902bb",
"assets/assets/3.0x/ic_tiki_pt.webp": "db6fd35c612e6752ba290d403cf8528a",
"assets/assets/3.0x/ic_tiki_en_3.webp": "15fab273f45f28608ebb4d5782f995d8",
"assets/assets/3.0x/ic_tiki_tr.webp": "42e5325a3c45743f410b40ee21607d68",
"assets/assets/3.0x/ic_tiki_th.webp": "ad941d13f76c426f1cbc6305eb50ed0f",
"assets/assets/3.0x/ic_tiki_id.webp": "79c7e5d9942322aeda77db44b122ca74",
"assets/assets/3.0x/ic_tiki_en_4.webp": "c0ae590476a4cf58b80e3d9f7081b763",
"assets/assets/3.0x/ic_tiki_en_1.webp": "46af65161d7cd016e5f4fdfa71372779",
"assets/assets/3.0x/ic_logo.webp": "e1e032530ecf1935f4ff5f034cf00a31",
"assets/assets/3.0x/ic_tiki_en.webp": "b21b311976fe12d33789ae069f1cb865",
"assets/assets/3.0x/ic_tiki_en_2.webp": "f8a1a44128377879a4af647f98403dd1",
"assets/assets/3.0x/ic_install.webp": "ae0735dfbdea1cd236cf6aebd405d506",
"assets/assets/3.0x/ic_tiki_vi.webp": "da1a0a3610ce16bfb498a990b704a419",
"assets/assets/ic_tiki_en_2.webp": "c9f6b5250daf6bb69113ec442f8e9a95",
"assets/assets/ic_install.webp": "be594d85cc13b4e4dc24f5eeeccb77b0",
"assets/assets/ic_tiki_vi.webp": "a51714f043bd4ebc58dad1a5c1cd6442",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9b756162f2dba8c8f5925364c1b34df5",
"assets/fonts/MaterialIcons-Regular.otf": "122da169ac32aac9b845940e23163398",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "32d09ac6f885c274b27ebb0ae414df27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "e8177d8b8df5b32a05416a1b426807eb",
"version.json": "c5d0a28536e5a3177fec739c18632927",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "31b62072f387dc82201d9ccd92a622d0",
"icons/Icon-maskable-512.png": "6c1c751522c5400fdf680343d13c97a7",
"icons/Icon-192.png": "9cdd5ed5103eb18788981b360cc0ff03",
"icons/Icon-512.png": "6c1c751522c5400fdf680343d13c97a7",
"icons/Icon-maskable-192.png": "9cdd5ed5103eb18788981b360cc0ff03",
"manifest.json": "5016df5bf1dce45f1f9515fe617819a4",
"favicon.png": "6917d912c743a77240aeb090ae996278",
"flutter_bootstrap.js": "ba2f2204da0da312ba748cc83b09d283"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
