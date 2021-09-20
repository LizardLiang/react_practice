(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[268,877,891],{9713:e=>{e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},8540:(e,t,i)=>{"use strict";i.r(t),i.d(t,{StockChart:()=>C,Test_Program:()=>h,WebGame:()=>w});var n=i(7294),o=i(5697),l=i.n(o),a=i(9163),s=i(3379),r=i.n(s),c=i(3909);r()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const d=a.ZP.span.withConfig({displayName:"test_program__MainSpan",componentId:"sc-1ymxspl-0"})(["display:block;font-size:2vmin;"]),m=a.ZP.div.withConfig({displayName:"test_program__MainDiv",componentId:"sc-1ymxspl-1"})(["margin-left:20%;width:60%;display:",";text-align:left;"],(e=>e.isVisible||"none")),p=a.ZP.img.withConfig({displayName:"test_program__MainImg",componentId:"sc-1ymxspl-2"})(["width:100%;height:auto;"]);class h extends n.Component{constructor(e){super(e),this.state={isVisible:this.props.isVisible}}static get propTypes(){return{isVisible:l().string}}render(){return n.createElement(m,{isVisible:this.props.isVisible,className:"block"==this.props.isVisible?"projectAnim":""},n.createElement(d,null,"This test program is used for testing motor quality"),n.createElement(d,null,"It use MySQL as database to restore data from inductance meter and resistance meter!"),n.createElement(d,null,"Use RS232 as communication protocol!"),n.createElement(p,{src:"../img/test_program.png"}))}}const u=a.ZP.div.withConfig({displayName:"web_game__MainDiv",componentId:"sc-1ss9uwk-0"})(["display:",";"],(e=>e.isVisible||"none")),f=a.ZP.div.withConfig({displayName:"web_game__MainSpan",componentId:"sc-1ss9uwk-1"})(["margin:auto;width:80%;"]),g=a.ZP.iframe.withConfig({displayName:"web_game__MainIframe",componentId:"sc-1ss9uwk-2"})(["display:block;position:relative;height:70%;width:80%;margin:auto;overflow:hidden;text-align:left;"]);class w extends n.Component{static get propTypes(){return{isVisible:l().string}}render(){return n.createElement(u,{isVisible:this.props.isVisible,className:"block"==this.props.isVisible?"projectAnim":""},n.createElement(f,null,"此遊戲是基於 ReactJS 所製作的小遊戲，且為RWD網頁",n.createElement("br",null),"遊戲機制為在時限之內將點擊出所有汙染源",n.createElement("br",null),"共有八種汙染源，隨機產生五種汙染源作為目標，並限時一分鐘內找出這五種汙染源",n.createElement("br",null),"人物身上的能量條亦會隨著汙染源被找出改變其狀態",n.createElement("br",null),"當遊戲結束時根據是否找出所有汙染源，還是計時器結束，顯示訊息框。",n.createElement("br",null),n.createElement("a",{href:"https://github.com/lizrad/AirPollutionWithReactJS",target:"_blank",rel:"noreferrer"},"原碼連結")),n.createElement(g,{src:"http://MyIP",scrolling:"no"}))}}var b=i(9713),y=i.n(b),x=i(3727);const v=a.ZP.div.withConfig({displayName:"StockChart__MainDiv",componentId:"sc-16ls4b4-0"})(["display:",";"],(e=>e.isVisible||"none")),E=a.ZP.span.withConfig({displayName:"StockChart__MainSpan",componentId:"sc-16ls4b4-1"})(["font-size:2vmin;color:white;display:block;width:60%;margin:auto;text-align:left;"]);class C extends n.Component{constructor(e){super(e),y()(this,"FetchStockInfo",(()=>{let e=this.inputElement.value;fetch("https://cors-anywhere.herokuapp.com/http://114.32.157.74/PythonFlask/api/test?id="+e).then((e=>e.json())).then((e=>{let t=e.value;this.setState({x_texts:e.date});let i="";t=t.map((e=>parseFloat(e))),this.setState({maxNum:Math.max(...t),minNum:Math.min(...t)});for(let e=0;e<t.length;e++)i+=this.calxPosition(e,t.length),i+=",",i+=100-this.calyPosition(t[e]),i+=" ";this.setState({points:i,svgDisplay:"inline"})})).catch((()=>{this.setState({svgDisplay:"none"}),alert("Stock id not exist")}))})),this.state={points:"",reverseHeight:0,x_texts:[],svgDisplay:"none",maxNum:0,minNum:0},this.props.maxNum=0,this.props.minNum=0}static get propTypes(){return{maxNum:l().number,minNum:l().number,isVisible:l().string}}calyPosition(e){return(e-this.state.minNum)/(this.state.maxNum-this.state.minNum)*100}calxPosition(e,t){return e/t*100}render(){return n.createElement(v,{className:"block"==this.props.isVisible?"projectAnim":"",isVisible:this.props.isVisible},n.createElement(E,null,"此專案用於測試我自己架設的Python web API是否正常運作",n.createElement("br",null),"在輸入框輸入股票代號後，會回傳相關最近一個月的資料",n.createElement("br",null),n.createElement(x.rU,{to:"/StockSearch"},"Click here to go to Search page")),n.createElement("br",null))}}i(4017)},4017:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});var n=i(7294),o=i(3727),l=i(5977),a=i(9163);const s=a.ZP.div.withConfig({displayName:"projects__SectionDiv",componentId:"s6q55l-0"})(["  display:flex;align-items:center;justify-content:center;width:90%;color:white;margin:5px 0;@media screen and (max-width:1000px){flex-direction:column;}"]),r=a.ZP.div.withConfig({displayName:"projects__BlockDiv",componentId:"s6q55l-1"})(["  display:flex;flex-direction:column;width:200px;height:400px;background:#2f3136;border-radius:5px;align-items:center;margin:0 5px;transition:height 1s,width 1s;border:solid 1px grey;&:hover{width:300px;height:500px;transition:height 1s,width 1s;}@media screen and (max-width:1000px){width:100%;margin:5px 0;}"]),c=a.ZP.div.withConfig({displayName:"projects__HeadDiv",componentId:"s6q55l-2"})(["  display:flex;justify-content:center;align-items:center;font-size:1.5rem;width:100%;height:15%;"]),d=a.ZP.div.withConfig({displayName:"projects__FootDiv",componentId:"s6q55l-3"})(["  width:100%;height:15%;display:flex;justify-content:flex-end;align-items:flex-end;"]),m=a.ZP.button.withConfig({displayName:"projects__FootButton",componentId:"s6q55l-4"})(["  width:100px;height:100%;white-space:nowrap;overflow:hidden;transition:width 1s;font-size:1.5rem;background:none;padding:0;&:hover{transition:width 1s;width:125px;}"]),p=a.ZP.div.withConfig({displayName:"projects__IntroDiv",componentId:"s6q55l-5"})(["  position:relative;background-image:",";background-size:cover;background-position:center center;width:100%;height:70%;&:hover{cursor:pointer;}span{position:absolute;bottom:0;min-height:50px;display:flex;align-items:flex-end;color:ivory;width:100%;background:rgba(64,68,75,0.25)}"],(e=>`url(${e.bgurl})`||"none")),h=(0,a.ZP)(o.rU).withConfig({displayName:"projects__GuideLink",componentId:"s6q55l-6"})(["background:none;&:focus,&:hover{text-decoration:none;}"]),u=()=>{const e=(0,l.k6)(),t=(0,n.useCallback)((()=>e.push("/CountDown")),[e]),i=(0,n.useCallback)((()=>e.push("/StockSearch")),[e]),o=(0,n.useCallback)((()=>e.push("/CheckIP")),[e]);return n.createElement(s,null,n.createElement(r,null,n.createElement(c,null,"計時器"),n.createElement(p,{bgurl:"./img/countdownCut.png",onClick:t},n.createElement("span",null,"可自定義事件的倒數計時器。")),n.createElement(d,null,n.createElement(m,null,n.createElement(h,{to:"/CountDown"},"立即前往 →")))),n.createElement(r,null,n.createElement(c,null,"股票查詢"),n.createElement(p,{bgurl:"./img/stock.png",onClick:i},n.createElement("span",null,"查詢一個月內該股票價格。")),n.createElement(d,null,n.createElement(m,null,n.createElement(h,{to:"StockSearch"},"立即前往 →")))),n.createElement(r,null,n.createElement(c,null,"IP 查詢"),n.createElement(p,{bgurl:"./img/checkip.png",onClick:o},n.createElement("span",null,"利用API查詢使用者的IP")),n.createElement(d,null,n.createElement(m,null,n.createElement(h,{to:"CheckIP"},"立即前往 →")))))},f=()=>{const e=(0,l.k6)(),t=(0,n.useCallback)((()=>e.push("/Scripts",[e]))),i=(0,n.useCallback)((()=>e.push("/TodoList",[e]))),o=(0,n.useCallback)((()=>e.push("/Calculator",[e])));return n.createElement(s,null,n.createElement(r,null,n.createElement(c,null,"檔案下載"),n.createElement(p,{bgurl:"./img/script.png",onClick:t},n.createElement("span",null,"分享模組檔案。")),n.createElement(d,null,n.createElement(m,null,n.createElement(h,{to:"/Scripts"},"立即前往 →")))),n.createElement(r,null,n.createElement(c,null,"待辦事項"),n.createElement(p,{bgurl:"./img/todolist.png",onClick:i},n.createElement("span",null,"紀錄待辦事項，可分為三種狀態。")),n.createElement(d,null,n.createElement(m,null,n.createElement(h,{to:"TodoList"},"立即前往 →")))),n.createElement(r,null,n.createElement(c,null,"計算機"),n.createElement(p,{bgurl:"./img/calculator.png",onClick:o},n.createElement("span",null,"基本計算機功能。")),n.createElement(d,null,n.createElement(m,null,n.createElement(h,{to:"Calculator"},"立即前往 →")))))},g=a.ZP.div.withConfig({displayName:"projects__MainDiv",componentId:"s6q55l-7"})(["  display:flex;flex-direction:column;min-height:calc(1000px - 24px);align-items:center;justify-content:center;width:100%;padding-top:5rem;"]),w=()=>n.createElement(g,null,n.createElement(u,null),n.createElement(f,null))},4210:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>se});var n=i(9713),o=i.n(n),l=i(7294),a=i(9163),s=i(5697),r=i.n(s),c=i(3379),d=i.n(c),m=i(2613);d()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;const p=a.ZP.div.withConfig({displayName:"info__MainIntroDiv",componentId:"n83n0-0"})(["position:relative;margin:2.5% auto;color:white;@media screen and (min-width:1080px){fontsize:1.8rem;width:868px;height:176px;}@media screen and (max-width:1079px){width:85%;height:auto;}"]),h=a.ZP.span.withConfig({displayName:"info__SpanTitleIntro",componentId:"n83n0-1"})(["color:white;@media screen and (min-width:1080px){position:relative;display:inline-block;height:100%;left:50px;font-size:3vmin;}@media screen and (max-width:1079px){position:relative;top:0;font-size:3vmin;text-align:right;width:100%;left:5px;}"]),u=a.ZP.div.withConfig({displayName:"info__DivTitleIntro",componentId:"n83n0-2"})(['@media screen and (min-width:1080px){float:left;width:15%;height:auto;position:relative;z-index:1;&:before{content:"";position:absolute;top:0;left:0;background:grey;z-index:-1;height:100%;width:100%;transform:skew(-30deg);}}@media screen and (max-width:1079px){width:95%;height:auto;position:relative;z-index:1;margin:2.5% auto;&:before{content:"";position:absolute;top:0;left:0;background:grey;z-index:-1;height:100%;width:100%;transform:skew(-30deg);}}']),f=a.ZP.div.withConfig({displayName:"info__ShapeDivIntro",componentId:"n83n0-3"})(["@media screen and (min-width:1080px){height:176px;width:90px;float:left;shape-outside:polygon(0 0,100% 0,0 100%);}@media screen and (max-width:1079px){display:none;}"]),g=a.ZP.div.withConfig({displayName:"info__DivContentIntro",componentId:"n83n0-4"})(["@media screen and (min-width:1080px){float:left;width:85%;height:176px;}@media screen and (max-width:1079px){width:95%;margin:0 auto;}"]),w=a.ZP.span.withConfig({displayName:"info__SpanContentIntro",componentId:"n83n0-5"})(["width:100%;font-size:3vmin;@media screen and (min-width:1080px){font-size:15.6px;}"]);class b extends l.Component{static get propTypes(){return{setRef:r().func}}constructor(e){super(e),o()(this,"scrollHandler",(()=>{let e=this.MainElement.getBoundingClientRect(),t=e.top,i=e.height,n=window.innerHeight,o=n-i,l=n;if(t>=o&&t<=l){let e=1-(t-o)/(l-o),i=100*(1-e);this.setState({left:i+"%"}),this.setState({opacity:e})}else t<o?(this.setState({left:"0%"}),this.setState({opacity:1})):t>l&&(this.setState({left:"100%"}),this.setState({opacity:0}))})),this.state={opacity:1,left:"0%"},this.MainElement}componentDidMount(){window.addEventListener("scroll",this.scrollHandler),this.props.setRef(this.MainElement,1)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollHandler)}render(){const e={StyleContainer:{left:this.state.left,opacity:this.state.opacity}};return l.createElement(p,{ref:e=>{this.MainElement=e},style:e.StyleContainer},l.createElement(u,null,l.createElement(h,null,"自我介紹")),l.createElement(g,null,l.createElement(f,null),l.createElement(w,null,"在軟體公司任職期間，開發一款馬達測試軟體以及協助編輯Odoo ERP系統和單晶片韌體的編寫",l.createElement("br",null),l.createElement("br",null),"空閒時間有進行過 web 相關案件，是使用 HTML/CSS 搭配Javascript完成，之後又將其重新使用ReactJS 改寫，並將成果放置在下方 project部分",l.createElement("br",null),l.createElement("br",null),"目前短期目標是成為一名前端工程師，並正在自學React的部分",l.createElement("br",null),l.createElement("br",null),"長期目標為成為全端工程師，目前僅學到使用Python + Flask作為web API，與我的前端網頁串接")))}}const y=a.ZP.div.withConfig({displayName:"info__MainInfoDiv",componentId:"n83n0-6"})(["position:relative;color:white;margin:2.5% auto;@media screen and (min-width:1080px){height:230.25px;width:837.75px;font-size:3vmin;}@media screen and (max-width:1079px){width:85%;height:150px;}"]),x=a.ZP.div.withConfig({displayName:"info__ImgdivInfo",componentId:"n83n0-7"})(["@media screen and (min-width:1080px){position:relative;display:inline-block;width:171.23px;height:100%;}@media screen and (max-width:1079px){position:relative;width:92.97px;height:125px;display:inline-block;}"]),v=a.ZP.img.withConfig({displayName:"info__ImgInfo",componentId:"n83n0-8"})(["position:absolute;height:100%;float:left;top:0;left:0;"]),E=a.ZP.span.withConfig({displayName:"info__SpanInfo",componentId:"n83n0-9"})(["@media screen and (min-width:1025px){margin-left:5%;font-size:1.3rem;color:white;}@media screen and (max-width:1024px){display:inline-block;font-size:3vmin;color:white;}@media screen and (max-width:500px){display:inline-block;font-size:5vmin;color:white;}"]),C=a.ZP.div.withConfig({displayName:"info__InfoMainSpanDiv",componentId:"n83n0-10"})(["@media screen and (min-width:1080px){position:absolute;display:inline-block;width:calc(100% - 181.23px);}@media screen and (max-width:1079px){position:absolute;margin:0 5px;display:inline-block;width:calc(100% - 102.97px);height:100%;}"]);class _ extends l.Component{constructor(e){super(e),o()(this,"scrollHandler",(()=>{let e=this.MainElement.getBoundingClientRect(),t=e.top,i=e.height,n=window.innerHeight,o=n-i,l=n;if(t>o&&t<l){let e=1-(t-o)/(l-o),i=100*(1-e);this.setState({left:i+"%"}),this.setState({opacity:e})}else t>=l?(this.setState({left:"100%"}),this.setState({opacity:0})):t<o&&(this.setState({left:"0%"}),this.setState({opacity:1}))})),this.state={opacity:1,left:"0%"}}static get propTypes(){return{id:r().number,setRef:r().func}}componentDidMount(){window.addEventListener("scroll",this.scrollHandler),this.props.setRef(this.MainElement,0)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollHandler)}render(){const e={StyleContainer:{left:this.state.left,opacity:this.state.opacity}};return l.createElement(y,{ref:e=>{this.MainElement=e},style:e.StyleContainer,id:this.props.id},l.createElement(x,null,l.createElement(v,{src:"../img/SelfPic.jpg"})),l.createElement(C,null,l.createElement(E,null,"梁芳銘"),l.createElement("br",null),l.createElement(E,null,"Fang-Ming, Liang"),l.createElement("br",null),l.createElement(E,{role:"img","aria-label":"phone"},"📱 0920173978"),l.createElement("br",null),l.createElement(E,{role:"img","aria-label":"mail"},"✉️",l.createElement("a",{href:"mailto: shotup0101@gmail.com"},"shotup0101@gmail.com"))))}}const k=a.ZP.div.withConfig({displayName:"experience__MainDiv",componentId:"adf4bs-0"})(["position:relative;left:",";color:white;font-size:3vmin;height:auto;overflow:auto;opacity:",";width:868px;margin:2.5% auto;@media screen and (max-width:1079px){width:85%;height:auto;}"],(e=>e.left||0),(e=>e.opacity||1)),P=a.ZP.div.withConfig({displayName:"experience__TitleDiv",componentId:"adf4bs-1"})(["display:block;position:relative;width:95%;height:auto;margin:0 auto 5px auto;z-index:1;&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:grey;z-index:-1;transform:skew(-30deg);}"]),S=a.ZP.span.withConfig({displayName:"experience__SpanTitle",componentId:"adf4bs-2"})(["display:block;text-align:center;font-size:3vmin;@media screen and (min-width:1080px){font-size:30px;}"]),I=a.ZP.div.withConfig({displayName:"experience__ContentDiv",componentId:"adf4bs-3"})(["width:95%;margin:0 auto;"]),N=a.ZP.div.withConfig({displayName:"experience__LeftDiv",componentId:"adf4bs-4"})(["float:left;width:50%;"]),R=a.ZP.div.withConfig({displayName:"experience__RightDiv",componentId:"adf4bs-5"})(["float:right;width:50%;"]);class Z extends l.Component{constructor(e){super(e),o()(this,"scrollHandler",(()=>{let e=this.MainElement.getBoundingClientRect(),t=e.top,i=e.height,n=window.innerHeight,o=n-i,l=n;if(t>=o&&t<=l){let e=1-(t-o)/(l-o),i=100*(1-e);this.setState({left:i+"%"}),this.setState({opacity:e})}else t<o?(this.setState({left:"0%"}),this.setState({opacity:1})):t>l&&(this.setState({left:"100%"}),this.setState({opacity:0}))})),this.state={opacity:1,left:"0%"}}static get propTypes(){return{id:r().number,setRef:r().func}}componentDidMount(){window.addEventListener("scroll",this.scrollHandler),this.props.setRef(this.MainElement,2)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollHandler)}render(){return l.createElement(k,{left:this.state.left,opacity:this.state.opacity,ref:e=>{this.MainElement=e},id:this.props.id},l.createElement(P,null,l.createElement(S,null,"簡歷")),l.createElement(I,null,l.createElement(N,null,"工作經歷:",l.createElement("ul",null,l.createElement("li",{className:"li"},"偉祺電機 2017/11 ~ 現在",l.createElement("br",null),"擔任軟體工程師"))),l.createElement(R,null,"學歷:",l.createElement("ul",null,l.createElement("li",{className:"li"},"元智大學",l.createElement("br",null),"電機工程學系")))))}}var z=i(8540);const M=a.ZP.div.withConfig({displayName:"ContentTitle__MainDivCT",componentId:"uxgsjl-0"})(["box-sizing:border-box;width:95%;height:40px;display:block;text-align:left;margin:0 auto;@media screen and (max-width:1079px){height:30px;}"]),T=a.ZP.button.withConfig({displayName:"ContentTitle__ProjectButtonCT",componentId:"uxgsjl-1"})(["position:relative;display:inline-flex;width:auto;height:100%;float:left;border:none;box-shadow:none;background:rgb(32,34,37);font-size:3vmin;color:white;align-items:center;padding:0;vertical-align:top;&:hover{cursor:pointer;}&:focus{outline:none;}"]),D=a.ZP.span.withConfig({displayName:"ContentTitle__TitleSpanCT",componentId:"uxgsjl-2"})(["display:inline-flex;height:100%;font-size:3vmin;align-items:center;margin-left:5px;"]);class j extends l.Component{static get propTypes(){return{clickevent:r().func,isVisible:r().string,titletext:r().string}}render(){return l.createElement(M,null,l.createElement(T,{onClick:()=>this.props.clickevent()},"none"===this.props.isVisible?"+":"-"),l.createElement(D,null,this.props.titletext))}}const H=(0,l.lazy)((()=>Promise.resolve().then(i.bind(i,8540)))),V=a.ZP.div.withConfig({displayName:"project__ContentDiv",componentId:"sc-1iqqnkb-0"})(["height:auto;vertical-align:top;margin:5px 0;"]);class L extends l.Component{constructor(e){super(e),this.state={isVisible:"none"},this.setVisibility=this.setVisibility.bind(this)}static get propTypes(){return{id:r().number,name:r().string}}switchProject(e,t){switch(e){case"Test Program":return l.createElement(z.Test_Program,{isVisible:t});case"Web Game":return l.createElement(H,{isVisible:t});case"Python Web API":return l.createElement(z.StockChart,{isVisible:t});default:return l.createElement("div",null)}}setVisibility(){"block"===this.state.isVisible?this.setState({isVisible:"none"}):this.setState({isVisible:"block"})}render(){return l.createElement(V,null,l.createElement(j,{titletext:"Project #"+this.props.id+" "+this.props.name,clickevent:this.setVisibility,isVisible:this.state.isVisible}),this.switchProject(this.props.name,this.state.isVisible))}}const q=a.ZP.div.withConfig({displayName:"project__MainDiv",componentId:"sc-1iqqnkb-1"})(["position:relative;left:",";color:",";textAlign:center;opacity:",";width:868px;margin:2.5% auto;@media screen and (max-width:1079px){width:85%;height:auto;}"],(e=>e.left||0),(e=>e.color||"white"),(e=>e.opacity||1)),A=a.ZP.span.withConfig({displayName:"project__TitleSpan",componentId:"sc-1iqqnkb-2"})(["display:block;position:relative;width:95%;height:auto;font-size:3vmin;margin:0 auto 5px auto;text-align:center;z-index:1;@media screen and (min-width:1080px){font-size:30px;}&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:grey;z-index:-1;transform:skew(-30deg);}"]);class B extends l.Component{constructor(e){super(e),this.state={color:"white",opacity:1,left:"0%"},this.scrollHandler=this.scrollHandler.bind(this)}static get propTypes(){return{id:r().number,name:r().string}}componentDidMount(){window.addEventListener("scroll",this.scrollHandler)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollHandler)}scrollHandler(){let e=this.MainElement.getBoundingClientRect(),t=e.top,i=e.height,n=window.innerHeight;i>837.75&&(i=837.75);let o=n-i,l=n;if(t>=o&&t<=l){let e=1-(t-o)/(l-o),i=100*(1-e);this.setState({left:i+"%"}),this.setState({opacity:e})}else t<o?(this.setState({opacity:1}),this.setState({left:"0%"})):t>l&&(this.setState({opacity:0}),this.setState({left:"100%"}))}render(){return l.createElement(q,{color:this.state.color,left:this.state.left,opacity:this.state.opacity,ref:e=>{this.MainElement=e},id:this.props.id},l.createElement(A,null,"專業 / 經驗"),l.createElement(L,{id:"1",name:"Test Program"}),l.createElement(L,{id:"2",name:"Web Game"}),l.createElement(L,{id:"3",name:"Python Web API"}))}}const W=a.ZP.div.withConfig({displayName:"mytool__MainDiv",componentId:"sc-1kqg4x-0"})(["position:relative;left:",";text-align:left;color:white;height:auto;overflow:auto;opacity:",";width:868px;margin:2.5% auto;@media screen and (max-width:1079px){width:85%;height:auto;}"],(e=>e.left||0),(e=>e.opacity)),U=a.ZP.span.withConfig({displayName:"mytool__TitleSpan",componentId:"sc-1kqg4x-1"})(["display:block;position:relative;width:95%;text-align:center;font-size:3vmin;margin:0 auto 5px auto;z-index:1;@media screen and (min-width:1080px){font-size:30px;}&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:grey;transform:skew(-30deg);z-index:-1;}"]),J=a.ZP.div.withConfig({displayName:"mytool__ContentDiv",componentId:"sc-1kqg4x-2"})(["width:95%;margin:0 auto;"]),O=a.ZP.div.withConfig({displayName:"mytool__LeftDiv",componentId:"sc-1kqg4x-3"})(["float:left;width:50%;font-size:3vmin;"]),F=a.ZP.div.withConfig({displayName:"mytool__RightDiv",componentId:"sc-1kqg4x-4"})(["float:right;width:50%;"]);class G extends l.Component{constructor(e){super(e),this.state={opacity:1,left:"0%"},this.scrollHandler=this.scrollHandler.bind(this)}static get propTypes(){return{id:r().number}}componentDidMount(){window.addEventListener("scroll",this.scrollHandler)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollHandler)}scrollHandler(){let e=this.MainElement.getBoundingClientRect(),t=e.top,i=e.height,n=window.innerHeight,o=n-i,l=n;if(t>=o&&t<=l){let e=1-(t-o)/(l-o),i=100*(1-e);this.setState({left:i+"%"}),this.setState({opacity:e})}else t<o?(this.setState({opacity:1}),this.setState({left:"0%"})):t>l&&(this.setState({opacity:0}),this.setState({left:"100%"}))}render(){return l.createElement(W,{ref:e=>{this.MainElement=e},id:this.props.id,left:this.state.left,opacity:this.state.opacity},l.createElement(U,null,"常用工具"),l.createElement(J,null,l.createElement(O,null,l.createElement("span",null,"程式語言:"),l.createElement("ul",null,l.createElement("li",{className:"li"},"C語言"),l.createElement("li",{className:"li"},"Python"),l.createElement("li",{className:"li"},"HTML/CSS"),l.createElement("li",{className:"li"},"Javascript、ReactJS"))),l.createElement(F,null,l.createElement("ul",null,l.createElement("li",{className:"li"},"編輯器: VsCode"),l.createElement("li",{className:"li"},"開發工具: Git, npm, webpack, flask"),l.createElement("li",{className:"li"},"多益: 845分")))))}}const Y=a.ZP.div.withConfig({displayName:"additioninfo__MainDiv",componentId:"sc-8ud2d8-0"})(["color:white;fontSize:3vmin;width:868px;margin:2.5% auto;position:relative;left:",";opacity:",";overflow:hidden;@media screen and (max-width:1079px){width:85%;height:auto;}"],(e=>e.left||0),(e=>e.opacity)),Q=a.ZP.span.withConfig({displayName:"additioninfo__TitleSpan",componentId:"sc-8ud2d8-1"})(["display:block;position:relative;width:95%;margin:0 auto 5px auto;text-align:center;font-size:3vmin;z-index:1;@media screen and (min-width:1080px){font-size:30px;}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;background:grey;transform:skew(-30deg);z-index:-1;}"]),$=a.ZP.div.withConfig({displayName:"additioninfo__ContentDiv",componentId:"sc-8ud2d8-2"})(["font-size:2vmin;"]);class K extends l.Component{constructor(e){super(e),this.state={opacity:1,left:"0%"},this.scrollHandler=this.scrollHandler.bind(this)}static get propTypes(){return{id:r().number}}componentDidMount(){window.addEventListener("scroll",this.scrollHandler)}componentWillUnmount(){window.removeEventListener("scroll",this.scrollHandler)}scrollHandler(){let e=this.MainElement.getBoundingClientRect(),t=e.top,i=e.height,n=window.innerHeight,o=n-i,l=n;if(t<=l&&t>=o){let e=1-(t-o)/(l-o),i=100*(1-e);this.setState({opacity:e}),this.setState({left:i+"%"})}else t>l?(this.setState({opacity:0}),this.setState({left:"100%"})):t<o&&(this.setState({opacity:1}),this.setState({left:"0%"}))}render(){return l.createElement(Y,{opacity:this.state.opacity,left:this.state.left,ref:e=>{this.MainElement=e},id:this.props.id},l.createElement(Q,null,"相關連結"),l.createElement($,null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://github.com/lizrad?tab=repositories",target:"_blank",rel:"noreferrer"},"Github repositories")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/lizrad/react_practice",target:"_blank",rel:"noreferrer"},"本頁原碼")))))}}i(3092);const X=a.ZP.div.withConfig({displayName:"home__SideWrap",componentId:"sc-1v8rov5-0"})(["  position:absolute;top:0;height:calc(100% + 24px);width:10%;"]),ee=a.ZP.div.withConfig({displayName:"home__NavDiv",componentId:"sc-1v8rov5-1"})(["  position:sticky;top:3rem;height:calc(100vh - 3rem);width:100%;background:rgb(41,43,47);color:white;margin-top:calc(100vh + 1px);z-index:2;"]),te=a.ZP.button.withConfig({displayName:"home__NavButton",componentId:"sc-1v8rov5-2"})(["  position:relative;width:100%;background:inherit;color:white;display:flex;align-items:center;font-size:1.3rem;padding:1rem 0px 1rem 20px;border-radius:5px;border-bottom:1px solid grey;&:focus{outline:none;}&:hover{background:rgb(54,57,63);}"]),ie=e=>l.createElement(X,null,l.createElement(ee,null,l.createElement(te,{onClick:()=>{e.click(0)}},"個人資料"),l.createElement(te,{onClick:()=>{e.click(1)}},"自我介紹"),l.createElement(te,{onClick:()=>{e.click(2)}},"簡歷"),l.createElement(te,{onClick:()=>{e.click(3)}},"專業 / 經驗"),l.createElement(te,{onClick:()=>{e.click(4)}},"常用工具"),l.createElement(te,{onClick:()=>{e.click(5)}},"相關連結")));ie.propTypes={click:r().func},a.ZP.div.withConfig({displayName:"home__DirMain",componentId:"sc-1v8rov5-3"})(["  position:absolute;top:0;height:100%;width:100vw;background-color:rgba( 0,0,0,0.8);z-index:2;"]);const ne=a.ZP.div.withConfig({displayName:"home__HeaderDiv",componentId:"sc-1v8rov5-4"})(["position:fixed;top:0px;left:0px;bottom:0px;right:0px;height:100vh;width:100vw;display:table;background:#121212;backface-visibility:hidden;overflow:auto;"]),oe=a.ZP.h1.withConfig({displayName:"home__HeaderH1",componentId:"sc-1v8rov5-5"})(["display:table-cell;text-align:center;vertical-align:middle;font-size:5rem;color:white;@media screen and (max-width:280px){font-size:3.5rem;}"]),le=a.ZP.div.withConfig({displayName:"home__MainPage",componentId:"sc-1v8rov5-6"})(["position:relative;margin:100vh 0 0 0;background:rgb(32,34,37);box-sizing:border-box;width:100vw;border-top:1px solid grey;"]),ae=a.ZP.div.withConfig({displayName:"home__Container",componentId:"sc-1v8rov5-7"})(["  background:rgb(32,34,37);position:relative;width:100%;border:1px solid white;display:flex;flex-direction:column;"]);class se extends l.Component{constructor(e){super(e),o()(this,"SetRef",((e,t)=>{0==t?this.InfoRef=e:1==t?this.IntroRef=e:2==t?this.ExpRef=e:3==t?this.ProjRef=e:4==t?this.MyToolRef=e:5==t&&(this.AddRef=e)})),o()(this,"JumpToRef",(e=>{if(0==e){const e=this.InfoRef.getBoundingClientRect().top-96+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}else if(1==e){const e=this.IntroRef.getBoundingClientRect().top-96+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}else if(2==e){const e=this.ExpRef.getBoundingClientRect().top-96+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}else if(3==e){const e=this.ProjRef.getBoundingClientRect().top-96+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}else if(4==e){const e=this.MyToolRef.getBoundingClientRect().top-96+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}else if(5==e){const e=this.AddRef.getBoundingClientRect().top-96+window.pageYOffset;window.scrollTo({top:e,behavior:"smooth"})}})),this.InfoRef=l.createRef(),this.IntroRef=l.createRef(),this.ExpRef=l.createRef(),this.ProjRef=l.createRef(),this.MyToolRef=l.createRef(),this.AddRef=l.createRef()}render(){return l.createElement(ae,null,l.createElement(ne,null,l.createElement(oe,null,"Hi! Everyone")),l.createElement(ie,{click:this.JumpToRef}),l.createElement(le,null,l.createElement(_,{id:"1",setRef:this.SetRef}),l.createElement(b,{setRef:this.SetRef}),l.createElement(Z,{id:"2",setRef:this.SetRef}),l.createElement(B,{id:"3",setRef:this.SetRef}),l.createElement(G,{id:"4",setRef:this.SetRef}),l.createElement(K,{id:"5",setRef:this.SetRef})))}}},3092:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var n=i(7294),o=i(9163);const l=o.ZP.div.withConfig({displayName:"privacy__MainDiv",componentId:"y4c2p4-0"})(["  width:100%;min-height:calc(100vh - 24px);padding-top:5rem;"]),a=o.ZP.div.withConfig({displayName:"privacy__Title",componentId:"y4c2p4-1"})(["  width:100%;display:flex;justify-content:center;align-items:center;color:white;font-size:3rem;"]),s=o.ZP.div.withConfig({displayName:"privacy__Content",componentId:"y4c2p4-2"})(["  display:flex;justify-content:center;width:100%;pre{color:white;}"]),r=()=>n.createElement(l,null,n.createElement(a,null,"隱私權政策"),n.createElement(s,null,n.createElement("pre",null,"\n                        非常歡迎您光臨「Lizard Demo」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：\n\n                    一、隱私權保護政策的適用範圍\n                    隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。\n\n                    二、個人資料的蒐集、處理及利用方式\n                    當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。\n\n\n                    本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。\n\n\n                    於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。\n\n                    為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。\n\n\n                    三、資料之保護\n                    本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。\n                    如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。\n\n\n                    四、網站對外的相關連結\n                    本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。\n\n                    五、與第三人共用個人資料之政策\n                    本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。\n\n                    前項但書之情形包括不限於：\n\n                    經由您書面同意。\n                    法律明文規定。\n                    為免除您生命、身體、自由或財產上之危險。\n                    與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。\n                    當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。\n                    有利於您的權益。\n                    本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。\n\n\n                    六、Cookie之使用\n                    為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行 。\n\n                    七、隱私權保護政策之修正\n                    本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。")))},3909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(3645),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".projectAnim {\r\n  animation-name: openProjectAnim;\r\n  animation-duration: 1s;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes openProjectAnim {\r\n  from {\r\n    transform: scale(0);\r\n  }\r\n  to {\r\n    transform: scale(1);\r\n  }\r\n}\r\n",""]);const l=o},2613:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(3645),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".li {\r\n  margin-left: 10%;\r\n  font-size: 3vmin;\r\n}\r\n",""]);const l=o}}]);