(this["webpackJsonpa2-helps-web"]=this["webpackJsonpa2-helps-web"]||[]).push([[0],{102:function(e,t,a){e.exports=a(153)},107:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(107),a(22)),p=a(188),c=a(193),s=a(191),x=a(95),u=Object(p.a)((function(e){return{root:{flexGrow:1,textAlign:"center",backgroundColor:"#719F20",borderBottom:"6px solid #7B6F68",color:"white"},font:{padding:32},img:{width:"80%",paddingTop:16,paddingBottom:16}}}));function m(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null,r.a.createElement(c.a,{container:!0,className:e.center},r.a.createElement(c.a,{item:!0,xs:4,sm:2},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{className:e.img,src:"logo_white_transparentBG.png",alt:"A2Cares"}))),r.a.createElement(c.a,{item:!0,xs:12,sm:10,className:e.font},r.a.createElement(x.a,{variant:"h4",color:"inherit"},"Support ",r.a.createElement("strong",null,"front-line workers")," and ",r.a.createElement("strong",null,"local businesses")," in Ann Arbor during the COVID-19 crisis.")))))}var g=a(46),f=a(194),b=a(201),h=a(205),d=a(197),E=a(204),v=a(196),y=a(200),S=a(198),O=a(195),w=a(203),j=function(e){var t=e.setOpen,a=e.open,n=function(e,a){"clickaway"!==a&&t(!1)};return r.a.createElement(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:a,autoHideDuration:6e3,onClose:n,message:"Submit an amount in dollars you wish to donate.",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{color:"secondary",size:"small",onClick:n},"Continue"))})},k=a(68),A=a(23),C=a(31),H=a(32),W=a(34),z=a(52),L=a(62),F=a.n(L);z.Model.$http=F.a;var N=function(e){Object(W.a)(a,e);var t=Object(H.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"resource",value:function(){return"donations"}},{key:"cancel",value:function(){return this.sync({canceled:!0})}}]),a}(function(e){Object(W.a)(a,e);var t=Object(H.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"baseURL",value:function(){return"https://a2helps-api-pmm.ssi.sh/v1"}},{key:"request",value:function(e){return this.$http.request(e)}}]),a}(z.Model)),I=Object(p.a)((function(e){return{root:{padding:16,marginTop:12}}}));function B(){var e=r.a.useState("25"),t=Object(g.a)(e,2),a=t[0],n=t[1],o=r.a.useState("150"),i=Object(g.a)(o,2),l=i[0],p=i[1],s=r.a.useState(!1),u=Object(g.a)(s,2),m=u[0],w=u[1],A=I();return r.a.createElement(c.a,{item:!0,xs:12,sm:4},r.a.createElement(x.a,{variant:"h4",color:"inherit"},"Provide Support"),r.a.createElement(f.a,{className:A.root},r.a.createElement(x.a,{variant:"h6",color:"inherit"},"Donate Now"),r.a.createElement(E.a,{component:"fieldset"},r.a.createElement(v.a,{component:"legend"},"Amount"),r.a.createElement(h.a,{"aria-label":"gender",name:"gender1",value:a,onChange:function(e){n(e.target.value)}},r.a.createElement(d.a,{value:"25",control:r.a.createElement(b.a,null),label:"25"}),r.a.createElement(d.a,{value:"50",control:r.a.createElement(b.a,null),label:"50"}),r.a.createElement(d.a,{value:"100",control:r.a.createElement(b.a,null),label:"100"}),r.a.createElement(d.a,{value:"other",control:r.a.createElement(b.a,null),label:r.a.createElement(y.a,{id:"outlined-basic",label:"Other amount",value:l,onChange:function(e){p(e.target.value.replace(/\D/g,""))},InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},"$")}})})),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){""!==l||"other"!==a?function(e){var t=new N({amount:e});t.save().then((function(){Object(k.a)("pk_test_3upuhAr9beRHklbcKy8vvxHX").then((function(e){e.redirectToCheckout({sessionId:t.co_session}).then((function(e){}))}))}))}(100*("other"===a?parseInt(l):parseInt(a))):w(!0)}},"Complete Donation"))),r.a.createElement(j,{open:m,setOpen:w}))}var T=Object(p.a)((function(e){return{root:{padding:16,marginTop:12}}})),D=function(){window.open("https://forms.gle/46sQecMioRpCYyBh9")};function R(){var e=T();return r.a.createElement(c.a,{item:!0,xs:12,sm:4},r.a.createElement(x.a,{variant:"h4",color:"inherit"},"Become an A2 Helps Vendor"),r.a.createElement(f.a,{className:e.root},r.a.createElement(x.a,{variant:"h6",color:"inherit"},"Sign up your local business"),r.a.createElement(x.a,{variant:"body1",color:"inherit"},"Are you a local business who can sell gift certificates to A2Helps?"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:D},"Submit your business")))}var P=Object(p.a)((function(e){return{root:{padding:16,marginTop:12}}})),M=function(){window.open("https://forms.gle/5JbWrAUh9Y5peri67")};function G(){var e=P();return r.a.createElement(c.a,{item:!0,xs:12,sm:4},r.a.createElement(x.a,{variant:"h4",color:"inherit"},"Claim Support"),r.a.createElement(f.a,{className:e.root},r.a.createElement(x.a,{variant:"h6",color:"inherit"},"Request Codes for your Team"),r.a.createElement(x.a,{variant:"body1",color:"inherit"},"Do you lead a team of COVID-19 front-liners? Submit your information to see if your team is eligible to recieve A2Helps codes."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:M},"Request Codes")))}var _=Object(p.a)((function(e){return{root:{flexGrow:1,textAlign:"center",borderTop:"1px solid #3D3B39",padding:32,marginTop:32}}}));function U(){var e=_();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null,r.a.createElement(x.a,{variant:"body1",color:"inherit"},"Made with ",r.a.createElement("strong",null,"\u2665")," by volunteers in Ann Arbor, MI.")))}var q=r.a.createContext(null),Y=a(71),$=a.n(Y),J=(a(150),{apiKey:"AIzaSyBNw7iZSceM2W_wnnev-QAeStw_sqhWMHA",authDomain:"a2cares.firebaseapp.com",databaseURL:"https://a2cares.firebaseio.com",projectId:"a2cares",storageBucket:"a2cares.appspot.com",messagingSenderId:"12643715755",appId:"1:12643715755:web:d50e6ce431f6d88ea745ee",measurementId:"G-60KLEYE83R"}),K=r.a.createContext(null),V=function(e){return function(t){return r.a.createElement(K.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},Q=K,X=function e(){var t=this;Object(A.a)(this,e),this.doLoginWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doLogout=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},$.a.initializeApp(J),this.auth=$.a.auth()},Z={isAuthenticated:!1,user:null},ee=function(e){var t=function(t){Object(W.a)(n,t);var a=Object(H.a)(n);function n(e){var t;return Object(A.a)(this,n),(t=a.call(this,e)).state=Z,t}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({user:t,isAuthenticated:!0}):e.setState(Z)}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(q.Provider,{value:this.state},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return V(t)},te=V((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doLogout},"Sign Out")})),ae=Object(p.a)((function(e){return{root:{minHeight:"100vh",backgroundColor:"#efefef"},ctas:{padding:16,flexGrow:1},spacer:{flex:1}}})),ne=function(){return r.a.createElement(l.b,{to:"/login"},"Log in")},re=function(e){var t=e.user;return r.a.createElement("div",null,"Logged in as ".concat(t),r.a.createElement(te,null))};var oe=function(){var e=ae();return r.a.createElement("div",{className:e.root},r.a.createElement(m,null),r.a.createElement(s.a,null,r.a.createElement(c.a,{spacing:2,container:!0,className:e.ctas},r.a.createElement(B,null),r.a.createElement(R,null),r.a.createElement(G,null)),r.a.createElement("div",null,r.a.createElement(q.Consumer,null,(function(e){return e.isAuthenticated?r.a.createElement(re,{user:e.user.email}):r.a.createElement(ne,null)}))),r.a.createElement("div",{className:e.spacer}),r.a.createElement(U,null)))},ie=Object(p.a)((function(e){return{root:{minHeight:"100vh",backgroundColor:"#efefef"},message:{padding:64,flexGrow:1,textAlign:"center"},spacer:{flex:1}}}));var le=function(){var e=ie();return r.a.createElement("div",{className:e.root},r.a.createElement(m,null),r.a.createElement(s.a,null,r.a.createElement(c.a,{spacing:2,container:!0,className:e.message},r.a.createElement(c.a,{xs:12},r.a.createElement("br",null),r.a.createElement(x.a,{variant:"h4",color:"inherit"},r.a.createElement("strong",null,"Thank you")," for supporting local front-liners and businesses."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a,{variant:"h6",color:"inherit"},"Your donation has been received.",r.a.createElement("br",null),r.a.createElement(l.b,{to:"/"},"Return home.")))),r.a.createElement("div",{className:e.spacer}),r.a.createElement(U,null)))},pe=a(72),ce=a.n(pe),se=a(92),xe=a(35),ue=Object(p.a)((function(e){return{root:{minHeight:"100vh",backgroundColor:"#efefef"},message:{padding:64,flexGrow:1,textAlign:"center"},spacer:{flex:1}}})),me=function(){var e=Object(se.a)(ce.a.mark((function e(t){var a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new N({id:t}),e.next=3,a.cancel();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ge=function(){var e=ue(),t=function(e){var t=e;return"?"===e[0]&&(t=e.slice(1)),t.split("&").reduce((function(e,t){var a=t.split("="),n=Object(g.a)(a,2),r=n[0],o=n[1];return e[r]=o,e}),{})}(Object(xe.e)().search).donationid;return Object(n.useEffect)((function(){t&&me(t)})),r.a.createElement("div",{className:e.root},r.a.createElement(m,null),r.a.createElement(s.a,null,r.a.createElement(c.a,{spacing:2,container:!0,className:e.message},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement("br",null),r.a.createElement(x.a,{variant:"h4",color:"inherit"},"Your payment has been canceled."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x.a,{variant:"h6",color:"inherit"},r.a.createElement(l.b,{to:"/"},"Return home.")))),r.a.createElement("div",{className:e.spacer}),r.a.createElement(U,null)))},fe=a(64),be=a(73),he={email:"",password:"",error:null},de=function(e){Object(W.a)(a,e);var t=Object(H.a)(a);function a(e){var n;return Object(A.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doLoginWithEmailAndPassword(a,r).then((function(){n.setState(Object(be.a)({},he)),n.props.history.push("/")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(fe.a)({},e.target.name,e.target.value))},n.state=Object(be.a)({},he),n}return Object(C.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),Ee=Object(xe.f)(V(de)),ve=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));var ye=function(){var e=ve();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(f.a,{className:e.paper},r.a.createElement(x.a,{variant:"h1",color:"inherit"},"Sign In"),r.a.createElement(Ee,null)))))},Se=a(199),Oe=a(93),we={breakpoints:{keys:["xs","sm","md","lg","xl"],values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},direction:"ltr",mixins:{toolbar:{minHeight:56,"@media (min-width:0px) and (orientation: landscape)":{minHeight:48},"@media (min-width:600px)":{minHeight:64}}},overrides:{},palette:{common:{black:"#000",white:"#fff"},type:"light",primary:{main:"#719F20",light:"#A1D059",dark:"#719F20",contrastText:"#fff"},secondary:{main:"#F1A205",light:"#F1A205",dark:"#F1A205",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},warning:{light:"#ffb74d",main:"#ff9800",dark:"#f57c00",contrastText:"rgba(0, 0, 0, 0.87)"},info:{light:"#64b5f6",main:"#2196f3",dark:"#1976d2",contrastText:"#fff"},success:{light:"#81c784",main:"#4caf50",dark:"#388e3c",contrastText:"rgba(0, 0, 0, 0.87)"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#3D3B39",800:"#3D3B39",900:"#3D3B39",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},contrastThreshold:3,tonalOffset:.2,text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#fff",default:"#fff",level2:"#f5f5f5",level1:"#fff"},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},props:{},shadows:["none","0px 2px 1px -1px rgba(150,150,150,0.2),0px 1px 1px 0px rgba(150,150,150,0.14),0px 1px 3px 0px rgba(150,150,150,0.12)","0px 3px 1px -2px rgba(150,150,150,0.2),0px 2px 2px 0px rgba(150,150,150,0.14),0px 1px 5px 0px rgba(150,150,150,0.12)","0px 3px 3px -2px rgba(150,150,150,0.2),0px 3px 4px 0px rgba(150,150,150,0.14),0px 1px 8px 0px rgba(150,150,150,0.12)","0px 2px 4px -1px rgba(150,150,150,0.2),0px 4px 5px 0px rgba(150,150,150,0.14),0px 1px 10px 0px rgba(150,150,150,0.12)","0px 3px 5px -1px rgba(150,150,150,0.2),0px 5px 8px 0px rgba(150,150,150,0.14),0px 1px 14px 0px rgba(150,150,150,0.12)","0px 3px 5px -1px rgba(150,150,150,0.2),0px 6px 10px 0px rgba(150,150,150,0.14),0px 1px 18px 0px rgba(150,150,150,0.12)","0px 4px 5px -2px rgba(150,150,150,0.2),0px 7px 10px 1px rgba(150,150,150,0.14),0px 2px 16px 1px rgba(150,150,150,0.12)","0px 5px 5px -3px rgba(150,150,150,0.2),0px 8px 10px 1px rgba(150,150,150,0.14),0px 3px 14px 2px rgba(150,150,150,0.12)","0px 5px 6px -3px rgba(150,150,150,0.2),0px 9px 12px 1px rgba(150,150,150,0.14),0px 3px 16px 2px rgba(150,150,150,0.12)","0px 6px 6px -3px rgba(150,150,150,0.2),0px 10px 14px 1px rgba(150,150,150,0.14),0px 4px 18px 3px rgba(150,150,150,0.12)","0px 6px 7px -4px rgba(150,150,150,0.2),0px 11px 15px 1px rgba(150,150,150,0.14),0px 4px 20px 3px rgba(150,150,150,0.12)","0px 7px 8px -4px rgba(150,150,150,0.2),0px 12px 17px 2px rgba(150,150,150,0.14),0px 5px 22px 4px rgba(150,150,150,0.12)","0px 7px 8px -4px rgba(150,150,150,0.2),0px 13px 19px 2px rgba(150,150,150,0.14),0px 5px 24px 4px rgba(150,150,150,0.12)","0px 7px 9px -4px rgba(150,150,150,0.2),0px 14px 21px 2px rgba(150,150,150,0.14),0px 5px 26px 4px rgba(150,150,150,0.12)","0px 8px 9px -5px rgba(150,150,150,0.2),0px 15px 22px 2px rgba(150,150,150,0.14),0px 6px 28px 5px rgba(150,150,150,0.12)","0px 8px 10px -5px rgba(150,150,150,0.2),0px 16px 24px 2px rgba(150,150,150,0.14),0px 6px 30px 5px rgba(150,150,150,0.12)","0px 8px 11px -5px rgba(150,150,150,0.2),0px 17px 26px 2px rgba(150,150,150,0.14),0px 6px 32px 5px rgba(150,150,150,0.12)","0px 9px 11px -5px rgba(150,150,150,0.2),0px 18px 28px 2px rgba(150,150,150,0.14),0px 7px 34px 6px rgba(150,150,150,0.12)","0px 9px 12px -6px rgba(150,150,150,0.2),0px 19px 29px 2px rgba(150,150,150,0.14),0px 7px 36px 6px rgba(150,150,150,0.12)","0px 10px 13px -6px rgba(150,150,150,0.2),0px 20px 31px 3px rgba(150,150,150,0.14),0px 8px 38px 7px rgba(150,150,150,0.12)","0px 10px 13px -6px rgba(150,150,150,0.2),0px 21px 33px 3px rgba(150,150,150,0.14),0px 8px 40px 7px rgba(150,150,150,0.12)","0px 10px 14px -6px rgba(150,150,150,0.2),0px 22px 35px 3px rgba(150,150,150,0.14),0px 8px 42px 7px rgba(150,150,150,0.12)","0px 11px 14px -7px rgba(150,150,150,0.2),0px 23px 36px 3px rgba(150,150,150,0.14),0px 9px 44px 8px rgba(150,150,150,0.12)","0px 11px 15px -7px rgba(150,150,150,0.2),0px 24px 38px 3px rgba(150,150,150,0.14),0px 9px 46px 8px rgba(150,150,150,0.12)"],typography:{htmlFontSize:16,fontFamily:'"Lato", "Open Sans", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,h1:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:300,fontSize:"6rem",lineHeight:1.167,letterSpacing:"-0.01562em"},h2:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:300,fontSize:"3.75rem",lineHeight:1.2,letterSpacing:"-0.00833em"},h3:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"3rem",lineHeight:1.167,letterSpacing:"0em"},h4:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"2.125rem",lineHeight:1.235,letterSpacing:"0.00735em"},h5:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"1.5rem",lineHeight:1.334,letterSpacing:"0em"},h6:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:500,fontSize:"1.25rem",lineHeight:1.6,letterSpacing:"0.0075em"},subtitle1:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"1rem",lineHeight:1.75,letterSpacing:"0.00938em"},subtitle2:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:500,fontSize:"0.875rem",lineHeight:1.57,letterSpacing:"0.00714em"},body1:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"1rem",lineHeight:1.5,letterSpacing:"0.00938em"},body2:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em"},button:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:500,fontSize:"0.875rem",lineHeight:1.75,letterSpacing:"0.02857em",textTransform:"uppercase"},caption:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"0.75rem",lineHeight:1.66,letterSpacing:"0.03333em"},overline:{fontFamily:'"Lato", "Open Sans", sans-serif',fontWeight:400,fontSize:"0.75rem",lineHeight:2.66,letterSpacing:"0.08333em",textTransform:"uppercase"}},shape:{borderRadius:4},transitions:{easing:{easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},duration:{shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195}},zIndex:{mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},nprogress:{color:"#000"}},je=ee((function(){return r.a.createElement(Se.a,{theme:Object(Oe.a)(we)},r.a.createElement(l.a,null,r.a.createElement(xe.a,{path:"/donation/cancel"},r.a.createElement(ge,null)),r.a.createElement(xe.a,{path:"/donation/success"},r.a.createElement(le,null)),r.a.createElement(xe.a,{exact:!0,path:"/"},r.a.createElement(oe,null)),r.a.createElement(xe.a,{path:"/login"},r.a.createElement(ye,null))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q.Provider,{value:new X},r.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),z.Model.$http=F.a}},[[102,1,2]]]);
//# sourceMappingURL=main.0ce7b79d.chunk.js.map