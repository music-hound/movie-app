if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>n(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(s(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"725e0890ec316141128c754c049396fc"},{url:"assets/index-CHTe48fu.js",revision:null},{url:"index.html",revision:"2188042f4104747f999d070474ee3805"},{url:"registerSW.js",revision:"78be482cce61748bd796a65e4024d290"},{url:"manifest.webmanifest",revision:"178ea040b8665c041223b5f9b698fe15"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
