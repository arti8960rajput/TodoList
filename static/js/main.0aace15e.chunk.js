(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),c=n.n(i),s=n(5),d=n.n(s),r=(n(26),n(18)),o=n(12),h=n(13),l=n(3),u=n(20),b=n(19),j=(n(27),n(6)),p=(n(28),n(14)),m=n(8);var f=function(e){var t=e.items.map((function(t,n){return console.log(t),Object(a.jsx)(m.b,{draggableId:"draggable-"+t.key,index:n,children:function(i){return Object(a.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({className:"list",ref:i.innerRef},i.draggableProps),i.dragHandleProps),{},{index:n,children:Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"checkbox",id:t.key,checked:!t.isChecked,onChange:function(n){e.handleCheckboxChange(!t.isChecked,t.key)}}),Object(a.jsx)("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),Object(a.jsx)("span",{children:Object(a.jsx)(p.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}})})]})}),t.key)}})}));return Object(a.jsx)(m.a,{onDragEnd:e.onDragEnd,children:Object(a.jsx)(m.c,{droppableId:"droppable-1",children:function(e){return Object(a.jsxs)("div",Object(j.a)(Object(j.a)({ref:e.innerRef},e.droppableProps),{},{children:[t,e.placeholder]}))}})})},x=n(4),g=n(17);x.b.add(g.a);var k=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onDragEnd=function(e){var t;console.log(e);var n=e.source.index,i=null===(t=e.destination)||void 0===t?void 0:t.index;if(i){var c=a.state.items;if(i>=c.length)for(var s=i-c.length+1;s--;)c.push(void 0);c.splice(i,0,c.splice(n,1)[0]),console.log("End - "+JSON.stringify(c)),a.setState({items:c})}},a.state={items:[],currentItem:{text:"",key:"",isChecked:!0}},a.handleInput=a.handleInput.bind(Object(l.a)(a)),a.addItem=a.addItem.bind(Object(l.a)(a)),a.handleCheckboxChange=a.handleCheckboxChange.bind(Object(l.a)(a)),a.deleteItem=a.deleteItem.bind(Object(l.a)(a)),a.setUpdate=a.setUpdate.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now(),isChecked:!0}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){console.log(t);var n=[].concat(Object(r.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:" ",isChecked:!0}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"handleCheckboxChange",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.isChecked=e)})),this.setState({items:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})}),Object(a.jsx)(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate,handleCheckboxChange:this.handleCheckboxChange,onDragEnd:this.onDragEnd})]})}}]),n}(c.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),O()}},[[38,1,2]]]);
//# sourceMappingURL=main.0aace15e.chunk.js.map