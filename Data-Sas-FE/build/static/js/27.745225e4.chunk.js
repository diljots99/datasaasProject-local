(this.webpackJsonpdatasaas=this.webpackJsonpdatasaas||[]).push([[27],{278:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),s=(a(6),a(4)),c=a(128),o=a(5),l=i.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.raised,d=void 0!==l&&l,p=Object(r.a)(e,["classes","className","raised"]);return i.createElement(c.a,Object(n.a)({className:Object(s.a)(a.root,o),elevation:d?8:1,ref:t},p))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},281:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(0);var n=a(278),r=a(36),i=a(172),s=a(2),c=Object(i.a)({griddata:{fontWeight:"600",fontSize:"40px",fontFamily:"Poppins",color:"#23273A",lineHeight:"60px"},griddatapara:{color:"#727272",fontSize:"19px",fontFamily:"Poppins",lineHeight:"28px",fontWeight:"500"},comImage:{width:"71px",height:"71px",textAlign:"center",lineHeight:"69px",marginRight:"10px",borderRadius:"50px"}});function o(e){var t=e.count,a=e.message,i=e.imgsrc,o=e.style,l=c();return Object(s.jsx)(n.a,{variant:"outlined",children:Object(s.jsxs)("grid",{style:{display:"flex",padding:"20px",justifyContent:"space-around"},children:[Object(s.jsx)("grid",{className:l.comImage,style:o,children:Object(s.jsx)("img",{className:l.Avatar,src:i,alt:"company-note-list"})}),Object(s.jsxs)("grid",{style:{display:"inline-grid",paddingLeft:"5px"},children:[Object(s.jsx)(r.a,{display:"inline",className:l.griddata,variant:"h7",children:t}),Object(s.jsx)(r.a,{display:"inline",variant:"h7",className:l.griddatapara,children:a})]})]})})}},983:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(32),i=a(0),s=a.n(i),c=a(172),o=Object(c.a)({searchcontainer:{display:"flex",justifyContent:"flex-end",alignItems:"center",margin:"25px 0 10px"},actioncontainer:{display:"flex",justifyContent:"flex-start",alignItems:"center"},chip:{width:"80px",textAlign:"center",fontWeight:"bold",fontSize:"18px",borderRadius:"5px"},checkBox:{display:"flex",alignItems:"center"},debtsHeading:{fontFamily:"Poppins",fontSize:"26px",lineHeight:"39px",color:"#000"},exportButton:{backgroundColor:"#40ACFB",fontWeight:"600",marginLeft:"10px",fontfamily:"Poppins",fontSize:"22px",lineHeight:"44px"},directorCard:{marginTop:15},actionHeader:{marginBottom:"10px",marginTop:15},debtsTable:{borderCollapse:"separate",borderSpacing:"0 15px",width:"100%",whiteSpace:"nowrap",overflowX:"auto","& th":{background:"#f1f1f1",padding:"10px 30px",fontSize:"22px",lineHeight:"33px",fontWeight:"600",fontFamily:"Poppins"},"& th:first-child":{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},"& th:last-child":{borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},"& td":{background:"#ffffff",padding:"10px 30px",fontSize:"22px",lineHeight:"33px",fontWeight:"400",fontFamily:"Poppins",color:"#727272"},"& td:first-child":{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},"& td:last-child":{borderTopRightRadius:"4px",borderBottomRightRadius:"4px"}}}),l=a(36),d=a(54),p=a(120),u=a(86),b=a(85),g=a(82),j=a(7),x=a(15),m=a(232),f=a(251),h=a(2);function O(e){var t=e.columns,a=e.data,n=e.fetchData,r=e.pageCount,s=Object(x.f)(),c=o(),l=Object(f.useTable)({columns:t,data:a,initialState:{pageIndex:0},manualPagination:!0,pageCount:r},f.useSortBy,f.usePagination),d=l.getTableProps,u=l.headerGroups,b=l.rows,g=l.prepareRow,O=(l.page,l.canPreviousPage),y=l.canNextPage,v=(l.pageOptions,l.gotoPage),C=(l.nextPage,l.pageCount),N=(l.previousPage,l.setPageSize),S=l.state,P=S.pageIndex,F=S.pageSize;Object(i.useEffect)((function(){n({pageIndex:P,pageSize:F})}),[n,P,F]);return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("div",{className:"tableWrap",children:Object(h.jsxs)("table",Object(j.a)(Object(j.a)({class:"role-header",id:"table-to-xls"},d()),{},{className:c.debtsTable,children:[u.map((function(e){return Object(h.jsx)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)("th",Object(j.a)(Object(j.a)({className:"Company Number"===e.Header?"borderStart":"Date"===e.Header?"borderEnd":"borderCenter",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(h.jsx)("span",{style:{marginLeft:"5px"},children:Object(h.jsx)("img",{src:"/images/Sort.png",alt:"company-note-list"})})]}))}))}))})),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{background:"transparent"}}),Object(h.jsx)("td",{style:{background:"transparent"}}),Object(h.jsx)("td",{style:{background:"transparent"}}),Object(h.jsx)("td",{style:{display:"flex",justifyContent:"flex-end",background:"transparent",padding:"0"},children:Object(h.jsx)(p.a,{className:c.exportButton,color:"primary",variant:"contained",children:"Export"})})]}),b.map((function(e,t){return g(e),Object(h.jsx)("tr",Object(j.a)(Object(j.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return console.log("cell data",e),Object(h.jsx)("td",Object(j.a)(Object(j.a)({onClick:function(){return s.push()},className:"Company Number"===e.column.Header?"borderStart":"Date"===e.column.Header?"borderEnd":"borderCenter"},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))]}))}),Object(h.jsxs)("div",{className:"pagination",style:{justifyContent:"flex-end"},children:[Object(h.jsx)(m.a,{className:"select",labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:F,onChange:function(e){N(Number(e.target.value))},children:[5,10,20,30,40,50].map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))}),Object(h.jsx)("nav",{"aria-label":"Page navigation example",children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{className:"page-item",onClick:function(){return v(0)},disabled:!O,children:Object(h.jsx)("span",{"aria-hidden":"true",style:{position:"relative",top:"-3px"},children:"\xab"})}),function(){for(var e=[],t=function(t){e.push(Object(h.jsx)("button",{className:"pagination-button",onClick:function(){return v(t)},style:{backgroundColor:P==t?"#40ACFB":null},children:t+1}))},a=0;a<C;a++)t(a);return e}(),Object(h.jsx)("li",{className:"page-item",onClick:function(){return v(C-1)},disabled:!y,children:Object(h.jsx)("span",{"aria-hidden":"true",style:{position:"relative",top:"-3px"},children:"\xbb"})})]})})]})]})}var y=a(243),v=a.n(y),C=a(281);t.default=function(){var e=o(),t=Object(i.useState)(!1),a=Object(r.a)(t,2),c=(a[0],a[1],s.a.useMemo((function(){return[{id:1,companyNumber:"-",companyName:"-",amount:"-",date:"-"}]}),[])),j=s.a.useState([]),x=Object(r.a)(j,2),m=x[0],f=x[1],y=s.a.useState(!1),N=Object(r.a)(y,2),S=N[0],P=N[1],F=s.a.useState(0),H=Object(r.a)(F,2),R=H[0],k=H[1],z=s.a.useRef(0),B=s.a.useMemo((function(){return[{Header:"Company Number",accessor:"companyNumber"},{Header:"Company Name",accessor:"companyName"},{Header:"Amount",accessor:" amount"},{Header:"Date",accessor:"date"}]}),[]),w=s.a.useCallback((function(e){var t=e.pageSize,a=e.pageIndex,n=++z.current;P(!0),setTimeout((function(){if(n===z.current){var e=t*a,r=e+t;f(c.slice(e,r)),k(Math.ceil(c.length/t)),P(!1)}}),1e3)}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(l.a,{variant:"h5",style:{fontWeight:600},className:e.debtsHeading,children:"Bed Debts"}),Object(h.jsxs)(d.a,{container:!0,className:e.directorCard,children:[Object(h.jsx)(d.a,{item:!0,children:Object(h.jsx)(C.a,{count:"$0",message:"Total Amount",imgsrc:"/images/money-bag.png"})}),Object(h.jsx)(d.a,{item:!0,style:{marginLeft:"20px"},children:Object(h.jsx)(C.a,{count:"$0",message:"Bed Debts Count",imgsrc:"/images/money-bag.png"})})]}),Object(h.jsxs)("div",{item:!0,xs:12,sm:6,className:e.searchcontainer,children:[Object(h.jsx)(p.a,{className:e.Button,style:Object(n.a)({background:"#FFFFFF",color:"#000000",marginRight:"10px",fontFamily:"Poppins",padding:"0px 10px",fontWeight:"600",fontSize:"26px",lineHeight:"39px"},"color","#000000"),variant:"contained",size:"small",startIcon:Object(h.jsx)("img",{src:"/images/Filter.png",alt:"company-note-list"}),children:"Filter"}),Object(h.jsx)(u.a,{style:{background:"#FFFFFF",border:"1px solid #DCD9D9",textTransform:"capitalize",borderRadius:"6px"},variant:"outlined",size:"small",placeholder:"Search",InputProps:{endAdornment:Object(h.jsx)(b.a,{children:Object(h.jsx)(g.a,{children:Object(h.jsx)(v.a,{})})})}})]}),Object(h.jsx)(O,{columns:B,data:m,fetchData:w,loading:S,pageCount:R})]})})}}}]);
//# sourceMappingURL=27.745225e4.chunk.js.map