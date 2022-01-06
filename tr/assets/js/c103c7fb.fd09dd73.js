"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4918],{210:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/tr/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/tr","source":"@site/i18n/tr/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"The year 2021 for pnpm","description":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 Aral\u0131k 2021","tags":[],"readingTime":2.515,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"nextItem":{"title":"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri","permalink":"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.\\n\\n\x3c!--truncate--\x3e\\n\\n## Usage\\n\\n### Download Stats\\n\\nMy goal this year was to beat Bower by the number of downloads. We were able to achieve this goal [in November](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm was downloaded about [3 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) in 2021 than in 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nThese stats don\'t even measure all the different ways that pnpm may be installed! They only measure the downloads of the [pnpm npm package](https://www.npmjs.com/package/pnpm). This year we also added compiled binary versions of pnpm, which are shipped differently.\\n\\n:::\\n\\n### Docs visits\\n\\nWe collect some unpersonalized stats from our docs using Google Analytics. In 2021, sometimes we had more than 2,000 unique visitors a week.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nMost of our users are from the United States and China.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub stars\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received +5,000 stars this year.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### New users\\n\\nOur biggest new user this year is [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (the company behind TikTok).\\n\\nAlso, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* and [others](https://pnpm.io/workspaces#usage-examples)\\n\\nSome switched because they like how efficient, fast, and beautiful pnpm is:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Feature Highlights\\n\\n### New lockfile format (since [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nOne of the first and most important changes this year was the new `pnpm-lock.yaml` format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts.\\n\\n### Managing Node.js versions (since [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nWe shipped a new command (`pnpm env`) that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta.\\n\\nAlso, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system.\\n\\n### Injecting local dependencies (since [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nYou may \\"inject\\" a local dependency. By default, local dependencies are symlinked to `node_modules` but with this new feature you may instruct pnpm to hard link the files of the package instead.\\n\\n### Improved reporting of peer dependency issues (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nPeer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure.\\n\\n## The Competition\\n\\n### Yarn\\n\\nYarn added a pnpm linker in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). So Yarn can create a similar node-modules directory structure to the one that pnpm creates.\\n\\nAlso, the Yarn team plans to implement a content-addressable storage to be more disk space efficient.\\n\\n### npm\\n\\nThe npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### Others\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) written in Zig and [Volt](https://github.com/voltpkg/volt) written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet.\\n\\n## Future Plans\\n\\nFaster, better, best."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/tr","source":"@site/i18n/tr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri","description":"nodemodules dizini olu\u015fturman\u0131n bir\xe7ok yolu vard\u0131r. Amac\u0131n\u0131z en kurall\u0131 olan\u0131 olu\u015fturmak olmal\u0131d\u0131r, ancak bu m\xfcmk\xfcn de\u011filse, serbest bir nodemodules yapmak i\xe7in se\xe7enekler de vard\u0131r.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 Ekim 2020","tags":[],"readingTime":1.38,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"The year 2021 for pnpm","permalink":"/tr/blog/2021/12/29/yearly-update"},"nextItem":{"title":"Klasik node_modules yap\u0131s\u0131 art\u0131k tek y\xf6ntem de\u011fil","permalink":"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"node_modules dizini olu\u015fturman\u0131n bir\xe7ok yolu vard\u0131r. Amac\u0131n\u0131z en kurall\u0131 olan\u0131 olu\u015fturmak olmal\u0131d\u0131r, ancak bu m\xfcmk\xfcn de\u011filse, serbest bir node_modules yapmak i\xe7in se\xe7enekler de vard\u0131r.\\n\\n\x3c!--truncate--\x3e\\n\\n## Varsay\u0131lan kurulum\\n\\nVarsay\u0131lan olarak pnpm v5, yar\u0131 kurall\u0131 bir node_modules olu\u015fturur. Yar\u0131 kurall\u0131 (birka\xe7 istisna d\u0131\u015f\u0131nda) ba\u011f\u0131ml\u0131l\u0131k olarak `package.json`\'a eklenen paketleri gerektirebilece\u011fi anlam\u0131na gelir. Buna ra\u011fmen, ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131z herhangi bir pakete eri\u015febilir olacakt\u0131r.\\n\\nVarsay\u0131lan yap\u0131land\u0131rma \u015f\xf6yle g\xf6r\xfcn\xfcr:\\n\\n```ini\\n; T\xfcm paketler, node_modules/.pnpm/node_modules\'a \xe7\u0131kar\u0131l\u0131r\\nhoist-pattern[]=*\\n\\n; TypeScript\'e uyumlanmak i\xe7in t\xfcm type\'lar root\'a \xe7\u0131kar\u0131l\u0131r\\npublic-hoist-pattern[]=*types*\\n\\n; ESLint ile ilgili t\xfcm paketler de root\'a \xe7\u0131kar\u0131l\u0131r\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Tak-\xc7al\u0131\u015ft\u0131r. En kurall\u0131 yap\u0131land\u0131rma\\n\\npnpm, v5.9 \'dan bu yana [Yarn\'\u0131n Plug\'n\'Play](https://yarnpkg.com/features/pnp) \'ini destekler. PnP ile hem uygulaman\u0131z hem de uygulaman\u0131z\u0131n ba\u011f\u0131ml\u0131l\u0131klar\u0131 yaln\u0131zca belirtilen ba\u011f\u0131ml\u0131l\u0131klara eri\u015febilecektir. Bu, `vin\xe7=yanl\u0131\u015f` ayarlamadan daha da kuralc\u0131d\u0131r, \xe7\xfcnk\xfc bir monorepo i\xe7inde uygulaman\u0131z root projenin ba\u011f\u0131ml\u0131l\u0131klar\u0131na bile eri\u015femez.\\n\\nPlug\'n\'Play\'i kullanmak i\xe7in \u015fu ayarlar\u0131 yap\u0131n:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## Kurall\u0131, geleneksel mod\xfcl dizini\\n\\nPnP\'yi kullanmaya hen\xfcz haz\u0131r de\u011filseniz bile, hala kurall\u0131 olabilir ve \xe7ekme (hoist) yap\u0131land\u0131rmas\u0131n\u0131 false olarak ayarlayarak paketlerin yaln\u0131zca kendi ba\u011f\u0131ml\u0131l\u0131klar\u0131na eri\u015fmesine izin verebilirsiniz:\\n\\n```ini\\nhoist=false\\n```\\n\\nAncak, ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131z\u0131n baz\u0131lar\u0131 ba\u011f\u0131ml\u0131l\u0131klar\u0131 olmayan paketlere eri\u015fmeye \xe7al\u0131\u015f\u0131yorsa, iki se\xe7ene\u011finiz vard\u0131r:\\n\\n1. Paketteki manifestoya eksik ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 eklemek i\xe7in `pnpmfile.js` olu\u015fturun ve [hook](/pnpmfile) kullan\u0131n.\\n\\n2. `hoist-pattern` ayar\u0131na bir kal\u0131p ekleyin. \xd6rne\u011fin, bulunamayan mod\xfcl `babel-core` ise, a\u015fa\u011f\u0131daki ayar\u0131 `.npmrc`\'ye ekleyin:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## En k\xf6t\xfc ihtimalle - root\'u yukar\u0131 \xe7ekme\\n\\nBaz\u0131 ara\xe7lar, her \u015feyi sanal kay\u0131t alan\u0131 (virtual store) \'n\u0131n root\'una ve baz\u0131s\u0131n\u0131 da direkt root\'a ta\u015f\u0131yan varsay\u0131lan pnpm yap\u0131land\u0131rmas\u0131yla bile \xe7al\u0131\u015fmayabilir. Bu durumda, her \u015feyi ya da bir ba\u011f\u0131ml\u0131l\u0131k alt k\xfcmesini, modules dizininin root\'una \xe7ekebilirsiniz.\\n\\nHer \u015feyi node_modules\'\u0131n k\xf6k dizini(root)\'ne kald\u0131rmak:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nYaln\u0131zca bir kal\u0131pla e\u015fle\u015fen paketleri yukar\u0131 \xe7ekin:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/tr","source":"@site/i18n/tr/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"Klasik node_modules yap\u0131s\u0131 art\u0131k tek y\xf6ntem de\u011fil","description":"Yeni pnpm kullan\u0131c\u0131lar\u0131 s\u0131k s\u0131k bana pnpm\'in yaratt\u0131\u011f\u0131 node_modules\'\xfcn garip yap\u0131s\u0131n\u0131 soruyor. Neden d\xfcz yap\u0131da de\u011fil? T\xfcm alt ba\u011f\u0131ml\u0131l\u0131klar nerede?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 May\u0131s 2020","tags":[],"readingTime":2.205,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"pnpm ile Node Modules yap\u0131land\u0131rma se\xe7enekleri","permalink":"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Yeni pnpm kullan\u0131c\u0131lar\u0131 s\u0131k s\u0131k bana pnpm\'in yaratt\u0131\u011f\u0131 `node_modules`\'\xfcn garip yap\u0131s\u0131n\u0131 soruyor. Neden d\xfcz yap\u0131da de\u011fil? T\xfcm alt ba\u011f\u0131ml\u0131l\u0131klar nerede?\\n\\n\x3c!--truncate--\x3e\\n\\n> Makalenin okuyucular\u0131n\u0131n npm ve Yarn taraf\u0131ndan olu\u015fturulan `node_modules` yap\u0131s\u0131na zaten a\u015fina oldu\u011funu varsayaca\u011f\u0131m. Npm 3\'\xfcn neden v3\'te `node_modules`\'\xfcn d\xfcz yap\u0131s\u0131n\u0131 kullanmaya ba\u015flamas\u0131 gerekti\u011fini anlayamad\u0131ysan\u0131z, baz\u0131 eski kaynaklar\u0131 inceleyebilirsiniz: [Neden pnpm kullanmal\u0131y\u0131z?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\n\xd6yleyse neden pnpm\'in `node_modules`\'\xfc ola\u011fand\u0131\u015f\u0131? \u0130ki dizin olu\u015ftural\u0131m ve birinde `npm add express`, di\u011ferinde ise `pnpm add express` komutlar\u0131n\u0131 \xe7al\u0131\u015ft\u0131ral\u0131m. \u0130\u015fte ilk dizinin `node_modules`\'\xfcnden elde etti\u011finiz klas\xf6r yap\u0131s\u0131:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nKlas\xf6r yap\u0131s\u0131n\u0131n tamam\u0131n\u0131 [burada](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules) g\xf6rebilirsiniz.\\n\\nVe bu ise, pnpm taraf\u0131ndan olu\u015fturulan `node_modules`:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\n[Buradan](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules) kontrol edebilirsiniz.\\n\\nPeki, t\xfcm bu ba\u011f\u0131ml\u0131l\u0131klar nerede? G\xf6r\xfcld\xfc\u011f\xfc \xfczere, `node_modules`\'te `.pnpm` ad\u0131nda yaln\u0131zca bir klas\xf6r ve `express` ad\u0131nda bir sembolik ba\u011flant\u0131 var. Eh, biz zaten sadece `express` y\xfckledik, bu y\xfczden uygulaman\u0131z\u0131n eri\u015fmesi gereken tek paket bu\\n\\n> pnpm\'in kat\u0131 kurall\u0131l\u0131\u011f\u0131n\u0131n neden iyi bir \u015fey oldu\u011fu hakk\u0131nda [ daha fazla bilgi ](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308) edinin\\n\\nBakal\u0131m, `express` i\xe7inde neler var:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express`\'in `node_modules`\'\xfc yok mu? `express`\'in t\xfcm ba\u011f\u0131ml\u0131l\u0131klar\u0131 nerede?\\n\\n\u0130\u015fin p\xfcf noktas\u0131, `express`\'in sadece bir sembolik ba\u011flant\u0131 olmas\u0131d\u0131r. Node.js ba\u011f\u0131ml\u0131l\u0131klar\u0131 \xe7\xf6zd\xfc\u011f\xfcnde, onlar\u0131n ger\xe7ek konumlar\u0131n\u0131 kullan\u0131r, bu nedenle sembolik ba\u011flant\u0131lar\u0131 korumaz. Ancak, `express`\'in ger\xe7ek konumu nerede diye sorabilirsiniz?\\n\\n\u0130\u015fte burada: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nTamam, \u015fimdi `.pnpm/` klas\xf6r\xfcn\xfcn amac\u0131n\u0131 biliyoruz. `.pnpm/` t\xfcm paketleri d\xfcz bir klas\xf6r yap\u0131s\u0131nda saklar, b\xf6ylece her paket bu modelle adland\u0131r\u0131lan bir klas\xf6rde bulunabilir:\\n\\n```text\\n.pnpm/<paket-ad\u0131>@<versiyon>/node_modules/<paket-ad\u0131>\\n```\\n\\nBiz buna sanal saklama dizini diyoruz.\\n\\nBu d\xfcz yap\u0131, npm v2 taraf\u0131ndan olu\u015fturulan `node_modules`\'\xfcn neden oldu\u011fu i\xe7 i\xe7e dosya yolu sorunlar\u0131n\u0131 \xf6nler, ancak npm v3,4,5,6 veya Yarn v1 taraf\u0131ndan olu\u015fturulan d\xfcz `node_modules` yap\u0131s\u0131na gerek duymadan paketleri korur.\\n\\n\u015eimdi, `express` \'in ger\xe7ek konumuna bakal\u0131m:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\nBu bir doland\u0131r\u0131c\u0131l\u0131k m\u0131? Hala `node_modules` yok! pnpm \' nin `node_modules` yap\u0131s\u0131n\u0131n ikinci hilesi, paketlerin ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131n, ba\u011f\u0131ml\u0131 paketin ger\xe7ek konumlar\u0131n\u0131n ayn\u0131 dizin d\xfczeyinde olmas\u0131d\u0131r. Dolay\u0131s\u0131yla `express`\'in ba\u011f\u0131ml\u0131l\u0131klar\u0131 `.pnpm/express@4.17.1/node_modules/express/node_modules/`\'\xfcn i\xe7erisinde de\u011fil, [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules) i\xe7erisindedir:\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\n`express`\'in t\xfcm ba\u011f\u0131ml\u0131l\u0131klar\u0131, `node_modules/.pnpm/` i\xe7indeki uygun dizinlere sembolik ba\u011flant\u0131lard\u0131r. `express`\'in ba\u011f\u0131ml\u0131l\u0131klar\u0131n\u0131 bir seviye yukar\u0131 yerle\u015ftirmek dairesel sembolik ba\u011flant\u0131lardan ka\xe7\u0131nmay\u0131 sa\u011flar.\\n\\nG\xf6rd\xfc\u011f\xfcn\xfcz gibi, pnpm\'in `node_modules` yap\u0131s\u0131 ilk bak\u0131\u015fta ola\u011fand\u0131\u015f\u0131 g\xf6r\xfcnse de:\\n\\n1. Tamam\u0131yla Node.js uyumlu\\n2. paketler ba\u011f\u0131ml\u0131l\u0131klar\u0131yla g\xfczel bir \u015fekilde grupland\u0131r\u0131lm\u0131\u015ft\u0131r\\n\\nE\u015f ba\u011f\u0131ml\u0131l\u0131klar\u0131 olan paketler i\xe7in yap\u0131 [biraz daha karma\u015f\u0131k](/how-peers-are-resolved), ancak fikir ayn\u0131d\u0131r: d\xfcz bir dizin yap\u0131s\u0131yla i\xe7 i\xe7e yerle\u015ftirme olu\u015fturmak i\xe7in sembolik ba\u011flant\u0131lar kullanmakt\u0131r."}]}')}}]);