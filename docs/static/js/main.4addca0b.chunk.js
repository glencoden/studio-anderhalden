(this["webpackJsonpstudio-anderhalden"]=this["webpackJsonpstudio-anderhalden"]||[]).push([[0],{10:function(e,t,n){e.exports={Info:"Info_Info__3WoRg",infoCurtainBox:"Info_infoCurtainBox__4DhQN",isTransitioning:"Info_isTransitioning__1fRnE",isClosed:"Info_isClosed__30Tas",close:"Info_close__3kAyz",isOpen:"Info_isOpen__3spwN",open:"Info_open__SO0W7"}},11:function(e,t,n){e.exports={RichText:"RichText_RichText__1BywL",largeSize:"RichText_largeSize__S8ve5",mediumSize:"RichText_mediumSize__1Xnal",smallSize:"RichText_smallSize__BL3Kk"}},117:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),o=n(46),r=n.n(o),c=(n(57),n(1)),s=n(7),l=n(15),u=n.n(l),d=n(3),f=n.n(d);var m=function(e,t){var n=Object(i.useReducer)(e,t),a=Object(s.a)(n,2),o=a[0],r=a[1];return{state:o,asyncDispatch:Object(i.useMemo)((function(){return function(e){return function(t){return t instanceof Promise?t.then(e):e(t)}}(r)}),[r])}},j=n(5),b=n(47),h=n(48);function g(e){return(null===e||void 0===e?void 0:e.ratio)||Number(y("--default-image-ratio"))}function p(e){return null!==e&&"function"!==typeof e&&"object"===typeof e&&!Array.isArray(e)}function v(e){return/#[0-9A-Fa-f]{3}/.test(e)||/#[0-9A-Fa-f]{6}/.test(e)}function x(){var e=window.innerWidth<window.innerHeight;if(p(window.screen.orientation)){var t=window.screen.orientation.type;e="string"===typeof t&&t.includes("portrait")}return e}function _(){return x()?window.innerWidth<620:window.innerWidth<820}var O={};function y(e){if(O[e])return O[e];var t=window.getComputedStyle(document.documentElement).getPropertyValue(e);return O[e]=t,t}function w(e){return e.endsWith("px")?Number(e.slice(0,-2)):0}function N(e,t,n){return(e.length+t+n)%e.length}function P(e){return p(e)&&e.hasOwnProperty("content")&&e.hasOwnProperty("nodeType")?e:(console.warn("unknown rich text entry",e),null)}function k(e){var t,n,i,a;return p(e)&&p(e.sys)&&p(e.fields)?{id:e.sys.id,title:e.fields.title,file:{url:p(e.fields.file)?e.fields.file.url:"",width:p(null===(t=e.fields.file)||void 0===t||null===(n=t.details)||void 0===n?void 0:n.image)?e.fields.file.details.image.width:0,height:p(null===(i=e.fields.file)||void 0===i||null===(a=i.details)||void 0===a?void 0:a.image)?e.fields.file.details.image.height:0}}:(console.warn("unknown image entry",e),null)}var I=function(e){if(p(e.fields)&&p(e.sys)){var t={id:"",createdAt:(new Date).toISOString(),title:"",text:null,footnote:null,thumbnail:null,images:[],position:-1};typeof e.sys.id===typeof t.id&&(t.id=e.sys.id),typeof e.sys.createdAt===typeof t.createdAt&&(t.createdAt=e.sys.createdAt),typeof e.fields.titel===typeof t.title&&(t.title=e.fields.titel);var n=P(e.fields.text);n&&(t.text=n);var i=P(e.fields.fussnote);i&&(t.footnote=i);var a=k(e.fields.thumbnail);return a&&(t.thumbnail=a),Array.isArray(e.fields.bilder)&&(t.images=e.fields.bilder.map((function(e){return k(e)})).filter((function(e){return!!e}))),typeof e.fields.position===typeof t.position&&(t.position=e.fields.position),t}console.warn("unknown project item",e)};var S=function(e){if(!p(e.fields))return console.warn("unknown info block item",e),null;var t={text:null,images:[]};if(e.fields.text){var n=P(e.fields.text);n&&(t.text=n)}return Array.isArray(e.fields.bild)&&(t.images=e.fields.bild.map((function(e){return k(e)})).filter((function(e){return!!e}))),t};var T=function(e){var t={enabled:!1,documentTitle:"",animationTime:0,thumbnailSize:0,imageSize:0,ratio:0,palette:{black:"#000",grey:"#999",lightgrey:"#E5E5E5",white:"#FFF"}};if(!p(e.fields))return console.warn("unknown config item",e),t;if(!e.fields.configAktiv)return t;if(typeof e.fields.configAktiv===typeof t.enabled&&(t.enabled=e.fields.configAktiv),typeof e.fields.websiteTitel===typeof t.documentTitle&&(t.documentTitle=e.fields.websiteTitel),typeof e.fields.animationszeit===typeof t.animationTime&&(t.animationTime=Math.min(4,Math.max(.2,e.fields.animationszeit))),typeof e.fields.maximaleThumbnailgre===typeof t.thumbnailSize&&(t.thumbnailSize=Math.min(1200,Math.max(400,e.fields.maximaleThumbnailgre))),typeof e.fields.maximaleBildgre===typeof t.imageSize&&(t.imageSize=Math.min(1200,Math.max(400,e.fields.maximaleBildgre))),"string"===typeof e.fields.bildSeitenverhltnis){var n=e.fields.bildSeitenverhltnis.split(":").map((function(e){return Number(e)})),i=Object(s.a)(n,2),a=i[0],o=i[1];isNaN(a)||isNaN(o)||(t.ratio=Math.min(2,Math.max(1,a/o)))}return v(e.fields.schwarz)&&(t.palette.black=e.fields.schwarz),v(e.fields.grau)&&(t.palette.grey=e.fields.grau),v(e.fields.hellgrau)&&(t.palette.lightgrey=e.fields.hellgrau),v(e.fields.weiss)&&(t.palette.white=e.fields.weiss),t},B="projekt",C="infoBlock",z="config";var A=function(e){var t={projects:[],infoBlocks:[],config:null};return p(e)&&Array.isArray(e.items)&&p(e.includes)&&Array.isArray(e.includes.Asset)?(e.items.forEach((function(e){var n,i,a;if(p(e))switch(null===(n=e.sys)||void 0===n||null===(i=n.contentType)||void 0===i||null===(a=i.sys)||void 0===a?void 0:a.id){case B:var o=I(e);if(!o)break;t.projects.unshift(o);break;case C:var r=S(e);if(!r)break;t.infoBlocks.unshift(r);break;case z:if(t.config)break;var c=T(e);if(!c)break;t.config=c;break;default:console.warn("unknown item type",e)}else console.warn("unknown item",e)})),t.projects=function(e){var t=e.filter((function(e){return e.position>-1})).sort((function(e,t){return e.position-t.position})),n=e.filter((function(e){return e.position<=-1})).sort((function(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}));return t.forEach((function(e){return n.splice(Math.max(e.position-1,0),0,e)})),n}(t.projects),t):(console.warn("unknown raw data",e),t)},E=n(58),M=new(function(){function e(){Object(b.a)(this,e),this._client=void 0,this._client=E.createClient({space:"b522n0157zmv",accessToken:"k5don56ounRIbth9QrBNF1jZ14zqfcQ2muxGIfwg0r4"})}return Object(h.a)(e,[{key:"getSiteContent",value:function(){return this._client.getEntries().then((function(e){return A(e)}))}},{key:"getImageUrl",value:function(e){var t=e.id,n=e.width,i=e.height;return this._client.getAsset(t).then((function(e){return"".concat(e.fields.file.url,"?fit=fill&w=").concat(n,"&h=").concat(i)}))}}]),e}()),W="get-site-content",L="set-target",R="set-page",D="set-project-id",F="home",K="projects",H="project-detail",U="info",q={siteContent:{projects:[],infoBlocks:[],config:null},targetPage:F,selectedPage:F,selectedProjectId:""};function J(e,t){switch(t.type){case W:return Object(j.a)(Object(j.a)({},e),{},{siteContent:t.payload});case L:return Object(j.a)(Object(j.a)({},e),{},{targetPage:t.payload});case R:return Object(j.a)(Object(j.a)({},e),{},{selectedPage:t.payload});case D:return Object(j.a)(Object(j.a)({},e),{},{selectedProjectId:t.payload});default:return e}}var Q={getSiteContent:function(){return new Promise((function(e){M.getSiteContent().then((function(t){var n;(n=t.config).enabled&&(document.title=n.documentTitle,document.documentElement.style.setProperty("--black",n.palette.black),document.documentElement.style.setProperty("--grey",n.palette.grey),document.documentElement.style.setProperty("--lightgrey",n.palette.lightgrey),document.documentElement.style.setProperty("--white",n.palette.white),document.documentElement.style.setProperty("--animation-time","".concat(n.animationTime,"s"))),e({type:W,payload:t})}))}))},setTarget:function(e){return{type:L,payload:e}},setPage:function(e){return{type:R,payload:e}},setProjectId:function(e){return{type:D,payload:e}}},G=n(16),V=n.n(G),Z=n(0);var X=function(e){var t=e.isMobileNav,n=e.mobileNavIndex,i=void 0===n?-1:n,a=e.children;return i>-1&&Array.isArray(a)&&(a=a.slice(i,i+1)),Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:f()(V.a.Navigation,Object(c.a)({},V.a.mobileNav,t)),children:a}),t&&Object(Z.jsx)("div",{className:V.a.spacer})]})},Y=n(9),$=n.n(Y);var ee=function(e){var t,n,i=e.open,a=e.onOpen,o=e.onClose;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:f()("".concat($.a.Curtain," ").concat($.a.left),(t={},Object(c.a)(t,$.a.open,i),Object(c.a)(t,$.a.closed,!i),t))}),Object(Z.jsx)("div",{className:f()("".concat($.a.Curtain," ").concat($.a.right),(n={},Object(c.a)(n,$.a.open,i),Object(c.a)(n,$.a.closed,!i),n)),onTransitionEnd:function(){if(i){if("function"!==typeof a)return;a()}else{if("function"!==typeof o)return;o()}}})]})},te=n(50),ne=n.n(te);var ie=function(e){var t=e.children;return Object(Z.jsx)("div",{className:ne.a.Logo,children:t})},ae=n(17),oe=n.n(ae);var re=function(e){var t,n=e.label,i=e.active,a=e.disabled,o=e.cta,r=e.stopPropagation,s=e.className,l=void 0===s?"":s;return Object(Z.jsx)("button",{className:f()(oe.a.Button,(t={},Object(c.a)(t,l,l),Object(c.a)(t,oe.a.active,i),Object(c.a)(t,oe.a.disabled,a),t)),onClick:function(e){r&&e.stopPropagation(),a||"function"!==typeof o||o()},children:n})},ce=n(27),se=n.n(ce),le=n(18),ue=n.n(le),de=n(28),fe=n.n(de);var me=function(e){var t=e.width,n=e.ratio,a=e.id,o=e.title,r=e.file,c=Math.round(t/n),l=Object(i.useRef)(null),u=Object(i.useState)(""),d=Object(s.a)(u,2),f=d[0],m=d[1],j=Object(i.useState)(!1),b=Object(s.a)(j,2),h=b[0],g=b[1];return Object(i.useEffect)((function(){M.getImageUrl({id:a,width:t,height:c}).then((function(e){return m(e)})).catch((function(e){console.warn("no image url",e),m(r.url)}));var e=setTimeout((function(){return g(!0)}),5e3);return function(){return clearTimeout(e)}}),[a,t,c,r.url]),Object(Z.jsx)("div",{className:fe.a.ImageBox,style:{width:"".concat(t,"px"),height:"".concat(c,"px")},children:f&&Object(Z.jsx)("img",{className:fe.a.Image,style:{opacity:h?1:0},ref:l,src:f,alt:o,onLoad:function(){return g(!0)},onError:function(){return m(r.url)}})})};var je=function(e){var t=e.item,n=e.config,i=e.callback;if(!t.thumbnail)return Object(Z.jsx)("div",{className:ue.a.ProjectsItem,children:"no thumbnail"});var a=function(e){var t=Math.round(Math.min((null===e||void 0===e?void 0:e.thumbnailSize)||w(y("--default-thumbnail-width")),window.innerWidth/2));return _()&&x()&&(t=window.innerWidth-2*w(y("--padding-medium"))),t}(n),o=g(n);if(t.thumbnail.file.width===t.thumbnail.file.height&&(a=Math.round(a/o),o=1),t.thumbnail.file.width<t.thumbnail.file.height){var r=a,c=w(y("--padding-medium"));o=(a=Math.round(a/o))/(r-4*c)}return Object(Z.jsxs)("div",{className:ue.a.ProjectsItem,title:t.title,onClick:function(){return i()},children:[Object(Z.jsx)(me,Object(j.a)({width:a,ratio:o},t.thumbnail)),_()&&Object(Z.jsx)("h4",{className:ue.a.title,style:{width:"".concat(a,"px")},children:t.title})]})};var be=function(e){var t=e.items,n=e.config,i=e.setProjectId;return Object(Z.jsxs)("div",{className:se.a.Projects,children:[Object(Z.jsx)("div",{className:se.a.centerLine}),t.map((function(e,t){return Object(Z.jsx)(je,{item:e,config:n,callback:function(){return i(e.id)}},t)}))]})},he=n(10),ge=n.n(he),pe=n(51),ve=n.n(pe),xe=n(52),_e=n(11),Oe=n.n(_e),ye={L:"l",M:"m",S:"s"};Object.values(ye);function we(e){return Object(xe.documentToReactComponents)(e)}var Ne=function(e){var t,n=e.entry,a=e.size,o=Object(i.useRef)(null);return Object(i.useEffect)((function(){o.current&&function(e){for(var t=e.getElementsByTagName("a"),n=0;n<t.length;n++)t[n].href&&t[n].href.startsWith("http")&&t[n].setAttribute("target","_blank")}(o.current)}),[]),Object(Z.jsx)("div",{ref:o,className:f()(Oe.a.RichText,(t={},Object(c.a)(t,Oe.a.largeSize,a===ye.L),Object(c.a)(t,Oe.a.mediumSize,a===ye.M),Object(c.a)(t,Oe.a.smallSize,a===ye.S),t)),children:we(n)})};var Pe=function(e){var t=e.item,n=e.width;return Object(Z.jsxs)("div",{className:ve.a.InfoItem,style:{width:"".concat(n,"px")},children:[!!t.images.length&&Object(Z.jsx)(me,Object(j.a)({width:n-2*w(y("--padding-large")),ratio:1.6},t.images[0])),t.text&&Object(Z.jsx)(Ne,{entry:t.text,size:"l"})]})};var ke=function(e){var t,n=e.items,a=e.config,o=e.open,r=e.onOpen,l=e.onClose,u=Object(i.useState)(!1),d=Object(s.a)(u,2),m=d[0],j=d[1];Object(i.useEffect)((function(){return j(!0)}),[o]);var b=Math.round(Math.min((null===a||void 0===a?void 0:a.imageSize)||w(y("--default-content-width")),window.innerWidth/2));return _()&&x()&&(b=window.innerWidth),Object(Z.jsx)("div",{className:ge.a.Info,style:{width:"".concat(b,"px")},children:Object(Z.jsx)("div",{className:f()(ge.a.infoCurtainBox,(t={},Object(c.a)(t,ge.a.isTransitioning,m),Object(c.a)(t,ge.a.isOpen,o),Object(c.a)(t,ge.a.isClosed,!o),t)),onAnimationEnd:function(){if(j(!1),o){if("function"!==typeof r)return;r()}else{if("function"!==typeof l)return;l()}},children:n.map((function(e,t){return Object(Z.jsx)(Pe,{item:e,width:b},t)}))})})},Ie=n(19),Se=n.n(Ie),Te="";var Be=function(e){var t,n=e.page,i=e.target,a=e.selected,o=e.children;return Te!==a&&(window.scroll(0,0),Te=a),Object(Z.jsx)("div",{className:f()(Se.a.PageBox,(t={},Object(c.a)(t,Se.a.isTarget,n===i),Object(c.a)(t,Se.a.isSelected,n===a),t)),children:o})},Ce=n(12),ze=n.n(Ce),Ae=n(13),Ee=n.n(Ae);var Me=function(){return Object(Z.jsx)("div",{style:{fontSize:"26px",transform:"rotate(45deg)"},children:"+"})};var We=function(e){var t=e.onClose,n=e.numProjects,i=e.currentIndex;return Object(Z.jsxs)("div",{className:Ee.a.NavClose,children:[!_()&&"number"===typeof n&&"number"===typeof i&&Object(Z.jsx)("div",{className:Ee.a.counter,children:Object(Z.jsx)(re,{className:Ee.a.counterButton,label:"".concat(i+1,"/").concat(n),disabled:!0})}),Object(Z.jsx)(re,{className:Ee.a.closeButton,label:Object(Z.jsx)(Me,{}),cta:function(){return t()}})]})},Le=n(14),Re=n.n(Le);function De(){return Object(Z.jsx)("span",{children:"\u2190"})}function Fe(){return Object(Z.jsx)("span",{children:"\u2192"})}var Ke=function(e){var t=e.selectPrev,n=e.selectNext;return Object(Z.jsxs)("div",{className:Re.a.NavSkip,children:[Object(Z.jsx)(re,{className:"".concat(Re.a.skipButton," ").concat(Re.a.selectPrev),label:Object(Z.jsx)(De,{}),cta:t}),Object(Z.jsx)(re,{className:Re.a.skipButton,label:Object(Z.jsx)(Fe,{}),cta:n})]})};var He=function(e){var t=e.selectedProjectId,n=e.projects,i=e.config,a=e.setProjectId,o=e.onClose,r=n.find((function(e){return e.id===t}));if(!r)return Object(Z.jsx)("div",{children:"no project"});var c=n.indexOf(r),s=N(n,c,-1),l=N(n,c,1),u=function(e){var t=Math.round(Math.min((null===e||void 0===e?void 0:e.imageSize)||w(y("--default-content-width")),window.innerWidth/2));return _()&&x()&&(t=window.innerWidth-2*w(y("--padding-medium"))),t}(i),d=g(i),f=w(y("--padding-medium")),m=window.innerWidth/2-u,j=u/2;return m<f&&(m=f,j-=f),Object(Z.jsxs)("div",{className:ze.a.ProjectDetail,children:[Object(Z.jsx)("div",{className:ze.a.imageBox,children:r.images.map((function(e,t){var n=u,i=d;return e.file.width===e.file.height&&(n=Math.round(u/d),i=1),e.file.width<e.file.height&&(i=1/d,n=Math.round(u*i*i)),Object(Z.jsx)(me,{width:n,ratio:i,id:e.id,title:e.title,file:e.file},t)}))}),Object(Z.jsxs)("div",{className:ze.a.textBox,style:_()?{}:{right:"".concat(m,"px"),width:"".concat(j,"px")},children:[Object(Z.jsx)("h1",{children:r.title}),Object(Z.jsx)(Ne,{entry:r.text,size:"m"}),Object(Z.jsx)(Ne,{entry:r.footnote,size:"s"}),Object(Z.jsx)("div",{className:ze.a.space})]}),Object(Z.jsx)(Ke,{selectPrev:function(){a(n[s].id),window.scroll(0,0)},selectNext:function(){a(n[l].id),window.scroll(0,0)}}),Object(Z.jsx)(We,{onClose:o,numProjects:n.length,currentIndex:c})]})},Ue=0;var qe=function(){var e,t=m(J,q),n=t.state,a=t.asyncDispatch,o=n.siteContent,r=n.targetPage,l=n.selectedPage,d=n.selectedProjectId,j=Object(i.useState)(!1),b=Object(s.a)(j,2)[1];Object(i.useEffect)((function(){var e=function(){Ue&&window.clearTimeout(Ue),Ue=window.setTimeout((function(){return b((function(e){return!e}))}),100)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(i.useEffect)((function(){return a(Q.getSiteContent())}),[a]);var h=(r!==F||l!==F)&&_();return Object(Z.jsxs)("div",{className:f()("",Object(c.a)({},u.a.isHome,l===F)),children:[Object(Z.jsx)(ee,{open:r!==F,onOpen:function(){return a(Q.setPage(r))},onClose:function(){return a(Q.setPage(F))}}),Object(Z.jsxs)(X,{isMobileNav:h,mobileNavIndex:h?r===U?0:1:r===H?1:-1,children:[Object(Z.jsx)(re,{className:h?u.a.mobileNavButton:"",label:h?Object(Z.jsx)(Me,{}):"Grafik",active:r===K,disabled:!o.projects.length,cta:function(){return a(Q.setTarget(K))}}),Object(Z.jsx)(re,{className:h?u.a.mobileNavButton:"",label:h?"...":"Kontakt + Info",active:r===U,disabled:!o.infoBlocks.length,cta:function(){return a(Q.setTarget(U))}})]}),Object(Z.jsx)(ie,{children:Object(Z.jsx)(re,{label:(null===(e=o.config)||void 0===e?void 0:e.documentTitle)?o.config.documentTitle:"Studio Anderhalden",cta:function(){return a(Q.setTarget(F))}})}),Object(Z.jsx)(Be,{page:K,target:r,selected:l,children:Object(Z.jsx)(be,{items:o.projects,config:o.config,setProjectId:function(e){a(Q.setProjectId(e)),a(Q.setTarget(H)),a(Q.setPage(H))}})}),l===H&&Object(Z.jsx)(He,{selectedProjectId:d,projects:o.projects,config:o.config,setProjectId:function(e){return a(Q.setProjectId(e))},onClose:function(){a(Q.setTarget(K)),a(Q.setPage(K))}}),Object(Z.jsx)(Be,{page:U,target:r,selected:l,children:Object(Z.jsx)(ke,{items:o.infoBlocks,config:o.config,open:r===U,onOpen:function(){return a(Q.setPage(U))},onClose:function(){return a(Q.setPage(r))}})})]})};r.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(qe,{})}),document.getElementById("root"))},12:function(e,t,n){e.exports={ProjectDetail:"ProjectDetail_ProjectDetail__3C2sP",imageBox:"ProjectDetail_imageBox__3qDiS",textBox:"ProjectDetail_textBox__l3wqu",space:"ProjectDetail_space__oKQy0"}},13:function(e,t,n){e.exports={NavClose:"NavClose_NavClose__1-kWt",counter:"NavClose_counter__3vKV-",counterButton:"NavClose_counterButton__2NWUN",closeButton:"NavClose_closeButton__34JCj"}},14:function(e,t,n){e.exports={NavSkip:"NavSkip_NavSkip__UarSh",skipButton:"NavSkip_skipButton__2XaxE",selectPrev:"NavSkip_selectPrev__3LaqK"}},15:function(e,t,n){e.exports={isHome:"App_isHome__oTROn"}},16:function(e,t,n){e.exports={Navigation:"Navigation_Navigation__1tTPb",mobileNav:"Navigation_mobileNav__34zkU",spacer:"Navigation_spacer__1vJOr"}},17:function(e,t,n){e.exports={Button:"Button_Button__3R1xi",active:"Button_active__TCjlx",disabled:"Button_disabled__2c3jr"}},18:function(e,t,n){e.exports={ProjectsItem:"ProjectsItem_ProjectsItem__ixgAC",title:"ProjectsItem_title__1n-p3"}},19:function(e,t,n){e.exports={PageBox:"PageBox_PageBox__CpPMT",isTarget:"PageBox_isTarget__fESuA",isSelected:"PageBox_isSelected__ls1KE"}},26:function(e,t){},27:function(e,t,n){e.exports={Projects:"Projects_Projects__1ECks",centerLine:"Projects_centerLine__39BzK"}},28:function(e,t,n){e.exports={ImageBox:"Image_ImageBox__16ZVW",Image:"Image_Image__1br15"}},50:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH",wiggle:"Logo_wiggle__23iAG"}},51:function(e,t,n){e.exports={InfoItem:"InfoItem_InfoItem__26gzv"}},57:function(e,t,n){},86:function(e,t){},9:function(e,t,n){e.exports={Curtain:"Curtain_Curtain__23SsW",left:"Curtain_left__3IErm",right:"Curtain_right__Zgczi",open:"Curtain_open__3Pkll",closed:"Curtain_closed__3MPTA"}}},[[117,1,2]]]);
//# sourceMappingURL=main.4addca0b.chunk.js.map