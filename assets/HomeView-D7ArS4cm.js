import{d as p,i as _,_ as d,o as r,c as l,a as i,t as A,b as w,r as u,e as U,F as o,f,g as h,h as x}from"./index-IHh19h8-.js";const k=p({props:{id:Number,title:String,imageUrl:String,price:Number},setup(e){const t=_("addToBasket");return{handleAddToBasket:()=>{t&&t({id:e.id,title:e.title,imageUrl:e.imageUrl,price:e.price})}}}}),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG6SURBVHgBrVZRTsJAEJ2tEH97A3sECmril+UEygnEE4j/Jm29AN5APYHegPplohG4geUG/TWRjq9LaaDZyo7xJQvbXWbezs6boURC8GvokRAOSbFPE56FrsRERALnAb48zK4EZtJI1MWKTY1EVrY/RBQeMX1WC0vqq6M4sbEVRFJGscYehWQJexLmYW0l4Hedo/8h4Y9wSDrhNbTojCygc6JVsyQXVwBpqgMsudVg9koCt8FDUk5SfGSrwQv4y+CveJ639H5B4NA9EgtHTCIwBevJFoo7yjlSvdukUlepngmZrkWOjHJnpA7Dx+JhS8Il0ROmHfo7UvqmgTqO5+sFY50g0WPsiAquIvhC/ZzE6eaiUV2qF1+jqiOSgOkZB/PrBNrfr3bTCDnigCygunGjrx11wta54bewIyaBCAoj+5bedk7FJJQLFZazPBJylKllJJCnbxSF4nNqQGOyeBoWbd0rH1OwDlU3fKn2Z/pveAxVbThve6p7s6j7MkZSOihGht4VaWluEOjT+XGKMQDJ5eoQxeIyMPkzX1eu+1GCwvLRe2I4y6gBqKkHHKIPsjvkJSBbSF8Udtn9AD3ej+Z5gRvvAAAAAElFTkSuQmCC",y={class:"relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl",style:{width:"350px",height:"407px"}},C={class:"flex flex-col h-full"},B={class:"flex justify-center"},R=["src"],I={class:"flex justify-between mt-auto"},Q={class:"flex flex-col gap-7"},b={class:"text-slate-950",style:{"font-size":"17px","font-weight":"600"}},E={class:"flex flex-col gap-7"},L={style:{"font-size":"17px","font-weight":"600",color:"#ffa542"}};function S(e,t,n,c,m,g){return r(),l("div",y,[i("div",C,[i("div",B,[i("img",{src:e.imageUrl,alt:"Sneaker"},null,8,R)]),i("div",I,[i("div",Q,[i("span",b,A(e.title),1),t[1]||(t[1]=i("div",{class:"flex"},[i("img",{src:v,alt:""}),w(" 4.9 ")],-1))]),i("div",E,[i("div",null,[i("div",L,A(e.price),1)]),i("div",{style:{"font-size":"17px","font-weight":"600"},onClick:t[0]||(t[0]=(...a)=>e.handleAddToBasket&&e.handleAddToBasket(...a))},"Купить")])])])])}const J=d(k,[["render",S]]),T=p({components:{Card:J},setup(){const e=u([{id:1,title:"Apple BYZ S852I",price:2500,imageUrl:new URL("/Qpick/assets/Image%20(1)-DAdm__st.png",import.meta.url).href},{id:2,title:"Apple EarPods",price:1300,imageUrl:new URL("/Qpick/assets/Image%20(2)-D36Gvraq.png",import.meta.url).href},{id:3,title:"Apple EarPods",price:400,imageUrl:new URL("/Qpick/assets/Image%20(3)-C7Pvyhh3.png",import.meta.url).href},{id:4,title:"Apple BYZ S852I",price:5e3,imageUrl:new URL("/Qpick/assets/Image%20(4)-D2wZlfmH.png",import.meta.url).href},{id:5,title:"Apple EarPods",price:3333,imageUrl:new URL("/Qpick/assets/Image%20(5)-y_Vtdyt4.png",import.meta.url).href},{id:6,title:"Apple EarPods",price:21342,imageUrl:new URL("/Qpick/assets/Image%20(6)-CYI_zKf7.png",import.meta.url).href}]),t=u([{id:1,title:"peta",price:1434,imageUrl:new URL("/Qpick/assets/Image%20(1)-DAdm__st.png",import.meta.url).href},{id:2,title:"peta",price:103,imageUrl:new URL("/Qpick/assets/Image%20(2)-D36Gvraq.png",import.meta.url).href},{id:3,title:"peta",price:1002,imageUrl:new URL("/Qpick/assets/Image%20(3)-C7Pvyhh3.png",import.meta.url).href},{id:4,title:"peta",price:1090,imageUrl:new URL("/Qpick/assets/Image%20(4)-D2wZlfmH.png",import.meta.url).href},{id:5,title:"peta",price:100,imageUrl:new URL("/Qpick/assets/Image%20(5)-y_Vtdyt4.png",import.meta.url).href},{id:6,title:"peta",price:100,imageUrl:new URL("/Qpick/assets/Image%20(6)-CYI_zKf7.png",import.meta.url).href}]);return{items:e,items1:t}}}),$={class:"flex flex-wrap justify-center",style:{gap:"30px"}};function j(e,t,n,c,m,g){const a=U("card");return r(),l(o,null,[t[1]||(t[1]=i("div",{style:{width:"100%","max-width":"1150px",margin:"0 auto",padding:"20px 20px"}},"Наушники",-1)),i("div",$,[(r(!0),l(o,null,f(e.items,s=>(r(),h(a,{key:s.id,id:s.id,title:s.title,imageUrl:s.imageUrl,price:s.price},null,8,["id","title","imageUrl","price"]))),128)),t[0]||(t[0]=i("div",{style:{width:"100%","max-width":"1150px",margin:"0 auto",padding:"20px 20px"}}," Беспроводные наушники ",-1)),(r(!0),l(o,null,f(e.items,s=>(r(),h(a,{key:s.id,id:s.id,title:s.title,imageUrl:s.imageUrl,price:s.price},null,8,["id","title","imageUrl","price"]))),128))])],64)}const V=d(T,[["render",j]]),D=p({components:{CardList:V}}),F={class:"basket lok rounded-xl mt-14",style:{width:"100%","max-width":"1150px",margin:"0 auto 20px auto",padding:"0px 20px"}};function G(e,t,n,c,m,g){const a=U("CardList");return r(),l("div",F,[x(a)])}const P=d(D,[["render",G]]);export{P as default};
