(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[533],{1358:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var i=n(7294);const o=n(9163).ZP.div.withConfig({displayName:"ShowIp__MainDiv",componentId:"sc-1rqr819-0"})(["display:flex;flex-direction:column;height:100vh;width:100vw;justify-content:center;align-items:center;color:white;padding-top:5rem;font-size:5rem;@media screen and (max-width:425px){font-size:3rem;}@media screen and (max-width:320px){font-size:2rem;}"]),s=function(){const[e,t]=(0,i.useState)("");return(0,i.useEffect)((()=>{fetch("http://114.32.157.74/PythonFlask/api/v1/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:"fetch_ip"})}).then((e=>e.json())).then((e=>{t(e.ip)}))}),[e]),i.createElement(o,null,"Your IP is:",i.createElement("br",null),e)}}}]);