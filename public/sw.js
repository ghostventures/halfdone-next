if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,i,n)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const s={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return a;case"module":return s;default:return e(c)}})).then(e=>{const c=n(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/3fe41a66910f34a4d1b1c3aab6e5911bfa9515ce.78d96c91b84fc75541c9.js",revision:"7f37e80fc48639b0ce379c9fb5c22b02"},{url:"/_next/static/chunks/6a69c461.e05b9cac0aab3e16d0b1.js",revision:"ab8a30273db0b805aedfc8f8566c52dd"},{url:"/_next/static/chunks/commons.c55c870668f78f2fe53f.js",revision:"c3584bbefa29ef7769041401230766b1"},{url:"/_next/static/chunks/framework.e84fa698c7ee940652bd.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/298c8e5a424cd7b7d351.css",revision:"fd96160593dfbcd9775677bb9ed4e0aa"},{url:"/_next/static/css/fe9daaec4de5ed035111.css",revision:"0e349edc4ed3d68faabb3acdb012c42b"},{url:"/_next/static/gr8b9V942BxNl8ZGJYCxB/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/gr8b9V942BxNl8ZGJYCxB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/gr8b9V942BxNl8ZGJYCxB/pages/_app.js",revision:"0175a3fc29937171d3f8a31939ccdcbd"},{url:"/_next/static/gr8b9V942BxNl8ZGJYCxB/pages/_error.js",revision:"7cc041a962a680c76f6a88fdbd12ab73"},{url:"/_next/static/gr8b9V942BxNl8ZGJYCxB/pages/index.js",revision:"45720301789f72e6c63b03da4cb92e69"},{url:"/_next/static/media/fa-brands-400.1776173e3b1af55eb4554403f3454ed8.ttf",revision:"085b1dd8427dbeff10bd55410915a3f6"},{url:"/_next/static/media/fa-brands-400.28d8b8fcc41c3b7134ff39117823cc89.woff",revision:"dc0bd022735ed218df547742a1b2f172"},{url:"/_next/static/media/fa-brands-400.37913cdf7cb0571dfac04a74caad2087.woff2",revision:"cac68c831145804808381a7032fdc7c2"},{url:"/_next/static/media/fa-brands-400.63b566233f163d538ccefed7c4e87e44.svg",revision:"ccfdb9dc442be0c629d331e94497428b"},{url:"/_next/static/media/fa-brands-400.bfcc3384b8a317dc5de33e70117173e2.eot",revision:"0fabb6606be4c45acfeedd115d0caca4"},{url:"/_next/static/media/fa-regular-400.0c6f12b9eaa2ad444a6be2f133aa1cec.eot",revision:"ad3a7c0d77e09602f4ab73db3660ffd8"},{url:"/_next/static/media/fa-regular-400.1b536b782d09dd59dda8eaccc0ea5297.svg",revision:"e75dfd904d366a2560c63c23cfc98ef8"},{url:"/_next/static/media/fa-regular-400.c3c2ab4f63b8d9973c78816fefa1408e.woff2",revision:"3a3398a6ef60fc64eacf45665958342e"},{url:"/_next/static/media/fa-regular-400.c9c57c0f1f4eb34dbf575201caf2061f.ttf",revision:"1a78af4105d4d56e6c34f76dc70bf1bc"},{url:"/_next/static/media/fa-regular-400.fcaa6c135683a3fa1b505fa30b01c8e9.woff",revision:"05b53beb21e3ef13d28244545977152d"},{url:"/_next/static/media/fa-solid-900.22aa6d4357cf74671bc40dbb9bc36d79.woff",revision:"ee09ad7553b8ad3d81150d609d5341a0"},{url:"/_next/static/media/fa-solid-900.3e2bc2ffd29f01066d23733ca81d2bac.svg",revision:"03ba7cb710104df27f1c9c46d64bee4e"},{url:"/_next/static/media/fa-solid-900.4055b0575d40bfb3c7e89c7d6b5e959d.woff2",revision:"c500da19d776384ba69573ae6fe274e7"},{url:"/_next/static/media/fa-solid-900.a480ec972cb6bce3053367cb26d11f42.ttf",revision:"781e85bb50c8e8301c30de56b31b1f04"},{url:"/_next/static/media/fa-solid-900.dfaa060a451d978c25655eb19bd949e9.eot",revision:"89bd2e38475e441a5cd70f663f921d61"},{url:"/_next/static/runtime/main-c690d1a1a735be5eb34d.js",revision:"cecbae3574bd4e0ae135fe7d8375501d"},{url:"/_next/static/runtime/polyfills-956d2d13be906d60c371.js",revision:"2b337e2454b7df364304c4573afeb181"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/fonts/fonts.d.ts",revision:"076090691d2f9f7bec993e47e9b9b2c5"},{url:"/fonts/montserrat/Montserrat-VariableFont_wght.ttf",revision:"a421c63940b75d220e94a10b2744368d"},{url:"/fonts/montserrat/OFL.txt",revision:"5da468cc0e208e63aa009460017f214a"},{url:"/fonts/quicksand/OFL.txt",revision:"cabc2d83f0db00f1c4d8ab4f5cd8a34d"},{url:"/fonts/quicksand/Quicksand-VariableFont_wght.ttf",revision:"f9baef8ac0d836e6486419e282e42336"},{url:"/fonts/quicksand/README.txt",revision:"006755f08384ca05f6f496ce255fe558"},{url:"/icons/android-icon-144x144.png",revision:"f4263f5b359e41ebcdb822cdcb7b4c49"},{url:"/icons/android-icon-192x192.png",revision:"49d7a56f254cd3913f77b0655b8c6262"},{url:"/icons/android-icon-36x36.png",revision:"66f5f8e2281fce7d6dcd919c43088118"},{url:"/icons/android-icon-48x48.png",revision:"2aa65e56d2386776c814e795dfd929ce"},{url:"/icons/android-icon-72x72.png",revision:"ec107bbfee65ddda37e73a2c02698c64"},{url:"/icons/android-icon-96x96.png",revision:"36b0e9c68e1a90b4dd9fcd9abaa93bc8"},{url:"/icons/apple-icon-114x114.png",revision:"76af384fd005f819be2d852c687321d2"},{url:"/icons/apple-icon-120x120.png",revision:"b3364a316bcbd21b39fa2d5de057727b"},{url:"/icons/apple-icon-144x144.png",revision:"f4263f5b359e41ebcdb822cdcb7b4c49"},{url:"/icons/apple-icon-152x152.png",revision:"70cc1d4a26c5bef2693182bd33374c01"},{url:"/icons/apple-icon-180x180.png",revision:"7cabfff7e9ace8b26a8c495ed9aa8c14"},{url:"/icons/apple-icon-57x57.png",revision:"449692c1ca4e88d665b012ca2bb7717a"},{url:"/icons/apple-icon-60x60.png",revision:"e3daad13a285b2b00dad714b9600b824"},{url:"/icons/apple-icon-72x72.png",revision:"ec107bbfee65ddda37e73a2c02698c64"},{url:"/icons/apple-icon-76x76.png",revision:"e7935cdce643cbcb111d25cd243643ab"},{url:"/icons/apple-icon-precomposed.png",revision:"9d669311a6e6b5940337bebf72594990"},{url:"/icons/apple-icon.png",revision:"9d669311a6e6b5940337bebf72594990"},{url:"/icons/favicon-16x16.png",revision:"6c45ce8f0e3d4a3b3da7f55628ffc3e9"},{url:"/icons/favicon-32x32.png",revision:"29b03207984ab29ff00213840c5acd23"},{url:"/icons/favicon-96x96.png",revision:"36b0e9c68e1a90b4dd9fcd9abaa93bc8"},{url:"/icons/favicon.ico",revision:"41c69325916ad82c8842c80ae08158cf"},{url:"/icons/favicon.svg",revision:"20ea89cb00779bc1e16d18c5a6ef00a8"},{url:"/icons/ms-icon-144x144.png",revision:"f4263f5b359e41ebcdb822cdcb7b4c49"},{url:"/icons/ms-icon-150x150.png",revision:"75dfba2cbbeab023d0fb9513d7e9c06d"},{url:"/icons/ms-icon-310x310.png",revision:"46a395f26df11f856a9c485037d2fecb"},{url:"/icons/ms-icon-70x70.png",revision:"33e1aabcf2c83b8e995448671a4a265a"},{url:"/images/siteImg.jpg",revision:"f0249a21032a8c39600d5fedd91611df"},{url:"/manifest.json",revision:"e08aea37e4ec5ae9780a68c5af5eaa3a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
