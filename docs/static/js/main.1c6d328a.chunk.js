(this["webpackJsonpstudio-anderhalden"]=this["webpackJsonpstudio-anderhalden"]||[]).push([[0],{11:function(e,t,n){e.exports={Button:"Button_Button__3R1xi",active:"Button_active__TCjlx",disabled:"Button_disabled__2c3jr"}},114:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(41),o=n.n(r),c=(n(54),n(42)),s=n.n(c),l=n(4),u=n(43),d=n(44);function f(e){return null!==e&&"function"!==typeof e&&"object"===typeof e&&!Array.isArray(e)}function m(e){return/#[0-9A-Fa-f]{3}/.test(e)||/#[0-9A-Fa-f]{6}/.test(e)}function g(){var e=window.innerWidth<window.innerHeight;if(f(window.screen.orientation)){var t=window.screen.orientation.type;e="string"===typeof t&&t.includes("portrait")}return e}function j(){return g()?window.innerWidth<620:window.innerWidth<820}var h={};function p(e){if(h[e])return h[e];var t=window.getComputedStyle(document.documentElement).getPropertyValue(e);return h[e]=t,t}function b(e){return e.endsWith("px")?Number(e.slice(0,-2)):0}function v(e){return f(e)&&e.hasOwnProperty("content")&&e.hasOwnProperty("nodeType")?e:(console.warn("unknown rich text entry",e),null)}function y(e){var t,n,i,a;return f(e)&&f(e.sys)&&f(e.fields)?{id:e.sys.id,title:e.fields.title,file:{url:f(e.fields.file)?e.fields.file.url:"",width:f(null===(t=e.fields.file)||void 0===t||null===(n=t.details)||void 0===n?void 0:n.image)?e.fields.file.details.image.width:0,height:f(null===(i=e.fields.file)||void 0===i||null===(a=i.details)||void 0===a?void 0:a.image)?e.fields.file.details.image.height:0}}:(console.warn("unknown image entry",e),null)}var _=function(e){if(f(e.fields)&&f(e.sys)){var t={id:"",createdAt:(new Date).toISOString(),title:"",text:null,footnote:null,thumbnail:null,images:[]};typeof e.sys.id===typeof t.id&&(t.id=e.sys.id),typeof e.sys.createdAt===typeof t.createdAt&&(t.createdAt=e.sys.createdAt),typeof e.fields.titel===typeof t.title&&(t.title=e.fields.titel);var n=v(e.fields.text);n&&(t.text=n);var i=v(e.fields.fussnote);i&&(t.footnote=i);var a=y(e.fields.thumbnail);return a&&(t.thumbnail=a),Array.isArray(e.fields.bilder)&&(t.images=e.fields.bilder.map((function(e){return y(e)})).filter((function(e){return!!e}))),t}console.warn("unknown project item",e)};var x=function(e){if(!f(e.fields))return console.warn("unknown info block item",e),null;var t={text:null,images:[]};if(e.fields.text){var n=v(e.fields.text);n&&(t.text=n)}return Array.isArray(e.fields.bild)&&(t.images=e.fields.bild.map((function(e){return y(e)})).filter((function(e){return!!e}))),t},w=n(7);var O=function(e){var t={enabled:!1,documentTitle:"",animationTime:0,imageSize:0,ratio:0,palette:{black:"#000",grey:"#999",lightgrey:"#E5E5E5",white:"#FFF"}};if(!f(e.fields))return console.warn("unknown config item",e),t;if(typeof e.fields.configAktiv===typeof t.enabled&&(t.enabled=e.fields.configAktiv),typeof e.fields.websiteTitel===typeof t.documentTitle&&(t.documentTitle=e.fields.websiteTitel),typeof e.fields.animationszeit===typeof t.animationTime&&(t.animationTime=Math.min(4,Math.max(.2,e.fields.animationszeit))),typeof e.fields.maximaleBildgre===typeof t.imageSize&&(t.imageSize=Math.min(1e3,Math.max(400,e.fields.maximaleBildgre))),"string"===typeof e.fields.bildSeitenverhltnis){var n=e.fields.bildSeitenverhltnis.split(":").map((function(e){return Number(e)})),i=Object(w.a)(n,2),a=i[0],r=i[1];isNaN(a)||isNaN(r)||(t.ratio=Math.min(2,Math.max(1,a/r)))}return m(e.fields.schwarz)&&(t.palette.black=e.fields.schwarz),m(e.fields.grau)&&(t.palette.grey=e.fields.grau),m(e.fields.hellgrau)&&(t.palette.lightgrey=e.fields.hellgrau),m(e.fields.weiss)&&(t.palette.white=e.fields.weiss),t},I="projekt",P="infoBlock",k="config";var T=function(e){var t={projects:[],infoBlocks:[],config:null};return f(e)&&Array.isArray(e.items)&&f(e.includes)&&Array.isArray(e.includes.Asset)?(e.items.forEach((function(e){var n,i,a;if(f(e))switch(null===(n=e.sys)||void 0===n||null===(i=n.contentType)||void 0===i||null===(a=i.sys)||void 0===a?void 0:a.id){case I:var r=_(e);if(!r)break;t.projects.unshift(r);break;case P:var o=x(e);if(!o)break;t.infoBlocks.unshift(o);break;case k:if(t.config)break;var c=O(e);if(!c)break;t.config=c;break;default:console.warn("unknown item type",e)}else console.warn("unknown item",e)})),t.projects=t.projects.sort((function(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()})),t):(console.warn("unknown raw data",e),t)},A=n(55),C=new(function(){function e(){Object(u.a)(this,e),this._client=void 0,this._client=A.createClient({space:"b522n0157zmv",accessToken:"k5don56ounRIbth9QrBNF1jZ14zqfcQ2muxGIfwg0r4"})}return Object(d.a)(e,[{key:"getSiteContent",value:function(){return this._client.getEntries().then((function(e){return T(e)}))}},{key:"getImageUrl",value:function(e){var t=e.id,n=e.width,i=e.height;return this._client.getAsset(t).then((function(e){return"".concat(e.fields.file.url,"?fit=fill&w=").concat(n,"&h=").concat(i)}))}}]),e}()),S="get-site-content",N="set-target",B="set-page",z="set-project-id",E="home",M="projects",R="info",W={siteContent:{projects:[],infoBlocks:[],config:null},targetPage:E,selectedPage:E,selectedProjectId:""};function L(e,t){switch(t.type){case S:return Object(l.a)(Object(l.a)({},e),{},{siteContent:t.payload});case N:return Object(l.a)(Object(l.a)({},e),{},{targetPage:t.payload});case B:return Object(l.a)(Object(l.a)({},e),{},{selectedPage:t.payload});case z:return Object(l.a)(Object(l.a)({},e),{},{selectedProjectId:t.payload});default:return e}}var F={getSiteContent:function(){return new Promise((function(e){C.getSiteContent().then((function(t){var n;(n=t.config).enabled&&(document.title=n.documentTitle,document.documentElement.style.setProperty("--black",n.palette.black),document.documentElement.style.setProperty("--grey",n.palette.grey),document.documentElement.style.setProperty("--lightgrey",n.palette.lightgrey),document.documentElement.style.setProperty("--white",n.palette.white),document.documentElement.style.setProperty("--animation-time",n.animationTime)),e({type:S,payload:t})}))}))},setTarget:function(e){return{type:N,payload:e}},setPage:function(e){return{type:B,payload:e}},setProjectId:function(e){return{type:z,payload:e}}};var D=function(e,t){var n=Object(i.useReducer)(e,t),a=Object(w.a)(n,2),r=a[0],o=a[1];return{state:r,asyncDispatch:Object(i.useMemo)((function(){return function(e){return function(t){return t instanceof Promise?t.then(e):e(t)}}(o)}),[o])}},H=n(46),K=n.n(H),Z=n(0);var G=function(e){var t=e.children;return Object(Z.jsx)("div",{className:K.a.Navigation,children:t})},X=n(2),J=n(9),Q=n.n(J);var U=function(e){var t=e.open,n=e.onOpen,i=e.onClose;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:"".concat(Q.a.Curtain," ").concat(Q.a.left),style:Object(X.a)({},t?"transform":"","translateX(0)")}),Object(Z.jsx)("div",{className:"".concat(Q.a.Curtain," ").concat(Q.a.right),style:Object(X.a)({},t?"transform":"","translateX(0)"),onTransitionEnd:function(){if(t){if("function"!==typeof n)return;n()}else{if("function"!==typeof i)return;i()}}})]})},V=n(47),q=n.n(V);var Y=function(e){var t=e.children;return Object(Z.jsx)("div",{className:q.a.Logo,children:t})},$=n(11),ee=n.n($);var te=function(e){var t=e.label,n=e.className,i=e.disabled,a=e.active,r=e.cta,o=[ee.a.Button];return n&&o.push(n),a&&o.push(ee.a.active),i&&o.push(ee.a.disabled),Object(Z.jsx)("button",{className:o.join(" "),onClick:function(){i||"function"!==typeof r||r()},children:t})},ne=n(21),ie=n.n(ne),ae=n(22),re=n.n(ae),oe=n(23),ce=n.n(oe);var se=function(e){var t=e.width,n=e.ratio,a=e.id,r=e.title,o=e.file,c=Math.round(t/n),s=Object(i.useRef)(null),l=Object(i.useState)(""),u=Object(w.a)(l,2),d=u[0],f=u[1],m=Object(i.useState)(!1),g=Object(w.a)(m,2),j=g[0],h=g[1];return Object(i.useEffect)((function(){C.getImageUrl({id:a,width:t,height:c}).then((function(e){return f(e)})).catch((function(e){console.warn("no image url",e),f(o.url)}));var e=setTimeout((function(){return h(!0)}),5e3);return function(){return clearTimeout(e)}}),[a,t,c,o.url]),Object(Z.jsx)("div",{className:ce.a.ImageBox,style:{width:"".concat(t,"px"),height:"".concat(c,"px"),opacity:j?1:0},children:d&&Object(Z.jsx)("img",{className:ce.a.Image,ref:s,src:d,alt:r,onLoad:function(){return h(!0)},onError:function(){return f(o.url)}})})};var le=function(e){var t=e.item,n=e.config,i=e.callback,a=e.fixedWidth;if(!t.thumbnail)return Object(Z.jsx)("div",{className:re.a.ProjectsItem,children:"no thumbnail"});var r=(null===n||void 0===n?void 0:n.imageSize)||b(p("--default-content-width")),o=(null===n||void 0===n?void 0:n.ratio)||b(p("--default-image-ratio")),c=0;return t.thumbnail.file.width<t.thumbnail.file.height&&(o=1/o),a?c=a:(c=Math.round(Math.min(r,window.innerWidth/2)),o<1&&(c=Math.round(c*o))),Object(Z.jsx)("div",{className:re.a.ProjectsItem,title:t.title,onClick:function(){return i()},children:Object(Z.jsx)(se,Object(l.a)({width:c,ratio:o},t.thumbnail))})};var ue,de=function(e){var t=e.items,n=e.config,i=e.setProjectId,a=0;return j()&&g()&&(a=window.innerWidth-2*b(p("--padding-medium"))),Object(Z.jsxs)("div",{className:ie.a.Projects,children:[Object(Z.jsx)("div",{className:ie.a.centerLine}),t.map((function(e,t){return Object(Z.jsx)(le,{item:e,config:n,callback:function(){return i(e.id)},fixedWidth:a},t)}))]})},fe=n(8),me=n.n(fe),ge=n(10),je=n.n(ge),he=n(48),pe=n.n(he),be=n(49),ve=n(12),ye=n.n(ve),_e={M:"m",S:"s"},xe=(Object.values(_e),ue={},Object(X.a)(ue,_e.M,ye.a.mediumSize),Object(X.a)(ue,_e.S,ye.a.smallSize),ue);function we(e){return Object(be.documentToReactComponents)(e)}var Oe=function(e){var t=e.entry,n=e.size;return Object(Z.jsx)("div",{className:"".concat(ye.a.RichText," ").concat(xe[n]),children:we(t)})};var Ie=function(e){var t=e.item,n=e.width;return Object(Z.jsxs)("div",{className:pe.a.InfoItem,style:{width:"".concat(n,"px")},children:[!!t.images.length&&Object(Z.jsx)(se,Object(l.a)({width:n-2*b(p("--padding-large")),ratio:1.6},t.images[0])),t.text&&Object(Z.jsx)(Oe,{entry:t.text,size:"m"})]})};var Pe=function(e){var t,n=e.items,a=e.config,r=e.open,o=e.onOpen,c=e.onClose,s=Object(i.useState)(!1),l=Object(w.a)(s,2),u=l[0],d=l[1];Object(i.useEffect)((function(){return d(!0)}),[r]);var f=Math.round(Math.min((null===a||void 0===a?void 0:a.imageSize)||b(p("--default-content-width")),window.innerWidth/2));return j()&&g()&&(f=window.innerWidth-2*b(p("--padding-medium"))),Object(Z.jsx)("div",{className:me.a.Info,style:{width:"".concat(f,"px")},children:Object(Z.jsx)("div",{className:je()(me.a.infoCurtain,(t={},Object(X.a)(t,me.a.isTransitioning,u),Object(X.a)(t,me.a.isOpen,r),Object(X.a)(t,me.a.isClosed,!r),t)),onAnimationEnd:function(){if(d(!1),r){if("function"!==typeof o)return;o()}else{if("function"!==typeof c)return;c()}},children:n.map((function(e,t){return Object(Z.jsx)(Ie,{item:e,width:f},t)}))})})},ke=n(13),Te=n.n(ke),Ae="";var Ce=function(e){var t,n=e.page,i=e.target,a=e.selected,r=e.children;return Ae!==a&&(window.scroll(0,0),Ae=a),Object(Z.jsx)("div",{className:je()(Te.a.PageBox,(t={},Object(X.a)(t,Te.a.isTarget,n===i),Object(X.a)(t,Te.a.isSelected,n===a),t)),children:r})};var Se=function(){var e=D(L,W),t=e.state,n=e.asyncDispatch,a=t.siteContent,r=t.targetPage,o=t.selectedPage;return t.selectedProjectId,Object(i.useEffect)((function(){n(F.getSiteContent())}),[n]),console.log("app render state",t),Object(Z.jsxs)("div",{className:o===E?s.a.isHome:"",children:[Object(Z.jsx)(U,{open:r!==E,onOpen:function(){return n(F.setPage(r))},onClose:function(){return n(F.setPage(E))}}),Object(Z.jsx)(Y,{children:Object(Z.jsx)(te,{label:a.config?a.config.documentTitle:"Studio Anderhalden",cta:function(){return n(F.setTarget(E))}})}),Object(Z.jsxs)(G,{children:[Object(Z.jsx)(te,{label:"Grafik",active:r===M,disabled:!a.projects.length,cta:function(){return n(F.setTarget(M))}}),Object(Z.jsx)(te,{label:"Kontakt + Info",active:r===R,disabled:!a.infoBlocks.length,cta:function(){return n(F.setTarget(R))}})]}),Object(Z.jsx)(Ce,{page:M,target:r,selected:o,children:Object(Z.jsx)(de,{items:a.projects,config:a.config,setProjectId:function(e){return n(F.setProjectId(e))}})}),Object(Z.jsx)(Ce,{page:R,target:r,selected:o,children:Object(Z.jsx)(Pe,{items:a.infoBlocks,config:a.config,open:r===R,onOpen:function(){return n(F.setPage(R))},onClose:function(){return n(F.setPage(r))}})})]})};o.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(Se,{})}),document.getElementById("root"))},12:function(e,t,n){e.exports={RichText:"RichText_RichText__1BywL",mediumSize:"RichText_mediumSize__1Xnal",smallSize:"RichText_smallSize__BL3Kk"}},13:function(e,t,n){e.exports={PageBox:"PageBox_PageBox__CpPMT",isTarget:"PageBox_isTarget__fESuA",isSelected:"PageBox_isSelected__ls1KE"}},20:function(e,t){},21:function(e,t,n){e.exports={Projects:"Projects_Projects__1ECks",centerLine:"Projects_centerLine__39BzK"}},22:function(e,t,n){e.exports={ProjectsItem:"ProjectsItem_ProjectsItem__ixgAC"}},23:function(e,t,n){e.exports={ImageBox:"Image_ImageBox__16ZVW",Image:"Image_Image__1br15"}},42:function(e,t,n){e.exports={App:"App_App__16ZpL",isHome:"App_isHome__oTROn"}},46:function(e,t,n){e.exports={Navigation:"Navigation_Navigation__1tTPb"}},47:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH",wiggle:"Logo_wiggle__23iAG"}},48:function(e,t,n){e.exports={InfoItem:"InfoItem_InfoItem__26gzv"}},54:function(e,t,n){},8:function(e,t,n){e.exports={Info:"Info_Info__3WoRg",infoCurtain:"Info_infoCurtain__17dII",isTransitioning:"Info_isTransitioning__1fRnE",isClosed:"Info_isClosed__30Tas",close:"Info_close__3kAyz",isOpen:"Info_isOpen__3spwN",open:"Info_open__SO0W7"}},83:function(e,t){},9:function(e,t,n){e.exports={Curtain:"Curtain_Curtain__23SsW",left:"Curtain_left__3IErm",right:"Curtain_right__Zgczi"}}},[[114,1,2]]]);
//# sourceMappingURL=main.1c6d328a.chunk.js.map