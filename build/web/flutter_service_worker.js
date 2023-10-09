'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f4ee7c13597588e47c02df51351afafc",
"index.html": "d0cc0c252247bc5a6e7c03cc98267685",
"/": "d0cc0c252247bc5a6e7c03cc98267685",
"main.dart.js": "57c9c335c881ed1273b1a829f39cf854",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4596e2188fae8b44f994d377b6a9f63",
"assets/AssetManifest.json": "47981a30c672e4bc8b1e139c18793553",
"assets/NOTICES": "5ad6f8d348cdb4248670782ab94ca361",
"assets/FontManifest.json": "46154c65870d4f9ed2a2ce9025783e0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7ab60e3bf42441be61c3f50aacbb4fae",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/video/pool_presentation.mp4": "935c8e7f1a5f0f795d8ac7753ee403dc",
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
"assets/assets/lang/pt.json": "68bd2b164522d70d99820bcbf67f9af7",
"assets/assets/lang/en.json": "8e84513ed7174e57e882254c96580a5b",
"assets/assets/lang/es.json": "cb34ad108e075513b44b00cd82f90d15",
"assets/assets/icons/wifi/wifi_signal_1.png": "7f4b88df5438bc63bb9dc58ba6892639",
"assets/assets/icons/wifi/wifi_signal_0.png": "3c30787b5c978f95f3a616ee42b6cda3",
"assets/assets/icons/wifi/wifi_signal_2.png": "d895eecc454954b3702a10d8db886a5b",
"assets/assets/icons/wifi/wifi_signal_3.png": "d4e0bd8b5d201389d565a55ca970619c",
"assets/assets/icons/wifi/wifi_signal_4.png": "f2d36956a8d5e7d1a5c687438bbf981b",
"assets/assets/icons/wifi/wifi_config.svg": "0fe6b31ea03238f494c858e68b963474",
"assets/assets/icons/configure_device/change_wifi.svg": "4ed0e4559a6c660663254a901b18aaa8",
"assets/assets/icons/configure_device/link.svg": "182cdf256bf6571c64a937c3279ec058",
"assets/assets/icons/configure_device/search_device.svg": "676feef01771de275cbcc1b1c0003e69",
"assets/assets/icons/configure_device/bluetooth.svg": "5ac3adcfd1c24c2f3e17b3a0e82d49b7",
"assets/assets/icons/configure_device/wifi_lock.svg": "b43af90dd62981243c4a4fe5543df9b1",
"assets/assets/icons/configure_device/1.svg": "eeb55eec20a45c31790042361d38a2e8",
"assets/assets/icons/configure_device/3.svg": "0c21483256d1e0cb945431d090e5a8db",
"assets/assets/icons/configure_device/2.svg": "6c7d292232b11d4194ffc3e226cc9758",
"assets/assets/icons/configure_device/add_new_product.svg": "91c17b6e5bda63f1db692a12ccb588eb",
"assets/assets/icons/configure_device/network.svg": "2b449eecc11cce2c669813fdaf56a16d",
"assets/assets/icons/configure_device/finish.svg": "849a75c93d4ca3e9dfa5869b084c738a",
"assets/assets/icons/configure_device/location.svg": "2c2dc96d4c09e1923260c840b923a3a6",
"assets/assets/icons/configure_device/error.svg": "a60eb00fd2941b25746644673f25020f",
"assets/assets/icons/configure_device/logo.svg": "167941801f21581577908badef3ee485",
"assets/assets/icons/products/icon-9.svg": "19b13c5bcaea4bea46d36030b7843877",
"assets/assets/icons/products/icon-8.svg": "d27aaaa41c45845ebe8ceec362608e0e",
"assets/assets/icons/products/icon-10.svg": "059c52dda23a08829e7f113a658c3e25",
"assets/assets/icons/products/icon-11.svg": "61c1eed58476fa341882636f67c602b8",
"assets/assets/icons/products/icon-13.svg": "e8863068725cc487a9cc05816c8a0a7b",
"assets/assets/icons/products/icon-12.svg": "b86db38f4a69e673c3e01e48c052548e",
"assets/assets/icons/products/icon-14.svg": "58cde1a34628b4912c6b7f7e02464e85",
"assets/assets/icons/products/icon-6.svg": "e6fba04b9fe4c417fc15066e42cecc37",
"assets/assets/icons/products/icon-7.svg": "ad6a3381c7e6116e4ef97cdfd58879ee",
"assets/assets/icons/products/icon-5.svg": "ae867ca0c8881a0c345cbccc4223cb39",
"assets/assets/icons/products/icon-4.svg": "a7c7742e29a3d4e6b0e9552b3d98dd59",
"assets/assets/icons/products/description.txt": "5d8c2276b2717969c9d5ba8c15fb4213",
"assets/assets/icons/products/icon-0.svg": "50c36dd53113bdde4b57b60792679c10",
"assets/assets/icons/products/icon-1.svg": "1afc6cbe42b84f5eaacb58dd99ce3e2b",
"assets/assets/icons/products/icon-3.svg": "f8bc04d5154274bc04b32126fce052ac",
"assets/assets/icons/products/icon-2.svg": "7986f09752215a12a0952647b58c8c63",
"assets/assets/icons/core/disconnected.svg": "ab26fac0babc744f5f7dece2add21de6",
"assets/assets/icons/core/chevron_next.svg": "3d25db052acccb4175504194267bd416",
"assets/assets/icons/core/power.svg": "563592ed612ad9f4ae324b76d074259a",
"assets/assets/icons/core/connected.svg": "10d331c82474c30b293747a61175c0bc",
"assets/assets/icons/core/update.svg": "10c8ae0baeed3268e08f21c39a983fe2",
"assets/assets/icons/core/warning.svg": "603f28443b1588966f8520c79c32e92d",
"assets/assets/icons/core/back.svg": "3be28b17b38c3df4d941c69afcc326a3",
"assets/assets/icons/core/more.svg": "578a6da01e60c09343c52d1eb9027b0a",
"assets/assets/icons/core/audio.svg": "f893894417e8a9ae2b383c8cdb0262cf",
"assets/assets/icons/core/less.svg": "c67a604637fa1508c593523e934618fc",
"assets/assets/icons/core/error.svg": "1c64ec629f867d8805c2cb2768a155e4",
"assets/assets/icons/core/help.svg": "9a92224278a2cf6948100c298ff0c7f6",
"assets/assets/icons/sparkles.svg": "66427ab2fdc0d438f585f789734374a4",
"assets/assets/icons/settings.svg": "410110b5d8683038d7fd4e639c57e414",
"assets/assets/icons/shines.svg": "147c216ba96e0a9778c0e9144954fbb5",
"assets/assets/icons/colors.svg": "65a6f6c951927a0356e85d1602b16660",
"assets/assets/icons/external_links/alexa.png": "c852677571b4d57f35da57ea671e4a2b",
"assets/assets/icons/external_links/instagram.png": "ec1235009bb41769ce86be6f23d8d5b0",
"assets/assets/icons/external_links/action.png": "a5212e81d9981d63c3b51154bdcfd458",
"assets/assets/icons/external_links/tholz.png": "aaa5e0b0dde5f2f7fc67525e6345e976",
"assets/assets/icons/external_links/linkedin.png": "e707ea7657eaee751f8eac0633d8893f",
"assets/assets/icons/external_links/youtube.png": "25d1bd57561793de170eb3f734cd5390",
"assets/assets/icons/external_links/whatsapp.png": "1145fff204ac4cfd6285fd86e977fe65",
"assets/assets/icons/external_links/facebook.png": "27bd032227c9f0a8b4eb4e6b0d0a42a1",
"assets/assets/icons/agenda.svg": "4fa38115310dd2b09662e2be678b50ca",
"assets/assets/icons/profile/account_edit.svg": "e24033af23352b0d9b1738a9b8b1e0f4",
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
"assets/assets/icons/errors/error-heating.svg": "f8581ef83a7a5b0294d12f3787aadcf5",
"assets/assets/icons/errors/error-8.svg": "f8581ef83a7a5b0294d12f3787aadcf5",
"assets/assets/icons/errors/error-9.svg": "f8581ef83a7a5b0294d12f3787aadcf5",
"assets/assets/icons/errors/error-6.svg": "f8581ef83a7a5b0294d12f3787aadcf5",
"assets/assets/icons/errors/error-4.svg": "fbf5203c9c27951646bc499765a34d10",
"assets/assets/icons/errors/error-5.svg": "f8581ef83a7a5b0294d12f3787aadcf5",
"assets/assets/icons/errors/error-1.svg": "5b103e06d896ed4da185aefdb56c3134",
"assets/assets/icons/errors/error-10.svg": "c9d9c5ad2580bd6760b9549b686112be",
"assets/assets/icons/errors/error-2.svg": "439f40f2ded53813705bdc3c153cc4e3",
"assets/assets/icons/errors/error-3.svg": "c9d9c5ad2580bd6760b9549b686112be",
"assets/assets/icons/errors/error-11.svg": "1399d9a8832e9adc206a675683e02800",
"assets/assets/icons/logo.svg": "0b1beffe29fede3355082d45f0fcacdd",
"assets/assets/icons/outputs/icon-9.svg": "924ed5c4f19dec47e1d47946772d0a6b",
"assets/assets/icons/outputs/icon-8.svg": "db3fbc27c945e574458f0de7e6776656",
"assets/assets/icons/outputs/icon-10.svg": "4c488bb290e23a6ae1accf2195aa99e4",
"assets/assets/icons/outputs/icon-11.svg": "08953f2ae0b76e7bf179dda6fa6943aa",
"assets/assets/icons/outputs/icon-13.svg": "78278f95ebb89ffe74fdc76332bf9423",
"assets/assets/icons/outputs/icon-12.svg": "4fa4d0392fb6ef5c9ea712b6de1d1b54",
"assets/assets/icons/outputs/icon-16.svg": "a49066178f5d7e28cc7da4273c44c7e0",
"assets/assets/icons/outputs/icon-17.svg": "8a176dbe98e727b125b7bb3c91490d37",
"assets/assets/icons/outputs/icon-15.svg": "317385dc5c51b7e37d41a0241493f937",
"assets/assets/icons/outputs/icon-29.svg": "0d02d99fcee6a114e9f3a94ff6599cd2",
"assets/assets/icons/outputs/icon-28.svg": "fc8834fc032f04925765084e65b474aa",
"assets/assets/icons/outputs/icon-14.svg": "39c7f599a881e7028403535fdf908a76",
"assets/assets/icons/outputs/icon-19.svg": "2c68b012f1689b4a2788dd4ffc3d20e3",
"assets/assets/icons/outputs/icon-31.svg": "f4efbb6df2ac726024d427915ffebe82",
"assets/assets/icons/outputs/icon-25.svg": "1765cd7ecdfe97a95662dcbb8f2e2d96",
"assets/assets/icons/outputs/icon-24.svg": "0e9b4bb0174170b2150d0ff690ab452b",
"assets/assets/icons/outputs/icon-30.svg": "d92755f8fb1c40a8ebe5daf403a37845",
"assets/assets/icons/outputs/icon-18.svg": "c2a22454df5c2ba96c0911e09cd02659",
"assets/assets/icons/outputs/icon-26.svg": "38a6d5d1f4762758bced85bf411931b0",
"assets/assets/icons/outputs/icon-27.svg": "3293ed26afeccd8e81cd4ce6e4b7d39f",
"assets/assets/icons/outputs/icon-23.svg": "3402a9d0668bed6473bf5b63678f5db0",
"assets/assets/icons/outputs/icon-22.svg": "26d80b01df67bb847f0df1421b63b9dc",
"assets/assets/icons/outputs/icon-20.svg": "91bf3ac5592d480164e58b03680dedca",
"assets/assets/icons/outputs/icon-21.svg": "36d1375b3efada683af0928b85a83621",
"assets/assets/icons/outputs/icon-6.svg": "7a6b8ca64dc2940c5d4ea6d5a96b7d0d",
"assets/assets/icons/outputs/icon-7.svg": "0ecca88c1573556a066d9d9439cc2580",
"assets/assets/icons/outputs/icon-5.svg": "3ab84f6ecfc8bd96e084ae6008adfd28",
"assets/assets/icons/outputs/icon-4.svg": "8384cd81c3716f7587a7121c95837ef3",
"assets/assets/icons/outputs/description.txt": "192ab7979ff726f8104b8b2d09b12016",
"assets/assets/icons/outputs/icon-1.svg": "6e910c991356f3258f592e8668463015",
"assets/assets/icons/outputs/icon-3.svg": "013dabf908d28da4381c8cb1de45bdce",
"assets/assets/icons/outputs/icon-2.svg": "e344434cc35783886d5c0d0819c4b8e0",
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
