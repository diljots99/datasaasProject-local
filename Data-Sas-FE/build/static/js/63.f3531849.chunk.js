(this.webpackJsonpdatasaas=this.webpackJsonpdatasaas||[]).push([[63],{994:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var r=t(7),n=t(32),i=t(0),s=t(360),o=t(54),c=t(36),l=t(86),m=t(120),u=t(927),d=t(928),p=t(13),b=t(172),j=Object(b.a)((function(e){var a;return a={filterButton:{marginTop:"10px",marginBottom:"10px",backgroundColor:"green"},buttonToken:{fontSize:"8px",fontWeight:"bold",width:"121px"},lable:{color:"#727272",fontSize:"1rem",fontWeight:500,marginBottom:"5px"},editHeader:{marginTop:"10px",marginBottom:"10px",backgroundColor:"#efefef"},extention:{color:"#40acfb",display:"flex",alignItems:"center",cursor:"pointer"},extText:{textDecoration:"underline"},paper:{height:300,width:250,border:"1px solid",borderRadius:"5px"},profileinput:{width:"90%"},model:{top:"50%",left:"50%",transform:"translate(-".concat(50,"%, -",50,"%)"),position:"absolute",width:430,backgroundColor:e.palette.background.paper,borderRadius:"30px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},modelHead:{margin:" 20px 0",fontWeight:"bold"},modelPara:{margin:"20px 0px",fontSize:"20px",color:"#8a8fa7"},modelForm:{width:"100%"},modelFormItem:{width:"100%",margin:"10px 0"},modelFormInput:{width:"100%"},inputItem:{marginTop:"10px"},inputError:{color:"red"},editProfile:{padding:"0","& input":{background:"#fff",borderRadius:"4px",minHeight:"25px",border:"1px solid #DCD9D9",margin:"0 20px"},"& h6":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"normal",fontSize:"20px",lineHeight:"44px",color:"#727272",margin:"0 20px"}},profileMain:{margin:"40px 60px 120px"}},Object(p.a)(a,"profileinput",{width:"100%"}),Object(p.a)(a,"filterButton",{background:"#40ACFB",borderRadius:"5px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"500",fontSize:"22px",lineHeight:"44px",color:"#FFFFFF",textTransform:"capitalize"}),Object(p.a)(a,"saveButton",{background:"#03A339",borderRadius:"5px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"500",fontSize:"22px",lineHeight:"44px",color:"#FFFFFF",textTransform:"capitalize"}),Object(p.a)(a,"editHeader",{background:"#EFEFEF",borderRadius:"5px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"500",fontSize:"22px",lineHeight:"44px",textTransform:"capitalize"}),a})),x=t(33),h=t(110),N=t(37),f=t(599),O=t.n(f),y=t(2);function g(){var e=Object(i.useState)(!0),a=Object(n.a)(e,2),t=a[0],p=a[1],b=Object(x.b)(),f=Object(i.useState)(!1),g=Object(n.a)(f,2),v=g[0],_=g[1],C=Object(i.useState)({}),F=Object(n.a)(C,2),z=F[0],S=F[1],E=Object(i.useState)({uuid:"",firstName:"",lastName:"",email:"",country:"",phoneNumber:"",companyName:"",address:"",postalCode:"",companyNumber:"",city:"",county:"",u_country_code:"",u_email_option:""}),I=Object(n.a)(E,2),k=I[0],w=I[1];Object(i.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("userData"));w({uuid:e.uuid,firstName:e.u_first_name,lastName:e.u_last_name,email:e.u_email,country:e.u_country,phoneNumber:e.u_phone_no,companyName:e.u_company_name,address:e.u_address,postalCode:e.u_postal_code,companyNumber:e.u_company_no,city:e.u_city,county:e.u_country,u_country_code:e.u_country_code,u_email_option:e.u_email_option})}),[]);var P=j();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:P.profileMain,children:[Object(y.jsxs)(s.a,{className:P.editProfile,children:[Object(y.jsxs)(o.a,{container:!0,justify:"space-around",children:[Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Name"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,size:"small",variant:"outlined",error:!!z.firstName,value:k.firstName,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{firstName:e.target.value}))}}),z.firstName&&Object(y.jsx)(c.a,{className:P.inputError,children:z.firstName})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Last Name"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,size:"small",variant:"outlined",error:!!z.lastName,value:k.lastName,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{lastName:e.target.value}))}}),z.lastName&&Object(y.jsx)(c.a,{className:P.inputError,children:z.lastName})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Email Address"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,size:"small",variant:"outlined",error:!!z.email,value:k.email,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{email:e.target.value}))}}),z.email&&Object(y.jsx)(c.a,{className:P.inputError,children:z.email})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Country"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,size:"small",variant:"outlined",error:!!z.country,value:k.country,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{country:e.target.value}))}}),z.country&&Object(y.jsx)(c.a,{className:P.inputError,children:z.country})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Phone Number"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.phoneNumber,value:k.phoneNumber,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{phoneNumber:e.target.value}))}}),z.phoneNumber&&Object(y.jsx)(c.a,{className:P.inputError,children:z.phoneNumber})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"County"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.county,value:k.county,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{county:e.target.value}))}}),z.county&&Object(y.jsx)(c.a,{className:P.inputError,children:z.county})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Company Name"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.companyName,value:k.companyName,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{companyName:e.target.value}))}}),z.companyName&&Object(y.jsx)(c.a,{className:P.inputError,children:z.companyName})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Address"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.address,value:k.address,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{address:e.target.value}))}}),z.address&&Object(y.jsx)(c.a,{className:P.inputError,children:z.address})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Company Number"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.companyNumber,value:k.companyNumber,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{companyNumber:e.target.value}))}}),z.companyNumber&&Object(y.jsx)(c.a,{className:P.inputError,children:z.companyNumber})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Postal Code"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.postalCode,value:k.postalCode,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{postalCode:e.target.value}))}}),z.postalCode&&Object(y.jsx)(c.a,{className:P.inputError,children:z.postalCode})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"City"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small",error:!!z.city,value:k.city,onChange:function(e){return w(Object(r.a)(Object(r.a)({},k),{},{city:e.target.value}))}}),z.city&&Object(y.jsx)(c.a,{className:P.inputError,children:z.city})]}),Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,className:P.inputItem,children:[Object(y.jsx)(c.a,{variant:"h6",className:P.lable,children:"Secondary Email(Option)"}),Object(y.jsx)(l.a,{className:P.profileinput,disabled:t,variant:"outlined",size:"small"})]})]}),Object(y.jsxs)(o.a,{container:!0,className:P.inputItem,children:[Object(y.jsx)(o.a,{container:!0,children:Object(y.jsxs)(o.a,{item:!0,className:P.extention,style:{marginBottom:"20px"},children:[Object(y.jsx)(O.a,{style:{marginRight:"5px"}})," ",Object(y.jsx)("p",{className:P.extText,children:"Chrome Extention"})]})}),Object(y.jsx)(o.a,{item:!0,children:t?Object(y.jsx)(m.a,{className:P.editHeader,startIcon:Object(y.jsx)(u.a,{}),color:"#40ACFB",onClick:function(){return p(!t)},children:"Edit Profile"}):Object(y.jsx)(m.a,{startIcon:Object(y.jsx)(d.a,{}),className:P.saveButton,variant:"contained",onClick:function(){!function(){S({});var e={};k.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(k.email)||(e.email="Invalid email format"):e.email="Email filed required",k.firstName||(e.firstName="Name filed required"),k.lastName||(e.lastName="Last name filed required"),k.country||(e.country="Country field resquired"),k.phoneNumber||(e.phoneNumber="Phone number field required"),k.companyName||(e.companyName="Company name field required"),k.companyNumber||(e.companyNumber="Company number field required"),k.city||(e.city="City field required"),k.address||(e.address="Address field required"),k.postalCode||(e.postalCode="Postal code field required"),k.county||(e.county="County field required");var a={uuid:k.uuid,u_first_name:k.firstName.trim(),u_last_name:k.lastName.trim(),u_country_code:k.u_country_code.trim(),u_phone_no:k.phoneNumber.toString().trim(),u_company_name:k.companyName.trim(),u_company_no:k.companyNumber.trim(),u_city:k.city.trim(),u_email:k.email.trim(),u_country:k.country.trim(),u_address:k.address.trim(),u_postal_code:k.postalCode.toString().trim(),u_email_option:k.u_email_option.trim()};console.log(Object(r.a)({},a)),e.email||e.firstName||e.lastName||e.country||e.phoneNumber||e.companyName||e.companyNumber||e.city||e.address||e.county||e.postalCode?S(e):(p(!t),b(Object(N.g)(a)))}()},children:"Save"})}),Object(y.jsx)(o.a,{item:!0,children:Object(y.jsx)(m.a,{variant:"contained",className:P.filterButton,style:{backgroundColor:"#91979d",marginLeft:"10px"},color:"primary",onClick:function(){p(!0)},children:"Cancel"})}),Object(y.jsx)(o.a,{item:!0,children:Object(y.jsx)(m.a,{className:P.filterButton,color:"primary",style:{backgroundColor:"#40acfb",marginLeft:"20px"},variant:"contained",onClick:function(){_(!0)},children:"Change Password"})})]})]}),Object(y.jsx)(h.a,{open:v,setshowChangePassword:_})]})})}}}]);
//# sourceMappingURL=63.f3531849.chunk.js.map