(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[810],{713:t=>{t.exports=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},689:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>w});var n=i(713),a=i.n(n),o=i(294),s=i(727),r=i(163);(0,r.ZP)(s.rU).withConfig({displayName:"StockMain__HomeLink",componentId:"e5t2f2-0"})(["float:right;"]);const l=r.ZP.div.withConfig({displayName:"StockMain__DivContainer",componentId:"e5t2f2-1"})(["display:flex;flex-direction:column;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgb(32,34,37);box-sizing:border-box;padding-top:5rem;font-size:2.8rem;align-items:center;"]),m=r.ZP.div.withConfig({displayName:"StockMain__HeaderDiv",componentId:"e5t2f2-2"})(["position:relative;display:flex;width:90%;justify-content:center;div{width:30%;}.homebutton{position:absolute;right:0;top:0;float:right;}"]),p=r.ZP.div.withConfig({displayName:"StockMain__InputDiv",componentId:"e5t2f2-3"})(["display:flex;justify-content:center;position:relative;width:90%;height:auto;margin:0 auto;font-size:1.5rem;@media screen and (max-width:320px){height:10%;}@media screen and (max-width:280px){font-size:0.5rem;}input{@media screen and (max-width:280px){width:70%;}}"]),c=r.ZP.span.withConfig({displayName:"StockMain__Span",componentId:"e5t2f2-4"})(["color:white;display:block;text-align:center;@media screen and (max-width:768px){font-size:2rem;}"]),h=r.ZP.button.withConfig({displayName:"StockMain__Button",componentId:"e5t2f2-5"})(["background:grey;color:white;font-size:1.5rem;&:focus{outline:none;}&:hover{background:white;color:black;}@media screen and (max-width:375px){font-size:1rem;}"]),d=r.ZP.svg.withConfig({displayName:"StockMain__Svg",componentId:"e5t2f2-6"})(["font-size:1rem;@media screen and (min-width:1080px){width:50%;height:auto;max-height:440.5px;max-width:521px;overflow:visible;margin-bottom:5%;margin-top:5%;margin-left:auto;margin-right:auto;display:",";}@media screen and (max-width:1079px){width:50vw;height:50%;overflow:visible;margin-bottom:5%;margin-top:5%;margin-left:auto;margin-right:auto;display:",";}@media screen and (max-width:375px){width:70%;}"],(t=>t.svgDisplay||"block"),(t=>t.svgDisplay||"block")),u=r.ZP.text.withConfig({displayName:"StockMain__Text",componentId:"e5t2f2-7"})(["fill:white;font-size:20%;"]),g=r.ZP.line.withConfig({displayName:"StockMain__GridLine",componentId:"e5t2f2-8"})(["stroke:grey;stroke-opacity:.5;"]);function f(t,e){return t/e*100}class x extends o.Component{render(){return o.createElement("polyline",{fill:"none",stroke:"white","stroke-width":"1",points:this.props.points})}}class y extends o.Component{render(){let t=this.props.points.split(" ");t=t.slice(0,-1);const e=t.map(((e,i)=>{const n=e.split(",");return o.createElement("circle",{cx:f(i,t.length),cy:parseFloat(n[1]),r:"1",fill:"white"})}));return o.createElement(d,{id:"stockChart",viewBox:"0 0 100 100",preserveAspectRatio:"none",svgDisplay:this.props.SvgDisplay,style:r.ZP.MainContainer},o.createElement("g",{style:{stroke:"grey"}},o.createElement("line",{x1:"0",x2:"100",y1:"100",y2:"100"})),o.createElement("g",{style:{stroke:"grey"}},o.createElement("line",{x1:"0",x2:"0",y1:"0",y2:"100"})),function(){let t=[];for(let e=0;e<4;++e)t.push(o.createElement(g,{x1:"0",x2:"100",y1:25*e,y2:25*e}));return t}(),function(t,e){let i=[];for(let n=1;n<5;++n)i.push(o.createElement(u,{x:"-15",y:100-25*n},(e-t)/4*n+t));return i}(this.props.min,this.props.max),(i=this.props.xlabel).map(((t,e)=>{if(e%7==0||e==i.length-1){let n=f(e,i.length);return e!==i.length-1&&(n-=15),o.createElement(u,{x:n,y:"105"},t)}})),e,o.createElement(x,{points:this.props.points}));var i}}class w extends o.Component{constructor(t){super(t),a()(this,"FetchStockInfo",(()=>{let t=this.state.stockID;""==t||1==isNaN(t)?alert("Stock ID must be numbers"):fetch("http://114.32.157.74/PythonFlask/api/v1/?id="+t).then((t=>t.json())).then((t=>{let e=t.value;this.setState({x_texts:t.date});let i="";e=e.map((t=>parseFloat(t))),this.setState({maxNum:Math.max(...e),minNum:Math.min(...e)});for(let t=0;t<e.length;t++)i+=f(t,e.length),i+=",",i+=100-this.calyPosition(e[t]),i+=" ";this.setState({points:i,svgDisplay:"block"})})).catch((t=>{this.setState({svgDisplay:"none"})}))})),a()(this,"handleInputEvent",(()=>t=>{this.setState({stockID:t.target.value})})),this.state={stockID:"",minNum:0,maxNum:0,x_texts:[],points:"",reverseHeight:0,svgDisplay:"none"}}calyPosition(t){return(t-this.state.minNum)/(this.state.maxNum-this.state.minNum)*100}render(){return o.createElement(l,null,o.createElement(m,null,o.createElement(c,null,"輸入股票代碼以取得股票資訊")),o.createElement(p,null,o.createElement("input",{"aria-label":"input",type:"text",name:"stockID",value:this.state.stockID,onChange:this.handleInputEvent()}),o.createElement(h,{onClick:this.FetchStockInfo,"arial-label":"searchButton"},"搜尋")),o.createElement(y,{max:this.state.maxNum,min:this.state.minNum,SvgDisplay:this.state.svgDisplay,points:this.state.points,xlabel:this.state.x_texts}))}}}}]);