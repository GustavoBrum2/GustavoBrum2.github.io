'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "476ac11c8e88dccd2d8e1e7d106a9b49",
"index.html": "cbcd66bc72044eb0d1727ae68f170e6e",
"/": "cbcd66bc72044eb0d1727ae68f170e6e",
"main.dart.js": "25eb63a833624157f6dd4c152ffa6d83",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e803030fd68c12be344434dacb7cf1f",
"assets/AssetManifest.json": "13725907d2b8f2f46f2980a89fa48a2e",
"assets/NOTICES": "5a192c5796e3acf5bbe4126cc1b36a78",
"assets/FontManifest.json": "46154c65870d4f9ed2a2ce9025783e0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7ab60e3bf42441be61c3f50aacbb4fae",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/exemplo_manual_espanhol.png": "d28bf87e7472a754a226cea3bddd38fb",
"assets/assets/images/hue.png": "cdfcedc88566e2e5ff8dbafee8f23824",
"assets/assets/images/digipool.png": "b8920c050d08a432ddba84982f3b228d",
"assets/assets/images/red_lamp_off.png": "41c7261935c72586d991f903e67f9746",
"assets/assets/images/green_lamp_on.png": "7c72adf37cab4eace5ba1519dade60bc",
"assets/assets/images/orange_lamp_off.png": "d4a0170b50485ff67b0ff5966e999a3f",
"assets/assets/images/wifi_ios.png": "85f9798fa9aa712ff8186a08f84d9490",
"assets/assets/images/exemplo_wifi.png": "48efe2137c9fd66bfb941811afa67aa0",
"assets/assets/images/red_lamp_on.png": "73c0e7369722b6984314e174eae3e426",
"assets/assets/images/exemplo_manual_ingles.png": "05af01506dff4bfc89ff113b600339cc",
"assets/assets/images/wifi_android.png": "3c4a640d8a910bff4de05fd92c0c1623",
"assets/assets/images/exemplo_manual.png": "caba8b8aedc80b65df59501e3ad82940",
"assets/assets/images/adding_by_link.png": "d9031fd13dea218d9edaea394fd8d17f",
"assets/assets/images/casa_inteligente_branco.png": "8ae708636f3a047553a3775a6eb54ab9",
"assets/assets/images/orange_lamp_on.png": "ce0321b239f5c5aae686db4aae87e36d",
"assets/assets/images/green_lamp_off.png": "8886cbb69e5e0bbb5886fe29a036d4e3",
"assets/assets/images/blue_lamp_on.png": "4cd6458ce47fb4ac133cc2afe575e6d9",
"assets/assets/images/print_wifi.png": "595cce3511e1d65a0c42b737cba1e43e",
"assets/assets/images/blue_lamp_off.png": "9e713ce95a701905210e1926973cd7b7",
"assets/assets/images/adding_by_link_dark.png": "f9918a8524022bb8eb61fbd319bdad62",
"assets/assets/gifs/tech_program.riv": "068ab1a1814cb8b1135c865f364464ea",
"assets/assets/gifs/add_device.riv": "1174b9355eef80518efac57f973ad439",
"assets/assets/gifs/1.gif": "9364bd1228c130651feaa4c0e243e978",
"assets/assets/gifs/icon.riv": "15be9305a159b2982a8e8a69f05c254b",
"assets/assets/gifs/chat.riv": "9989faef6362c47e120b902fc43c33b9",
"assets/assets/gifs/add_invite.riv": "7a9dc7e4e7b9e07af70863dc7d9eecc2",
"assets/assets/icons/configure_device/finish.svg": "849a75c93d4ca3e9dfa5869b084c738a",
"assets/assets/icons/configure_device/error.svg": "a60eb00fd2941b25746644673f25020f",
"assets/assets/icons/core/chevron_next.svg": "3d25db052acccb4175504194267bd416",
"assets/assets/icons/core/power.svg": "563592ed612ad9f4ae324b76d074259a",
"assets/assets/icons/core/connected.svg": "10d331c82474c30b293747a61175c0bc",
"assets/assets/icons/core/update.svg": "10c8ae0baeed3268e08f21c39a983fe2",
"assets/assets/icons/core/back.svg": "3be28b17b38c3df4d941c69afcc326a3",
"assets/assets/icons/core/audio.svg": "f893894417e8a9ae2b383c8cdb0262cf",
"assets/assets/icons/core/error.svg": "1c64ec629f867d8805c2cb2768a155e4",
"assets/assets/icons/sparkles.svg": "66427ab2fdc0d438f585f789734374a4",
"assets/assets/icons/settings.svg": "410110b5d8683038d7fd4e639c57e414",
"assets/assets/icons/shines.svg": "147c216ba96e0a9778c0e9144954fbb5",
"assets/assets/icons/colors.svg": "65a6f6c951927a0356e85d1602b16660",
"assets/assets/icons/agenda.svg": "4fa38115310dd2b09662e2be678b50ca",
"assets/assets/icons/finish.svg": "849a75c93d4ca3e9dfa5869b084c738a",
"assets/assets/icons/heating/heat_on.svg": "e366f22b42a5b5b7705b28b1a9a733fa",
"assets/assets/icons/heating/wind.svg": "fbaa30d2d0b8c74dfdde3dcb2b40a677",
"assets/assets/icons/heating/thunder.svg": "1cf7fcf8462f80e050d602f778eff4b8",
"assets/assets/icons/heating/heating_off.svg": "4d86b5902e8f3da3c479b5afca3d25cc",
"assets/assets/icons/heating/heating_on.svg": "94b5258542d43393080cb4c44ca850c8",
"assets/assets/icons/heating/thermometer.svg": "0ffc8d0ed11817dc340a9d5b4ba3b2c7",
"assets/assets/icons/heating/heat_off.svg": "eb6c47690af4141b939df476c899f795",
"assets/assets/icons/heating/circulation.svg": "d89a0dc34fd90781c222b6dd8c07045c",
"assets/assets/icons/heating/auto.svg": "2c1f5ab5d9f2183e244c2e216f370b22",
"assets/assets/icons/heating/fan.svg": "1a34411e7f8254352bba167b5dcc1a79",
"assets/assets/icons/heating/silence.svg": "f0f6bd9d66211664e4d6879445ec0cd8",
"assets/assets/icons/heating/news/heating_auto.svg": "a246a8736537e79d268ee164bef3cc17",
"assets/assets/icons/heating/news/heating_off.svg": "1960362856a535720964e2c4bada3c64",
"assets/assets/icons/heating/news/heating_on.svg": "ed4f2cd115a4b4490267c258c468a0f1",
"assets/assets/icons/heating/news/heating_eco.svg": "1083f4128665a69ae4cb3e2fb3271f11",
"assets/assets/icons/heating/water.svg": "2615c226d62a31f3a665b93563fe347d",
"assets/assets/icons/heating/cool.svg": "fb29c23f154def7db6651dcf08142752",
"assets/assets/icons/heating/statistics.svg": "0acece270774ed99c737aa932a75c7ee",
"assets/assets/icons/heating/graph.svg": "c60cfc4b5ebecaa5362e9c96a666228d",
"assets/assets/icons/heating/eco.svg": "dddf799d26a5679769c1bc659fc0778d",
"assets/assets/icons/logo.svg": "0b1beffe29fede3355082d45f0fcacdd",
"assets/assets/iphone_15.png": "fb515a592160f595cde1474e2915d920",
"assets/assets/fonts/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/Muli-SemiBold.ttf": "e74e966f227e49bb0f0d9cf3b8624064",
"assets/assets/fonts/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/fonts/mulish/Mulish-Regular.ttf": "0b9d999992640c68f348e33af403533c",
"assets/assets/fonts/mulish/Mulish-Bold.ttf": "5684dffea5d103b59e31b60105e1b07d",
"assets/assets/fonts/mulish/Mulish-Medium.ttf": "f2e30e0f1b6a04614989aa5ff9615f09",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
