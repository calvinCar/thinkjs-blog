webpackJsonp([18],{"+UNP":function(e,t,n){t.API_ROOT="http://chejinsong.com/api"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=n("NYxO"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=n("VU/8")({name:"app"},r,!1,null,null,null).exports,l=n("/ocq"),s=[{path:"/login",name:"login",meta:{title:"Login - 登录"},component:function(e){Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("ZWsv")];e.apply(null,t)}.bind(this)).catch(n.oe)}}].concat([{path:"/",name:"Admin",meta:{title:"后台",requiresAuth:!0},redirect:"/home",component:function(e){Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("sWj/")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"home",name:"Home",meta:{title:"控制台",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("P1Pu")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"content/save",name:"ContentSave",meta:{title:"内容编辑",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("Wn5O")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"content/list",name:"ContentList",meta:{title:"内容列表",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("DShp")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"page/save",name:"ContentSave",meta:{title:"页面编辑",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("fB4o")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"page/list",name:"ContentList",meta:{title:"页面列表",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("LBHn")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"category/save",name:"CategorySave",meta:{title:"分类编辑",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(15)]).then(function(){var t=[n("1rBo")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"category/list",name:"CategoryList",meta:{title:"分类列表",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(16)]).then(function(){var t=[n("AGRC")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"comment/save",name:"CommentSave",meta:{title:"分类编辑",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(13)]).then(function(){var t=[n("nVCP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"comment/list",name:"CommentList",meta:{title:"分类列表",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(14)]).then(function(){var t=[n("XfaP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"tag/save",name:"TagSave",meta:{title:"标签编辑",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("PKx2")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"tag/list",name:"TagList",meta:{title:"标签列表",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("Vpq0")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"user/info",name:"UserInfo",meta:{title:"个人资料",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("DUtt")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"user/password",name:"UserPassword",meta:{title:"修改密码",requiresAuth:!0},component:function(e){Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("taz5")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],[{path:"/*",name:"error-404",meta:{title:"404 - 页面不存在"},component:function(e){Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("U4kt")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]);a.default.use(l.a);var u={routes:s},c=new l.a(u);c.beforeEach(function(e,t,n){window.document.title=e.meta.title,localStorage.getItem("token")||!0!==e.meta.requiresAuth?localStorage.getItem("token")&&"login"===e.name&&n("/home"):n("/login"),n()}),c.afterEach(function(e){window.scrollTo(0,0)});var m=c,p={setToken:function(e,t){localStorage.setItem("token",t),e.value=t},clearToken:function(e,t){localStorage.removeItem("token"),e.value=""}},h={state:{value:localStorage.getItem("token")},getters:{getToken:function(e){return e.value},verifyToken:function(e){return!!e.value}},actions:{},mutations:p},f={state:{menu:{fold:"true"===localStorage.getItem("menu_fold")},user:{name:localStorage.getItem("user_name"),info:{}}},getters:{getMenu:function(e){return e.menu},getUser:function(e){return e.user}},actions:{},mutations:{setMenuFlod:function(e,t){localStorage.setItem("menu_fold",t),e.menu.fold=t?1:0},setUserName:function(e,t){localStorage.setItem("user_name",t),e.user.name=t},setUserInfo:function(e,t){e.user.info=t}}};a.default.use(o.a);var d=new o.a.Store({actions:{},getters:{},modules:{token:h,admin:f},strict:!1}),g=n("//Fk"),v=n.n(g),P=n("pFYg"),y=n.n(P),b=n("Dd8w"),A=n.n(b),w=n("mtWM"),q=n.n(w),S=n("BTaQ"),k=n("+UNP");q.a.defaults.baseURL=k.API_ROOT,q.a.defaults.timeout=5e3,q.a.interceptors.request.use(function(e){return S.LoadingBar.start(),e.headers={"Content-Type":"application/x-www-form-urlencoded"},localStorage.getItem("token")&&(e.headers.Authorization=localStorage.getItem("token")),"post"===e.method&&"multipart/form-data"!==e.headers["Content-Type"]?e.data=A()({},e.data,{_t:Date.parse(new Date)/1e3}):"get"===e.method&&(e.params=A()({_t:Date.parse(new Date)/1e3},e.params)),e},function(e){return S.LoadingBar.error(),S.Message.error("请求服务器超时"),e}),q.a.interceptors.response.use(function(e){if(e&&"object"===y()(e.data)){var t="",n=e.data.errno;switch(n){case 1001:for(var a in e.data.data)t+=e.data.data[a]+";";break;default:t=e.data.errmsg}""!==t&&0!==n&&S.Message.error(t),""!==t&&0===n&&S.Message.success(t)}else console.log(e),S.LoadingBar.error(),S.Message.error("服务器响应格式错误");return S.LoadingBar.finish(),e},function(e){var t="服务器响应错误";if(e.response)switch(e.response.status){case 401:t="请登录后操作",d.commit("clearToken"),m.replace("/login")}return S.LoadingBar.error(),S.Message.error(t),v.a.reject(e.response.data)});var I=q.a,T=n("Rf8U"),L=n.n(T),C=n("9JMe");a.default.use(o.a),a.default.use(L.a,I),Object(C.sync)(d,m),a.default.config.productionTip=!1,new a.default({el:"#app",store:d,router:m,template:"<App/>",components:{App:i}})}},["NHnr"]);
//# sourceMappingURL=app.f609b3dc278090ddef0b.js.map