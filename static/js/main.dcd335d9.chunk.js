(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/spinner.5e02af51.gif"},13:function(e,t,a){e.exports=a(33)},18:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),m=(a(18),a(5)),o=a(10),i=a(6),u=function(e){var t=e.onSubmit,a=Object(n.useState)({name:"",currentItem:""}),c=Object(i.a)(a,2),l=c[0],u=c[1],s=function(e){u(Object(o.a)({},l,Object(m.a)({},e.target.name,e.target.value)))},p=function(e,a){e.preventDefault(),a.name.length&&a.currentItem.length&&(t({name:a.name,title:a.currentItem}),u({name:"",currentItem:""}))};return r.a.createElement("section",{className:"add-item"},r.a.createElement("form",{onSubmit:function(e){return p(e,l)}},r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",value:l.name,onChange:s}),r.a.createElement("input",{type:"text",name:"currentItem",placeholder:"What are you bringing?",value:l.currentItem,onChange:s}),r.a.createElement("button",null,"Add Item")))},s=a(7),p=a.n(s);p.a.initializeApp({apiKey:"AIzaSyCyGe0wl_h0X34VGd4EzT3sxmwCvsBqYTU",authDomain:"react-potluck-1734f.firebaseapp.com",databaseURL:"https://react-potluck-1734f.firebaseio.com",projectId:"react-potluck-1734f",storageBucket:"react-potluck-1734f.appspot.com",messagingSenderId:"416519544849",appId:"1:416519544849:web:94fe43f716e5eec3"});var d=p.a,f=a(12),E=a.n(f),v=function(e){var t=e.data,a=e.removeItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.title),r.a.createElement("p",null,"brought by: ",r.a.createElement("strong",null,t.name)),r.a.createElement("button",{onClick:function(){return a(t.id)}},"Remove Item"))},h=function(){return r.a.createElement("div",{style:{margin:"auto",align:"center"}},r.a.createElement("img",{src:E.a,width:"200px",alt:""}))},b=function(e){var t=e.removeItem,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=c[0],m=c[1];return Object(n.useEffect)(function(){d.database().ref("items").on("value",function(e){var t=e.val(),a=[];for(var n in t)a.push({id:n,title:t[n].title,name:t[n].name});m(a)})},[l]),r.a.createElement("ul",null,l.length?l.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v,{data:e,removeItem:t}))}):r.a.createElement(h,null))};a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Potluck"))),r.a.createElement("div",{className:"container"},r.a.createElement(u,{onSubmit:function(e){d.database().ref("items").push(e)}}),r.a.createElement("section",{className:"display-item"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,{removeItem:function(e){d.database().ref("items/".concat(e)).remove()}})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.dcd335d9.chunk.js.map