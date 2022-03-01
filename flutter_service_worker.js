'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f35910fe9b4e2ba5fba3aa2d5e39efa6",
"assets/assets/1024.png": "225d6c5f091606cddfc9bcbefb939acf",
"assets/assets/Awards.jpg": "fbe3e4ab9e057d14571f00bbaf10f4e4",
"assets/assets/Book_donation.jpg": "7071004cc1ac98a186942b64ac019733",
"assets/assets/cake2.png": "507f119f83167bcf2e75b081727aaa2d",
"assets/assets/cake3.png": "0d10b787ae3a6616676289b182300abd",
"assets/assets/Canopy.jpg": "b53e270361c668ad59086d1a638bc3c6",
"assets/assets/facebook.png": "f21b03e7296df72cdace8f768511c2b7",
"assets/assets/final.png": "c08b76863eb87c947322dd624d5d9e56",
"assets/assets/forthestore.png": "e48493357803394bb379ca29875e8978",
"assets/assets/gmail.png": "dce2f2b0e50cb1dbb0246d152791cb46",
"assets/assets/Gmail2.png": "c97fd722d3efcbc7bf5046e19d0c4d8e",
"assets/assets/ic_launcher.zip": "3c6e206ca68175050f2fa8844efb8308",
"assets/assets/IMG_6657.jpg": "7d19490e5b6755d28ea8080e1b66b152",
"assets/assets/IMG_9338.JPG": "53397d58a5df58fcda925e4622f0ef52",
"assets/assets/Insta%2520temp%2520(1).jpg": "498d1ed422f6f75fd50b67157363b0f9",
"assets/assets/Insta%2520temp%2520(2).jpg": "788c03e94ee58428132bfb0c33d6f5cd",
"assets/assets/instagram.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/linkedin.png": "db258b08e73a8f7bd99442aa0901c794",
"assets/assets/logo%25202.mp4": "4efbc94e02286d7e52725c7c7e4a7189",
"assets/assets/logorotaract.png": "049755b2e300d43a0344f1eec082b97a",
"assets/assets/module%25202.pdf": "cba19179bfae0df1d42922ea5f1a6f91",
"assets/assets/NOTICES": "36955664d65089e1e5103329bc1930d5",
"assets/assets/plain-black-wallpaper.jpg": "5fe84f5b88c67c18096f298c01a78314",
"assets/assets/principal.jpg": "a468402f7fa6101064fd6377bfef20e5",
"assets/assets/rbse_logo.png": "f377c2c6f374e9c4465d0d07b4da2d86",
"assets/assets/roarlikeone.png": "42d8ecbc0a44d0572692ba87f9234bba",
"assets/assets/roarlikeone2.png": "14ab930cbc724446296966bfcd00c9f1",
"assets/assets/rotaryinternational.png": "428acbac11625687367b66387b88a9f4",
"assets/assets/rotary_international.png": "428acbac11625687367b66387b88a9f4",
"assets/assets/rotary_pres.jpg": "5f749b443c7b5a37f0f4292ee0e0a8c4",
"assets/assets/rotary_pres_latest.jpg": "858d28388092b68a70dcabb410a2efe0",
"assets/assets/Run_for_hunger(1).jpeg": "98da7862e55919a6861fb7bbb71b02f8",
"assets/assets/Run_for_hunger(2).jpeg": "fe8609c6b44cda415d84fffbebf1d46f",
"assets/assets/Run_for_hunger(3).jpg": "2d329fd4dc7a25535b23add82c42b798",
"assets/assets/tiger_logo.png": "97d26a0457f5a6feb8319156f325b82b",
"assets/assets/Title_logo.png": "c27174e6dfb4375e3d1b2f65523844ee",
"assets/assets/Treaking.jpg": "579a628c223be234c205dc20a87b0c60",
"assets/assets/Treaking1.jpg": "aa37116ba4cb33b372a19df10ba63131",
"assets/assets/twitter.png": "c228a51f52d262f60b78c320bb8fb782",
"assets/assets/Vanilla-Cupcakes.jpg": "a502ec3b8a6816e0de7224538e2a46b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5bf2b74c32f19616c2eb0706abdf4da2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "79b1df88e95192088f072fdd9a49d3a5",
"/": "79b1df88e95192088f072fdd9a49d3a5",
"main.dart.js": "6add1110ffaa21505336cea90595f41e",
"manifest.json": "b3d680905c3796ef8332354343daaee8",
"version.json": "ed673850e946427cfeceae51d7aff3b0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
