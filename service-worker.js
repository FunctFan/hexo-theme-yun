/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa9a5826fc337d0dce5615737e33a841"
  },
  {
    "url": "about.html",
    "revision": "511d5b858764409f00c13d8515341823"
  },
  {
    "url": "assets/css/0.styles.623a504e.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4ac7e6aa.js",
    "revision": "d6c13484a33328de4e8d998edf470c18"
  },
  {
    "url": "assets/js/11.c3e4ddde.js",
    "revision": "27d5717b362abf570772d0b9c9cb82d8"
  },
  {
    "url": "assets/js/12.6fe3e28e.js",
    "revision": "ff23733d2d4c6e4d274721921720b883"
  },
  {
    "url": "assets/js/13.39ab3729.js",
    "revision": "fe65f143e396b334a2d73c16a784b031"
  },
  {
    "url": "assets/js/14.0181497d.js",
    "revision": "6c6e7cbf84ea72e8906245ee86772b8b"
  },
  {
    "url": "assets/js/15.a28f5590.js",
    "revision": "df6815d3f65381cc5368d5e7f6c16c27"
  },
  {
    "url": "assets/js/16.a8ba3c3c.js",
    "revision": "11acd156a70b55b15c779c47806c6c16"
  },
  {
    "url": "assets/js/17.2a18e3b6.js",
    "revision": "c55a89f9d3ebd35a52e720b778800043"
  },
  {
    "url": "assets/js/18.27bfe1e0.js",
    "revision": "d100517e23ae95b0845d99dc171cb3a4"
  },
  {
    "url": "assets/js/19.8dc48b4d.js",
    "revision": "d973f9aadc61a7d8f05cc4b322d1b2f4"
  },
  {
    "url": "assets/js/2.44e74185.js",
    "revision": "7344fe82ead45cfa9bf9fc2d09cb61db"
  },
  {
    "url": "assets/js/20.08037231.js",
    "revision": "e3b64d19288f7c6cf26cd922e8540dc1"
  },
  {
    "url": "assets/js/21.b52c9a02.js",
    "revision": "644c5c49d3f37741b9f6b745b116acc1"
  },
  {
    "url": "assets/js/22.e9dd785f.js",
    "revision": "9105cfd0bd6b1a0071c3a1826cd07727"
  },
  {
    "url": "assets/js/23.ed1a57ff.js",
    "revision": "90ac9e60cce5725a67b321416770c8c2"
  },
  {
    "url": "assets/js/24.b59d7efe.js",
    "revision": "cc14a11210984d6dfc49a5755260a0fc"
  },
  {
    "url": "assets/js/25.85d4a4c1.js",
    "revision": "3d4fa8e04af999d2331dd452d0dfbca1"
  },
  {
    "url": "assets/js/26.5828c6a9.js",
    "revision": "d7c275d4faeba899a20acab6a80ea877"
  },
  {
    "url": "assets/js/27.95a7de2f.js",
    "revision": "6d372fbc4860b336fd981a3b353ab1f1"
  },
  {
    "url": "assets/js/28.e13a8845.js",
    "revision": "384c1dd937ef88bbe5782c2b2732fb59"
  },
  {
    "url": "assets/js/3.436784dd.js",
    "revision": "ffe013056db0131bdab1addcc0a44cc5"
  },
  {
    "url": "assets/js/4.52457088.js",
    "revision": "01c260725aa690600e836b899ba2a42d"
  },
  {
    "url": "assets/js/5.528cc182.js",
    "revision": "661148d63c46dac7a5d63a5caec1b8a8"
  },
  {
    "url": "assets/js/6.3a5ab5b1.js",
    "revision": "8e054c86cf36eedb76cf6b738f6ebd5d"
  },
  {
    "url": "assets/js/7.0b5cc8f7.js",
    "revision": "813570e04304b4e6d9c3da0494d9c8d2"
  },
  {
    "url": "assets/js/8.1dd2f140.js",
    "revision": "e6191205f84a41c36a22fd0d3a3b78c4"
  },
  {
    "url": "assets/js/9.b64e3f08.js",
    "revision": "e4ac076feb7f3252b841d4cc7d6ecca8"
  },
  {
    "url": "assets/js/app.e07740d5.js",
    "revision": "d9af1bdbe013818c499998b382958f7b"
  },
  {
    "url": "demo.html",
    "revision": "605e862ec30b5ab6de4515ef3611d869"
  },
  {
    "url": "en/about.html",
    "revision": "c004f18c46c8b2843554d722a79ff0bc"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "5833989776143a6cac756d7ca230043d"
  },
  {
    "url": "en/guide/config.html",
    "revision": "336797f5c5ebed2636fbdc9172e4b608"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "074761913ba032ec7d3dba9c7c41fa61"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "cb578afdcb5a07914cfad4ce0d5898fc"
  },
  {
    "url": "en/guide/index.html",
    "revision": "efd134c373d6f5816f7bb0174305dba0"
  },
  {
    "url": "en/guide/page.html",
    "revision": "5d59b1bd5904bbbc7a021690f6956fcf"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "134ede1282dfc02eb17626565a39ad02"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "a864609b8f81301e704745e837c6ece9"
  },
  {
    "url": "en/index.html",
    "revision": "55e0af30afdaf51238a7a6a03beb175f"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "bc80be0391a487860c4302c136be1cb1"
  },
  {
    "url": "guide/config.html",
    "revision": "cae15ea1c2346ec3c27d1173656b3017"
  },
  {
    "url": "guide/faq.html",
    "revision": "8d4dc413b4f10ada0acfab9191fd273a"
  },
  {
    "url": "guide/icon.html",
    "revision": "ef1e857f22c56c1119b7ba991e96ed96"
  },
  {
    "url": "guide/index.html",
    "revision": "e20d950d395d1ebab781e664fd08dabb"
  },
  {
    "url": "guide/page.html",
    "revision": "2ed0d9dae75c43f0e70c004c597c4bdd"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "a535e97bcae4033f2a7c4b6b51a47458"
  },
  {
    "url": "guide/Todo.html",
    "revision": "94160abac68db39267b9f4f982a391d7"
  },
  {
    "url": "index.html",
    "revision": "4b0c907b306b46d8dd0deb8c559e96d8"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
