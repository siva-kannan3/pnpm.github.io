"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4374],{9613:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||p;return n?t.createElement(f,a(a({ref:r},s),{},{components:n})):t.createElement(f,a({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1406:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var t=n(9518),o=n(7344),p=(n(9496),n(9613)),a=["components"],i={id:"errors",title:"\u041a\u043e\u0434\u044b \u043e\u0448\u0438\u0431\u043e\u043a"},c=void 0,l={unversionedId:"errors",id:"version-6.x/errors",title:"\u041a\u043e\u0434\u044b \u043e\u0448\u0438\u0431\u043e\u043a",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/ru/errors",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"errors",title:"\u041a\u043e\u0434\u044b \u043e\u0448\u0438\u0431\u043e\u043a"},sidebar:"version-6.x/docs",previous:{title:"Feature Comparison",permalink:"/ru/feature-comparison"},next:{title:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f\u044b",permalink:"/ru/logos"}},s=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",children:[],level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",children:[],level:2}],u={toc:s};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,p.kt)("p",null,"\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u0441 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u043d\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u0430 \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443."),(0,p.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043d\u0430\u0440\u043e\u0447\u043d\u043e, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u0438 pnpm \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043d\u043e\u0432\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435."),(0,p.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,p.kt)("p",null,"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 workspace \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 workspace."),(0,p.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443 \u043f\u0430\u043a\u0435\u0442\u0430 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u0443\u043a\u0430\u0437\u0430\u043d ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,p.kt)("p",null,"\u041d\u043e \u0432 workspace \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),", \u0442\u0430\u043a \u0447\u0442\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443."),(0,p.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u0448\u0438\u0431\u043a\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,p.kt)("a",{parentName:"p",href:"/ru/workspaces#workspace-protocol-workspace"},"workspace protocol"),", \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0432 workspace. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u0438\u043b\u0438 \u0432 \u0440\u0443\u0447\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u0438\u043b\u0438 \u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."))}m.isMDXComponent=!0}}]);