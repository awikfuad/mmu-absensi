'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3ed3c195cdbe1d92c8c34785242b7204",
".git/config": "d5536a38668b0bd2e850b4f058100401",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3956afd5971405412690e70c41b780bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af10980eab2c0f0eac5913ab5888ae11",
".git/logs/refs/heads/main": "af10980eab2c0f0eac5913ab5888ae11",
".git/logs/refs/remotes/origin/HEAD": "befcbf84105c8fdf12fbd3d01ea29f75",
".git/logs/refs/remotes/origin/main": "2abb334a91a3b4ae166d23b0ff6c43e4",
".git/objects/00/98aeb48d5e2033a635cf8f5232a88c615599b4": "322a420ce7b90ad7cdf51b0c055a6edd",
".git/objects/01/bf6bf9d2a11059d060d4a954a1b777c92ed50f": "cb941efd94f097227e3813baec12855f",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0e/9e942d8470d665563da922ffa0335d63aeb5b2": "9db968baf3b81d24b588c77f9747c99d",
".git/objects/10/3cc16e2ec6f25c80f8fa125e89bb900436d877": "4df9479eebf068cad0d01d0748addde6",
".git/objects/11/e0ecd07a4f73aa0ada9305b092c190149d56b4": "4c86d758b0dbd6d7d144657a794ca6dc",
".git/objects/1c/808e4b1cf65303decedc24c72b1e96fbbb72eb": "c290b8bce26cee25a94b24fae877ff38",
".git/objects/23/7ae03a57853843fa13aec1a5d48300a0e678c7": "901f1ba77930899b9f4cd84e0ee7dad9",
".git/objects/24/a1c735d8c06c5500b54b51df640f64ad5ef8a2": "4019fe3458b0e72cb0d3022d777a3322",
".git/objects/26/17ef7b4f49c0731f611c7253098e79c04191c0": "929215f3328d799baf6146749c9e80c8",
".git/objects/28/4efe5c3a5d1dcbf56bc7108406404ae3c118ad": "d759bee83d26febac8c870c2ab150851",
".git/objects/28/d3a95ec5010d73cb06ec87a5632766d3c30f9b": "de084549220527224ee4b807c8e6e2d7",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/44/e069873edb59909eb6dd656b435ab7b67f1cf8": "ac414f7ec2ff9f055b3da50aef5aa062",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a64fe409be5cbcce979f9edacb75a5015ea7b0": "91af4010db30a1372f62823d58aa958b",
".git/objects/47/af5083f95874c8eb1126c23c806a8203e092c4": "beb3805a07884c6020cd562077dcf8d3",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/be7ee70600de214e1d591f14a2b0eda53a046d": "e79d3959c267cfa2e43b42d2f1a1b5c8",
".git/objects/52/38e87a42603051f14cc07089e3914a6dbf5753": "2e22550489ab3da8ee4971f6b1df425b",
".git/objects/54/6ec1bcbb9d5c7c8794e1af67094ac170936d28": "9363188742b5303d5ba585df7cff2624",
".git/objects/5e/32bb57ac27d382f23449ab8535bdc34e116f8c": "50649631fef77be34ee05c1dbb2864fb",
".git/objects/60/d39be6b1bb63689646e51dc024671ccc2149dc": "ab6162561832f81bf677467ab0975839",
".git/objects/64/29096ea4e82ea2c29a3196483a8cd7a5e2450d": "f28ec3f0f5eb33c4c26c550af2e357f6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/569c6079823961f994dfdf440057253bfe4c76": "27ddb621d264deebee623dfe8ff5cd9d",
".git/objects/7a/28157e56f09aba048cef41c81a2db14cd410d6": "23aff58d89c2cc01a57a9a6bc2993c5d",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/ca28ab4779889588b5d1a1d5e654a83d68199d": "71dee4d06e67368b6e72aa1129706dbc",
".git/objects/80/8e28008abf9e5db156e8a242a14d32a762b337": "413a9bf2a6cd29243337f6ac705f2ed1",
".git/objects/81/4523c2cd951cf4080510cb26335c1d2369b402": "b9024b9d8591e09097d10a81e5efee76",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8a/6e9de47d0d60ba0acda05c8530167f89f10403": "d63944a1a88e908501a214250ea70bb5",
".git/objects/8b/7206fb72b69f7120b54ac6f73b25eed690d07b": "2ada1ab7547dcbe09615cdcf2cb01ba7",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/d8f9cd88015ab0e2798e5456b89e8daaef33c6": "c120be1770af718b64c50a8dcbb2214a",
".git/objects/98/4f50aa16fb2dcc0a4e446be796aa6d38a2aab2": "99706fc900ef5638a28efc665a248e62",
".git/objects/a0/e9c514b444ceda5c03d90fff4514614fb655a9": "61f412acb6d51791922bed34598724aa",
".git/objects/a6/1abea831538020a331255fbeb0f95a37b944bd": "11ed1241cb3158757a35d625eaa68a42",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/1636f110b9200a76456168f8e7f6472f9de0f4": "2cf8e0d7ad97959893fffdc13a8974c6",
".git/objects/ab/39ffde42830dcf1787a04133a4d8082a8b7322": "b9e473d3f0d91eac04368c661f551f0e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/f8fc083d0c928b53607f88c08db163800e9640": "e5438d493d6d3f408177999ae2fe847b",
".git/objects/b5/ea467d56e02eeb6f66d3fa5e611e10a9fe2049": "268ca49b214de5427d1b567a3f3737b7",
".git/objects/b8/a0990b0fe2dbab1a6ae12f558e08315ea802ce": "38a516659b07b3d33fd4554f16b9e1c6",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/6cc4aa5ad33346834fba89555404fc9276d102": "3c7db02b75a713e53cf5f6a97ec1d1c5",
".git/objects/bc/b41b4934c98686f5843f47b94ae6d52766fe6f": "58b845e4c64883b051f4ac5a744d2daa",
".git/objects/bf/6f7425e28881fb39a2e9f09698a9bfc6fffa35": "972d9dc3f95dd47366b7b703d6dc8ce3",
".git/objects/c2/899f81ec8cf8a7de223c6203e701d7d668025c": "cae67d82b9febb460861070da09f5472",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/62c5d2f2e1d3f632c43edfea1e15637b5c2436": "963fa985bc7dd7c117354587b01848db",
".git/objects/ca/570b30783d786d54ad7374fbbcf99ef539ed34": "bc4e0db188da36bd7d4a3bd2e6827562",
".git/objects/d4/15244affb645d2a9be7f4099ae77cfce62e8c8": "3018035356297a0c7564ce2396fa7656",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/4504eaca17379ca1a478deb05f4b14cd8324bb": "fd6a20c3d27295fde80b79aad6b38b43",
".git/objects/dd/c8454024f30fc55f874d04c77dcd3c1dc63d5c": "0a4371a23ef501efa17d9a79e3a4bb65",
".git/objects/e0/4a485d7ba2100eea2497745ac439b1ff91f84a": "8094d9405806114c50bf6d6b8312f89f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/77bfeac2a60684f9e7e5122bc12ba0112ef835": "942c289c86ccfd5a838e91b13b30bc46",
".git/objects/ed/d3a910c30d0b23dde31da477fa6aaa912054e9": "775a989b792b52c1d7c193547070db47",
".git/objects/f2/1e3faf5a57d0e37d55a75d735e6aa7ea37da2e": "44f7d92bea01c9a1dee49c0026624b2c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/17c1c8c0b6c6dc4c24eabeb076548b53d77bff": "945ec3d85c2d40059115c9eeaef69ba0",
".git/objects/fc/6dbff85a41c058461205ad6e133479a81bb30c": "0db996541db02b07acd083b3f6a3bd8a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/c90901752632e9e9f9be8ee0be61d52f1bd146": "adb4cfc430d82cd7a14127183331be4d",
".git/refs/heads/main": "3b8ea243af42e5ef24c190774d4fa5bd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3b8ea243af42e5ef24c190774d4fa5bd",
"assets/AssetManifest.bin": "3bb71a3469efc903677e6826020bbd99",
"assets/AssetManifest.bin.json": "2f3174b607dd9ec02eb880f577021df4",
"assets/assets/images/mmu.png": "ae79f232ef3b6b71831bbbc87be0c88d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fe9f61543036ed9454bc1c6808cd9380",
"assets/NOTICES": "a4da4607a3ac3980b9ee9fa23499596a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "685014e0af0d3ce594e0420743ed63a8",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2a785f68819cfd9c2ba14014c462b014",
"icons/Icon-192.png": "3531c9d53fc751fa238d25dad423f985",
"icons/Icon-512.png": "ca84b23280d43589b55710ff58d0b551",
"icons/Icon-maskable-192.png": "3531c9d53fc751fa238d25dad423f985",
"icons/Icon-maskable-512.png": "ca84b23280d43589b55710ff58d0b551",
"icons/icon.png": "77b674f6995e3ea7435749dcf94e5f79",
"index.html": "df603e68be67eb1d97aca5bb8dad2f95",
"/": "df603e68be67eb1d97aca5bb8dad2f95",
"main.dart.js": "4f7a24ad4efc731417285ebbb7ae2529",
"manifest.json": "fb0587067cac0a8e6c12d2ca0551a91f",
"version.json": "40b19a64e53bb65ffa4c9fcab7ae7fc3"};
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
