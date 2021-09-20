(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[699],{628:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>L});var n=i(7294),a=i(8048),s=i(5697),o=i.n(s),d=i(9163),l=i(4890);const r={ActiveMsg:[{Name:"Active",Date:"2020-01-01",status:0}],FinishedMsg:[{Name:"Finished",Date:"2020-01-01",status:1}],InactiveMsg:[{Name:"Inactive",Date:"2020-01-01",status:2}]},c=(0,l.MT)(((e=r,t)=>{switch(t.type){case"addMsg":return{...e,ActiveMsg:[...e.ActiveMsg,t.payload]};default:return e}}));window.store=c,window.addMessage=e=>({type:"addMsg",payload:e});const m=d.ZP.div.withConfig({displayName:"TodoList__EditMainDiv",componentId:"sc-1g5bqfg-0"})(["  width:70%;max-width:1344px;display:flex;flex-direction:column;justify-content:center;align-items:center;border:solid 1px white;border-radius:5px;background:rgb(47,49,54);div{padding:5px;border-radius:5px;}input{color:black;@media screen and (max-width:600px){font-size:1rem;}}"]),p=d.ZP.div.withConfig({displayName:"TodoList__EditHeadDiv",componentId:"sc-1g5bqfg-1"})(["  display:flex;font-size:2rem;"]),g=d.ZP.div.withConfig({displayName:"TodoList__EditTitleDiv",componentId:"sc-1g5bqfg-2"})(["  width:100%;display:flex;background-color:rgb(64,68,75);font-size:1.5rem;"]),u=d.ZP.input.withConfig({displayName:"TodoList__EditTitleInput",componentId:"sc-1g5bqfg-3"})(["  width:50%;border-radius:5px;margin-left:5px;"]),f=d.ZP.div.withConfig({displayName:"TodoList__EditDateDiv",componentId:"sc-1g5bqfg-4"})(["  width:100%;display:flex;justify-content:flex-start;background-color:rgb(64,68,75);font-size:1.5rem;.confirmB{margin-left:auto;}"]),h=d.ZP.input.withConfig({displayName:"TodoList__EditDateInput",componentId:"sc-1g5bqfg-5"})(["border-radius:5px;margin-left:5px;"]),x=d.ZP.button.withConfig({displayName:"TodoList__EditButton",componentId:"sc-1g5bqfg-6"})(["  margin-top:0;margin-bottom:0;margin-right:5px;color:white;background-color:rgb(64,68,75);border:solid grey 1px;border-radius:5px;@media screen and (max-width:600px){font-size:1rem;}"]),b=e=>{const[t,i]=(0,n.useState)(""),[a,s]=(0,n.useState)("");return n.createElement(m,null,n.createElement(p,null,"新增代辦事項"),n.createElement(g,null,"標題:",n.createElement(u,{id:"Title",placeholder:"輸入標題",onChange:e=>i(e.target.value)})),n.createElement(f,null,"日期:",n.createElement(h,{type:"Date",id:"Date",onChange:e=>s(e.target.value)}),n.createElement(x,{className:"confirmB",onClick:()=>{e.addMsg(t,a)}},"確認"),n.createElement(x,null,"取消")))};b.propTypes={addMsg:o().func};const y=d.ZP.div.withConfig({displayName:"TodoList__ContMain",componentId:"sc-1g5bqfg-7"})(["display:flex;width:100%;font-size:1.5rem;padding:5px 5px 5px 5%;background-color:rgb(64,68,75);border-radius:5px;.div{padding:0;}.Date{margin-left:auto;}"]),w=d.ZP.div.withConfig({displayName:"TodoList__ContNameDiv",componentId:"sc-1g5bqfg-8"})(["display:flex;.SO{margin-right:12px;}"]),v=d.ZP.div.withConfig({displayName:"TodoList__ContDateDiv",componentId:"sc-1g5bqfg-9"})(["display:flex;align-items:flex-end;@media screen and (max-width:600px){font-size:1rem;}.SO{margin-right:12px;}"]),E=d.ZP.div.withConfig({displayName:"TodoList__ContSetting",componentId:"sc-1g5bqfg-10"})(["  display:inline-block;justify-content:center;align-items:center;text-align:center;position:relative;white-space:nowrap;button{height:100%;}"]),_=(0,d.F4)(["0%{opacity:0;width:0px;}100%{opacity:1;width:160px;}"]),C=d.ZP.button.withConfig({displayName:"TodoList__ContButton",componentId:"sc-1g5bqfg-11"})(["  background:none;color:white;display:flex;align-items:flex-end;@media screen and (max-width:600px){font-size:1rem;}&:focus{outline:none;div{display:flex;visibility:visible;opacity:1;width:160px;animation:"," 1s;}}"],_),N=d.ZP.div.withConfig({displayName:"TodoList__ContSettings",componentId:"sc-1g5bqfg-12"})(["  position:absolute;flex-direction:column;width:0px;z-index:1;background:rgb(24,25,28);border-radius:5px;display:none;visibility:hidden;opacity:0;&:hover{display:flex;opacity:1;visibility:visible;width:160px;}"]),k=d.ZP.div.withConfig({displayName:"TodoList__ContRadioBlk",componentId:"sc-1g5bqfg-13"})(["display:flex;align-items:center;padding:5px;margin:5px;justify-content:space-evenly;border-radius:5px;&:hover{background:rgb(92,111,177);}"]),D=e=>{const[t,i]=(0,n.useState)("none");return n.createElement(y,null,n.createElement(w,null,n.createElement("span",{className:"SO"},e.so),n.createElement("span",null,e.name)),n.createElement(v,{className:"Date"},n.createElement("span",{className:"SO"},"期限:"),n.createElement("span",null,e.Date)),n.createElement(E,null,n.createElement(C,{onClick:()=>{i("none"==t?"flex":"none")}},"more",n.createElement(N,null,n.createElement(k,{onClick:()=>{e.setSts(e.name,e.status,0)}},n.createElement("input",{type:"radio",name:"status"+e.so,checked:0==e.status}),"進行中"),n.createElement(k,{onClick:()=>{e.setSts(e.name,e.status,1)}},n.createElement("input",{type:"radio",name:"status"+e.so,checked:1==e.status}),"已完成"),n.createElement(k,{onClick:()=>{e.setSts(e.name,e.status,2)}},n.createElement("input",{type:"radio",name:"status"+e.so,checked:2==e.status}),"暫停中")))))};D.propTypes={status:o().number,so:o().number,setSts:o().func,name:o().string,Date:o().string};const I=d.ZP.div.withConfig({displayName:"TodoList__MainDiv",componentId:"sc-1g5bqfg-14"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:5rem;color:white;min-height:calc(100vh -24px);"]),T=d.ZP.div.withConfig({displayName:"TodoList__CateBlock",componentId:"sc-1g5bqfg-15"})(["display:flex;flex-direction:column;width:70%;max-width:1344px;height:auto;min-height:10%;border:white solid 1px;border-radius:5px;margin:5px;background:rgb(47,49,54);"]),S=d.ZP.div.withConfig({displayName:"TodoList__CateTitle",componentId:"sc-1g5bqfg-16"})(["width:100%;height:auto;font-size:2rem;padding-left:5px;"]),M=d.ZP.span.withConfig({displayName:"TodoList__NoItemSpan",componentId:"sc-1g5bqfg-17"})(["display:flex;width:100%;font-size:1.5rem;padding:5px 5px 5px 5%;background-color:rgb(64,68,75);border-radius:5px;"]);function q(){const[e,t]=(0,n.useState)([]),[i,s]=(0,n.useState)([]),[o,d]=(0,n.useState)([]),l=(0,a.v9)((e=>e.ActiveMsg)),r=(0,a.v9)((e=>e.FinishedMsg)),c=(0,a.v9)((e=>e.InactiveMsg)),m=(0,a.I0)();let p=[e,i,o],g=[t,s,d];(0,n.useEffect)((()=>{t(l),s(r),d(c)}),[]);let u=(e,t,i)=>{let n=p[t].filter((t=>t.Name===e))[0];(0,g[t])(p[t].filter((t=>t.Name!==e))),n.status=i,(0,g[i])((e=>[...e,n]))};return n.createElement(I,null,n.createElement(T,null,n.createElement(S,null,"Active"),e.length>0?e.map(((e,t)=>n.createElement(D,{key:t,name:e.Name,Date:e.Date,so:t+1,status:e.status,setSts:u}))):n.createElement(M,null,"沒有項目")),n.createElement(T,null,n.createElement(S,null,"Finished"),i.length>0?i.map(((e,t)=>n.createElement(D,{key:t,name:e.Name,Date:e.Date,so:t+1,status:e.status,setSts:u}))):n.createElement(M,null,"沒有項目")),n.createElement(T,null,n.createElement(S,null,"Inactive"),o.length>0?o.map(((e,t)=>n.createElement(D,{key:t,name:e.Name,Date:e.Date,so:t+1,status:e.status,setSts:u}))):n.createElement(M,null,"沒有項目")),n.createElement(b,{addMsg:(e,i)=>{t((t=>[...t,{Name:e,Date:i,status:0}])),m({type:"addMsg",payload:{Name:e,Date:i,status:0}})}}))}const L=()=>n.createElement(a.zt,{store:c},n.createElement(q,null))}}]);