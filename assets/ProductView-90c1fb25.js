import{d as x,l as k,p as O,r as c,o as s,f as v,c as l,w as e,b as t,e as d,t as f,a as F,F as S,g as L,q as D,u as H,m as M,k as I,s as j,h as N,n as G}from"./index-6bfee254.js";const W={class:"text-center"},$=x({__name:"ProductDialog",props:{isOpening:{type:Boolean},product:{},productImage:{}},emits:["close"],setup(g,{emit:u}){const r=g,y=u,P=o=>{a.isOpening=o,y("close",o)},a=k({isOpening:!1});return O(()=>r.isOpening,()=>a.isOpening=r.isOpening),(o,n)=>{const U=c("v-card-title"),V=c("v-img"),_=c("v-card-subtitle"),m=c("v-chip"),h=c("v-chip-group"),b=c("v-card-text"),p=c("v-btn"),T=c("v-tooltip"),w=c("v-spacer"),B=c("v-card-actions"),C=c("v-card"),K=c("v-dialog");return s(),v("div",W,[r.isOpening?(s(),l(K,{key:0,modelValue:a.isOpening,"onUpdate:modelValue":n[1]||(n[1]=i=>a.isOpening=i),width:"auto",persistent:""},{default:e(()=>[t(C,{"max-width":"500"},{default:e(()=>[t(U,null,{default:e(()=>[d(f(o.product.title),1)]),_:1}),t(V,{src:r.productImage,"max-height":"400",cover:""},null,8,["src"]),t(_,null,{default:e(()=>[d(" CreateDate："+f(o.product.createDate),1)]),_:1}),t(b,null,{default:e(()=>[d(f(o.product.description)+" ",1),n[2]||(n[2]=F("br",null,null,-1)),t(h,null,{default:e(()=>[(s(!0),v(S,null,L(o.product.technologyUsed,i=>(s(),l(m,{key:i,"x-small":""},{default:e(()=>[d(f(i),1)]),_:2},1024))),128))]),_:1})]),_:1}),t(B,null,{default:e(()=>[o.product.gitHubSrc?(s(),l(T,{key:0,location:"bottom",text:"GitHubで見る"},{activator:e(({props:i})=>[t(p,D(i,{icon:H(M),href:o.product.gitHubSrc,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1})):I("",!0),o.product.pageUrl?(s(),l(T,{key:1,location:"bottom",text:`${o.product.pageUrl}を見る`},{activator:e(({props:i})=>[t(p,D(i,{icon:H(j),href:o.product.pageUrl,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1},8,["text"])):I("",!0),t(w),t(p,{color:"primary",onClick:n[0]||(n[0]=i=>P(!1))},{default:e(()=>n[3]||(n[3]=[d("Close")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):I("",!0)])}}}),A=[{productId:3,title:"Todo app",description:"シンプルなTodoアプリ。「今日やるべきことは何か」に集中するようにシンプル設計。絵文字で親しみを表現",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF05_Todoapp",technologyUsed:["HTML","Vue2","Bootstrap"],createDate:"2022/01 *Vue2サポート終了のためサイト停止中"},{productId:4,title:"Qサーチ",description:"Qiitaの最新記事検索アプリ。調べたいワードを入力すると自動で検索されて、ワードが入った記事が表示されます。",pageUrl:"",gitHubSrc:'https://github.com/bKiyoh/PF04_Qsearch"',technologyUsed:["HTML","Vue3","Bootstrap"],createDate:"2022/01  *Vue2サポート終了のためサイト停止中"},{productId:5,title:"ゆき小屋(旧ポートフォリオサイト)",description:"現職入社前に作成したポートフォリオサイト。わかりやすいように1ページにまとめました。名前+小屋(技術置き場)でゆき(雪)小屋。",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/HP-Yukigoya",technologyUsed:["HTML","Vue2","Tailwind"],createDate:"2022/03 *Vue2サポート終了のためサイト停止中"},{productId:6,title:"Torol",description:"失敗談をどんまいしあうチャット風掲示板。誰かが投稿したらボタンが変わる仕様。どんまいボタンに苦戦しました。",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF06-Torol",technologyUsed:["HTML","Vue2","Vuetify","Firebase"],createDate:"2022/3 *Vue2サポート終了のためサイト停止中"},{productId:7,title:"bKiyoh(現：ポートフォリオサイト）",description:"フロントエンド開発に従事してから作成したポートフォリオサイト。業務で学んだ技術で作成しました。",pageUrl:"https://bkiyoh.github.io/Portfolio/",gitHubSrc:"https://github.com/bKiyoh/Portfolio",technologyUsed:["HTML","TypeScript","Vue3","Vuetify3","pinia","MockServiceWorker"],createDate:"2022/3"},{productId:8,title:"ToolBox For Vuetify3",description:"UIのメモサイト。Vue2.7,Vuetify2を使用した開発で得た知見を基に作成しました。",pageUrl:"https://bKiyoh.github.io/ToolBoxForVuetify3/",gitHubSrc:"https://github.com/bKiyoh/ToolBoxForVuetify3",technologyUsed:["HTML","TypeScript","Vue3","Vuetify3","pinia","API:NHK番組表API"],createDate:"2023/10"},{productId:9,title:"FlexBox Playground",description:"勉強目的でNext.jsでFlexBoxPlaygroundを作成しました。",pageUrl:"https://flexbox-playground-omega.vercel.app",gitHubSrc:"https://github.com/bKiyoh/flexbox-playground",technologyUsed:["HTML","TypeScript","React","Next.js","MUI"],createDate:"2024/01"},{productId:10,title:"WebGLスクールポートフォリオサイト",description:"WebGLスクール第11期の課題作品ポートフォリオです。",pageUrl:"https://webgl-collection-sigma.vercel.app/vol8",gitHubSrc:"https://github.com/bKiyoh/webgl-assignment-collection",technologyUsed:["Next.js","shadcn/ui","Three.js","WebGL"],createDate:"2024/09"},{productId:11,title:"Vue.jsとThree.jsを組み合わせた環境構築CLI",description:"UnJS勉強目的で作成。言語をJSかTS選択できるようにし、初期画面は自作のVueロゴジオメトリ付きです。",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/create-vue-three-app",technologyUsed:["UnJS","Vue.js","Three.js"],createDate:"2024/10"}],J="/Portfolio/assets/product3-c38c7b48.png",Q="/Portfolio/assets/product4-8520dec5.png",q="/Portfolio/assets/product5-9f7d268d.png",E="/Portfolio/assets/product6-8237e9e2.png",R="/Portfolio/assets/product7-c7300ed1.png",Y="/Portfolio/assets/product8-1d50d19c.png",z="/Portfolio/assets/product9-0b0d7140.png",X="/Portfolio/assets/product10-6dc0fe62.png",Z="/Portfolio/assets/product11-89de0405.png",tt=N("productImages",()=>({imgUrls:[J,Q,q,E,R,Y,z,X,Z]})),et=x({__name:"ProductPage",setup(g){const u=tt().imgUrls,r=k({isDialogOpen:!1,productList:new Array,selectedProduct:{},selectedProductImage:""}),y=(o,n)=>{r.selectedProduct=o,r.selectedProductImage=u[n],r.isDialogOpen=!0},P=o=>{r.isDialogOpen=o},a=async()=>{r.productList=A};return G(()=>a()),(o,n)=>{const U=c("v-img"),V=c("v-card"),_=c("v-col"),m=c("v-row"),h=c("v-container");return s(),v(S,null,[t(h,null,{default:e(()=>[t(m,null,{default:e(()=>[(s(!0),v(S,null,L(r.productList,(b,p)=>(s(),l(_,{key:b.productId,cols:"12",sm:"1",md:"6"},{default:e(()=>[t(h,null,{default:e(()=>[t(m,null,{default:e(()=>[t(_,{class:"ma-6"},{default:e(()=>[t(V,{elevation:"0",onClick:T=>y(b,p)},{default:e(()=>[t(U,{src:H(u)[p],height:"230","aspect-ratio":"16/9",cover:""},null,8,["src"])]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t($,{"is-opening":r.isDialogOpen,product:r.selectedProduct,"product-image":r.selectedProductImage,onClose:P},null,8,["is-opening","product","product-image"])],64)}}}),ct=x({__name:"ProductView",setup(g){return(u,r)=>(s(),l(et))}});export{ct as default};