(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{32:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r,c,o=t(0),i=t.n(o),a=t(10),l=t.n(a),s=(t(32),t(12)),d=t(26),j=t.n(d),b=t(23),u=t.n(b),x=t(25),h=t.n(x),p=t(18),O=t.n(p),f=t(24),g=t.n(f),m=t(22),v=t.n(m),y=t(3),w=t(2),k=t(1);function S(){return Object(k.jsx)(L,{children:Object(k.jsx)(q,{children:"Loading..."})})}var D,A,C,E,M,z,N,B,I,L=w.a.div(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),q=w.a.h1(c||(c=Object(y.a)(["\n  color: #000000;\n  font-size: 42px;\n  color: lightgreen;\n  cursor: pointer;\n"]))),F=t(19),G=t.n(F),J=t(20),T=t.n(J),W=t(21),H=t.n(W),K=w.a.div(D||(D=Object(y.a)(["\n  background: whitesmoke;\n  display: grid;\n  place-items: center;\n  height: 100vh;\n  justify-content: center;\n"]))),P=w.a.div(A||(A=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #000;\n  border-radius: 8px;\n  padding: 25px;\n"]))),Q=w.a.h2(C||(C=Object(y.a)(['\n  color: #000;\n  font-size: 28px;\n  font-weight: bold;\n  text-decoration: none;\n  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n']))),R=w.a.input(E||(E=Object(y.a)(["\n  width: 250px;\n  height: 33px;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: lightgray;\n"]))),U=w.a.form(M||(M=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]))),V=w.a.button(z||(z=Object(y.a)(["\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.81);\n  border: none;\n  outline: none;\n  font-size: 18px;\n  height: 30px;\n  margin-left: 10px;\n  text-align: center;\n  border-radius: 8px;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.25);\n  }\n"]))),X=w.a.div(N||(N=Object(y.a)(["\n  margin-top: 45px;\n  padding: 65px 85px;\n  background-color: lightgray;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 4px 6px 4px rgba(0, 0, 0, 0.75);\n"]))),Y=w.a.div(B||(B=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]))),Z=w.a.p(I||(I=Object(y.a)(['\n  font-size: 18px;\n  color: #000;\n  font-weight: 500;\n  text-decoration: none;\n  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n  padding-left: 10px;\n'])));function $(){var e,n,t,r,c,i,a,l=Object(o.useState)(""),d=Object(s.a)(l,2),b=d[0],x=d[1],p=Object(o.useState)(""),f=Object(s.a)(p,2),m=f[0],y=f[1],w=Object(o.useState)(""),D=Object(s.a)(w,2),A=D[0],C=D[1];return Object(o.useEffect)((function(){var e=setInterval((function(){return C((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}}),[]),Object(k.jsx)(K,{children:Object(k.jsxs)(P,{children:[Object(k.jsx)(Q,{children:"Weather app 1.0"}),Object(k.jsxs)(U,{children:[Object(k.jsx)(R,{required:!0,placeholder:"Search by City Name",value:m,onChange:function(e){return y(e.target.value)}}),Object(k.jsx)(V,{disabled:!m,onClick:function(e){if(e.preventDefault(),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&units=metric&appid=").concat("b953b1d0c0dd56a518c427b4a23568bd")).then((function(e){return e.json()})).then((function(e){return x(e)})),console.log(b),m.length<=2)return alert("Something went wrong check your input");y("")},children:"Search"})]}),b?Object(k.jsxs)(X,{children:[Object(k.jsxs)(Y,{children:[Object(k.jsx)(O.a,{style:{color:"gray"}}),Object(k.jsx)(Z,{children:null===b||void 0===b?void 0:b.name})]}),Object(k.jsxs)(Y,{children:[Math.floor((null===(e=b.main)||void 0===e?void 0:e.temp)>25)?Object(k.jsx)(G.a,{style:{color:"red"}}):Math.floor((null===(n=b.main)||void 0===n?void 0:n.temp)<10)?Object(k.jsx)(T.a,{style:{color:"A0BAEB"}}):Object(k.jsx)(H.a,{style:{color:"green"}}),Object(k.jsxs)(Z,{children:["Temperature: ",Math.floor(null===(t=b.main)||void 0===t?void 0:t.temp),"\xb0C"]})]}),Object(k.jsxs)(Y,{children:[Object(k.jsx)(v.a,{style:{color:"#E05912"}}),Object(k.jsx)(Z,{children:A})]}),Object(k.jsxs)(Y,{children:[Object(k.jsx)(u.a,{style:{color:"#256DDE"}}),Object(k.jsx)(Z,{children:null===(r=b.sys)||void 0===r?void 0:r.country})]}),Object(k.jsxs)(Y,{children:[Object(k.jsx)(g.a,{style:{color:"red"}}),Object(k.jsx)(Z,{children:(new Date).toLocaleDateString()})]}),Object(k.jsxs)(Y,{children:[(null===(c=b.weather[0])||void 0===c?void 0:c.main.includes("Clear"))?Object(k.jsx)(h.a,{style:{color:"yellow"}}):(null===(i=b.weather[0])||void 0===i?void 0:i.main.includes("Cloud"))?Object(k.jsx)(j.a,{style:{color:"#256DDE"}}):"",Object(k.jsx)(Z,{children:null===(a=b.weather[0])||void 0===a?void 0:a.description})]})]}):Object(k.jsx)(S,{})]})})}var _=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)($,{})})};l.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(_,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e730cd8d.chunk.js.map