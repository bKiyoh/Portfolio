import{_ as V}from"./ProductDialog.vue_vue_type_script_setup_true_lang-53baf62f.js";import{h as v,d as _,s as T,v as I,r as c,o as s,f as h,b as o,w as e,F as m,g as x,c as f,u as H}from"./index-33d1f86e.js";const L=[{productId:3,title:"Todo app",description:"*Vue2サポート終了のためサイト停止中 シンプルなTodoアプリ。「今日やるべきことは何か」に集中するようにシンプル設計。絵文字で親しみを表現",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF05_Todoapp",technologyUsed:["HTML","Vue2","Bootstrap"],createDate:"2022/01",imgSrc:null},{productId:4,title:"Qサーチ",description:"*Vue2サポート終了のためサイト停止中 Qiitaの最新記事検索アプリ。調べたいワードを入力すると自動で検索されて、ワードが入った記事が表示されます。",pageUrl:"",gitHubSrc:'https://github.com/bKiyoh/PF04_Qsearch"',technologyUsed:["HTML","Vue3","Bootstrap"],createDate:"2022/01",imgSrc:null},{productId:5,title:"ゆき小屋(旧ポートフォリオサイト)",description:"*Vue2サポート終了のためサイト停止中 現職入社前に作成したポートフォリオサイト。わかりやすいように1ページにまとめました。名前+小屋(技術置き場)でゆき(雪)小屋。",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/HP-Yukigoya",technologyUsed:["HTML","Vue2","Tailwind"],createDate:"2022/03 *Vue2サポート終了のためサイト停止中",imgSrc:null},{productId:6,title:"Torol",description:"*Vue2サポート終了のためサイト停止中 失敗談をどんまいしあうチャット風掲示板。誰かが投稿したらボタンが変わる仕様。どんまいボタンに苦戦しました。",pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF06-Torol",technologyUsed:["HTML","Vue2","Vuetify","Firebase"],createDate:"2022/3",imgSrc:null},{productId:7,title:"bKiyoh(現：ポートフォリオサイト）",description:"フロントエンド開発に従事してから作成したポートフォリオサイト。業務で学んだ技術で作成しました。",pageUrl:"https://bkiyoh.github.io/Portfolio/",gitHubSrc:"https://github.com/bKiyoh/Portfolio",technologyUsed:["HTML","TypeScript","Vue3","Vuetify3","pinia","MockServiceWorker"],createDate:"2022/3",imgSrc:null},{productId:8,title:"ToolBox For Vuetify3",description:"UIのメモサイト。Vue2.7,Vuetify3を使用した開発で得た知見を基に作成しました。",pageUrl:"https://bKiyoh.github.io/ToolBoxForVuetify3/",gitHubSrc:"https://github.com/bKiyoh/ToolBoxForVuetify3",technologyUsed:["HTML","TypeScript","Vue3","Vuetify3","pinia","API:NHK番組表API"],createDate:"2023/10",imgSrc:null},{productId:9,title:"FlexBox Playground",description:"勉強目的でNext.jsでFlexBoxPlaygroundを作成しました。",pageUrl:"https://flexbox-playground-omega.vercel.app",gitHubSrc:"https://github.com/bKiyoh/flexbox-playground",technologyUsed:["HTML","TypeScript","React","Next.js","MUI"],createDate:"2024/01",imgSrc:null},{productId:10,title:"WebGLスクールポートフォリオサイト",description:"WebGLスクール第11期の課題作品ポートフォリオです。",pageUrl:"https://webgl-collection-sigma.vercel.app/vol8",gitHubSrc:"https://github.com/bKiyoh/webgl-assignment-collection",technologyUsed:["Next.js","shadcn/ui","Three.js","WebGL"],createDate:"2024/09",imgSrc:null}],D="/Portfolio/assets/product3-c38c7b48.png",B="/Portfolio/assets/product4-8520dec5.png",F="/Portfolio/assets/product5-9f7d268d.png",K="/Portfolio/assets/product6-8237e9e2.png",k="/Portfolio/assets/product7-c7300ed1.png",w="/Portfolio/assets/product8-1d50d19c.png",M="/Portfolio/assets/product9-0b0d7140.png",C="/Portfolio/assets/product10-6dc0fe62.png",N="/Portfolio/assets/product11-89de0405.png",j=v("productImages",()=>({imgUrls:[D,B,F,K,k,w,M,C,N]})),O=_({__name:"ProductPage",setup(n){const i=j().imgUrls,t=T({isDialogOpen:!1,productList:new Array,selectedProduct:{},selectedProductImage:""}),b=(r,u)=>{t.selectedProduct=r,t.selectedProductImage=i[u],t.isDialogOpen=!0},y=r=>{t.isDialogOpen=r},P=async()=>{t.productList=L};return I(()=>P()),(r,u)=>{const S=c("v-img"),U=c("v-card"),l=c("v-col"),a=c("v-row"),p=c("v-container");return s(),h(m,null,[o(p,null,{default:e(()=>[o(a,null,{default:e(()=>[(s(!0),h(m,null,x(t.productList,(d,g)=>(s(),f(l,{key:d.productId,cols:"12",sm:"1",md:"6"},{default:e(()=>[o(p,null,{default:e(()=>[o(a,null,{default:e(()=>[o(l,{class:"ma-6"},{default:e(()=>[o(U,{elevation:"0",onClick:W=>b(d,g)},{default:e(()=>[o(S,{src:H(i)[g],height:"230","aspect-ratio":"16/9",cover:""},null,8,["src"])]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),o(V,{"is-opening":t.isDialogOpen,product:t.selectedProduct,"product-image":t.selectedProductImage,onClose:y},null,8,["is-opening","product","product-image"])],64)}}}),Q=_({__name:"ProductView",setup(n){return(i,t)=>(s(),f(O))}});export{Q as default};