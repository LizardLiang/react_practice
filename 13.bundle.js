(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[13],{713:e=>{e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},341:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var i=n(713),a=n.n(i),s=n(294),l=n(163);const r=l.ZP.button.withConfig({displayName:"ScriptDownload__LinkButton",componentId:"yymlfh-0"})(["width:10%;background:none;color:white;text-align:left;float:right;display:flex;align-items:flex-end;@media screen and (max-width:1440px){font-size:1.163rem;}@media screen and (max-width:1024px){font-size:0.7731rem;}@media screen and (max-width:768px){width:14%;}@media screen and (max-width:425px){width:28%;}@media screen and (max-width:320px){width:34%;}&:hover{background:grey;}"]),d=l.ZP.div.withConfig({displayName:"ScriptDownload__LinkBlock",componentId:"yymlfh-1"})(["width:60%;display:flex;font-size:1.5rem;"]),o=l.ZP.span.withConfig({displayName:"ScriptDownload__LinkName",componentId:"yymlfh-2"})(["width:90%;word-wrap:break-word;@media screen and (max-width:768px){font-size:1rem;}@media screen and (max-width:425px){width:71%;}@media screen and (max-width:320px){width:68%;}"]);function m(e){return s.createElement(d,null,s.createElement(o,null,e.name),s.createElement(r,{onClick:()=>{e.setSrc(e.fullpath)}},"點此下載"))}const c=l.ZP.div.withConfig({displayName:"ScriptDownload__MainDiv",componentId:"yymlfh-3"})(["        display:flex;flex-direction:column;align-items:center;color:white;width:100%;padding-top:5rem;"]),p=l.ZP.div.withConfig({displayName:"ScriptDownload__HeaderDiv",componentId:"yymlfh-4"})(["display:flex;justify-content:center;align-items:center;font-size:4rem;@media screen and (max-width:425px){font-size:3rem;}@media screen and (max-width:320px){font-size:2rem;}"]),h=l.ZP.div.withConfig({displayName:"ScriptDownload__LinkDiv",componentId:"yymlfh-5"})(["display:flex;flex-direction:column;width:100%;align-items:center;justify-content:flex-start;"]),f=l.ZP.span.withConfig({displayName:"ScriptDownload__LinkCatSpan",componentId:"yymlfh-6"})(["width:70%;font-size:2rem;"]);class w extends s.Component{constructor(e){super(e),a()(this,"setSource",(e=>{this.setState({src:e})})),a()(this,"FetchScripts",(async()=>{fetch("http://114.32.157.74/PythonFlask/api/v1/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:"get-scripts"})}).then((e=>e.json())).then((e=>{e.scripts.map((e=>{let t=e.dir.replace("Hack","");this.state.Games.includes(t)||this.setState({Games:[...this.state.Games,t]});let n=e.fullpath.split("\\");n.splice(0,2);let i="http://114.32.157.74/Scripts/"+n.join("/"),a={name:e.name,fullpath:i,dir:t};this.setState({Game:[...this.state.Game,a]})}))}))})),this.state={Games:[],Game:[],src:""}}componentDidMount(){this.FetchScripts()}render(){let e=this.state.Games.map((e=>{let t=[];return t=this.state.Game.map((t=>{if(t.dir==e)return s.createElement(m,{setSrc:this.setSource,name:t.name,fullpath:t.fullpath})})),s.createElement(h,null,s.createElement(f,null,e),t)}));return s.createElement(c,null,s.createElement(p,null,"檔案下載區"),e,s.createElement("iframe",{src:this.state.src,style:{display:"none"}}))}}}}]);