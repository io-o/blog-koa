webpackJsonp([5],{"+skl":function(t,e){},0:function(t,e,n){t.exports=n("NHnr")},"6TEP":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/5sW"),o=n("BTaQ"),r=n.n(o),u=(n("+skl"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),i=[],s=n("XyMi");function c(t){n("OYMq")}var l=null,m=!1,d=c,h=null,f=null,p=Object(s["a"])(l,u,i,m,d,h,f),v=p.exports,k=n("/ocq"),b={methods:{menuSe:function(t){switch(t){case"1":this.$router.push({name:"admin"});break;case"2":this.$router.push({name:"edit"});break}}}},g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("router-view"),n("nav",[n("Menu",{staticClass:"home-nav",attrs:{theme:"dark","active-name":"1"},on:{"on-select":t.menuSe}},[n("MenuGroup",{attrs:{title:"🍆🍆🍆"}},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"document-text"}}),t._v("\n        文章管理\n        ")],1),n("MenuItem",{attrs:{name:"2"}},[n("Icon",{attrs:{type:"edit"}}),t._v("\n        发布文章\n        ")],1)],1)],1)],1)],1)},q=[];function y(t){n("6TEP")}var M=!1,w=y,_="data-v-415a6a60",O=null,x=Object(s["a"])(b,g,q,M,w,_,O),E=x.exports;a["default"].use(k["a"]);var $=new k["a"]({routes:[{path:"/",name:"home",component:E,meta:{requireAuth:!0},redirect:"/admin",children:[{path:"/edit",name:"edit",component:function(){return n.e(0).then(n.bind(null,"2qv1"))},meta:{requireAuth:!0}},{path:"/admin",name:"admin",component:function(){return n.e(3).then(n.bind(null,"0yCz"))},meta:{requireAuth:!0}}]},{path:"/login",name:"login",component:function(){return n.e(1).then(n.bind(null,"lmfZ"))}},{path:"*",name:"err",component:function(){return n.e(2).then(n.bind(null,"+H76"))}}]}),j=n("NYxO");a["default"].use(j["a"]);var I=new j["a"].Store({state:{token:sessionStorage.getItem("token")},mutations:{login:function(t,e){t.token=e}},actions:{}}),P=(n("y9m4"),n("mtWM")),T=n.n(P),A=n("mw3O"),S=n.n(A),B="localhost"===location.hostname?"http://127.0.0.1:3210":"https://admin.ojbk.fun",C=T.a.create({baseURL:B,timeout:5e3});C.interceptors.request.use(function(t){return"post"===t.method&&(t.data=S.a.stringify(t.data)),""!==I.state.token&&(t.headers["xToken"]=I.state.token),t},function(t){console.log(t),Promise.reject(t)});var H=C;a["default"].config.productionTip=!1,a["default"].prototype.$http=H,a["default"].use(r.a),$.beforeEach(function(t,e,n){r.a.LoadingBar.start(),t.meta.requireAuth?null!==I.state.token?n():(console.log(I.state.token),n({path:"/login",query:{redirect:t.fullPath}})):n()}),$.afterEach(function(t){r.a.LoadingBar.finish()}),new a["default"]({router:$,store:I,render:function(t){return t(v)}}).$mount("#app")},OYMq:function(t,e){}},[0]);