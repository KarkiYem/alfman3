(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e||!t)throw new Error("instance & callback is required");var l=!1,r=function(){l||(l=!0,t&&t.apply(null,arguments))};o?e.$once("after-leave",r):e.$on("after-leave",r),setTimeout((function(){r()}),n+100)}},443:function(e,t,n){},444:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=71)}({0:function(e,t,n){"use strict";function o(e,t,n,o,l,r,d,c){var m,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),d?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},f._ssrRegister=m):l&&(m=c?function(){l.call(this,this.$root.$options.shadowRoot)}:l),m)if(f.functional){f._injectStyles=m;var v=f.render;f.render=function(e,t){return m.call(t),v(e,t)}}else{var y=f.beforeCreate;f.beforeCreate=y?[].concat(y,m):[m]}return{exports:e,options:f}}n.d(t,"a",(function(){return o}))},13:function(e,t){e.exports=n(168)},2:function(e,t){e.exports=n(87)},41:function(e,t){e.exports=n(430)},7:function(e,t){e.exports=n(4)},71:function(e,t,n){"use strict";n.r(t);var o=n(7),l=n.n(o),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-loading-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}],style:{backgroundColor:e.background||""}},[n("div",{staticClass:"el-loading-spinner"},[e.spinner?n("i",{class:e.spinner}):n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),e.text?n("p",{staticClass:"el-loading-text"},[e._v(e._s(e.text))]):e._e()])])])};r._withStripped=!0;var d={data:function(){return{text:null,spinner:null,background:null,fullscreen:!0,visible:!1,customClass:""}},methods:{handleAfterLeave:function(){this.$emit("after-leave")},setText:function(text){this.text=text}}},c=n(0),component=Object(c.a)(d,r,[],!1,null,null,null);component.options.__file="packages/loading/src/loading.vue";var m=component.exports,f=n(2),v=n(13),y=n(41),k=n.n(y),h=l.a.extend(m),x={install:function(e){if(!e.prototype.$isServer){var t=function(t,o){o.value?e.nextTick((function(){o.modifiers.fullscreen?(t.originalPosition=Object(f.getStyle)(document.body,"position"),t.originalOverflow=Object(f.getStyle)(document.body,"overflow"),t.maskStyle.zIndex=v.PopupManager.nextZIndex(),Object(f.addClass)(t.mask,"is-fullscreen"),n(document.body,t,o)):(Object(f.removeClass)(t.mask,"is-fullscreen"),o.modifiers.body?(t.originalPosition=Object(f.getStyle)(document.body,"position"),["top","left"].forEach((function(e){var n="top"===e?"scrollTop":"scrollLeft";t.maskStyle[e]=t.getBoundingClientRect()[e]+document.body[n]+document.documentElement[n]-parseInt(Object(f.getStyle)(document.body,"margin-"+e),10)+"px"})),["height","width"].forEach((function(e){t.maskStyle[e]=t.getBoundingClientRect()[e]+"px"})),n(document.body,t,o)):(t.originalPosition=Object(f.getStyle)(t,"position"),n(t,t,o)))})):(k()(t.instance,(function(e){if(t.instance.hiding){t.domVisible=!1;var n=o.modifiers.fullscreen||o.modifiers.body?document.body:t;Object(f.removeClass)(n,"el-loading-parent--relative"),Object(f.removeClass)(n,"el-loading-parent--hidden"),t.instance.hiding=!1}}),300,!0),t.instance.visible=!1,t.instance.hiding=!0)},n=function(t,n,o){n.domVisible||"none"===Object(f.getStyle)(n,"display")||"hidden"===Object(f.getStyle)(n,"visibility")?n.domVisible&&!0===n.instance.hiding&&(n.instance.visible=!0,n.instance.hiding=!1):(Object.keys(n.maskStyle).forEach((function(e){n.mask.style[e]=n.maskStyle[e]})),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&Object(f.addClass)(t,"el-loading-parent--relative"),o.modifiers.fullscreen&&o.modifiers.lock&&Object(f.addClass)(t,"el-loading-parent--hidden"),n.domVisible=!0,t.appendChild(n.mask),e.nextTick((function(){n.instance.hiding?n.instance.$emit("after-leave"):n.instance.visible=!0})),n.domInserted=!0)};e.directive("loading",{bind:function(e,n,o){var l=e.getAttribute("element-loading-text"),r=e.getAttribute("element-loading-spinner"),d=e.getAttribute("element-loading-background"),c=e.getAttribute("element-loading-custom-class"),m=o.context,mask=new h({el:document.createElement("div"),data:{text:m&&m[l]||l,spinner:m&&m[r]||r,background:m&&m[d]||d,customClass:m&&m[c]||c,fullscreen:!!n.modifiers.fullscreen}});e.instance=mask,e.mask=mask.$el,e.maskStyle={},n.value&&t(e,n)},update:function(e,n){e.instance.setText(e.getAttribute("element-loading-text")),n.oldValue!==n.value&&t(e,n)},unbind:function(e,n){e.domInserted&&(e.mask&&e.mask.parentNode&&e.mask.parentNode.removeChild(e.mask),t(e,{value:!1,modifiers:n.modifiers})),e.instance&&e.instance.$destroy()}})}}},C=x,_=n(9),O=n.n(_),j=l.a.extend(m),$={text:null,fullscreen:!0,body:!1,lock:!1,customClass:""},S=void 0;j.prototype.originalPosition="",j.prototype.originalOverflow="",j.prototype.close=function(){var e=this;this.fullscreen&&(S=void 0),k()(this,(function(t){var n=e.fullscreen||e.body?document.body:e.target;Object(f.removeClass)(n,"el-loading-parent--relative"),Object(f.removeClass)(n,"el-loading-parent--hidden"),e.$el&&e.$el.parentNode&&e.$el.parentNode.removeChild(e.$el),e.$destroy()}),300),this.visible=!1};var w=function(e,t,n){var o={};e.fullscreen?(n.originalPosition=Object(f.getStyle)(document.body,"position"),n.originalOverflow=Object(f.getStyle)(document.body,"overflow"),o.zIndex=v.PopupManager.nextZIndex()):e.body?(n.originalPosition=Object(f.getStyle)(document.body,"position"),["top","left"].forEach((function(t){var n="top"===t?"scrollTop":"scrollLeft";o[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]+"px"})),["height","width"].forEach((function(t){o[t]=e.target.getBoundingClientRect()[t]+"px"}))):n.originalPosition=Object(f.getStyle)(t,"position"),Object.keys(o).forEach((function(e){n.$el.style[e]=o[e]}))},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!l.a.prototype.$isServer){if("string"==typeof(e=O()({},$,e)).target&&(e.target=document.querySelector(e.target)),e.target=e.target||document.body,e.target!==document.body?e.fullscreen=!1:e.body=!0,e.fullscreen&&S)return S;var t=e.body?document.body:e.target,n=new j({el:document.createElement("div"),data:e});return w(e,t,n),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&Object(f.addClass)(t,"el-loading-parent--relative"),e.fullscreen&&e.lock&&Object(f.addClass)(t,"el-loading-parent--hidden"),t.appendChild(n.$el),l.a.nextTick((function(){n.visible=!0})),e.fullscreen&&(S=n),n}};t.default={install:function(e){e.use(C),e.prototype.$loading=P},directive:C,service:P}},9:function(e,t){e.exports=n(169)}})},628:function(e,t,n){},629:function(e,t,n){},668:function(e,t,n){"use strict";n(628)},669:function(e,t,n){"use strict";n(629)},741:function(e,t,n){"use strict";n.r(t);var o,l=n(11),r=n(9),d=(n(437),n(86),n(438)),c=n.n(d),m=(n(439),n(440)),f=n.n(m),v=(n(43),n(10),n(118)),y=n(116),k={layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(o={BasePagination:n(445).b,RouteBreadCrumb:y.a},Object(r.a)(o,f.a.name,f.a),Object(r.a)(o,c.a.name,c.a),o),data:function(){return{model:{id:"",person:"",adult:"",kid:"",cruise:"",deck:"",date:"",booking_date:"",total:""}}},methods:{selectionChange:function(e){this.selectedRows=e},getData:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(n=e).$store.state.test,t.next=4,v.a.collection("Booking").getOne(o);case 4:l=t.sent,n.model=l;case 6:case"end":return t.stop()}}),t)})))()},gen:function(){var e=this;e.$store.commit("test",e.model.id),e.$router.push("/qrCode")}},mounted:function(){this.getData()}},h=(n(668),n(669),n(7)),component=Object(h.a)(k,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("base-header",{staticClass:"pb-6"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[t("route-bread-crumb")],1)])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",[t("card",{staticClass:"no-border-card",attrs:{"body-classes":"px-0 pb-1","footer-classes":"pb-2"}},[t("div",[t("div",{staticClass:"bt"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Booking Id",name:"Booking Id","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.id,callback:function(t){e.$set(e.model,"id",t)},expression:"model.id"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"No. of Person",name:"no. of Person","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.person,callback:function(t){e.$set(e.model,"person",t)},expression:"model.person"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"No. of Adult",name:"no. of Adult","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.adult,callback:function(t){e.$set(e.model,"adult",t)},expression:"model.adult"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"No. of Kid",name:"no. of Kid","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.kid,callback:function(t){e.$set(e.model,"kid",t)},expression:"model.kid"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Cruise",name:"Cruise","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.cruise,callback:function(t){e.$set(e.model,"cruise",t)},expression:"model.cruise"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Deck",name:"Deck","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.deck,callback:function(t){e.$set(e.model,"deck",t)},expression:"model.deck"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Total",name:"Total","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.total,callback:function(t){e.$set(e.model,"total",t)},expression:"model.total"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Boarding Date",name:"Boarding Date","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.date,callback:function(t){e.$set(e.model,"date",t)},expression:"model.date"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Booking Date",name:"Booking Date","success-message":"Looks good!",rules:"required",readonly:""},model:{value:e.model.booking_date,callback:function(t){e.$set(e.model,"booking_date",t)},expression:"model.booking_date"}})],1),e._v(" "),t("button",{staticClass:"btn btn-primary mb-4",attrs:{type:"button"},on:{click:function(t){return e.gen()}}},[e._v("Generate Ticket")])])])])],1)])],1)}),[],!1,null,"3e7e2ca3",null);t.default=component.exports}}]);