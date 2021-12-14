(this["webpackJsonpkarmacode-client"]=this["webpackJsonpkarmacode-client"]||[]).push([[0],{150:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),c=(a(150),a(18)),s=a.n(c),l=a(33),d=a(9),u=a(15),p="https://karmacode.herokuapp.com/api",j=a(34),m=a.n(j),h=a(5),x=a(237),b=a(241),f=a(243),g=a(238),O=a(234),v=a(27),y=a(91),w=a.n(y),C=a(6),k=a(224),W=a(25),S=a(128),L=a.n(S),I=a(1),R=Object(n.createContext)();function q(e){var t=e.children,a=Object(n.useState)(null),r=Object(d.a)(a,2),o=r[0],i=r[1];return Object(I.jsx)(R.Provider,{value:{user:o,setUser:i},children:t})}var T=Object(C.a)("div")((function(e){var t=e.theme;return Object(h.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),z=Object(C.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),P=Object(C.a)(W.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(h.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),B=function(e){var t=Object(n.useContext)(R).user;return Object(I.jsx)(x.a,{sx:{flexGrow:1},children:Object(I.jsx)(b.a,{position:"static",sx:{bgcolor:"navColor.main"},children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(g.a,{style:{display:"flex",justifyContent:"flex-start"},component:"div",sx:{padding:"0 20px 0 5px",alignItems:"center"},children:[Object(I.jsx)(v.b,{variant:"h5",underline:"none",to:"/",sx:{color:"normalWhite.main"},style:{margin:"20px"},children:"Karmacode."}),Object(I.jsxs)(g.a,{component:"div",style:{display:"flex",margin:"20px",borderRight:"3px solid #373f4f",borderLeft:"3px solid #373f4f",maxWidth:"250px",marginLeft:"50px",marginRight:"50px"},children:[Object(I.jsx)(v.b,{to:"/",children:Object(I.jsx)(O.a,{sx:{borderRadius:"20px"},style:{margin:"0 auto"},color:"primary",variant:"contained",children:"Start"})}),Object(I.jsx)(v.b,{to:"/map",children:Object(I.jsx)(O.a,{sx:{borderRadius:"20px"},style:{margin:"0 auto"},color:"primary",variant:"contained",children:"Map"})})]}),Object(I.jsxs)(T,{children:[Object(I.jsx)(z,{children:Object(I.jsx)(L.a,{})}),Object(I.jsx)(P,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(I.jsx)(g.a,{sx:{display:"flex",justifyContent:"flex-end"},children:t?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(v.b,{to:"/create-organisation",children:Object(I.jsx)(O.a,{startIcon:Object(I.jsx)(w.a,{}),sx:{borderRadius:"20px"},style:{marginRight:"20px"},color:"primary",variant:"contained",children:"Create an Organisation"})}),Object(I.jsx)(v.b,{to:"/",children:Object(I.jsx)(O.a,{onClick:e.onLogout,sx:{borderRadius:"20px"},style:{marginRight:"20px"},color:"primary",variant:"contained",children:"Logout"})})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(v.b,{to:"/login",children:Object(I.jsx)(O.a,{sx:{borderRadius:"20px"},style:{marginRight:"20px"},color:"primary",variant:"contained",children:"Login"})}),Object(I.jsx)(v.b,{to:"/signup",children:Object(I.jsx)(O.a,{startIcon:Object(I.jsx)(w.a,{}),sx:{borderRadius:"20px"},style:{marginLeft:"10px",marginRight:"10px",padding:"6px 20px"},color:"secondary",variant:"contained",children:"SignUp"})})]})})]})})})})},D=a(233),E=a(239),N=a(240),U=function(e){var t=e.onLogin,a=e.myError;return Object(I.jsx)(g.a,{component:"main",maxWidth:"xs",children:Object(I.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(E.a,{component:"h1",variant:"h5",align:"center",children:"Login"}),Object(I.jsxs)(x.a,{component:"form",noValidate:!0,sx:{mt:1},onSubmit:t,children:[Object(I.jsx)(D.a,{error:Boolean(null===a||void 0===a?void 0:a.username),helperText:null===a||void 0===a?void 0:a.username,margin:"normal",color:"secondary",required:!0,fullWidth:!0,id:"userInput",label:"Username or Email Address",name:"userInput",autoComplete:"off",autoFocus:!0}),Object(I.jsx)(D.a,{error:Boolean(null===a||void 0===a?void 0:a.password),helperText:null===a||void 0===a?void 0:a.password,margin:"normal",color:"secondary",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(I.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),Object(I.jsx)(g.a,{sx:{display:"flex",justifyContent:"center"},children:Object(I.jsx)(N.a,{color:"secondary",href:"/signup",align:"center",children:"Don't have an account? Sign Up"})})]})]})})},A=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],o=a[1],i=Object(u.f)(),c=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:t.target.username.value,email:t.target.email.value,password:t.target.password.value,confirmPassword:t.target.confirmPassword.value},e.prev=2,e.next=5,m.a.post("".concat(p,"/signup"),a,{withCredentials:!0});case 5:i("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),o(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(g.a,{component:"main",maxWidth:"xs",children:Object(I.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(E.a,{component:"h1",variant:"h5",align:"center",children:"Sign Up"}),Object(I.jsxs)(x.a,{component:"form",onSubmit:c,noValidate:!0,sx:{mt:1},children:[Object(I.jsx)(D.a,{error:Boolean(null===r||void 0===r?void 0:r.username),helperText:null===r||void 0===r?void 0:r.username,margin:"normal",color:"secondary",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"off",autoFocus:!0}),Object(I.jsx)(D.a,{margin:"normal",color:"secondary",error:Boolean(null===r||void 0===r?void 0:r.email),helperText:null===r||void 0===r?void 0:r.email,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off"}),Object(I.jsx)(D.a,{error:Boolean(null===r||void 0===r?void 0:r.password),helperText:null===r||void 0===r?void 0:r.password,margin:"normal",color:"secondary",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"}),Object(I.jsx)(D.a,{error:Boolean(null===r||void 0===r?void 0:r.password),helperText:null===r||void 0===r?void 0:r.password,margin:"normal",color:"secondary",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm your Password",type:"password",id:"confirmPassword",autoComplete:"new-password"}),Object(I.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(I.jsx)(g.a,{sx:{display:"flex",justifyContent:"center"},children:Object(I.jsx)(N.a,{color:"secondary",href:"/login",align:"center",children:"Already have an account? Login instead"})})]})]})})},F=a(92),G=a(93);function J(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),i=Object(d.a)(o,2),c=i[0],u=i[1];return Object(n.useEffect)((function(){Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat("http://ip-api.com/json/?fields=61439"));case 3:t=e.sent,a=t.data,u({latitude:a.lat,longitude:a.lon,zoom:8,width:window.innerWidth,height:window.innerHeight}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(n.useEffect)((function(){Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(p,"/organisation/all"));case 3:t=e.sent,a=t.data,r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(I.jsx)("div",{style:{width:"100%",height:"90vh"},children:Object(I.jsx)(G.b,Object(F.a)(Object(F.a)({mapStyle:"".concat("mapbox://styles/initiativensucher/ckw933r2z2f5g15qn6grvl6y0"),mapboxApiAccessToken:"pk.eyJ1IjoiaW5pdGlhdGl2ZW5zdWNoZXIiLCJhIjoiY2treDB0dnpiNHlnazJvcXRvMnoxOTM2eCJ9.zsyGKAMwhCLYPGctAhjSGQ"},c),{},{width:"100%",height:"100%",onViewportChange:function(e){return u(e)},children:a.map((function(e){return Object(I.jsx)(G.a,{latitude:e.latitude,longitude:e.longitude,offsetTop:5*-c.zoom/2,children:Object(I.jsx)(N.a,{href:"/organisation/".concat(e._id),children:Object(I.jsx)("svg",{width:5*c.zoom/2,height:5*c.zoom/2,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",opacity:"60%",children:Object(I.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"#FCDD3A"})})})})}))}))})}var M=function(){var e=Object(n.useContext)(R),t=(e.user,e.setUser),a=Object(u.f)(),r=function(){var e=Object(l.a)(s.a.mark((function e(n){var r,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r={name:n.target.name.value,houseNr:n.target.houseNr.value,street:n.target.street.value,city:n.target.city.value,zip:n.target.zip.value,country:n.target.country.value,description:n.target.description.value},e.next=5,m.a.post("".concat(p,"/create-organisation"),r,{withCredentials:!0});case 5:o=e.sent,i=o.data,t(i),a("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(g.a,{component:"main",maxWidth:"xs",children:Object(I.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(E.a,{component:"h1",variant:"h5",align:"center",children:"Create an Organisation"}),Object(I.jsxs)(x.a,{component:"form",onSubmit:r,noValidate:!0,sx:{mt:1},children:[Object(I.jsx)(D.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name of your organisation",autoComplete:"off",color:"secondary",name:"name",autoFocus:!0}),Object(I.jsx)(D.a,{margin:"normal",required:!0,style:{width:"30%"},id:"houseNr",label:"House Nr.",autoComplete:"off",color:"secondary",name:"houseNr"}),Object(I.jsx)(D.a,{margin:"normal",required:!0,style:{width:"70%"},id:"street",label:"Street",autoComplete:"off",color:"secondary",name:"street"}),Object(I.jsx)(D.a,{margin:"normal",required:!0,style:{width:"60%"},id:"city",label:"City",autoComplete:"off",color:"secondary",name:"city"}),Object(I.jsx)(D.a,{margin:"normal",required:!0,style:{width:"40%"},id:"zip",label:"Postal Code",autoComplete:"off",color:"secondary",name:"zip"}),Object(I.jsx)(D.a,{margin:"normal",required:!0,fullWidth:!0,id:"country",label:"Country",autoComplete:"off",color:"secondary",name:"country"}),Object(I.jsx)(D.a,{margin:"normal",fullWidth:!0,autoComplete:"off",color:"secondary",id:"description",name:"description",label:"What is your organisation about?",multiline:!0}),Object(I.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,mr:"35%",ml:"35%",width:"30%"},children:"Create"})]})]})})})};var V=function(){var e=Object(n.useContext)(R),t=(e.user,e.setUser),a=Object(n.useState)(null),r=Object(d.a)(a,2),o=r[0],i=r[1],c=Object(u.f)();Object(n.useEffect)((function(){Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(p,"/user"),{withCredentials:!0});case 2:a=e.sent,t(a.data);case 4:case"end":return e.stop()}}),e)})))()}),[]);var j=function(){var e=Object(l.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={userInput:a.target.userInput.value,password:a.target.password.value},e.next=5,m.a.post("".concat(p,"/login"),n,{withCredentials:!0});case 5:r=e.sent,t(r.data),c("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),i(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat(p,"/logout"),{},{withCredentials:!0});case 2:t(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{children:[Object(I.jsx)(B,{onLogout:h}),Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{path:"/",element:Object(I.jsx)(J,{})}),Object(I.jsx)(u.a,{path:"/map",element:Object(I.jsx)(J,{})}),Object(I.jsx)(u.a,{path:"/login",element:Object(I.jsx)(U,{myError:o,onLogin:j})}),Object(I.jsx)(u.a,{path:"/signup",element:Object(I.jsx)(A,{})}),Object(I.jsx)(u.a,{path:"/create-organisation",element:Object(I.jsx)(M,{})})]})]})},H=a(236),K=a(232),X=a(131),Y=Object(X.a)({palette:{primary:{main:"#4c81ff"},secondary:{main:"#19857b"},navColor:{main:"#2d3446"},subColor:{main:"#373f4f"},normalWhite:{main:"#fff"},background:{default:"#081024"},mode:"dark"},typography:{fontFamily:["Noto Sans","sans-serif"].join(","),button:{textTransform:"none",fontWeight:600},h5:{fontWeight:600}}});i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(v.a,{children:Object(I.jsx)(H.a,{theme:Y,children:Object(I.jsxs)(q,{children:[Object(I.jsx)(K.a,{}),Object(I.jsx)(V,{})]})})})}),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.a98f4960.chunk.js.map