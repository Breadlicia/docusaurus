"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},740:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Translate your site",l={unversionedId:"tutorial-extras/translate-your-site",id:"tutorial-extras/translate-your-site",isDocsHomePage:!1,title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/tutorial-extras/translate-your-site.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/translate-your-site",permalink:"/docusaurus/docs/tutorial-extras/translate-your-site",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-extras/translate-your-site.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage Docs Versions",permalink:"/docusaurus/docs/tutorial-extras/manage-docs-versions"}},s=[{value:"Configure i18n",id:"configure-i18n",children:[]},{value:"Translate a doc",id:"translate-a-doc",children:[]},{value:"Start your localized site",id:"start-your-localized-site",children:[]},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[]},{value:"Build your localized site",id:"build-your-localized-site",children:[]}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"translate-your-site"},"Translate your site"),(0,r.kt)("p",null,"Let's translate ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,r.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,r.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,r.kt)("p",null,"Translate ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,r.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,r.kt)("p",null,"Start your site on the French locale:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,r.kt)("p",null,"Your localized site is accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),(0,r.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,r.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,r.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:n(322).Z})),(0,r.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,r.kt)("p",null,"Build your site for a specific locale:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,r.kt)("p",null,"Or build your site to include all the locales at once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}d.isMDXComponent=!0},322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);