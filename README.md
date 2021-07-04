This repository demonstrates how importing from webextension-polyfill doesn't
seem to work with rollup when using the node resolution algorithm.

To reproduce, run `npm i` then `rollup -c`, should produce output below:

```
geoffreylitt extpay-test [master] $ rollup -c

index.js → output.js...
(!) `this` has been rewritten to `undefined`
https://rollupjs.org/guide/en/#error-this-is-undefined
node_modules/webextension-polyfill/dist/browser-polyfill.js
11:     global.browser = mod.exports;
12:   }
13: })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
                                                                                             ^
14:   /* webextension-polyfill - v0.7.0 - Tue Nov 10 2020 20:24:04 */
[!] Error: 'runtime' is not exported by node_modules/webextension-polyfill/dist/browser-polyfill.js, imported by node_modules/extpay/dist/ExtPay.module.js
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
node_modules/extpay/dist/ExtPay.module.js (1:21)
1: import { management, runtime, storage, windows } from 'webextension-polyfill';
```