(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,o){e.exports=o(22)},17:function(e,t,o){},20:function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,o){},22:function(e,t,o){"use strict";o.r(t);var n,a,r,c,l,i,s,u,p,d=o(0),m=o.n(d),f=o(9),h=o.n(f),b=(o(17),o(3)),y=o(4),v=o(5),O=o(6),g=o(8),j=o(2),w=(o(11),o(1)),E=(n=function(){function e(t,o,n,c){Object(b.a)(this,e),Object(g.a)(this,"title",a,this),Object(g.a)(this,"completed",r,this),this.title=o,this.completed=n,this.id=c,this.store=t}return Object(y.a)(e,[{key:"toggle",value:function(){this.completed=!this.completed}},{key:"delete",value:function(){this.store.deleteTodo(this.id)}}]),e}(),a=Object(j.a)(n.prototype,"title",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(j.a)(n.prototype,"completed",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(j.a)(n.prototype,"toggle",[w.f],Object.getOwnPropertyDescriptor(n.prototype,"toggle"),n.prototype),n),k=new(c=function(){function e(){Object(b.a)(this,e),Object(g.a)(this,"todos",l,this),this.lastID=0,Object(g.a)(this,"viewMode",i,this)}return Object(y.a)(e,[{key:"addTodo",value:function(e){this.todos.push(new E(this,e,!1,this.lastID++))}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e}))}},{key:"clearCompleted",value:function(e){this.todos=this.todos.filter((function(e){return 0==e.completed}))}},{key:"changeViewMode",value:function(e){this.viewMode=e}},{key:"itemsLeft",get:function(){return this.todos.filter((function(e){return!e.completed})).length}},{key:"items",get:function(){switch(this.viewMode){case"all":return this.todos;case"completed":return this.todos.filter((function(e){return e.completed}));default:return this.todos.filter((function(e){return!e.completed}))}}}]),e}(),l=Object(j.a)(c.prototype,"todos",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(j.a)(c.prototype,"viewMode",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"all"}}),Object(j.a)(c.prototype,"addTodo",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"addTodo"),c.prototype),Object(j.a)(c.prototype,"deleteTodo",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"deleteTodo"),c.prototype),Object(j.a)(c.prototype,"clearCompleted",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"clearCompleted"),c.prototype),Object(j.a)(c.prototype,"changeViewMode",[w.f],Object.getOwnPropertyDescriptor(c.prototype,"changeViewMode"),c.prototype),Object(j.a)(c.prototype,"itemsLeft",[w.g],Object.getOwnPropertyDescriptor(c.prototype,"itemsLeft"),c.prototype),Object(j.a)(c.prototype,"items",[w.g],Object.getOwnPropertyDescriptor(c.prototype,"items"),c.prototype),c),C=function(e){Object(O.a)(o,e);var t=Object(v.a)(o);function o(){var e;Object(b.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e.handleKeyDown=function(t){13===t.keyCode&&(t.preventDefault(),k.addTodo(e.state.value),e.setState({value:""}))},e}return Object(y.a)(o,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("header",{class:"header"},m.a.createElement("h1",null,"todos"),m.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},onKeyDown:function(t){return e.handleKeyDown(t)},class:"new-todo",placeholder:"What needs to be done?",autofocus:!0})))}}]),o}(d.Component),D=o(7),M=Object(D.a)(s=function(e){Object(O.a)(o,e);var t=Object(v.a)(o);function o(){var e;Object(b.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onToggle=function(){e.props.todo.toggle()},e.onDestroy=function(){e.props.todo.delete()},e}return Object(y.a)(o,[{key:"render",value:function(){var e=this.props.todo;return m.a.createElement("div",null,m.a.createElement("li",{class:e.completed?"completed":" "},m.a.createElement("div",{class:"view"},m.a.createElement("input",{class:"toggle",type:"checkbox",checked:e.completed,onChange:this.onToggle}),m.a.createElement("label",null,e.title),m.a.createElement("button",{class:"destroy",onClick:this.onDestroy})),m.a.createElement("input",{class:"edit",value:"Create a TodoMVC template"})))}}]),o}(d.Component))||s,T=Object(D.a)(u=function(e){Object(O.a)(o,e);var t=Object(v.a)(o);function o(){return Object(b.a)(this,o),t.apply(this,arguments)}return Object(y.a)(o,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("section",{class:"main"},m.a.createElement("ul",{class:"todo-list"},k.items.map((function(e){return m.a.createElement(M,{todo:e})})))))}}]),o}(d.Component))||u,P=Object(D.a)(p=function(e){Object(O.a)(o,e);var t=Object(v.a)(o);function o(){return Object(b.a)(this,o),t.apply(this,arguments)}return Object(y.a)(o,[{key:"render",value:function(){return m.a.createElement("footer",{class:"footer"},m.a.createElement("span",{class:"todo-count"},m.a.createElement("strong",null,k.itemsLeft)," item left"),m.a.createElement("ul",{class:"filters"},m.a.createElement("li",null,m.a.createElement("a",{class:"all"==k.viewMode?"selected":" ",href:"#/",onClick:function(){return k.changeViewMode("all")}},"All")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/active",class:"active"==k.viewMode?"selected":" ",onClick:function(){return k.changeViewMode("active")}},"Active")),m.a.createElement("li",null,m.a.createElement("a",{href:"#/completed",class:"completed"==k.viewMode?"selected":" ",onClick:function(){return k.changeViewMode("completed")}},"Completed"))),m.a.createElement("button",{class:"clear-completed",onClick:function(){return k.clearCompleted()}},"Clear completed"))}}]),o}(d.Component))||p;o(20),o(21);var V=function(){return m.a.createElement("div",{id:"todoapp",className:"todoapp"},m.a.createElement(C,null),m.a.createElement(T,null),m.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.8179a114.chunk.js.map