(this.webpackJsonpdatasaas=this.webpackJsonpdatasaas||[]).push([[59],{964:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(32),i=t(0),r=t(33),s=t(37),c=t(54),o=t(36),l=t(218),d=t(234),p=t(85),m=t(82),j=t(120),b=t(4),h=t(48),g=Object(h.a)(i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline"),x=Object(h.a)(i.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock"),u=t(66),O=t.n(u),f=t(67),w=t.n(f),N=t(172),v=Object(N.a)((function(e){return{image:{width:"100%",height:"100%"},formheader:{margin:"30px 0"},Container:{padding:" 50px 50px",background:"#fff"},formContainer:{padding:" 30px 10px"},para:{color:"#717171",fontSize:"22px",marginBottom:"0",lineHeight:"44px",fontFamily:"Poppins",fontWeight:"400"},parasignup:{color:"#717171",fontSize:"22px",marginTop:"30px",lineHeight:"44px",fontFamily:"Poppins",fontWeight:"400"},para2:{color:"#717171",fontSize:"28px",marginLeft:"20px",lineHeight:"44px",fontFamily:"Poppins",fontWeight:"400"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"100%"},input:{width:"100%",textAlign:"center"},inputError:{color:"red"},Outlined:{fontSize:"20px",background:"#FFFFFF",border:"1px solid #DCD9D9",bordeRadius:"5px",padding:"0","& input":{borderRadius:"0!important"}},textpara:{fontSize:"40px",marginLeft:"20px",color:"#000000",lineHeight:"60px",fontFamily:"Poppins"},positionStart:{background:"#FCF6F6",minHeight:"61px",margin:"0","& svg":{fill:"#c1bdbd",margin:"15px"}},lock:{margin:"0"},lockMain:{margin:"0"},button:{background:"#FB404C",bordeRadius:"5px",fontSize:"22px",color:"#FFFFFF",lineHeight:"60px",fontFamily:"Poppins",fontWeight:"500",marginLeft:"10px"}}})),F=t(2);function k(){var e=Object(r.b)(),a=v(),t=Object(i.useState)(""),h=Object(n.a)(t,2),u=h[0],f=h[1],N=Object(i.useState)(""),k=Object(n.a)(N,2),S=k[0],y=k[1],C=Object(i.useState)(!1),z=Object(n.a)(C,2),H=z[0],L=z[1],E=Object(i.useState)(window.innerWidth),P=Object(n.a)(E,2),A=P[0],W=P[1],M=Object(i.useState)({}),V=Object(n.a)(M,2),D=V[0],B=V[1];Object(i.useEffect)((function(){return window.addEventListener("resize",I),function(){return window.removeEventListener("resize",I)}}));var I=function(){W(window.innerWidth)};return Object(F.jsxs)(c.a,{container:!0,children:[Object(F.jsx)(c.a,{item:!0,xs:5,style:{display:A<=500?"none":null},children:Object(F.jsx)("img",{className:a.image,src:"/images/Login.png",alt:"logo"})}),Object(F.jsxs)(c.a,{item:!0,xs:A<=500?12:7,className:a.Container,children:[Object(F.jsxs)(c.a,{container:!0,justify:"space-between",className:a.formheader,children:[Object(F.jsx)(c.a,{item:!0,children:Object(F.jsx)("img",{src:"/images/logo.png",alt:"logo"})}),Object(F.jsxs)(c.a,{item:!0,children:[Object(F.jsxs)(o.a,{paragraph:!0,className:a.parasignup,children:[" ","Dont have an account? SignUP"]})," "]})]}),Object(F.jsxs)(c.a,{item:!0,style:{background:"#fff"},children:[Object(F.jsx)(o.a,{variant:"h3",className:a.textpara,children:"Hello! Let's get started"}),Object(F.jsx)(o.a,{paragraph:!0,className:a.para2,children:"Enter your details below."})]}),Object(F.jsxs)(c.a,{container:!0,direction:"column",justify:"space-between",spacing:2,className:a.formContainer,children:[Object(F.jsxs)(c.a,{item:!0,className:a.input,children:[Object(F.jsx)(l.a,{className:Object(b.a)(a.margin,a.textField),children:Object(F.jsx)(d.a,{className:a.Outlined,id:"outlined-adornment-email",type:"e-mail",placeholder:"Enter e-mail Address",error:!!D.email,value:u,onChange:function(e){return f(e.target.value)},startAdornment:Object(F.jsx)(p.a,{position:"start",className:a.positionStart,children:Object(F.jsx)(g,{})})})}),D.email&&Object(F.jsx)(o.a,{className:a.inputError,children:D.email})]}),Object(F.jsxs)(c.a,{item:!0,className:a.input,children:[Object(F.jsx)(l.a,{className:Object(b.a)(a.margin,a.textField),variant:"outlined",children:Object(F.jsx)(d.a,{className:a.Outlined,id:"outlined-adornment-password",type:H?"text":"password",placeholder:" Password",error:!!D.password,value:S,onChange:function(e){return y(e.target.value)},endAdornment:Object(F.jsx)(p.a,{position:"end",className:a.lockMain,children:Object(F.jsx)(m.a,{className:a.lock,"aria-label":"toggle password visibility",edge:"end",onClick:function(){return L(!H)},children:H?Object(F.jsx)(O.a,{}):Object(F.jsx)(w.a,{})})}),startAdornment:Object(F.jsx)(p.a,{position:"start",className:a.positionStart,children:Object(F.jsx)(x,{})})})}),D.password&&Object(F.jsx)(o.a,{className:a.inputError,children:D.password})]}),Object(F.jsx)(c.a,{item:!0,children:Object(F.jsx)("div",{children:Object(F.jsx)(j.a,{className:a.button,variant:"contained",size:"large",onClick:function(){return function(){B({});var a={};u?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(u)||(a.email="Invalid email format"):a.email="Cannot be blank",S?S.length<4&&(a.password="Password must be more than 4 characters"):a.password="Cannot be blank",a.email||a.password?B(a):e(Object(s.e)(u.trim(),S))}()},children:"SIGN IN"})})})]}),Object(F.jsxs)(c.a,{item:!0,children:[Object(F.jsxs)(o.a,{paragraph:!0,className:a.para,children:["Copyright \xa9 2021 BrandName. All rights reserved."," "]}),Object(F.jsx)(o.a,{paragraph:!0,className:a.para,children:"Terms & Conditions | Cookie Policy"})]})]})]})}}}]);
//# sourceMappingURL=59.3b099402.chunk.js.map