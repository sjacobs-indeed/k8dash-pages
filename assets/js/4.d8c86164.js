(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(t,e,a){},309:function(t,e,a){"use strict";a.d(e,"b",(function(){return h})),a.d(e,"a",(function(){return f}));a(23),a(93),a(168),a(95),a(169),a(66),a(44),a(307),a(67),a(313),a(94);var i=/#.*$/,n=/\.(md|html)$/,s=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(n,"")}function l(t){return r.test(t)}function u(t){if(l(t))return t;var e=t.match(i),a=e?e[0]:"",n=o(t);return s.test(n)?t:n+".html"+a}function c(t,e,a){if(l(e))return{type:"external",path:e};a&&(e=function(t,e,a){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var n=e.split("/");a&&n[n.length-1]||n.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?n.pop():"."!==o&&n.push(o)}""!==n[0]&&n.unshift("");return n.join("/")}(e,a));for(var i=o(e),n=0;n<t.length;n++)if(o(t[n].regularPath)===i)return Object.assign({},t[n],{type:"page",path:u(t[n].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,a,i){var n=a.pages,s=a.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return d(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var i;return{}}(e,o),u=l.base,h=l.config;return"auto"===h?d(t):h?h.map((function(t){return function t(e,a,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return c(a,e,i);if(Array.isArray(e))return Object.assign(c(a,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(c(a,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,a,i,n+1)})),collapsable:!1!==e.collapsable}}(t,n,u)})):[]}return[]}function d(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},310:function(t,e,a){},311:function(t,e,a){},314:function(t,e,a){"use strict";a(174),a(66),a(167),a(96),a(317),a(44),a(97),a(307),a(67);var i=a(41),n=a(344),s=a(309),r={name:"NavLinks",components:{NavLink:a(312).a,DropdownLink:n.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var a=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var r,o=e[i],l=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?r=a:(r=a.replace(t.$localeConfig.path,i),n.some((function(t){return t.path===r}))||(r=i)),{text:l,link:r}}))};return[].concat(Object(i.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(s.a)(t),{items:(t.items||[]).map(s.a)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],a=0;a<e.length;a++){var i=e[a];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},o=(a(318),a(43)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userLinks.length||t.repoLink?a("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return a("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?a("DropdownLink",{attrs:{item:t}}):a("NavLink",{attrs:{item:t}})],1)})),t._v(" "),"/install.html"===this.$page.path?a("a",{staticClass:"button-disabled"},[t._v("\n    "+t._s("Install")+"\n  ")]):a("a",{staticClass:"button",attrs:{href:t.$withBase("/install.html")}},[t._v("\n    "+t._s("Install")+"\n  ")])],2):t._e()}),[],!1,null,null,null);e.a=l.exports},315:function(t,e,a){"use strict";a(308)},318:function(t,e,a){"use strict";a(310)},319:function(t,e,a){"use strict";a(311)},320:function(t,e,a){"use strict";a(322);var i=a(324),n=a(343),s=a(347),r=a(314),o=a(330);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={name:"Navbar",components:{SidebarButton:s.a,NavLinks:r.a,SearchBox:n.a,AlgoliaSearchBox:i.a,GithubButton:o.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},c=(a(319),a(43)),h=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),t.$site.themeConfig.repo?a("GithubButton",{staticClass:"repo-button",attrs:{href:t.$site.themeConfig.repo,"data-icon":"octicon-star","data-size":"small","data-show-count":"false","aria-label":"Star k8dash on GitHub"}},[t._v("\n    "+t._s(t.$site.themeConfig.repoButtonLabel?t.$site.themeConfig.repoButtonLabel:"Star")+"\n  ")]):t._e(),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=h.exports},321:function(t,e,a){"use strict";var i={name:"Home",components:{NavLink:a(312).a},computed:{data:function(){return this.$page.frontmatter}}},n=(a(315),a(43)),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actions&&t.data.actions.length?a("div",t._l(t.data.actions,(function(e,i){return a("span",{staticClass:"action"},[a("a",{staticClass:"action-button",attrs:{href:e.link}},[t._v("\n        "+t._s(e.text)+"\n        ")])])})),0):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return a("div",{key:i,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("img",{attrs:{src:t.$withBase(e.image),alt:e.alt,width:"75%"}}),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("div",{staticClass:"split-div"},[a("div",{staticClass:"each-div"},[a("Content",{attrs:{"slot-key":"quick-install"}})],1),t._v(" "),a("div",{staticClass:"each-div"},[a("Content",{attrs:{"slot-key":"quick-start"}})],1)])])}),[],!1,null,null,null);e.a=s.exports},371:function(t,e,a){"use strict";a.r(e);var i=a(321),n=a(320),s=a(341),r=a(346),o=a(43),l=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("© k8dash 2020.")]),this._v(" "),this._m(0),this._v(" "),e("p",[e("a",{attrs:{href:"https://twitter.com/IndeedEng"}},[e("img",{attrs:{src:this.$withBase("/images/twitter.png"),alt:"twitter icon",width:"20px"}})]),this._v(" "),e("a",{attrs:{href:"https://github.com/indeedeng/k8dash"}},[e("img",{attrs:{src:this.$withBase("/images/github.png"),alt:"github icon",width:"20px"}})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("k8dash is licensed under \n    "),e("a",{attrs:{href:"https://raw.githubusercontent.com/indeedeng/k8dash/master/LICENSE"}},[this._v("\n      Apache License 2.0")]),this._v(".\n  ")])}],!1,null,null,null).exports,u=a(309),c={name:"Layout",components:{Home:i.a,Page:s.a,Sidebar:r.a,Navbar:n.a,Footer:l},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(u.b)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},h=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);e.default=h.exports}}]);