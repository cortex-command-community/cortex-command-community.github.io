(this.webpackJsonpcortex=this.webpackJsonpcortex||[]).push([[0],{21:function(e,t,n){e.exports=n(43)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(17),o=n.n(r),i=(n(26),n(27),n(9));n(28);var c=function(e){return l.a.createElement("img",{className:"title",src:"./title-with-glow.png",alt:"Cortex Command Community Project",style:{top:e.yCenter-e.titleHeight/2,maxHeight:e.titleHeight}})};var m=function(e){return l.a.createElement("img",{src:"./moon.png",alt:"",style:{position:"fixed",top:e.yCenter,left:e.xCenter,display:"block",maxHeight:"176px",maxWidth:"176px",height:"auto",width:"auto"}})};n(29);var s=function(e){return l.a.createElement("div",{style:{width:"100%",position:"relative"}},l.a.createElement("div",{className:"planet",style:{display:"block",height:"auto",width:"auto",maxHeight:e.planetHeight+27,maxWidth:e.planetHeight+54,margin:"auto",position:"relative",zIndex:"9",textAlign:"center"}},l.a.createElement("div",{style:{position:"absolute",top:-27,bottom:-27,width:"100%",zIndex:"10",overflow:"hidden",textAlign:"initial"}},l.a.createElement("img",{src:"./station.png",className:"station",alt:"",style:{transformOrigin:"0 ".concat(e.planetHeight/2+27,"px")}})),l.a.createElement("img",{src:"./planet.png",alt:"",style:{height:"100%",width:"100%",maxHeight:e.planetHeight,maxWidth:e.planetHeight}})))};var u=function(){var e=function(){return Math.min(550,window.innerWidth)/4},t=function(){return window.innerHeight/2},n=function(){return(window.innerWidth+550)/2-68.75},r=function(){return window.innerHeight-1.8*e()},o=function(){var n=e()+window.innerHeight/2;return window.pageYOffset<n?t():t()+n-window.pageYOffset},u=function(){var e=r()-.8*window.pageYOffset;return Math.max(e,-150)},d=function(){return n()-.2*window.pageYOffset},h=Object(a.useState)(t()),p=Object(i.a)(h,2),g=p[0],E=p[1],f=Object(a.useState)(n()),y=Object(i.a)(f,2),x=y[0],v=y[1],w=Object(a.useState)(r()),b=Object(i.a)(w,2),C=b[0],k=b[1],j=Object(a.useState)(550),H=Object(i.a)(j,2),N=H[0],I=H[1],O=function(){E(o),v(d),k(u),I(Math.min(550,window.innerWidth))};return Object(a.useEffect)((function(){return window.addEventListener("resize",O),window.addEventListener("scroll",O),function(){window.removeEventListener("resize",O),window.removeEventListener("scroll",O)}})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:window.innerHeight/2+N/4}}),l.a.createElement("section",{className:"full-pager",style:{minHeight:N,height:window.innerHeight,display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}},l.a.createElement(c,{yCenter:g,titleHeight:151}),l.a.createElement(s,{planetHeight:N})),l.a.createElement(m,{yCenter:C,xCenter:x}))},d=n(8);n(30);var h=function(){return l.a.createElement("div",{className:"cortex-navigation",style:{borderTop:"4px solid #f9de8f",borderBottom:"1px solid black",boxSizing:"border-box",borderLeft:"0",borderRight:"0",textAlign:"center",color:"white",fontSize:"30px",fontFamily:'"Montserrat", sans-serif',fontWeight:"bold"}},l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",margin:"auto",padding:"0",maxWidth:"800px",justifyContent:"space-between",alignItems:"center",height:"100%"}},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/downloads"},l.a.createElement("span",null,"Downloads"))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/get-involved"},l.a.createElement("span",null,"Get Involved")))))};n(35);var p=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-background"},l.a.createElement("div",{className:"footer-dirt"})),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",margin:"auto",padding:"0",maxWidth:"800px",height:"100%",position:"relative",zIndex:"1"}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Community")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://discord.gg/invite/TSU6StNQUG"},"Our Discord")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://cccp.mod.io/"},"CCCP Mod Portal")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://forums.datarealms.com/"},l.a.createElement("span",null,"DataRealms Fan Forums")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Development")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cortex-command-community"},l.a.createElement("span",null,"Github"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/issues"},l.a.createElement("span",null,"Issues"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cortex-command-community/Cortex-Command-Community-Project-Data/wiki"},l.a.createElement("span",null,"Development Plans and Info")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Resources")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://wiki.datarealms.com/Cortex_Command"},l.a.createElement("span",null,"DataRealms Wiki"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cortex-command-community/Cortex-Command-Community-Project-Source/blob/development/CHANGELOG.md"},l.a.createElement("span",null,"CCCP Changelog"))))))};n(36);var g=function(e){return l.a.createElement("div",{className:"cortex-card",style:{display:"flex",justifyContent:e.right?"flex-end":"flex-start"}},l.a.createElement("div",{className:"one"},l.a.createElement("div",{className:"two"},e.children)))};n(37);var E=function(e){return l.a.createElement("div",{className:"cortex-card-container",style:{display:"flex",flexDirection:"column",maxWidth:"800px",margin:"auto"}},e.children)};n(38);var f=function(e){return l.a.createElement("div",{className:"card-contents",style:{display:"flex",flexDirection:e.right?"row-reverse":"initial"}},l.a.createElement("div",{style:{flex:"1"}},l.a.createElement("div",{style:{padding:"8px 16px"}},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.body))),l.a.createElement("div",{style:{border:"2px solid black",backgroundColor:"black",minHeight:"196px",width:"196px"}}))};var y=function(e){return l.a.createElement("div",{style:{position:"fixed",bottom:"20px",width:"100%",zIndex:"100"}},l.a.createElement("button",{onClick:function(){for(var e=0,t=[{scrollTo:"full-pager",viewCheck:"full-pager",block:"center"},{scrollTo:"scroll-anchor",viewCheck:"cortex-card-container",block:"start"}];e<t.length;e++){var n=t[e],a=document.getElementsByClassName(n.viewCheck)[0];if(a.getBoundingClientRect().bottom>window.innerHeight+1&&!(a.getBoundingClientRect().bottom>window.innerHeight&&a.getBoundingClientRect().top<0)){document.getElementsByClassName(n.scrollTo)[0].scrollIntoView({block:n.block,behavior:"smooth"});break}}},style:{border:"0",padding:"0",backgroundColor:"transparent",margin:"auto",display:"block",cursor:"pointer"}},l.a.createElement("img",{src:"./arrow.gif",alt:"Scroll to content"})))};var x=function(){return l.a.createElement("div",{style:{backgroundColor:"#111"}},l.a.createElement("div",{style:{position:"fixed",top:"0",zIndex:"1000",width:"100%"}},l.a.createElement(h,null)),l.a.createElement(y,null),l.a.createElement(u,null),l.a.createElement("div",{style:{position:"relative",zIndex:"101",backgroundColor:"#111"}},l.a.createElement("div",{className:"scroll-anchor",style:{position:"relative",top:"-80px"}}),l.a.createElement(E,null,l.a.createElement(g,null,l.a.createElement(f,{title:"Upgraded Engine",body:"The source code has been enhanced to improve performance."})),l.a.createElement(g,{right:!0},l.a.createElement(f,{right:!0,title:"New Content",body:"New weapons, characters, and scenes."})),l.a.createElement(g,null,l.a.createElement(f,{title:"Improved Strategic Gameplay",body:"The team has focused on accentuating the most satisfying gameplay elements."}))),l.a.createElement("div",{style:{height:"48px"}}),l.a.createElement(p,null)))};var v=function(e){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},l.a.createElement(h,null),l.a.createElement("div",{style:{margin:"auto",maxWidth:"800px",width:"100%",flex:"1"}},l.a.createElement("div",{style:{padding:"48px 8px 0"}},e.children)),l.a.createElement(p,null))};var w=function(e){return l.a.createElement("div",{style:{margin:"48px 0"}},l.a.createElement("div",{style:{marginTop:"12px",border:"1px solid #333",padding:"12px 18px",borderRadius:"6px"}},l.a.createElement("h2",{style:{marginTop:"-28px",padding:"0 4px",width:"fit-content",background:"#eee"}},e.title),e.children))},b=n(19),C=n(20);n(42);var k=function(e){var t=e.link?"a":"button";return l.a.createElement(t,{className:"button-element",href:e.to,target:"_blank"},l.a.createElement("span",{className:"button-content"},e.children),e.link&&l.a.createElement(b.a,{icon:C.a}))};var j=function(){return l.a.createElement(v,null,l.a.createElement("h1",null,"Downloads"),l.a.createElement("h2",null,"Project Releases"),l.a.createElement(w,{title:"Cortex Command Community Project"},l.a.createElement("p",{style:{marginBottom:"18px"}},"This is where you can find the community's plans for Cortex Command's future. There'll be rebalancing, new weapons and units, and much more."),l.a.createElement(k,{link:!0,to:"https://github.com/cortex-command-community/Cortex-Command-Community-Project-Data/releases"},"Releases")),l.a.createElement("h2",null,"Modding Tools"),l.a.createElement(w,{title:"Legacy Mod Converter"},l.a.createElement("p",{style:{marginBottom:"18px"}},"This project automates most of the conversion work required to convert the legacy Cortex Command mods into Cortex Command Community Project compatible mods."),l.a.createElement(k,{link:!0,to:"https://github.com/cortex-command-community/Cortex-Command-Legacy-Mod-Converter"},"Get source")),l.a.createElement(w,{title:"Bender"},l.a.createElement("p",{style:{marginBottom:"18px"}},"The purpose of this tool is to make the life of modders easier by automagically generating bent limb sprites from limb parts."),l.a.createElement(k,{link:!0,to:"https://github.com/cortex-command-community/Cortex-Command-Community-Bender/releases"},"Releases")),l.a.createElement("div",{style:{height:"24px"}}))};var H=function(){return l.a.createElement(v,null,l.a.createElement("h1",null,"Page Not Found"),l.a.createElement("p",null,"Sorry, but the page you were trying to view does not exist."))},N=n(2),I=function(){return l.a.createElement(v,null,l.a.createElement("h1",null,"Get Involved"),l.a.createElement("p",null,"The Cortex Command Community Project (CCCP) is always looking for new hands and heads to make the game what it always should have been. Our aim is to create an excellent RTS-hybrid side-scroller, with tons of cool content, including revamped factions and (eventually) a full campaign."),l.a.createElement("br",null),l.a.createElement("p",null,"In terms of skills, we're looking for C++ programmers or people who are willing to take the time to learn it. More artists, sound creators, lua scripters or CC modders are also totally welcome. We could also definitely use more dedicated playtesters and help with balancing everything (especially as the project gets farther along), so if you'd like to join in, we'd be happy to have you. If you ",l.a.createElement("a",{href:"https://discord.gg/TSU6StNQUG"},"join us in Discord,")," we can help you get everything set up so you can contribute to the glory of the CCCP!"))};var O=function(){return l.a.createElement(d.a,null,l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(N.a,{path:"/downloads"},l.a.createElement(j,null)),l.a.createElement(N.a,{path:"/get-involved"},l.a.createElement(I,null)),l.a.createElement(N.a,null,l.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.fcdb7ec6.chunk.js.map