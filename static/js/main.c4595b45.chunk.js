(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={avatar:"Message_avatar__2XSfg",common:"Message_common__3Sc1n",name:"Message_name__3vypz",message:"Message_message__qNwmO",time:"Message_time__yjkNV",endWrapper:"Message_endWrapper__1OD8-"}},,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__fcZ_Q",error:"Greeting_error__3Pjxy",errorInput:"Greeting_errorInput__1laHe",input:"Greeting_input__3-51C",group:"Greeting_group__2UWzx",label:"Greeting_label__2heH1",bar:"Greeting_bar__3vWL3"}},function(e,a,t){e.exports={input:"SuperInputText_input__2CeEq",superInput:"SuperInputText_superInput__1kdPL",errorInput:"SuperInputText_errorInput__7Mnd2",error:"SuperInputText_error__3I8Gc"}},,function(e,a,t){e.exports={button:"Affairs_button__31-8T",affair:"Affairs_affair__37YOJ",item:"Affairs_item__3iytt",item1:"Affairs_item1__3P0g1",btn:"Affairs_btn__8kVmm",button10:"Affairs_button10__daZ4L"}},function(e,a,t){e.exports={default:"SuperButton_default__1lPhQ",red:"SuperButton_red__2zJnh",button:"SuperButton_button__3bVD0",blink:"SuperButton_blink__zihGO"}},,function(e,a,t){e.exports={blue:"HW4_blue__KPr8T",column:"HW4_column__2daYv",testSpanError:"HW4_testSpanError__3O9np"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3jNon",spanClassName:"SuperCheckbox_spanClassName__3oEqt"}},,,,,,function(e,a,t){e.exports={App:"App_App__1sspR"}},,,,,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(32),t(22)),u=t.n(o);var i=function(){return r.a.createElement("div",null,"// add NavLinks")},s=t(1);var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},_=t(5),p=t.n(_);function d(e){return r.a.createElement("div",{className:p.a.wrapper},r.a.createElement("div",{className:p.a.avatar},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:p.a.common},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.message},e.message),r.a.createElement("div",{className:p.a.time},e.time),r.a.createElement("div",{className:p.a.endWrapper})))}var f="https://cs6.pikabu.ru/post_img/big/2017/10/11/5/1507707832185712573.jpg",E="Onidzuka -",b="Yo, how are you?",v="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement(d,{avatar:f,name:E,message:b,time:v}))},h=t(4),k=t(12),C=t.n(k);var N=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:C.a.item},e.affair.name),r.a.createElement("div",{className:C.a.item1},e.affair.priority),r.a.createElement("button",{className:C.a.button10,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(j),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement(O,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},y=t(26),S=t(9),w=t.n(S),A=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?w.a.errorInput:w.a.input;return r.a.createElement("div",{className:w.a.group},r.a.createElement("label",{className:w.a.label},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),"\u0418\u043c\u044f"),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(h.a)(i,2),m=s[0],_=s[1],p=a.length;return r.a.createElement(A,{name:o,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(u(a),_("")):(u(""),_("Error!"))},addUser:function(){t(o),alert("Hello ".concat(o," !"))},error:m,totalUsers:p})},T=t(40);var W=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(T.a)(),name:e};l([].concat(Object(y.a)(t),[a]))}}))},G=t(6),M=t(10),P=t.n(M),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(P.a.error," ").concat(u||""),m="".concat(P.a.input," ").concat(c?P.a.errorInput:P.a.superInput,"  ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},U=t(15),B=t.n(U),F=t(13),z=t.n(F),L=function(e){var a=e.red,t=e.className,n=Object(G.a)(e,["red","className"]),l="".concat(z.a.button," ").concat(a?z.a.red:z.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},J=t(16),K=t.n(J),q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(h.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:B.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:B.a.blue}),r.a.createElement(L,null,"default"),r.a.createElement(L,{red:!0,onClick:o},"delete "),r.a.createElement(L,{disabled:!0},"disabled"),r.a.createElement(q,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(q,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(W,null),r.a.createElement(V,null))},D="/pre-junior";var Q=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:D})}}),r.a.createElement(s.b,{path:D,render:function(){return r.a.createElement(Y,null)}}),"// add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(m,null)}})))},R=t(25);var X=function(){return r.a.createElement("div",null,r.a.createElement(R.a,null,r.a.createElement(i,null),r.a.createElement(Q,null)))};var Z=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.c4595b45.chunk.js.map