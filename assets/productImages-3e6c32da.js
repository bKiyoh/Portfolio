import{d as S,z as D,B as F,r as o,o as c,f,c as u,w as e,b as n,e as p,t as l,a as H,F as M,g as G,C as v,u as b,m as $,n as m,D as z,h as E}from"./index-99b66701.js";const L={class:"text-center"},Y=S({__name:"ProductDialog",props:{isOpening:{type:Boolean},product:{},productImage:{}},emits:["close"],setup(_,{emit:P}){const a=_,h=P,k=t=>{d.isOpening=t,h("close",t)},d=D({isOpening:!1});return F(()=>a.isOpening,()=>d.isOpening=a.isOpening),(t,s)=>{const y=o("v-card-title"),C=o("v-img"),O=o("v-card-subtitle"),U=o("v-chip"),V=o("v-chip-group"),w=o("v-card-text"),i=o("v-btn"),g=o("v-tooltip"),B=o("v-spacer"),x=o("v-card-actions"),I=o("v-card"),N=o("v-dialog");return c(),f("div",L,[a.isOpening?(c(),u(N,{key:0,modelValue:d.isOpening,"onUpdate:modelValue":s[1]||(s[1]=r=>d.isOpening=r),width:"auto",persistent:""},{default:e(()=>[n(I,{"max-width":"500"},{default:e(()=>[n(y,null,{default:e(()=>[p(l(t.product.title),1)]),_:1}),n(C,{src:a.productImage,"max-height":"400",cover:""},null,8,["src"]),n(O,null,{default:e(()=>[p(" From："+l(t.product.from),1)]),_:1}),n(w,null,{default:e(()=>[p(l(t.product.description)+" ",1),s[2]||(s[2]=H("br",null,null,-1)),n(V,null,{default:e(()=>[(c(!0),f(M,null,G(t.product.technologyUsed,r=>(c(),u(U,{key:r,"x-small":""},{default:e(()=>[p(l(r),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(x,null,{default:e(()=>[t.product.gitHubSrc?(c(),u(g,{key:0,location:"bottom",text:"GitHubで見る"},{activator:e(({props:r})=>[n(i,v(r,{icon:b($),href:t.product.gitHubSrc,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1})):m("",!0),t.product.pageUrl?(c(),u(g,{key:1,location:"bottom",text:`${t.product.pageUrl}を見る`},{activator:e(({props:r})=>[n(i,v(r,{icon:b(z),href:t.product.pageUrl,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1},8,["text"])):m("",!0),n(B),n(i,{color:"primary",onClick:s[0]||(s[0]=r=>k(!1))},{default:e(()=>s[3]||(s[3]=[p("Close")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):m("",!0)])}}}),T="/Portfolio/assets/product3-c38c7b48.png",W="/Portfolio/assets/product4-8520dec5.png",j="/Portfolio/assets/product5-9f7d268d.png",q="/Portfolio/assets/product6-8237e9e2.png",A="/Portfolio/assets/product7-c7300ed1.png",J="/Portfolio/assets/product8-1d50d19c.png",K="/Portfolio/assets/product9-0b0d7140.png",Q="/Portfolio/assets/product10-6dc0fe62.png",R="/Portfolio/assets/product11-89de0405.png",Z=E("productImages",()=>({imgUrlsMap:new Map([["product3",T],["product4",W],["product5",j],["product6",q],["product7",A],["product8",J],["product9",K],["product10",Q],["product11",R]])}));export{Y as _,Z as u};
