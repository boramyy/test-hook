(window["webpackJsonptest-hook"]=window["webpackJsonptest-hook"]||[]).push([[0],{31:function(e,t,n){e.exports=n(61)},41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),l=n(7),u=n(9),m=Object(a.createContext)(),s=function(e){var t=Object(a.useState)({name:"guest",age:0,address:"earth"}),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement(m.Provider,{value:{user:c,setUser:o}},e.children)},i=function(){var e=Object(a.useContext)(m).user,t=e.name;e.age,e.address;return r.a.createElement("header",null,r.a.createElement("h1",null,"Practice of Hooks and Context API"),r.a.createElement("h2",null,"\uc548\ub1fd\ud558\uc138\uc694 ",t," \ub2d8"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"main")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/mypage"},"mypage")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/test-hook/signup"},"signup")))))},p=n(6),h=(n(41),function(){var e=Object(a.useContext)(m).user,t=e.name,n=e.age,c=e.address;return r.a.createElement("div",{className:"card_profile"},r.a.createElement("h2",null,"\ud504\ub85c\ud544"),r.a.createElement("h3",null,t,", ",n,", ",c))}),E=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"\uba54\uc778!!"),r.a.createElement(h,null))},f=n(30),d=function(e){var t=e.onChangeName,n=e.onChangeAge,a=e.onChangeAddress,c=e.onClick;return r.a.createElement("form",null,r.a.createElement("h3",null,"\uc815\ubcf4 \ubcc0\uacbd \ud3fc"),r.a.createElement("label",{htmlFor:"name"},"\uc774\ub984"),r.a.createElement("input",{type:"text",id:"name",name:"name",onChange:t}),r.a.createElement("label",{htmlFor:"age"},"\ub098\uc774"),r.a.createElement("input",{type:"number",id:"age",name:"age",onChange:n}),r.a.createElement("label",{htmlFor:"address"},"\uc8fc\uc18c"),r.a.createElement("input",{type:"text",id:"address",name:"address",onChange:a}),r.a.createElement("button",{type:"submit",onClick:c},"\uc815\ubcf4 \ubcc0\uacbd"))};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=function(){var e=Object(a.useContext)(m),t=e.user,n=e.setUser,c=Object(a.useState)(t.name),o=Object(u.a)(c,2),l=o[0],s=o[1],i=Object(a.useState)(t.age),p=Object(u.a)(i,2),E=p[0],g=p[1],j=Object(a.useState)(t.address),v=Object(u.a)(j,2),O=v[0],y=v[1];return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"\ub9c8\uc774\ud398\uc774\uc9c0!!"),r.a.createElement(h,null),r.a.createElement(d,{address:O,onChangeName:function(e){s(e.target.value)},onChangeAge:function(e){g(e.target.value)},onChangeAddress:function(e){y(e.target.value)},onClick:function(e){e.preventDefault(),n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{name:l,age:E,address:O}))}}))},j=n(11),v=n.n(j),O=n(15),y=n(16),C=n.n(y);var w=function(e){Object(a.useEffect)((function(){t()}),[]);var t=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC","EM8gc2SCDjqpWZNvMdhwoaETZtFNLjmjWBKRAob4zoNc","https://boramyyo.github.io/test-hook","https://api.typeform.com/oauth/authorize","https://api.typeform.com/oauth/token",t={client_id:"DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC",client_secret:"EM8gc2SCDjqpWZNvMdhwoaETZtFNLjmjWBKRAob4zoNc",redirectUri:"https://boramyyo.github.io/test-hook",urlAuthorize:"https://api.typeform.com/oauth/authorize",urlAccessToken:"https://api.typeform.com/oauth/token",scope:["forms:read"]},e.next=9,C.a.get("https://api.typeform.com/forms/m7RdrN",{header:t});case 9:n=e.sent,console.dir(n.json());case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null)},k=function(){return r.a.createElement("div",{className:"wrap_content"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:E}),r.a.createElement(p.a,{path:"/mypage",component:g}),r.a.createElement(p.a,{path:"/test-hook/signup",component:w})))},N=function(){return r.a.createElement("footer",null,"\uc5ec\uae30\ub294 \ud478\ud130, \uc5ec\uae30\ub294 \ud478\ud130")};n(60);var x=function(){return r.a.createElement(l.a,null,r.a.createElement(s,null,r.a.createElement("div",{className:"wrap_app"},r.a.createElement(i,null),r.a.createElement(k,null),r.a.createElement(N,null))))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3975c584.chunk.js.map