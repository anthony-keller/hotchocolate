(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dlMv:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("P/Uw"),l=t("DijC"),o=t("BBkP"),c=t("CMDK"),m=t("BpYy"),p=t.n(m),s=t("vOnD"),d=function(e){var n=e.name,t=e.description,a=e.price,i=e.cycle,l=e.children;return r.a.createElement(g,null,r.a.createElement(h,null,r.a.createElement(f,null,n),r.a.createElement(y,null,t),r.a.createElement(w,null,r.a.createElement(b,null,"$",u.format(a))," ",r.a.createElement(E,null,"/",i)),r.a.createElement(C,{href:"mailto:sales@chillicream.com?subject="+n+" Support"},"Buy ",n)),r.a.createElement(x,null,r.a.createElement(_,null,"What's included"),r.a.createElement(v,null,l)))},u=new Intl.NumberFormat,g=s.c.div.withConfig({displayName:"sales-card__Container",componentId:"sc-1uupny6-0"})(["max-width:350px;margin:10px;box-shadow:rgba(0,0,0,0.25) 0px 3px 6px 0px;border:1px solid rgb(229,231,235);border-radius:var(--border-radius);"]),h=s.c.div.withConfig({displayName:"sales-card__TopHalf",componentId:"sc-1uupny6-1"})(["padding:1.5rem;"]),f=s.c.h2.withConfig({displayName:"sales-card__Name",componentId:"sc-1uupny6-2"})(["margin:0;line-height:1.5rem;font-size:1.125rem;font-weight:600;color:rgb(17,24,39);"]),y=s.c.p.withConfig({displayName:"sales-card__Description",componentId:"sc-1uupny6-3"})(["margin:0;color:rgb(107,114,128);margin-top:1rem;font-size:0.875rem;line-height:1.25rem;"]),w=s.c.p.withConfig({displayName:"sales-card__PriceRow",componentId:"sc-1uupny6-4"})(["margin:0;margin-top:2rem;"]),b=s.c.span.withConfig({displayName:"sales-card__Price",componentId:"sc-1uupny6-5"})(["color:rgb(17,24,39);font-size:2.25rem;line-height:2.5rem;font-weight:800;"]),E=s.c.span.withConfig({displayName:"sales-card__PerMonth",componentId:"sc-1uupny6-6"})(["color:rgb(107,114,128);font-size:1rem;line-height:1.5rem;font-weight:500;"]),C=s.c.a.withConfig({displayName:"sales-card__Buy",componentId:"sc-1uupny6-7"})(['display:block;text-align:center;cursor:pointer;font-family:"Roboto",sans-serif;margin-top:2rem;width:100%;color:#fff;padding:0.5rem 0;font-size:0.875rem;line-height:1.25rem;font-weight:600;border:1px solid transparent;border-radius:0.375rem;background-color:var(--brand-color);:hover{background-color:var(--brand-color-hover);}']),x=s.c.div.withConfig({displayName:"sales-card__BottomHalf",componentId:"sc-1uupny6-8"})(["padding:1.5rem 1.5rem 2rem 1.5rem;border-top:1px solid rgba(229,231,235,1);"]),_=s.c.h3.withConfig({displayName:"sales-card__PerkLeadingText",componentId:"sc-1uupny6-9"})(['margin:0;font-family:"Roboto",sans-serif;letter-spacing:0.025em;color:rgb(17,24,39);font-size:0.75rem;line-height:1rem;font-weight:500;']),v=s.c.ul.withConfig({displayName:"sales-card__Perks",componentId:"sc-1uupny6-10"})(["margin:0;padding:0;list-style:none;margin-top:1.5rem;"]),k=function(e){var n=e.children;return r.a.createElement(I,null,r.a.createElement(N,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),r.a.createElement(z,null,n))},I=s.c.li.withConfig({displayName:"sales-card-perk__Perk",componentId:"sc-1n3e51j-0"})(["display:grid;grid-template-rows:auto;grid-template-columns:20px 1fr;"]),N=s.c.svg.withConfig({displayName:"sales-card-perk__PerkIcon",componentId:"sc-1n3e51j-1"})(["flex-shrink:0;width:1.25rem;height:1.25rem;color:rgb(16,185,129);"]),z=s.c.div.withConfig({displayName:"sales-card-perk__PerkContainer",componentId:"sc-1n3e51j-2"})(["margin-left:12px;font-size:0.875rem;line-height:1.25rem;"]),j=function(e){var n=e.children;return r.a.createElement(P,null,r.a.createElement(q,null,"- "),r.a.createElement(B,null,n))},P=s.c.div.withConfig({displayName:"sales-card-perk-item__Container",componentId:"n10021-0"})(["display:grid;grid-template-rows:auto;grid-template-columns:20px 1fr;margin:3px 0;"]),q=s.c.div.withConfig({displayName:"sales-card-perk-item__Bullet",componentId:"n10021-1"})(["margin-left:12px;"]),B=s.c.div.withConfig({displayName:"sales-card-perk-item__Content",componentId:"n10021-2"})(["margin-left:5px;font-size:0.875rem;line-height:1.25rem;"]),O=t("zZ/w"),T=function(){var e=Object(a.useState)("annualy"),n=e[0],t=e[1],i={Basic:{monthly:325,biannualy:300,annualy:275},Enterprise:{monthly:2250,biannualy:2e3,annualy:1750}};return r.a.createElement(L,null,r.a.createElement(A,null,r.a.createElement(D,null,"Support Plans"),r.a.createElement(G,null,"Do you use HotChocolate or any other ChilliCream product? Do you need help?",r.a.createElement("br",null),"Choose one of our support plans."),r.a.createElement(R,null,r.a.createElement(M,{isActive:"monthly"===n,onClick:function(){return t("monthly")}},"Monthly"),r.a.createElement(M,{style:{marginLeft:"0.125rem"},isActive:"biannualy"===n,onClick:function(){return t("biannualy")}},"Biannualy"),r.a.createElement(M,{style:{marginLeft:"0.125rem"},isActive:"annualy"===n,onClick:function(){return t("annualy")}},"Annualy"))),r.a.createElement(H,null,r.a.createElement(d,{name:"Basic",description:"The support plan for companies that want to get in contact with a ChilliCream expert and prioritised bug fixes for reported incidents.",price:i.Basic[n],cycle:"mo"},r.a.createElement(k,null,"Your own company slack channel, where a maintainer answers your questions"),r.a.createElement(k,null,"24 hours response time based on european working days"),r.a.createElement(k,null,"One prioritized incident per month")),r.a.createElement(d,{name:"Enterprise",description:"The support plan for companies that need a GraphQL sparring partner and want a dedicated time pensum for their project per month.",price:i.Enterprise[n],cycle:"mo"},r.a.createElement(k,null,"Your own company slack channel, where a maintainer answers your questions"),r.a.createElement(k,null,"24 hours response time based on european working days"),r.a.createElement(k,null,"Two prioritized incidents per month"),r.a.createElement(k,null,"12 hours per month at your free disposal",r.a.createElement(S,null,"The time can be spend on:"),r.a.createElement(j,null,"Educating your team with workshops"),r.a.createElement(j,null,"Consulting on GraphQL, testing and architecture"),r.a.createElement(j,null,"Regular code reviews"),r.a.createElement(j,null,"Pushing a feature of your choice")))))},S=s.c.div.withConfig({displayName:"sales-partial__PerkItemlistHeader",componentId:"cqgpyw-0"})(["margin-top:5px;margin-bottom:5px;"]),L=s.c.div.withConfig({displayName:"sales-partial__Container",componentId:"cqgpyw-1"})(["width:100%;overflow:hidden;box-sizing:border-box;"," ",""],Object(O.f)("\n      padding: 40px;\n      padding-top: 0;\n    "),Object(O.d)("  \n      padding: 15px;\n      padding-top: 0;\n    ")),A=s.c.div.withConfig({displayName:"sales-partial__SwiterContainer",componentId:"cqgpyw-2"})(["display:flex;flex-direction:column;"]),D=s.c.h1.withConfig({displayName:"sales-partial__Title",componentId:"cqgpyw-3"})(["flex:0 0 auto;font-size:1.75em;color:#667;text-align:center;",""],Object(O.e)("\n    text-align: center;\n  ")),G=s.c.p.withConfig({displayName:"sales-partial__LeadingText",componentId:"cqgpyw-4"})(["margin:0;margin-top:1.25rem;font-size:1.25rem;line-height:1.75rem;max-width:800px;align-self:center;color:rgb(107,114,128);text-align:center;"]),M=s.c.button.withConfig({displayName:"sales-partial__CyclePlan",componentId:"cqgpyw-5"})(["padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2rem;padding-right:2rem;cursor:pointer;color:rgb(55,65,81);font-size:0.875rem;line-height:1.25rem;font-weight:500;border-radius:0.375rem;border-color:rgb(229,231,235);background-color:",";box-shadow:",";",""],(function(e){return e.isActive?"rgb(255, 255, 255)":"inherit"}),(function(e){return e.isActive?"rgba(0, 0, 0, 0.25) 0px 1px 2px 0px":"none"}),Object(O.d)("\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  ")),R=s.c.div.withConfig({displayName:"sales-partial__CycleContainer",componentId:"cqgpyw-6"})(["display:flex;align-self:center;border-radius:0.5rem;padding:0.125rem;margin-top:2rem;background-color:rgb(243,244,246);","{width:50%;}",""],M,Object(O.d)("\n    "+M+" {\n      width: auto;\n    }\n  ")),H=s.c.div.withConfig({displayName:"sales-partial__CardContainer",componentId:"cqgpyw-7"})(["margin-top:1.5rem;justify-items:center;>:not(:first-child){margin-top:16px;}display:grid;grid-template-columns:repeat(2,minmax(0,1fr));max-width:800px;margin-left:auto;margin-right:auto;gap:1.5rem;> div{margin-top:0 !important;}",""],Object(O.e)("\n    margin-top: 1rem;\n    grid-template-columns: minmax(0, 1fr)\n  "));n.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Service & Support"}),r.a.createElement(l.b,null,r.a.createElement(l.d,null,"Service & Support"),r.a.createElement(l.a,null,"Get quick access to ChilliCream experts"),r.a.createElement(l.c,null,"Efficiency is everything. Make your team more productive and ship your product faster to market. Get immediate access to a pool of ChilliCream experts which will support you along your journey.")),r.a.createElement(i.d,null,r.a.createElement(T,null)),r.a.createElement(i.d,null,r.a.createElement(i.e,null,r.a.createElement(i.c,null,r.a.createElement(p.a,null)),r.a.createElement(i.a,null,r.a.createElement(i.f,null,"Get in Touch"),r.a.createElement("p",null,"Want to learn more? Get the right help for your team and reach out to us today. Write us an"," ",r.a.createElement("a",{href:"mailto:contact@chillicream.com"},r.a.createElement(i.b,null))," ","and we will come back to you shortly!")))))}}}]);
//# sourceMappingURL=component---src-pages-support-tsx-3e4fefb628409d998603.js.map