(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(4),s=a.n(r),i=(a(11),a(1)),l=a(2),u=a.n(l),o=a(5),m=function(){var e=Object(o.a)(u.a.mark((function e(t,a){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("a7830b99","&app_key=").concat("b9725f1b13ed41ae9f2e653bddd60409"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,a(n.hits);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(e){var t=e.title,a=e.calories,c=e.image,r=e.ingredients;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,t),n.a.createElement("p",null,a),n.a.createElement("img",{src:c,alt:t}),n.a.createElement("ol",null,r.map((function(e,t){return n.a.createElement("li",{key:t},e.text)}))))},p=(a(13),function(){return n.a.createElement("div",{class:"sk-cube-grid"},n.a.createElement("div",{class:"sk-cube sk-cube1"}),n.a.createElement("div",{class:"sk-cube sk-cube2"}),n.a.createElement("div",{class:"sk-cube sk-cube3"}),n.a.createElement("div",{class:"sk-cube sk-cube4"}),n.a.createElement("div",{class:"sk-cube sk-cube5"}),n.a.createElement("div",{class:"sk-cube sk-cube6"}),n.a.createElement("div",{class:"sk-cube sk-cube7"}),n.a.createElement("div",{class:"sk-cube sk-cube8"}),n.a.createElement("div",{class:"sk-cube sk-cube9"}))}),d=(a(14),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],o=l[1],d=Object(c.useState)("chicken"),k=Object(i.a)(d,2),f=k[0],E=k[1];Object(c.useEffect)((function(){m(f,r)}),[f]);return n.a.createElement("div",{className:"App"},n.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),E(u),o("")}},n.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){return o(e.target.value)}}),n.a.createElement("button",{className:"search-button"},"Search")),a.map((function(e){return n.a.createElement(b,{key:e.recipe.calories,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})})),n.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.534cfe73.chunk.js.map