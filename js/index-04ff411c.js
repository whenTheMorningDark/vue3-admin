import{c as P,u as R,l as A,E as T,a as N,b as S,N as E}from"./vendor-56d62de5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n},O={};function D(t,e){const n=Vue.resolveComponent("RouterView");return Vue.openBlock(),Vue.createBlock(n)}const B=z(O,[["render",D]]),k="modulepreload",Z=function(t,e){return new URL(t,e).href},L={},p=function(e,n,r){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Z(l,r),l in L)return;L[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!r)for(let a=o.length-1;a>=0;a--){const d=o[a];if(d.href===l&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":k,c||(i.as="script",i.crossOrigin=""),i.href=l,document.head.appendChild(i),c)return new Promise((a,d)=>{i.addEventListener("load",a),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},$=t=>{var e;return(e=t.children)==null?void 0:e.some(n=>n.children&&n.children.length>0)},M=(t,e="")=>t.reduce((n,r)=>{const o=e+"/"+r.path.replace(/^\//,"");if(r.children&&r.children.length>0){const l=M(r.children,o);n.push(...l)}else{const l={...r,path:o.replace(/^\//,"")};n.push(l)}return n},[]),U=t=>t.map(e=>{if($(e)){const n=M(e.children||[]);e.children=n}return e}),q=t=>{const e=P(t);return U(e)},j=""+new URL("../png/left-logo-97a20e20.png",import.meta.url).href,v=t=>(Vue.pushScopeId("data-v-202a0e2e"),t=t(),Vue.popScopeId(),t),G={class:"login-container"},W=v(()=>Vue.createElementVNode("div",{class:"login-container-left"},[Vue.createElementVNode("img",{src:j,width:"500",height:"380"})],-1)),K={class:"login-container-card"},J=v(()=>Vue.createElementVNode("h2",{class:"title"},"FASTADMIN",-1)),Q={class:"content"},X=v(()=>Vue.createElementVNode("div",{style:{width:"120px"}},"123456",-1)),Y=v(()=>Vue.createElementVNode("div",{class:"login-tips"},[Vue.createElementVNode("span",{class:"register"},"没有账号,立刻注册"),Vue.createElementVNode("span",{class:"forget-password"},"忘记密码?")],-1)),ee=Vue.defineComponent({__name:"index",setup(t){const e=Vue.ref(!1),n=VueRouter.useRouter(),r=Vue.reactive({username:"admin",password:"12345678",code:""}),o=()=>{n.push("/dashboard")};return(l,c)=>{const u=Vue.resolveComponent("el-input"),s=Vue.resolveComponent("el-form-item"),i=Vue.resolveComponent("el-button"),a=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createElementBlock("div",G,[W,Vue.createElementVNode("div",K,[J,Vue.createElementVNode("div",Q,[Vue.createVNode(a,{ref:"loginFormRef",model:r,size:"large"},{default:Vue.withCtx(()=>[Vue.createVNode(s,{prop:"username"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:r.username,"onUpdate:modelValue":c[0]||(c[0]=d=>r.username=d),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":Vue.unref(R),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),Vue.createVNode(s,{prop:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:r.password,"onUpdate:modelValue":c[1]||(c[1]=d=>r.password=d),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":Vue.unref(A),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),Vue.createVNode(s,{prop:"verifyCode"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{clearable:"",placeholder:"输入验证码"},{append:Vue.withCtx(()=>[X]),_:1})]),_:1}),Y,Vue.createVNode(i,{loading:e.value,type:"primary",size:"large",onClick:o},{default:Vue.withCtx(()=>[Vue.createTextVNode("登 录")]),_:1},8,["loading"])]),_:1},8,["model"])])])])}}});const te=z(ee,[["__scopeId","data-v-202a0e2e"]]),h=()=>p(()=>import("./index-6997b39b.js"),["./index-6997b39b.js","./themeStore-b9629ceb.js","./vendor-56d62de5.js","..\\css\\index-480e2777.css"],import.meta.url),b=[{path:"/redirect",component:h,meta:{hidden:!0},children:[{path:"/redirect/:path(.*)",component:()=>p(()=>import("./index-586d1134.js"),[],import.meta.url)}]},{path:"/login",component:te,meta:{hidden:!0}},{path:"/",component:h,redirect:"/dashboard",children:[{path:"dashboard",component:()=>p(()=>import("./index-de149a0c.js"),["./index-de149a0c.js","./themeStore-b9629ceb.js","./vendor-56d62de5.js","..\\css\\index-fdc24b3c.css"],import.meta.url),name:"dashboard",meta:{title:"首页",svgIcon:"dashboard",affix:!0}}]},{path:"/entertainment",component:h,redirect:"/entertainment/gamePlay",name:"entertainment",meta:{title:"娱乐专区",elIcon:"Location"},children:[{path:"gamePlay",component:()=>p(()=>import("./index-d60cde31.js"),["./index-d60cde31.js","./vendor-56d62de5.js","..\\css\\index-1ab765bf.css"],import.meta.url),name:"gamePlay",meta:{title:"游戏专区",elIcon:"Location"}},{path:"livePlay",component:()=>p(()=>import("./index-50becb93.js"),[],import.meta.url),name:"livePlay",meta:{title:"直播专区",elIcon:"House"}}]},{path:"/moreLevel",component:h,name:"moreLevel",meta:{title:"多层级菜单",elIcon:"Grid"},children:[{path:"moreLevel-1",name:"moreLevel-1",component:()=>p(()=>import("./index-d897d9cc.js"),["./index-d897d9cc.js","./vendor-56d62de5.js"],import.meta.url),meta:{title:"多层级菜单1",elIcon:"House",alwaysShow:!0},children:[{path:"moreLevel-1-1",name:"moreLevel-1-1",component:()=>p(()=>import("./more1-1-923deebe.js"),[],import.meta.url),meta:{title:"多层级菜单1-qaq",elIcon:"House",keepAlive:!0}}]},{path:"moreLevel-2",component:()=>p(()=>import("./moreLevel-2-328cabe6.js"),[],import.meta.url),name:"moreLevel-2",meta:{title:"普通层级",elIcon:"Grid"}}]},{path:"/components",component:h,redirect:"/components/Calendar",name:"组件",meta:{title:"组件",elIcon:"Location"},children:[{path:"Calendar",component:()=>p(()=>import("./index-ecbfce86.js"),["./index-ecbfce86.js","..\\css\\index-3aca5db4.css"],import.meta.url),name:"Calendar",meta:{title:"日历组件",elIcon:"Location"}},{path:"CountUp",component:()=>p(()=>import("./index-6fbd14fb.js"),["./index-6fbd14fb.js","./vendor-56d62de5.js"],import.meta.url),name:"CountUp",meta:{title:"数字滚动组件",elIcon:"Location"}},{path:"LogicFlow",component:()=>p(()=>import("./index-e724a98e.js"),["./index-e724a98e.js","./vendor-56d62de5.js"],import.meta.url),name:"LogicFlow",meta:{title:"语雀流程图",elIcon:"Location"}}]}],x=VueRouter.createRouter({history:VueRouter.createWebHashHistory("hash"),routes:q(b)});function ne(t){for(const[e,n]of Object.entries(T))t.component(e,n)}function oe(t){ne(t)}const le=["xlink:href","fill"],re=Vue.defineComponent({name:"SvgIcon",__name:"index",props:{prefix:{default:"#icon-"},name:{},color:{default:"default"},size:{default:"default"},customClass:{}},setup(t){const e=t,n={default:16,small:12,large:24},r={primary:"#409EFF",success:"#67C23A",error:"#bb1b1b",warn:"#F56C6C",default:"#333333"},o=Vue.computed(()=>r[e.color]||e.color),l=Vue.computed(()=>typeof e.size=="string"?n[e.size]:e.size);return(c,u)=>(Vue.openBlock(),Vue.createElementBlock("svg",{style:Vue.normalizeStyle({width:l.value+"px",height:l.value+"px"}),class:Vue.normalizeClass([[c.customClass],"svg-icon-wrapper"])},[Vue.createElementVNode("use",{"xlink:href":c.prefix+c.name,fill:o.value},null,8,le)],6))}});if(typeof window<"u"){let t=function(){var e=document.body,n=document.getElementById("__svg__icons__dom__");n||(n=document.createElementNS("http://www.w3.org/2000/svg","svg"),n.style.position="absolute",n.style.width="0",n.style.height="0",n.id="__svg__icons__dom__",n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),n.innerHTML='<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-china"><path d="m158.7 374.9 697.4-.2s72 1 89.7-61.6c3.7-13.1-16.5 16.3-70.7-63.3l-85.8-134.2S766 68 733.2 68c-21.2 0-78.8 47.6-78.8 47.6l-282 .1s-54-47.6-80.4-47.6c-23.3 0-58 48.6-58 48.6l-77.3 131.2s-42.6 61.2-79.8 79.8c-10.3 5.3 26.8 49.8 81.8 47.2z" fill="#FF6A48" /><path d="M857.9 385H856l-697 .2c-49.8 1.9-88.5-30.8-93.3-49.6-2.3-8.8 2.2-14.5 6.7-16.8 34.4-17.2 75.5-75.9 76-76.5l76.9-130.6C232 102.1 265.4 58 292 58s71.5 36.7 84.2 47.6l274.6-.1c14.6-11.8 60.3-47.4 82.3-47.6h.2c38.7 0 64.2 51.1 65.3 53.3l85.2 133.2c35.1 51.6 53.7 53.6 59.8 54.2 2.9.3 7.8.8 10.9 5.5 3.2 4.7 1.7 9.9 1.2 11.9-15.4 54.2-69.6 68.7-97.8 69zm-699.3-20.3c.1 0 .1 0 0 0l697.5-.2c2.8.2 59.1 0 77.6-47.1-16-4.3-36.9-17.6-66.9-61.8l-85.9-134.4c-6.3-12.6-25.9-42.9-47.5-42.9h-.1c-10.9.1-45.9 23.6-72.2 45.3-1.8 1.5-4.3 2.6-6.5 2.3l-282 .1c-2.5 0-4.9-.9-6.7-2.6-19.8-17.4-57.3-45.1-73.7-45h-.1c-12.3.1-36.9 26.5-49.6 44.3l-76.8 130.5c-2.1 3.1-40.9 58.5-78.3 80.7 7.1 10.3 34 32.7 71.1 30.8h.1z" fill="#7F0518" /><path d="M372.3 128.1 236.9 374.9" fill="#EC1B23" /><path d="M237 385.1c-1.7 0-3.4-.4-5-1.3-4.9-2.7-6.7-8.9-4-13.9l135.4-246.8c2.7-4.9 8.9-6.7 13.9-4 4.9 2.7 6.7 8.9 4 13.9L245.8 379.8c-1.8 3.4-5.3 5.3-8.8 5.3z" fill="#7F0518" /><path d="m651 128 135.5 246.8" fill="#EC1B23" /><path d="M786.6 385c-3.6 0-7.2-1.9-9.1-5.3L642.1 132.9c-2.7-4.9-.9-11.1 4-13.8 4.9-2.7 11.1-.9 13.8 4l135.5 246.8c2.7 4.9.9 11.1-4 13.8-1.5.9-3.1 1.3-4.8 1.3zm-414.2.1c-1.7 0-3.4-.4-5-1.2-4.9-2.7-6.8-8.9-4.1-13.8L504.5 111c1.8-3.4 5.4-5.3 9.1-5.3 3.8.1 7.2 2.2 8.9 5.6l124.1 246.5c2.5 5 .5 11.2-4.5 13.7-5 2.6-11.2.5-13.7-4.5L513.2 137.8l-131.9 242c-1.8 3.3-5.3 5.2-8.9 5.3z" fill="#7F0518" /><path d="M193.3 379.2h640.6v352.7H193.3z" fill="#FFF" /><path d="m834 742.1-640.7.1c-2.7 0-5.3-1.1-7.2-3-1.9-1.9-3-4.5-3-7.2l-.1-352.7c0-5.6 4.6-10.2 10.2-10.2l640.6-.1c5.6 0 10.2 4.6 10.2 10.2l.1 352.7c0 2.7-1.1 5.3-3 7.2-1.9 1.9-4.4 3-7.1 3zm-630.5-20.3 620.2-.1-.1-332.3-620.2.1.1 332.3z" fill="#7F0518" /><path d="M193.4 734.1H834v151.2H193.4z" fill="#FF6A48" /><path d="M834.1 895.4c-.1 0-.1 0 0 0l-640.7.1c-5.6 0-10.2-4.6-10.2-10.2V734.1c0-2.7 1.1-5.3 3-7.2 1.9-1.9 4.7-2.7 7.2-3l640.6-.1c5.6 0 10.2 4.6 10.2 10.2v151.2c0 2.7-1.1 5.3-3 7.2-1.9 1.9-4.5 3-7.1 3zm-630.5-20.2 620.2-.1V744.3l-620.2.1v130.8z" fill="#7F0518" /><path d="M636.3 734c0-1.6.2-3.1.2-4.7V583.1c0-67.8-55-122.8-122.9-122.8s-122.9 55-122.8 122.9v146.2c0 1.6.2 3.1.2 4.7l245.3-.1z" fill="#FFC831" /><path d="m636.3 744.2-255 .1-.4-9.8c-.2-2.7-.3-3.9-.3-5.1V583.2c0-73.4 59-133.5 133-133.1 35.5 0 69 13.8 94.1 38.9 25.1 25.1 39 58.5 39 94.1l-.8 159.1-9.6 2zM401 723.9h225.2l.1-140.7c0-62.1-50.6-112.6-112.7-112.6h-1.1c-61.6.6-111.6 50.9-111.6 112.7l.1 140.6z" fill="#7F0518" /><path d="M786.3 513.4c0 28.1-22.7 50.8-50.8 50.8-28.1 0-50.8-22.7-50.8-50.8 0-28.1 22.7-50.8 50.8-50.8 28 0 50.8 22.7 50.8 50.8z" fill="#FF6A48" /><path d="M736.1 574.4h-.6c-33.6 0-61-27.4-61-61 0-33.4 27-60.7 60.4-61h.6c16.3 0 31.6 6.3 43.1 17.8s17.9 26.8 17.9 43.1-6.3 31.6-17.9 43.1c-11.4 11.5-26.4 17.8-42.5 18zm-1-101.6c-22.2.2-40.2 18.3-40.2 40.6 0 22.4 18.2 40.6 40.6 40.6 10.9-.1 21-4.2 28.7-11.9 7.7-7.7 11.9-17.9 11.9-28.7h10.2-10.2c0-10.8-4.2-21-11.9-28.7-7.7-7.7-17.9-11.9-28.7-11.9h-.4z" fill="#7F0518" /><path d="M338.3 513.3c0 28.1-22.7 50.8-50.8 50.8-28.1 0-50.8-22.7-50.8-50.8 0-28.1 22.7-50.8 50.8-50.8 28.1 0 50.8 22.8 50.8 50.8z" fill="#FF6A48" /><path d="M288.1 574.3h-.6c-16.3 0-31.6-6.3-43.1-17.8s-17.9-26.8-17.9-43.1c0-33.4 27-60.7 60.4-61h.6c33.6 0 61 27.4 61 61 0 16.3-6.3 31.6-17.9 43.1-11.3 11.3-26.4 17.6-42.5 17.8zm-1-101.6c-22.2.2-40.2 18.3-40.2 40.6 0 10.8 4.2 21 11.9 28.7 7.7 7.7 17.9 11.9 28.7 11.9s21-4.2 28.7-11.9c7.7-7.7 11.9-17.9 11.9-28.7 0-22.4-18.2-40.6-40.6-40.6h-.4zM513.7 742.1s0 .1 0 0c-5.7 0-10.3-4.6-10.3-10.2l-.1-271.6c0-5.6 5.2-10 10.2-10.2 5.6 0 10.2 4.6 10.2 10.2l.1 271.6c0 5.7-4.5 10.2-10.1 10.2z" fill="#7F0518" /><path d="m79.54 618.74 230.9-2.21 2.538 265.2-230.9 2.21z" fill="#FFF" /><path d="m313.1 891.9-230.9 2.2c-5.6.1-10.2-4.5-10.3-10.1l-2.5-265.2c-.1-5.6 4.5-10.2 10.1-10.3l230.9-2.2c5.6-.1 10.2 4.5 10.3 10.1l2.5 265.2c0 5.6-4.5 10.2-10.1 10.3zM92.2 873.6l210.5-2-2.3-244.8-210.5 2 2.3 244.8z" fill="#7F0518" /><path d="M80.3 763.1h231.9v122.3H80.3z" fill="#FF6A48" /><path d="M312.3 895.6s-.1 0 0 0h-232c-5.6 0-10.2-4.6-10.2-10.2V763.1c0-5.6 5.4-11 10.2-10.2l231.9-.1c2.7 0 5.3 1.1 7.2 3 1.9 1.9 3 4.5 3 7.2v122.3c0 5.7-4.5 10.2-10.1 10.3zM90.5 875.2H302V773.3H90.5v101.9z" fill="#7F0518" /><path d="m717.37 618.54 230.9-2.21 2.538 265.2-230.9 2.21z" fill="#FFF" /><path d="M950.9 891.6 720 893.9c-5.6.1-10.2-4.5-10.3-10.1l-2.5-265.2c-.1-5.6 4.5-10.2 10.1-10.3l230.9-2.2c5.6-.1 10.2 4.5 10.3 10.1l2.5 265.2c.1 5.6-4.5 10.2-10.1 10.2zM730 873.4l210.5-2-2.3-244.8-210.5 2 2.3 244.8z" fill="#7F0518" /><path d="M718.1 762.9H950v122.3H718.1z" fill="#FF6A48" /><path d="m950.1 895.3-232 .1c-2.7 0-5.3-1.1-7.2-3-1.9-1.9-3-4.5-3-7.2V762.9c0-2.7 1.1-5.3 3-7.2 1.9-1.9 5.2-2.8 7.2-3H950c5.6 0 10.2 4.6 10.2 10.2v122.3c0 5.5-4.5 10.1-10.1 10.1zM728.3 875h211.5V773.1H728.3V875z" fill="#7F0518" /></symbol><symbol fill="none"  viewBox="0 0 88 48" id="icon-dark"><path d="M0 0h88v48H0V0Z" fill="#13161B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M52.533 26.87a9 9 0 0 1-10.065-11.74A9 9 0 0 0 44 33a9.004 9.004 0 0 0 8.532-6.13Z" fill="#949EAA" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-dashboard"><path d="M384 672c53.02 0 96 42.98 96 96v96c0 53.02-42.98 96-96 96H160c-53.02 0-96-42.98-96-96v-96c0-53.02 42.98-96 96-96h224zm0 64H160c-17.496 0-31.713 14.042-31.996 31.47L128 768v96c0 17.496 14.042 31.713 31.47 31.996l.53.004h224c17.496 0 31.713-14.042 31.996-31.47L416 864v-96c0-17.496-14.042-31.713-31.47-31.996L384 736zm480-320c53.02 0 96 42.98 96 96v352c0 53.02-42.98 96-96 96H640c-53.02 0-96-42.98-96-96V512c0-53.02 42.98-96 96-96h224zm0 64H640c-17.496 0-31.713 14.042-31.996 31.47L608 512v352c0 17.496 14.042 31.713 31.47 31.996l.53.004h224c17.496 0 31.713-14.042 31.996-31.47L896 864V512c0-17.496-14.042-31.713-31.47-31.996L864 480zM384 64c53.02 0 96 42.98 96 96v352c0 53.02-42.98 96-96 96H160c-53.02 0-96-42.98-96-96V160c0-53.02 42.98-96 96-96h224zm0 64H160c-17.496 0-31.713 14.042-31.996 31.47L128 160v352c0 17.496 14.042 31.713 31.47 31.996l.53.004h224c17.496 0 31.713-14.042 31.996-31.47L416 512V160c0-17.496-14.042-31.713-31.47-31.996L384 128zm480-64c53.02 0 96 42.98 96 96v96c0 53.02-42.98 96-96 96H640c-53.02 0-96-42.98-96-96v-96c0-53.02 42.98-96 96-96h224zm0 64H640c-17.496 0-31.713 14.042-31.996 31.47L608 160v96c0 17.496 14.042 31.713 31.47 31.996l.53.004h224c17.496 0 31.713-14.042 31.996-31.47L896 256v-96c0-17.496-14.042-31.713-31.47-31.996L864 128z" fill="currentColor" /></symbol><symbol fill="none"  viewBox="0 0 88 48" id="icon-light"><path fill="#ddd" d="M0 0h88v48H0z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M44 20.583a3.417 3.417 0 1 0 0 6.833 3.417 3.417 0 0 0 0-6.833ZM39.083 24a4.917 4.917 0 1 1 9.834 0 4.917 4.917 0 0 1-9.834 0ZM43.25 17.333v-2.5h1.5v2.5h-1.5ZM48.184 18.755l1.767-1.767 1.06 1.06-1.767 1.768-1.06-1.06ZM50.667 23.25h2.5v1.5h-2.5v-1.5ZM49.244 28.183l1.768 1.768-1.06 1.06-1.768-1.767 1.06-1.06ZM44.75 30.666v2.5h-1.5v-2.5h1.5ZM39.816 29.244l-1.767 1.768-1.061-1.061 1.767-1.768 1.061 1.061ZM37.333 24.75h-2.5v-1.5h2.5v1.5ZM38.755 19.816l-1.767-1.768 1.06-1.06 1.768 1.767-1.06 1.06Z" fill="rgba(0, 0, 0, 0.9)" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-logo"><path d="M828.033 222.144c-140.608 40-166.144 153.408-156.544 225.408-100.8-118.272-96-252.544-96-447.552-321.28 121.536-246.144 469.888-255.744 575.488-79.936-65.6-95.936-223.808-95.936-223.808C139.2 394.88 96 513.088 96 607.424a414.72 414.72 0 0 0 415.552 415.552 414.72 414.72 0 0 0 415.552-415.552c0-135.936-100.672-199.872-99.072-385.28z" fill="#6B99FC" /></symbol>',e.insertBefore(n,e.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}function ce(t){t.component("SvgIcon",re)}const w="popper-content-ellipsis",ie=(t,e)=>{let n=document.querySelector(`.${w}`);return n||(n=document.createElement("div"),n.className=["popper-content",w].join(" "),t==null||t.appendChild(n)),n.innerHTML=e,n},se=(t,e,n)=>{let r=null,o;const l=()=>{r||(o=ie(t,n),r=N(e,o,{placement:"top",strategy:"fixed"})),o.addEventListener("mouseenter",l),o.addEventListener("mouseleave",c),r.update()},c=()=>{r&&(r.destroy(),r=null),o&&(t!=null&&t.contains(o))&&t.removeChild(o)};return console.log("mouseenter"),e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",c),{destroy:()=>{e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",c),c()}}};function ae(t){return typeof t=="function"?t():Vue.unref(t)}function C(t){const e=ae(t);return(e==null?void 0:e.$el)??e}function ue(t){return t||Vue.getCurrentInstance()}function de(t,e=!0,n){ue()?Vue.onMounted(t,n):e?t():Vue.nextTick(t)}function y(t){if(!t)return 0;const e=t.match(/^\d*(\.\d*)?/);return e?Number(e[0]):0}function me(t){return Array.prototype.slice.apply(t).map(n=>`${n}: ${t.getPropertyValue(n)};`).join("")}let m;function pe(t){m||(m=document.createElement("div"),document.body.appendChild(m));const e=window.getComputedStyle(t),n=me(e);return m.setAttribute("style",n),m.setAttribute("aria-hidden","true"),m.style.height="auto",m.style.minHeight="auto",m.style.maxHeight="auto",m.style.position="fixed",m.style.left="0",m.style.top="-99999999px",m.style.zIndex="-200",m.style.whiteSpace="normal",m}const fe=(t,e,n)=>{const r=pe(t);r.innerHTML="";const o=document.createTextNode(e);r.appendChild(o);function l(){return r.offsetHeight<=n}if(l())return{ellipsis:!1,text:e};function c(u=0,s=e.length,i=0){if(u>s)return{ellipsis:!0,text:e.slice(0,i)+"..."};const a=Math.floor((u+s)/2);return o.textContent=e.slice(0,a)+"...",l()?c(a+1,s,a):c(u,a-1,i)}return c()},he=(t,e)=>{const n=Vue.ref((e==null?void 0:e.text)||"");let r,o=!0;Vue.watch(()=>e==null?void 0:e.rows,async s=>{const i={rows:s||1,...e};u(n.value,i)}),Vue.watch(()=>e==null?void 0:e.text,async s=>{const i={text:s||"",...e};if(n.value===s)return;const a=(e==null?void 0:e.text)||"";n.value=a,u(n.value,i)});let l=!1;const c=(s=1)=>{const i=C(t);if(i&&i.parentNode instanceof HTMLElement){const a=i.parentNode,d=window.getComputedStyle(a),_=y(d.lineHeight),V=Math.round(_*s+y(d.paddingTop)+y(d.paddingBottom));return{el:i,parentNode:a,maxHeight:V}}return null},u=(s,i)=>{const a=c(i==null?void 0:i.rows);if(!a)return;const{el:d,parentNode:_,maxHeight:V}=a,{text:g,ellipsis:H}=fe(_,s,V);if(H){l=!0,d.innerText=g,console.log(s,"fullText",g);const{destroy:I}=se(_,d,s);r=I}else d.innerText=g,r&&r();requestAnimationFrame(()=>{l=!1})};return de(()=>{const s=C(t);if(!s||!(s.parentNode instanceof HTMLElement))return;const i=(e==null?void 0:e.text)||s.textContent||"";n.value=i,u(n.value,e),S(s.parentNode,()=>{if(!(e!=null&&e.isDirective))if(o)o=!1;else{if(l)return;const a=(e==null?void 0:e.text)||s.textContent||"";u(n.value,e),n.value=a}})},!1),{options:e,calcEllipsisText:u}},F=(t,e)=>{he(t,{...e,isDirective:!0})},_e=(t,e)=>{F(t,e)},ve={mounted(t,e){if(!(t instanceof HTMLElement)){console.error("vEllipsis directive is only applicable to HTMLElements.");return}F(t,e.value)},updated(t,e){console.log(e,"binding"),t instanceof HTMLElement&&_e(t,e.value)},beforeUnmount(t){console.log(t,"unbind")}};const Ve=Pinia.createPinia(),ge=Pinia.defineStore("permission",()=>{const t=Vue.ref([]);return{routes:t,setRoutes:()=>{t.value=b}}});function ye(){return ge(Ve)}E.configure({showSpinner:!1});const Ee=ye();x.beforeEach((t,e,n)=>{E.start(),Ee.setRoutes(),n()});x.afterEach(()=>{E.done()});const f=Vue.createApp(B);f.directive("ellipsis",ve);oe(f);ce(f);f.use(x);f.use(ElementPlus);f.mount("#app");export{z as _,he as a,b as c,ge as u};