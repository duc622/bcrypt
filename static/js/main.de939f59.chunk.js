(this.webpackJsonpbcryptjs=this.webpackJsonpbcryptjs||[]).push([[0],{129:function(e,t){},131:function(e,t){},141:function(e,t){},143:function(e,t){},168:function(e,t){},169:function(e,t){},174:function(e,t){},176:function(e,t){},183:function(e,t){},202:function(e,t){},218:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var c,r,i,a,j,l,s,o=n(114),b=n.n(o),d=n(12),u=n(2),O=n(13),x=n(1),h=O.a.h2(c||(c=Object(d.a)(["\n  text-align: center;\n"]))),f=function(){return Object(x.jsx)(h,{children:"Encrypt and Decrypt with library bcryptjs"})},p=n(10),m=O.a.h1(r||(r=Object(d.a)(["\n  color: black;\n  text-align: center;\n"]))),v=O.a.div(i||(i=Object(d.a)(["\n  padding: 10px;\n"]))),y=O.a.div(a||(a=Object(d.a)(["\n  text-align: center;\n"]))),g=O.a.button(j||(j=Object(d.a)(["\n  cursor: pointer;\n  text-align: center;\n  border: none;\n  border-radius: 5px;\n"])));function k(e){var t=e.placeholder,n=e.propVal,c=Object(u.useState)(n),r=Object(p.a)(c,2),i=r[0],a=r[1];return[i,Object(x.jsx)("textarea",{className:"text-center",placeholder:t,style:{marginBottom:"10px",width:"100%"},onChange:function(e){return a(e.target.value)},value:i})]}function N(e){var t=e.content,n=e.result,c=void 0===n||n;return Object(x.jsx)("div",{className:"mt-2 alert  alert-"+(c?"success":"danger")+" text-center",role:"alert",style:{wordWrap:"break-word"},children:t+""})}var w=n(60),C=O.a.div(l||(l=Object(d.a)(["\n  color: black;\n  margin-inline: 5px;\n"]))),S=O.a.div(s||(s=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n  width: 100px;\n"]))),E=function(){var e=k({placeholder:"String",propVal:"hello world"}),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)(0),i=Object(p.a)(r,2),a=i[0],j=i[1],l=Object(u.useState)(!1),s=Object(p.a)(l,2),o=s[0],b=s[1],d=Object(u.useState)("$2a$10$VEfKDTkTlY0/RtmG5nxHT.GjjB4H5.FF5FfivKkGbQIJOMuZrCENi"),O=Object(p.a)(d,2),h=O[0],f=O[1];return Object(x.jsxs)(v,{children:[Object(x.jsx)(m,{children:"Encrypt"}),c,Object(x.jsx)(y,{children:"Salt Rounds"}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsxs)(S,{children:[Object(x.jsx)(g,{onClick:function(){j(0===a?0:a-1)},children:"\u140a"}),Object(x.jsx)(C,{children:a}),Object(x.jsx)(g,{onClick:function(){j(20===a?20:a+1)},children:"\u1405"})]})}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(g,{onClick:function(){return function(e,t){b(!0),w.hash(e,t).then((function(e,t){b(!1),f(e||t)}))}(n,a)},children:"Click me"})}),o&&Object(x.jsx)(y,{children:"Encrypting.............."}),Object(x.jsx)(N,{content:h})]})},F=n(60),G=function(){var e=k({placeholder:"Hash to check",propVal:"$2a$10$VEfKDTkTlY0/RtmG5nxHT.GjjB4H5.FF5FfivKkGbQIJOMuZrCENi"}),t=Object(p.a)(e,2),n=t[0],c=t[1],r=k({placeholder:"String to check again",propVal:"hello world"}),i=Object(p.a)(r,2),a=i[0],j=i[1],l=Object(u.useState)(!1),s=Object(p.a)(l,2),o=s[0],b=s[1],d=Object(u.useState)(!0),O=Object(p.a)(d,2),h=O[0],f=O[1];return Object(x.jsxs)(v,{children:[Object(x.jsx)(m,{children:"Decrypt"}),j,Object(x.jsx)("br",{}),c,Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(g,{onClick:function(){return function(e,t){b(!0),F.compare(e,t).then((function(e){b(!1),f(e)}))}(a,n)},children:"Click me"})}),o&&Object(x.jsx)(y,{children:"Decrypting.............."}),Object(x.jsx)(N,{content:h,result:h})]})},T=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-6 col-sm-12 col-12",children:Object(x.jsx)(E,{})}),Object(x.jsx)("div",{className:"col-md-6 col-sm-12 col-12",children:Object(x.jsx)(G,{})})]})})};function V(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(f,{}),Object(x.jsx)(T,{})]})}n(218);b.a.render(Object(x.jsx)(V,{}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.de939f59.chunk.js.map