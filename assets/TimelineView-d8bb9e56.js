import{h as he,d as pe,i as de,j as _e,r as y,k as ye,o as c,f as $,c as H,w as u,F as N,g as X,l as ge,b as f,e as C,t as p,n as M,a as ce,p as ve,u as ae,q as fe,s as be,v as $e,x as Se,y as De,z as ke,A as Me,_ as Ie}from"./index-99b66701.js";import{u as we,_ as Oe}from"./productImages-3e6c32da.js";const re=he("calculateDuration",()=>{const T=(_,S)=>{const x=new Date(`${_}/01`),U=new Date(`${S}/01`),b=U.getFullYear()-x.getFullYear(),I=U.getMonth()-x.getMonth();let Y=b,w=I;return I<0&&(Y--,w+=12),{years:Y,months:w}};return{calculateDuration:T,dateRange:(_,S)=>{const x=T(_,S).years,U=T(_,S).months;return`${x}年${U}ヶ月`}}});var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var me={exports:{}};(function(T,J){(function(_,S){T.exports=S()})(Te,function(){var _=1e3,S=6e4,x=36e5,U="millisecond",b="second",I="minute",Y="hour",w="day",d="week",m="month",j="quarter",k="year",L="date",B="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ee=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],e=i%100;return"["+i+(n[(e-20)%10]||n[e]||n[0])+"]"}},F=function(i,n,e){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(e)+i},le={s:F,z:function(i){var n=-i.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+F(r,2,"0")+":"+F(t,2,"0")},m:function i(n,e){if(n.date()<e.date())return-i(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(r,m),s=e-t<0,a=n.clone().add(r+(s?-1:1),m);return+(-(r+(e-t)/(s?t-a:a-t))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:m,y:k,w:d,d:w,D:L,h:Y,m:I,s:b,ms:U,Q:j}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},K="en",P={};P[K]=W;var ie="$isDayjsObject",te=function(i){return i instanceof l||!(!i||!i[ie])},R=function i(n,e,r){var t;if(!n)return K;if(typeof n=="string"){var s=n.toLowerCase();P[s]&&(t=s),e&&(P[s]=e,t=s);var a=n.split("-");if(!t&&a.length>1)return i(a[0])}else{var h=n.name;P[h]=n,t=h}return!r&&t&&(K=t),t||!r&&K},g=function(i,n){if(te(i))return i.clone();var e=typeof n=="object"?n:{};return e.date=i,e.args=arguments,new l(e)},o=le;o.l=R,o.i=te,o.w=function(i,n){return g(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var l=function(){function i(e){this.$L=R(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ie]=!0}var n=i.prototype;return n.parse=function(e){this.$d=function(r){var t=r.date,s=r.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(G);if(a){var h=a[2]-1||0,v=(a[7]||"0").substring(0,3);return s?new Date(Date.UTC(a[1],h,a[3]||1,a[4]||0,a[5]||0,a[6]||0,v)):new Date(a[1],h,a[3]||1,a[4]||0,a[5]||0,a[6]||0,v)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==B},n.isSame=function(e,r){var t=g(e);return this.startOf(r)<=t&&t<=this.endOf(r)},n.isAfter=function(e,r){return g(e)<this.startOf(r)},n.isBefore=function(e,r){return this.endOf(r)<g(e)},n.$g=function(e,r,t){return o.u(e)?this[r]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,r){var t=this,s=!!o.u(r)||r,a=o.p(e),h=function(Q,V){var A=o.w(t.$u?Date.UTC(t.$y,V,Q):new Date(t.$y,V,Q),t);return s?A:A.endOf(w)},v=function(Q,V){return o.w(t.toDate()[Q].apply(t.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(V)),t)},D=this.$W,O=this.$M,z=this.$D,Z="set"+(this.$u?"UTC":"");switch(a){case k:return s?h(1,0):h(31,11);case m:return s?h(1,O):h(0,O+1);case d:var E=this.$locale().weekStart||0,ne=(D<E?D+7:D)-E;return h(s?z-ne:z+(6-ne),O);case w:case L:return v(Z+"Hours",0);case Y:return v(Z+"Minutes",1);case I:return v(Z+"Seconds",2);case b:return v(Z+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,r){var t,s=o.p(e),a="set"+(this.$u?"UTC":""),h=(t={},t[w]=a+"Date",t[L]=a+"Date",t[m]=a+"Month",t[k]=a+"FullYear",t[Y]=a+"Hours",t[I]=a+"Minutes",t[b]=a+"Seconds",t[U]=a+"Milliseconds",t)[s],v=s===w?this.$D+(r-this.$W):r;if(s===m||s===k){var D=this.clone().set(L,1);D.$d[h](v),D.init(),this.$d=D.set(L,Math.min(this.$D,D.daysInMonth())).$d}else h&&this.$d[h](v);return this.init(),this},n.set=function(e,r){return this.clone().$set(e,r)},n.get=function(e){return this[o.p(e)]()},n.add=function(e,r){var t,s=this;e=Number(e);var a=o.p(r),h=function(O){var z=g(s);return o.w(z.date(z.date()+Math.round(O*e)),s)};if(a===m)return this.set(m,this.$M+e);if(a===k)return this.set(k,this.$y+e);if(a===w)return h(1);if(a===d)return h(7);var v=(t={},t[I]=S,t[Y]=x,t[b]=_,t)[a]||1,D=this.$d.getTime()+e*v;return o.w(D,this)},n.subtract=function(e,r){return this.add(-1*e,r)},n.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||B;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),h=this.$H,v=this.$m,D=this.$M,O=t.weekdays,z=t.months,Z=t.meridiem,E=function(V,A,oe,se){return V&&(V[A]||V(r,s))||oe[A].slice(0,se)},ne=function(V){return o.s(h%12||12,V,"0")},Q=Z||function(V,A,oe){var se=V<12?"AM":"PM";return oe?se.toLowerCase():se};return s.replace(ee,function(V,A){return A||function(oe){switch(oe){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return D+1;case"MM":return o.s(D+1,2,"0");case"MMM":return E(t.monthsShort,D,z,3);case"MMMM":return E(z,D);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return E(t.weekdaysMin,r.$W,O,2);case"ddd":return E(t.weekdaysShort,r.$W,O,3);case"dddd":return O[r.$W];case"H":return String(h);case"HH":return o.s(h,2,"0");case"h":return ne(1);case"hh":return ne(2);case"a":return Q(h,v,!0);case"A":return Q(h,v,!1);case"m":return String(v);case"mm":return o.s(v,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return a}return null}(V)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,r,t){var s,a=this,h=o.p(r),v=g(e),D=(v.utcOffset()-this.utcOffset())*S,O=this-v,z=function(){return o.m(a,v)};switch(h){case k:s=z()/12;break;case m:s=z();break;case j:s=z()/3;break;case d:s=(O-D)/6048e5;break;case w:s=(O-D)/864e5;break;case Y:s=O/x;break;case I:s=O/S;break;case b:s=O/_;break;default:s=O}return t?s:o.a(s)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return P[this.$L]},n.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),s=R(e,r,!0);return s&&(t.$L=s),t},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),ue=l.prototype;return g.prototype=ue,[["$ms",U],["$s",b],["$m",I],["$H",Y],["$W",w],["$M",m],["$y",k],["$D",L]].forEach(function(i){ue[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),g.extend=function(i,n){return i.$i||(i(n,l,g),i.$i=!0),g},g.locale=R,g.isDayjs=te,g.unix=function(i){return g(1e3*i)},g.en=P[K],g.Ls=P,g.p={},g})})(me);var Le=me.exports;const q=Ue(Le),Ve={style:{"text-align":"left"}},xe={style:{cursor:"pointer"}},Ye={key:0},We={key:0,class:"me-2"},He=["onClick"],je={key:2,class:"ps-1 font-weight-bold"},ze={key:0},Ce={key:1,class:"mb-1"},Fe={key:2,class:"mb-1"},Be={key:3,class:"mb-1"},Pe={class:"me-1"},Ae={key:1},Ne={key:2},Je={key:3},Ke=pe({__name:"TimelineComponents",props:{careerList:{},genre:{}},setup(T){const J=we().imgUrlsMap,_=T,S=de(!1),x=de({productId:"0",title:"",description:"",pageUrl:"",gitHubSrc:"",technologyUsed:[],from:"",imgSrc:null}),U=_e(()=>_.careerList.map(m=>({...m,endDate:m.endDate==="現在"?q().format("YYYY/MM"):m.endDate,achievements:m.achievements?m.achievements.sort((j,k)=>{const L=q(j.from,"YYYY/MM");return q(k.from,"YYYY/MM").valueOf()-L.valueOf()}):[]})).sort((m,j)=>q(j.startDate,"YYYY/MM").valueOf()-q(m.startDate,"YYYY/MM").valueOf())),b=d=>d==="work"?"Work on":d==="soloDev"?"Released":"",I=d=>{S.value=d},Y=d=>{x.value={productId:d.productId,title:d.title,description:d.description,pageUrl:d.pageUrl,gitHubSrc:d.gitHubSrc,technologyUsed:d.technologyUsed,from:d.from,imgSrc:d.imgSrc},S.value=!0},w=d=>({domain:fe,school:be,faceMan:$e,tableFurniture:Se,laptop:De})[d]||"";return(d,m)=>{var R,g;const j=y("v-icon"),k=y("v-card-subtitle"),L=y("v-card-text"),B=y("v-card-item"),G=y("v-card"),ee=y("v-timeline-item"),W=y("v-timeline"),F=y("v-card-title"),le=y("v-divider"),K=y("v-col"),P=y("v-row"),ie=y("v-container"),te=ye("tooltip");return c(),$(N,null,[(R=d.$vuetify.display)!=null&&R.mdAndUp?(c(),H(W,{key:0,side:"end",align:"start"},{default:u(()=>[(c(!0),$(N,null,X(U.value,o=>(c(),H(ee,{size:"x-small","dot-color":"grey-darken-3",key:o.careerId},ge({default:u(()=>[(c(!0),$(N,null,X(_.genre==="all"?o.achievements:o.achievements.filter(l=>l.genre===_.genre),l=>(c(),H(G,{key:l.description,class:"my-4"},{default:u(()=>[f(B,null,{default:u(()=>[l.from?(c(),H(k,{key:0,class:"pb-0"},{default:u(()=>[o.careerId!==0?(c(),$("span",We,[C(p(l.from)+" ",1),l.to?(c(),$(N,{key:0},[C("- "+p(l.to),1)],64)):M("",!0)])):M("",!0),C(" "+p(b(l.genre))+" ",1),l.genre==="soloDev"?(c(),$("a",{key:1,class:"ps-1 text-decoration-underline text-blue-lighten-4 font-weight-bold",style:{cursor:"pointer"},onClick:ue=>Y(l)},p(l.title),9,He)):(c(),$("span",je,p(l.title),1))]),_:2},1024)):M("",!0),l.responsibility?(c(),H(L,{key:1,class:"mt-2 pa-1 font-weight-thin text-grey-lighten-1"},{default:u(()=>[l.description?(c(),$("p",ze,p(l.description),1)):M("",!0),l.responsibility?(c(),$("p",Ce,"担当:"+p(l.responsibility),1)):M("",!0),l.technologyUsed?(c(),$("div",Fe," 使用技術："+p(l.technologyUsed.join(", ")),1)):M("",!0),l.scopeOfWork?(c(),$("p",Be,"作業範囲："+p(l.scopeOfWork),1)):M("",!0)]),_:2},1024)):M("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:2},[o.startDate||o.endDate?{name:"opposite",fn:u(()=>[ce("div",Ve,[ve((c(),$("p",xe,[f(j,{icon:ae(fe)},null,8,["icon"]),m[0]||(m[0]=C("  ")),f(j,{icon:w(o.jobIcon)},null,8,["icon"])])),[[te,o.company,"bottom"]]),o.careerId!==0?(c(),$("p",Ye,p(ae(re)().dateRange(o.startDate,o.endDate)),1)):M("",!0)])]),key:"0"}:void 0]),1024))),128))]),_:1})):M("",!0),(g=d.$vuetify.display)!=null&&g.smAndDown?(c(),H(ie,{key:1},{default:u(()=>[(c(!0),$(N,null,X(U.value,o=>(c(),H(P,{key:o.careerId},{default:u(()=>[f(K,null,{default:u(()=>[f(G,null,{default:u(()=>[f(B,null,{default:u(()=>[f(F,{"hide-details":""},{default:u(()=>[C(p(o.company),1)]),_:2},1024),o.startDate||o.endDate?(c(),H(k,{key:0,class:"me-1"},{default:u(()=>[ce("p",null,p(o.startDate)+" - "+p(o.endDate)+" ("+p(ae(re)().dateRange(o.startDate,o.endDate))+") ",1)]),_:2},1024)):M("",!0),f(k,null,{default:u(()=>[ce("span",Pe,p(o.department)+p(o.position),1)]),_:2},1024)]),_:2},1024),f(L,null,{default:u(()=>[C(p(o.responsibilities),1)]),_:2},1024),o.achievements.length>0?(c(),H(le,{key:0,class:"mx-4 mb-1"})):M("",!0),(c(!0),$(N,null,X(o.achievements.filter(l=>l.genre==="work"),l=>(c(),H(B,{key:l.achievementId},{default:u(()=>[f(F,null,{default:u(()=>[C(p(l.title),1)]),_:2},1024),f(L,null,{default:u(()=>[l.from?(c(),H(k,{key:0},{default:u(()=>[C(p(l.from)+" - "+p(l.to),1)]),_:2},1024)):M("",!0),l.responsibility?(c(),$("p",Ae,"担当 ："+p(l.responsibility),1)):M("",!0),l.technologyUsed?(c(),$("p",Ne," 使用技術："+p(l.technologyUsed.join(", ")),1)):M("",!0),l.scopeOfWork?(c(),$("p",Je,"作業範囲："+p(l.scopeOfWork),1)):M("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):M("",!0),f(Oe,{"is-opening":S.value,product:x.value,"product-image":ae(J).get(`product${x.value.productId}`)??"",onClose:I},null,8,["is-opening","product","product-image"])],64)}}}),Re=[{careerId:0,jobIcon:"school",startDate:"2012/04",endDate:"2016/04",company:"大学",position:"法学部",department:"",responsibilities:"就職活動ではIT業界を目指していたが叶わず。IT業界を目指しているがそれに関する勉強ができておらず、自身のソフト面も然りスキル不足に原因があったと思われる。",achievements:[{achievementId:1,genre:"education",title:"大学卒業",from:"2016/03",to:null,description:null,responsibility:null,teamSize:null,technologyUsed:[],scopeOfWork:null,productId:null}]},{careerId:1,jobIcon:"faceMan",startDate:"2016/04",endDate:"2016/07",company:"クリーニング会社",position:"",department:"ホテルリネン営業部",responsibilities:"布を取扱うアルバイトをしていたため興味があって入社。しかし業務についていけず退社。辞めたことに後悔はしていないが、もっと周りに相談すればよかったと反省している。",achievements:[{achievementId:1,genre:"work",title:"法人営業",from:"2016/04",to:"2016/07",description:"ホテル駐在でレンタルリネンの在庫管理、発注、日報作成、クレーム対応等",responsibility:"",teamSize:"",technologyUsed:[],scopeOfWork:"",productId:null}]},{careerId:2,jobIcon:"tableFurniture",startDate:"2016/09",endDate:"2017/11",company:"小売店会社",position:"",department:"販売部",responsibilities:"アルバイトで働いていた職場へ契約社員として復帰。働きながらこの先の進路について考える。ある日エンジニアの友人の仕事話を聞いて、もう一度IT業界への就職に再挑戦しようと決意。学生時代の反省からプログラミング（Java）の勉強を始める。",achievements:[{achievementId:1,genre:"work",title:"販売員",from:"2016/09",to:"2017/11",description:"",responsibility:"紳士服、衣料雑貨、新人教育担当",teamSize:"",technologyUsed:[],scopeOfWork:"接客販売、レジ対応、売り場管理、店舗改装（大量の発注業務から、現場作業員の管理等）",productId:null}]},{careerId:3,jobIcon:"laptop",startDate:"2017/12",endDate:"2022/08",company:"SES事業会社",position:"",department:"ITソリューション部",responsibilities:"未経験ながらも勉強している姿勢を評価していただき、IT業界へ転職。開発案件から運用保守業務まで担当し、上流～下流工程を幅広く経験。",achievements:[{achievementId:1,title:"自治体向け事務システム開発",genre:"work",from:"2018/03",to:"2018/12",description:"",responsibility:"ヒアリング議事録作成、申請・照会系、帳票部の開発",teamSize:"15",technologyUsed:["COBOL","Java"],scopeOfWork:"基本設計、詳細設計、開発、単体テスト、結合テスト",productId:null},{achievementId:2,genre:"work",title:"包装資材会社向け生産・販売管理システム開発",from:"2019/01",to:"2019/03",description:"",responsibility:"画面開発",teamSize:"4",technologyUsed:["VB.NET","SQLServer"],scopeOfWork:"詳細設計、開発、単体テスト",productId:null},{achievementId:3,genre:"work",title:"免許系システムヘルプデスク",from:"2019/04",to:"2022/05",description:"",responsibility:"ヘルプデスク",teamSize:"2",technologyUsed:["Java","SQLServer"],scopeOfWork:"問合せ対応、改修対応、資産管理（端末、ルータ）、外部向け報告書作成、キッティング",productId:null},{achievementId:4,genre:"work",title:"免許系オンラインシステム開発",from:"2021/09",to:"2021/10",description:"",responsibility:"製造、テスト",teamSize:"10",technologyUsed:["HTML","CSS","Bootstrap","Javascript","jQuery"],scopeOfWork:"開発（15画面・レスポンシブ対応）、単体テスト、結合テスト",productId:null},{achievementId:5,genre:"work",title:"免許系システム開発",from:"2021/10",to:"2022/05",description:"",responsibility:"ヒアリング議事録作成、帳票系開発、テストデータ作成、リリース作業",teamSize:"15",technologyUsed:["Java","SQLServer","JIVEReport","SVN","Eclipse","A5M2"],scopeOfWork:"議事録作成、基本設計、詳細設計、開発、単体テスト、結合テスト、リリース",productId:null},{achievementId:6,genre:"soloDev",title:"Todo app",description:"*Vue2サポート終了のためサイト停止中 シンプルなTodoアプリ。「今日やるべきことは何か」に集中するようにシンプル設計。絵文字で親しみを表現",from:"2022/01",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","Vue2","Bootstrap"],scopeOfWork:null,pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF05_Todoapp",productId:"3"},{achievementId:7,genre:"soloDev",title:"Qサーチ",description:"*Vue2サポート終了のためサイト停止中 Qiitaの最新記事検索アプリ。調べたいワードを入力すると自動で検索されて、ワードが入った記事が表示されます。",from:"2022/01",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","Vue3","Bootstrap"],scopeOfWork:null,pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF04_Qsearch",productId:"4"},{achievementId:8,genre:"soloDev",title:"ゆき小屋(旧ポートフォリオサイト)",description:"*Vue2サポート終了のためサイト停止中 現職入社前に作成したポートフォリオサイト。わかりやすいように1ページにまとめました。名前+小屋(技術置き場)でゆき(雪)小屋。",from:"2022/03",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","Vue2","Tailwind"],scopeOfWork:null,pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/HP-Yukigoya",productId:"5"},{achievementId:9,genre:"soloDev",title:"Torol",description:"*Vue2サポート終了のためサイト停止中 失敗談をどんまいしあうチャット風掲示板。誰かが投稿したらボタンが変わる仕様。どんまいボタンに苦戦しました。",from:"2022/03",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","Vue2","Vuetify","Firebase"],scopeOfWork:null,pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/PF06-Torol",productId:"6"}]},{careerId:4,jobIcon:"laptop",startDate:"2022/09",endDate:"現在",company:"自社サービス•SES事業会社",position:"",department:"システム開発事業部",responsibilities:"以前からフロントエンドに関心があり、業務として経験を積みたい想いで個人でフロントエンド言語を使用したアプリ開発し。その行動が実り、現職に転職。現在フロントエンド開発のPJに参画中。今後もフロントエンド開発業務を通して知見を深めいていきたいと考えている。",achievements:[{achievementId:1,genre:"work",title:"コンテンツ管理システム開発",description:null,from:"2022/09",to:"2023/09",responsibility:"フロントエンド開発",teamSize:"7（全体60人）",technologyUsed:["TypeScript4.x","Vue2.7","Vuetify2","AzureDevOps","Visual Studio Code","Mock Service Worker","Pinia"],scopeOfWork:"コーディング、コードレビュー",pageUrl:null,gitHubSrc:null,productId:null},{achievementId:2,genre:"work",title:"クラウド業務支援アプリ開発",description:null,from:"2023/10",to:"現在",responsibility:"フロントエンド開発",teamSize:"9",technologyUsed:["Vue2~3.x","Vuetify3.x","Stylus","Vuex4.x"],scopeOfWork:"既存アプリの改修、新規機能追加、Vue3移行、コーディング、コードレビュー",pageUrl:null,gitHubSrc:null,productId:null},{achievementId:3,genre:"soloDev",title:"FlexBox Playground",description:"勉強目的でNext.jsでFlexBoxPlaygroundを作成しました。",from:"2024/01",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","TypeScript","React","Next.js","MUI"],scopeOfWork:null,pageUrl:"https://flexbox-playground-omega.vercel.app",gitHubSrc:"https://github.com/bKiyoh/flexbox-playground",productId:"9"},{achievementId:4,genre:"soloDev",title:"Vue.jsとThree.jsを組み合わせた環境構築CLI",description:"UnJS勉強目的で作成。言語をJSかTS選択できるようにし、初期画面は自作のVueロゴジオメトリ付きです。",from:"2024/10",to:null,responsibility:null,teamSize:null,technologyUsed:["UnJS","Vue.js","Three.js"],scopeOfWork:null,pageUrl:"",gitHubSrc:"https://github.com/bKiyoh/create-vue-three-app",productId:"11"},{achievementId:5,genre:"soloDev",title:"bKiyoh(現：ポートフォリオサイト）",description:"フロントエンド開発に従事してから作成したポートフォリオサイト。業務で学んだ技術で作成しました。",from:"2022/03",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","TypeScript","Vue3","Vuetify3","pinia","MockServiceWorker"],scopeOfWork:null,pageUrl:"https://bkiyoh.github.io/Portfolio/",gitHubSrc:"https://github.com/bKiyoh/Portfolio",productId:"7"},{achievementId:6,genre:"soloDev",title:"ToolBox For Vuetify3",description:"UIのメモサイト。Vue2.7,Vuetify3を使用した開発で得た知見を基に作成しました。",from:"2023/10",to:null,responsibility:null,teamSize:null,technologyUsed:["HTML","TypeScript","Vue3","Vuetify3","pinia","API:NHK番組表API"],scopeOfWork:null,pageUrl:"https://bKiyoh.github.io/ToolBoxForVuetify3/",gitHubSrc:"https://github.com/bKiyoh/ToolBoxForVuetify3",productId:"8"},{achievementId:7,genre:"soloDev",title:"WebGLスクールポートフォリオサイト",description:"WebGLスクール第11期の課題作品ポートフォリオです。",from:"2024/09",to:null,responsibility:null,teamSize:null,technologyUsed:["Next.js","shadcn/ui","Three.js","WebGL"],scopeOfWork:null,pageUrl:"https://bKiyoh.github.io/ToolBoxForVuetify3/",gitHubSrc:"https://github.com/bKiyoh/ToolBoxForVuetify3",productId:"10"}]}],Ee=pe({__name:"TimelinePage",setup(T){const J=[{value:"all",label:"All"},{value:"work",label:"Work"},{value:"soloDev",label:"SoloDev"}],_=ke({careerList:new Array,occupationList:{}}),S=de(null),x=async()=>{var U,b,I;_.careerList=Re,_.occupationList={occupation1:`法人営業(${re().dateRange(_.careerList[1].startDate??"",_.careerList[1].endDate??"")})`,occupation2:`販売員(${re().dateRange(((U=_.careerList[2])==null?void 0:U.startDate)??"",((b=_.careerList[2])==null?void 0:b.endDate)??"")})`,occupation3:`ITエンジニア(${re().dateRange(((I=_.careerList[3])==null?void 0:I.startDate)??"",q().format("YYYY/MM"))})`}};return Me(()=>{x()}),(U,b)=>{const I=y("v-card-subtitle"),Y=y("v-card-item"),w=y("v-card-text"),d=y("v-card"),m=y("v-col"),j=y("v-row"),k=y("v-tab"),L=y("v-tabs"),B=y("v-tabs-window-item"),G=y("v-tabs-window"),ee=y("v-container");return c(),H(ee,null,{default:u(()=>[f(j,null,{default:u(()=>[f(m,null,{default:u(()=>[f(d,null,{default:u(()=>[f(Y,null,{default:u(()=>[f(I,null,{default:u(()=>b[2]||(b[2]=[C("Career History")])),_:1})]),_:1}),f(w,null,{default:u(()=>[C(p(_.occupationList.occupation1)+" → "+p(_.occupationList.occupation2)+" → "+p(_.occupationList.occupation3),1)]),_:1})]),_:1})]),_:1})]),_:1}),f(j,null,{default:u(()=>[f(m,null,{default:u(()=>[f(d,{color:"transparent"},{default:u(()=>[f(L,{modelValue:S.value,"onUpdate:modelValue":b[0]||(b[0]=W=>S.value=W),"align-tabs":"center",grow:"","slider-color":"grey-darken-3"},{default:u(()=>[(c(),$(N,null,X(J,(W,F)=>f(k,{key:F,class:"no-uppercase",value:W.value},{default:u(()=>[C(p(W.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),f(w,null,{default:u(()=>[f(G,{modelValue:S.value,"onUpdate:modelValue":b[1]||(b[1]=W=>S.value=W)},{default:u(()=>[(c(),$(N,null,X(J,(W,F)=>f(B,{key:F,value:W.value},{default:u(()=>[f(Ke,{"career-list":_.careerList,genre:W.value},null,8,["career-list","genre"])]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const Qe=Ie(Ee,[["__scopeId","data-v-6fe21aa6"]]),qe=pe({__name:"TimelineView",setup(T){return(J,_)=>(c(),H(Qe))}});export{qe as default};