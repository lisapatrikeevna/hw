(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports={wrap:"Message_wrap__3dA-v",messages:"Message_messages__1YDvZ",ava:"Message_ava__1XESs",itemUser:"Message_itemUser__ErM9j",textUser:"Message_textUser__3ne9g",name:"Message_name__1rid5"}},function(e,a,t){e.exports={pagePreloader:"hw10_pagePreloader__t1XFi",windows8:"hw10_windows8__2Q2Fy",cssloadContainer:"hw10_cssloadContainer__36dqe",cssloadL:"hw10_cssloadL__24esI",cssloadI:"hw10_cssloadI__7jkdG",cssloadN:"hw10_cssloadN__27tg1",cssloadG:"hw10_cssloadG__1Q1MB",cssloadSquare:"hw10_cssloadSquare__1mlSc",cssloadCircle:"hw10_cssloadCircle___16yq",cssloadTriangle:"hw10_cssloadTriangle__2k8mX",cssloadShrinkgrow:"hw10_cssloadShrinkgrow__14KYH"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__21KUr",default:"SuperInputText_default__3IHUr",errorInput:"SuperInputText_errorInput__3jmQz",error:"SuperInputText_error__2NeHm"}},,,,,,,,,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__3lWSK",error:"Greeting_error__W11jW"}},function(e,a,t){e.exports={default:"SuperButton_default__3562p",red:"SuperButton_red__3nHBM"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2ReQZ",spanClassName:"SuperCheckbox_spanClassName__1Brb1"}},function(e,a,t){e.exports={errorPage:"Error404_errorPage__2tJEJ",num:"Error404_num__ShY9i"}},,,,,function(e,a,t){e.exports={App:"App_App__eJvKf"}},function(e,a,t){e.exports={nav:"Header_nav__K212D"}},function(e,a,t){e.exports={blue:"HW4_blue__3spm9",column:"HW4_column__1sIjr"}},,function(e,a,t){e.exports={range:"SuperRange_range__13EuE"}},function(e,a,t){e.exports=t(51)},,,,,function(e,a,t){},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(43),t(33)),u=t.n(o),i=t(1),s=t(5),m=t(34),E=t.n(m);var d=function(){return r.a.createElement("div",null,r.a.createElement(h,{title:"menu"}))};function h(e){var a=Object(n.useState)(!0),t=Object(i.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:E.a.nav},r.a.createElement(p,{titleValue:e.title,onClick:function(){c(!l)}}),!l&&r.a.createElement(v,null))}function p(e){return r.a.createElement("h2",{onClick:e.onClick},e.titleValue)}function v(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/hw1"},"HW1")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW2"},"HW2")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW3"},"HW3")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW4"},"HW4")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW6"},"HW6")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW7"},"HW7")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW8"},"HW8")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW9"},"HW9")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW10"},"HW10")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/HW11"},"HW11")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/pre-junior"},"PreJunior(Home)")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/PreJuniorPlus"},"PreJunior+")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/PrePreJunior"},"Pre-PreJunior")))}var f=t(3),g=t(10),b=t.n(g);var _=function(e){return r.a.createElement("div",{className:b.a.messages},r.a.createElement("div",{className:b.a.itemUser},r.a.createElement("img",{src:e.avatar,className:b.a.ava}),r.a.createElement("div",{className:b.a.textUser},r.a.createElement("div",null,r.a.createElement("h4",{className:b.a.nameUser},e.name),r.a.createElement("p",{className:b.a.message},e.message)),r.a.createElement("span",{className:b.a.time},e.time))))},C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",j="some text",k="22:00";var w=function(){return r.a.createElement("div",{className:b.a.wrap},r.a.createElement("hr",null),r.a.createElement(_,{avatar:C,name:O,message:j,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var y=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))};var x=function(){var e=Object(n.useState)([{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(y,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!=a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(18),H=t(25),W=t.n(H),I=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?W.a.error:W.a.someClass;return r.a.createElement("div",null,r.a.createElement("span",null,l),r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("button",{onClick:n},"add")),r.a.createElement("span",null,"count users: ",c))},P=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),E=m[0],d=m[1],h=a.length;return r.a.createElement(I,{name:o,setNameCallback:function(e){e.currentTarget.value;E&&d(""),u(e.currentTarget.value)},addUser:function(){o.trim()?(alert("Hello ".concat(o," !")),t(o),u("")):d("i dont see youre name:-( ")},error:E,totalUsers:h})},T=t(53);var A=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(P,{users:t,addUserCallback:function(e){var a={name:e,_id:Object(T.a)()};l([a].concat(Object(S.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(4),U=t(13),J=t.n(U),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=e.setError,i=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),s="".concat(J.a.error," ").concat(o||""),m=c?J.a.errorInput+" "+J.a.default:J.a.superInput+" "+J.a.default;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){u(""),a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},B=t(35),D=t.n(B),G=t(26),R=t.n(G),K=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(a?R.a.red:R.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},L=t(27),q=t.n(L),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var Q=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(){s(t?"":"error"),u?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},E=Object(n.useState)(!1),d=Object(i.a)(E,2),h=d[0],p=d[1],v=!1;return u&&(v=!0),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:m,error:u,setError:s}),r.a.createElement(K,{red:v,onClick:m},"delete "),r.a.createElement(X,{checked:h,onChangeChecked:p},"some text "),r.a.createElement(X,{checked:h,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=(t(48),function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],E=l||{},d=E.children,h=E.onDoubleClick,p=E.className,v=Object(F.a)(E,["children","onDoubleClick","className"]),f="span-style".concat(" ",p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){m(!0),a&&a(e)},onEnter:function(){t&&t(),m(!0)}},c)):r.a.createElement("span",null,r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),h&&h(e)},className:f},v),d||c.value),r.a.createElement("p",null,"you can change text")))});function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Z(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}V("test",{x:"A",y:1});Z("test",{x:"",y:0});window.addEventListener("storage",(function(e){console.log(e)}));var z=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),o=Object(i.a)(c,2),u=(o[0],o[1]);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Y,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."},setError:u})),r.a.createElement(K,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(K,{onClick:function(){var e=Z("editable-span-value",t);l(e),t.trim()&&l(t)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(F.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{key:e.index},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",value:e,name:a,checked:n===e,onChange:o}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},ae=["x","y","z"];var te=function(){var e=Object(n.useState)(ae[1]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement($,{options:ae,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ee,{name:"radio",options:ae,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(Q,null),r.a.createElement(z,null),r.a.createElement(te,null))},re=t(28),le=t.n(re);var ce=function(){return r.a.createElement("div",{className:le.a.errorPage},r.a.createElement("div",{className:le.a.num},"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var oe=function(){return r.a.createElement("div",null)},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"sort":return"up"===a.payload?Object(S.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):Object(S.a)(e).sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0}));case"check":return e.filter((function(e){return e.age>a.age}));default:return e}},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var se=function(){var e=Object(n.useState)(ie),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(ue(ie,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(ue(ie,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){return l(ue(ie,{type:"check",age:18}))}},"sort age")),"check 18",r.a.createElement("hr",null),r.a.createElement("hr",null))};var me=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),E=Object(i.a)(m,2),d=E[0],h=E[1],p=function(){clearInterval(t)},v=u?u.toTimeString():"time",f=u?u.toDateString():"date";return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)}},v),d&&r.a.createElement("div",null,f),r.a.createElement(K,{onClick:function(){p();var e=window.setInterval((function(){var e=new Date;s(e)}),1e3);l(e)}},"start"),r.a.createElement(K,{onClick:p},"stop"))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(me,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=t(17),he=t(30),pe={loading:!1},ve=function(e){return{type:"LOADING",load:e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(he.a)(Object(he.a)({},e),{},{loading:a.load});default:return e}},ge=t(11),be=t.n(ge);var _e=function(){var e=Object(de.c)((function(e){return e.hw10.loading})),a=Object(de.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",{id:be.a.pagePreloader},r.a.createElement("div",{className:be.a.cssloadContainer},r.a.createElement("div",{className:be.a.cssloadL},"l"),r.a.createElement("div",{className:be.a.cssloadCircle}),r.a.createElement("div",{className:be.a.cssloadTriangle}),r.a.createElement("div",{className:be.a.cssloadSquare}),r.a.createElement("div",{className:be.a.cssloadI},"I"),r.a.createElement("div",{className:be.a.cssloadN},"N"),r.a.createElement("div",{className:be.a.cssloadG},"G"))):r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){a(ve(!0)),setTimeout((function(){a(ve(!1))}),5e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ce=t(37),Oe=t.n(Ce),je=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(F.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(Oe.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:c},l)))},ke=(t(50),function(e){e.type,e.onChange;var a=e.onChangeRange,t=e.value,n=Object(F.a)(e,["type","onChange","onChangeRange","value"]);return r.a.createElement("div",{className:"range-slider"},r.a.createElement("span",{className:"rangeValues"}),r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a([+e.currentTarget.value,t[1]])},value:t[0],min:t[0],max:t[1]},n)),r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a([t[0],+e.currentTarget.value])},min:t[0],max:t[1],value:t[1]},n)))});var we=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(i.a)(c,2),u=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(je,{value:t,onChangeRange:l})),r.a.createElement("div",null,r.a.createElement("p",null,"DoubleRange"),r.a.createElement("span",null,t),r.a.createElement(ke,{value:[t,u],onChangeRange:function(e){l(e[0]),s(e[1])}}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ne="/pre-junior",ye="/PreJuniorPlus",xe="/hw1",Se="/hw2",He="/HW3",We="/HW4",Ie="/HW6",Pe="/HW7",Te="/HW8",Ae="/HW9",Fe="/HW10",Ue="/HW11";var Je=function(){return r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,render:function(){return r.a.createElement(f.a,{to:Ne})}}),r.a.createElement(f.b,{path:xe,exact:!0,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(f.b,{path:Se,exact:!0,render:function(){return r.a.createElement(x,null)}}),r.a.createElement(f.b,{path:He,exact:!0,render:function(){return r.a.createElement(A,null)}}),r.a.createElement(f.b,{path:We,exact:!0,render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(f.b,{path:Ie,exact:!0,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(f.b,{path:Pe,exact:!0,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(f.b,{path:Te,exact:!0,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(f.b,{path:Ae,exact:!0,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(f.b,{path:Fe,exact:!0,render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(f.b,{path:Ue,exact:!0,render:function(){return r.a.createElement(we,null)}}),r.a.createElement(f.b,{path:Ne,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(f.b,{path:ye,render:function(){return r.a.createElement(oe,null)}}),"//",r.a.createElement(f.b,{render:function(){return r.a.createElement(ce,null)}})))};var Me=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(Je,null)))};var Be=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:hw"),r.a.createElement(Me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=t(16),Ge=Object(De.b)({hw10:fe}),Re=Object(De.c)(Ge);window.store=Re;var Ke=Re;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de.a,{store:Ke},r.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[38,1,2]]]);
//# sourceMappingURL=main.5d1f6896.chunk.js.map