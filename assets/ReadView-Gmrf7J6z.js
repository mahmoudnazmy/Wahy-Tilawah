import{_ as m,r as n,c as v,o as _,a as i,b as e,w as h,v as f,F as g,d as y,e as w,f as l,g as b,h as x,t as r}from"./index-BtZz1Nt2.js";import{q as k}from"./quranService-Bxddy8Q8.js";import"./index-DW_MHI2K.js";const B={class:"read-container"},C={class:"search-box"},S={class:"suras-grid"},V={class:"surah-number"},L={class:"surah-details"},M={__name:"ReadView",setup(N){const c=n([]),o=n(""),u=n(!0),d=v(()=>c.value.filter(t=>t.name.includes(o.value)||t.englishName.toLowerCase().includes(o.value.toLowerCase())));return _(async()=>{try{c.value=await k.getSuras()}catch(t){console.error("Error fetching suras:",t)}finally{u.value=!1}}),(t,a)=>{const p=w("router-link");return l(),i("div",B,[a[2]||(a[2]=e("section",{class:"hero-section"},[e("div",{class:"hero-content"},[e("h1",null," رتّل القرآن واملأ قلبك بالنور "),e("p",{class:"hero-description"}," استمتع بتجربة قراءة القرآن الكريم بخط واضح، وإمكانية تغيير أنماط العرض لتسهيل التلاوة ")]),e("div",{class:"hero-pattern"})],-1)),e("div",C,[h(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),placeholder:"ابحث عن سورة...",class:"search-input"},null,512),[[f,o.value]]),a[1]||(a[1]=e("i",{class:"fas fa-search search-icon"},null,-1))]),e("div",S,[(l(!0),i(g,null,y(d.value,s=>(l(),b(p,{key:s.number,to:`/surah/${s.number}`,class:"surah-card"},{default:x(()=>[e("div",V,r(s.number),1),e("div",L,[e("h3",null,r(s.name),1),e("h4",null,r(s.englishName),1),e("p",null,r(s.revelationType==="Meccan"?"مكية":"مدنية")+" - "+r(s.numberOfAyahs)+" آية",1)])]),_:2},1032,["to"]))),128))])])}}},F=m(M,[["__scopeId","data-v-75e35d07"]]);export{F as default};
