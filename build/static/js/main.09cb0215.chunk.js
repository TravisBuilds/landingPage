(this["webpackJsonpHighStreetMarket-UI"]=this["webpackJsonpHighStreetMarket-UI"]||[]).push([[0],{432:function(e,t){},519:function(e,t){},521:function(e,t){},534:function(e,t){},550:function(e,t){},552:function(e,t){},765:function(e,t){},767:function(e,t){},774:function(e,t){},775:function(e,t){},806:function(e,t){},985:function(e,t,a){},988:function(e,t,a){},989:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(73),i=a.n(r),s=a(204),o=a.n(s),l=a(266),j=a(36),d=a(55),h=a(42),b=a(37),u=a(21),O=a(50),p=a(33),x=a.p+"static/media/topPattern.a6b63e3e.png",g=(a.p,a.p+"static/media/box.e47e2464.png"),m=a.p+"static/media/logo.ca09748d.png",f=a(2);var A=function(){var e={background:"url(".concat(x,") no-repeat top right"),backgroundSize:"contain"};return Object(f.jsx)(d.a,{fluid:!0,style:e,className:"homeTop",children:Object(f.jsx)(h.a,{children:Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)(O.a,{src:m,height:"110"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{style:{color:"#83A75D",fontSize:"220%"},children:"Buy, Trade, and Redeem"}),Object(f.jsxs)("h1",{style:{fontSize:"450%",color:"#7587D1",lineHeight:"60px"},children:["Redeemable",Object(f.jsx)("br",{}),"Limited Edition",Object(f.jsx)("br",{}),"Products"]}),Object(f.jsx)("div",{className:"mb-2",children:Object(f.jsxs)("div",{className:"loginButton",children:[Object(f.jsx)(p.a,{style:{width:"220px",borderRadius:"0",border:"none",background:"linear-gradient(#D9D0F4, #7587D1)"},size:"lg",variant:"primary",onClick:function(){return window.open("https://github.com/TravisBuilds/HighStreet")},children:"Paper"}),Object(f.jsx)(p.a,{style:{width:"220px",color:"#7587D1",borderColor:"#7587D1",borderRadius:"0"},size:"lg",variant:"outline-light",onClick:function(){window.location.href="/merchant-signup"},children:"Merchant"})]})})]}),Object(f.jsx)(u.a,{className:"box",children:Object(f.jsx)(O.a,{src:g,height:"450"})})]})})})},w=a.p+"static/media/purpleSkymasked.7317dce3.png",y=a.p+"static/media/bondingcurveWhole.3a39e004.png";var v=function(){return Object(f.jsxs)(d.a,{className:"text-center",style:{backgroundImage:"url(".concat(w,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white"},children:[Object(f.jsx)("h1",{style:{fontSize:"500%"},children:"Here at Highstreet"}),Object(f.jsx)("h3",{style:{color:"#B5FF67",fontSize:"220%",lineHeight:"1px"},children:"Everything is on a bonding curve"}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(O.a,{style:{width:"60%"},src:y,alt:"bonding curve",fluid:!0}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(u.a,{children:[" ",Object(f.jsx)("h2",{children:" Always Have Liquidity "})]}),Object(f.jsx)(u.a,{children:Object(f.jsx)("h2",{children:" Redeem Physical Products"})}),Object(f.jsx)(u.a,{children:Object(f.jsx)("h2",{children:" Price Discovery by Fans "})})]}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{children:Object(f.jsx)(p.a,{variant:"outline-light",children:"Learn More"})}),Object(f.jsx)(u.a,{})]})]})]})},B=a(38),k=a(5),E=a.n(k),T=a(67),R=a(25),C=function(e,t){switch(t.type){case"SET_SELECTED_ETH_ADDR":return Object(R.a)(Object(R.a)({},e),{},{selectedEthAddr:t.payload});case"SET_ETH_WEB3":return Object(R.a)(Object(R.a)({},e),{},{ethWeb3:t.payload});case"SET_ETH_BALANCE":return Object(R.a)(Object(R.a)({},e),{},{ethBalance:t.payload});case"SET_ETH_INJECTED_PROVIDER":return Object(R.a)(Object(R.a)({},e),{},{injectedProvider:t.payload});case"SET_ETHERS_PROVIDER":return Object(R.a)(Object(R.a)({},e),{},{ethersProvider:t.payload});case"SET_LOOM_OBJ":return Object(R.a)(Object(R.a)({},e),{},{loomObj:t.payload});case"SET_LOOM_CONNECTION_INFO":return Object(R.a)(Object(R.a)({},e),{},{loomConnectionInfo:t.payload});default:return e}},M={selectedEthAddr:"--",ethWeb3:null,ethBalance:"--",injectedProvider:null,ethersProvider:null,loomObj:null,loomConnectionInfo:null},S=Object(c.createContext)(M),N=function(e){var t=e.children,a=Object(c.useReducer)(C,M),n=Object(B.a)(a,2),r=n[0],i=n[1];return Object(f.jsx)(S.Provider,{value:{store:r,setSelectedEthAddr:function(e){i({type:"SET_SELECTED_ETH_ADDR",payload:e})},setEthWeb3:function(e){i({type:"SET_ETH_WEB3",payload:e})},setEthBalance:function(e){i({type:"SET_ETH_BALANCE",payload:e})},setInjectedProvider:function(e){i({type:"SET_INJECTED_PROVIDER",payload:e})},setEthersProvider:function(e){i({type:"SET_ETHERS_PROVIDER",payload:e})},setLoomObj:function(e){i({type:"SET_LOOM_OBJ",payload:e})},setLoomConnectionInfo:function(e){i({type:"SET_LOOM_CONNECTION_INFO",payload:e})}},children:t})};N.context=S;var D=N;var W=a(116);a(137);var P=Object(c.createContext)({}),H=function(e){var t=e.children,a=Object(c.useState)({}),n=Object(B.a)(a,2),r=n[0],i=n[1];return Object(f.jsx)(P.Provider,{value:{wallet:r,setWallet:i},children:t})};H.context=P;var I=H;a(858);var F=function(e,t){switch(t.type){case"TOKEN_AVAILABLE":return Object(R.a)(Object(R.a)({},e),{},{products:e.products.map((function(e){return e.name===t.product.name?Object(R.a)(Object(R.a)({},e),{},{available:t.available}):e}))});case"TOKEN_PRICE":return Object(R.a)(Object(R.a)({},e),{},{products:e.products.map((function(e){return e.name===t.product.name?Object(R.a)(Object(R.a)({},e),{},{price:t.price}):e}))});case"TOKEN_BOUGHT":return Object(R.a)(Object(R.a)({},e),{},{products:e.products.map((function(e){return e.name===t.payload?Object(R.a)(Object(R.a)({},e),{},{price:1.13*e.price,available:e.available-1}):e}))});case"TOKEN_SOLD":return Object(R.a)(Object(R.a)({},e),{},{products:e.products.map((function(e){return e.name===t.payload?Object(R.a)(Object(R.a)({},e),{},{price:.9*e.price,available:e.available+1}):e}))});case"TOKEN_REDEEMED":return Object(R.a)(Object(R.a)({},e),{},{products:e.products.map((function(e){return e.name===t.payload?Object(R.a)(Object(R.a)({},e),{},{price:1.15*e.price,supply:e.supply-1}):e}))});default:return e}},K=a.p+"static/media/product1.2731f381.png",L=a.p+"static/media/product2.4c6e81b9.png",G=a.p+"static/media/product3.f69f2281.png",Q=a.p+"static/media/product4.4c45faa0.png",V=a.p+"static/media/kalon.154a74a6.png",J=a.p+"static/media/lvmh.80bfc8c4.png",X=a.p+"static/media/loreal.b1010e78.png",U=a.p+"static/media/randomfeature.4a012bac.png",q={products:[{name:"Kalon Tea",ticker:"KLT",price:12,supply:500,available:500,img:K,tagline:"Essence of Nature",blurb:"Nature's first green is gold, infused in a liquor that will make it truly last forever",feature:V},{name:"L'Or\xe9al ",ticker:"OREAL",price:20,supply:2500,available:2500,img:L,tagline:"Because you're worth it ",blurb:"Be the star that you were always meant to be, L'oreal, because you're worth it",feature:X},{name:"Mystery Box",ticker:"RAND",price:15,supply:1e3,available:1e3,img:G,tagline:"Try Me",blurb:"buy me for the chance to redeem anything in our entire catalog",feature:U},{name:"LVMH",ticker:"LVMH",price:122,supply:3e3,available:3e3,img:Q,tagline:"Making it Real",blurb:"A timeless first and a vibrant way to touch up both your digital and IRL identity",feature:J}]},Y=Object(c.createContext)(q),Z=function(e){var t=e.children,a=Object(c.useReducer)(F,q),n=Object(B.a)(a,2),r=n[0];n[1];function i(){return(i=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsx)(Y.Provider,{value:{products:r.products,tokenAvailable:function(e){return l.apply(this,arguments)},tokenPrice:function(e){return j.apply(this,arguments)},tokenBuy:function(e){return i.apply(this,arguments)},tokenSell:function(e){return s.apply(this,arguments)},tokenRedeem:function(e){return o.apply(this,arguments)}},children:t})};Z.context=Y;var z=Z,_=(a.p,a.p+"static/media/ethBackdrop.37885c89.png"),$=a.p+"static/media/vr.72c29bda.png",ee=a.p+"static/media/web.4ff3ca21.png";var te=function(){var e=Object(c.useState)(!1),t=Object(B.a)(e,2),a=(t[0],t[1],Object(c.useState)("")),n=Object(B.a)(a,2);return n[0],n[1],Object(j.e)(),Object(c.useContext)(I.context),Object(c.useContext)(z.context).products,function(){var e,t=Object(c.useContext)(D.context),a=t.setSelectedEthAddr,n=t.setInjectedProvider;Object(c.useEffect)((function(){!function(){var t=Object(T.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"===typeof window.ethereum&&"undefined"===typeof window.web3){t.next=13;break}return e=window.ethereum||window.web3.currentProvider,t.prev=2,t.next=5,e.enable();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.error("user refused to connect");case 10:n(e),e.on("accountsChanged",(function(e){console.log("accounts changed"),a(e[0])})),e.on("networkChanged",(function(e){console.log("networkChanged changed"),console.log(e)}));case 13:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(){return t.apply(this,arguments)}}()()}),[window.ethereum])}(),function(){var e=Object(c.useContext)(D.context),t=e.store,a=e.setSelectedEthAddr,n=e.setEthBalance,r=e.setEthersProvider;Object(c.useEffect)((function(){t.injectedProvider&&(t.injectedProvider.selectedAddress?a(t.injectedProvider):console.warn("dont have selected address, yet"))}),[t.injectedProvider]),Object(c.useEffect)((function(){var e=function(){var e=Object(T.a)(E.a.mark((function e(){var a,c,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.injectedProvider){e.next=10;break}return a=new W.ethers.providers.Web3Provider(t.injectedProvider),e.next=4,a.getBalance(t.selectedEthAddr);case 4:return c=e.sent,e.next=7,W.ethers.utils.formatEther(c);case 7:i=e.sent,r(a),n(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.selectedEthAddr&&e()}),[t.selectedEthAddr])}(),Object(f.jsx)(d.a,{className:"text-center",style:{backgroundImage:"url(".concat(_,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white"},fluid:!0,children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h1",{style:{fontSize:"500%"},children:"two ways to ener the market "}),Object(f.jsxs)("h3",{style:{color:"#B5FF67",fontSize:"220%",lineHeight:"1px"},children:[" ",Object(f.jsx)("span",{style:{color:"#FF8B8B"},children:"Red Pill"}),Object(f.jsx)("span",{style:{color:"#7581EA"},children:"Blue Pill"}),"Take Your Pick"]}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(O.a,{src:$,fluid:!0,style:{width:"50%"}})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(O.a,{src:ee,fluid:!0,style:{width:"50%"}})})]}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{children:Object(f.jsx)("h2",{style:{color:"#B5FF67"},children:"Coming Soon in June"})}),Object(f.jsx)(u.a,{})]})]})]})})},ae=a(422),ce=a.n(ae);var ne=function(){return Object(f.jsxs)(d.a,{className:"text-center",style:{color:"white",overflow:"hidden",padding:"0",height:"500px",background:"rgba(0,0,0,0.7)"},fluid:!0,children:[Object(f.jsx)(ce.a,{url:"https://www.youtube.com/watch?v=lZHJ_h6ox7E",width:"100%",height:"500px",loop:!0,muted:!0,playing:!0,style:{position:"absolute",zIndex:"-1"}}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h1",{style:{marginTop:"1em",fontSize:"400%"},children:"Proof of play liquidity mining "}),Object(f.jsxs)("h3",{style:{color:"skyblue",fontSize:"220%",lineHeight:"1px"},children:[" ",Object(f.jsx)("span",{style:{color:"#7587D1"},children:"Available for PCVR on"})," Viveport "]}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(b.a,{}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{children:Object(f.jsx)(p.a,{style:{marginTop:"8em"},variant:"outline-success",children:"Generate Avatar First"})}),Object(f.jsx)(u.a,{})]})]})]})]})},re=a.p+"static/media/footer.ab9ed276.png",ie=a.p+"static/media/github.1c78785a.png",se=a.p+"static/media/gitbook.19d74ed5.png";var oe=function(){return Object(f.jsxs)(d.a,{className:"text-center",style:{backgroundImage:"url(".concat(re,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white"},fluid:!0,children:[Object(f.jsx)("h3",{style:{color:"#7587D1",fontSize:"220%",lineHeight:"1px"},children:"Highstreet Residents"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(h.a,{children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{children:Object(f.jsx)("a",{href:"https://t.me/joinchat/_uUMfr2-VaA2ODFl",children:Object(f.jsx)(O.a,{style:{width:"30%"},src:"data:image/png;base64,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",alt:"telegram",fluid:!0})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)("a",{href:"https://github.com/TravisBuilds/HighStreet",children:Object(f.jsx)(O.a,{style:{width:"30%"},src:ie,alt:"github",fluid:!0})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)("a",{href:"https://highstreet-market.gitbook.io/highstreet/",children:Object(f.jsx)(O.a,{style:{width:"30%"},src:se,alt:"gitbook",fluid:!0})})}),Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{}),Object(f.jsx)(u.a,{})]})})]})},le=function(){return Object(f.jsxs)("div",{className:"landing",children:[Object(f.jsx)(A,{}),Object(f.jsx)(v,{}),Object(f.jsx)(te,{}),Object(f.jsx)(ne,{}),Object(f.jsx)(oe,{})]})},je=a.p+"static/media/tokenomics.65b277c8.png",de=(a(985),function(){return Object(f.jsxs)("div",{className:"aboutPage",children:[Object(f.jsx)("h2",{children:"Welcome to HighStreet"}),Object(f.jsx)("p",{children:"Highstreet Market is developed by the team at LumiereVR with the goal to become the largest non-gaming section of the decentralized metaverse. Our vision for HighStreet is to be the shopping portal intersecting games and applications built anywhere in the world. Although at it\u2019s current iteration we\u2019ve partnered with HTC and various brands and artists to launch our market place, our goal is to hand the reins to the users eventually and transitioning into a full Decentralized Autonomous Organization (DAO)."}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"There are two modes to access Highstreet currently, through the metaverse using PCVR and through the website itself. We are not supporting webVR like other decentralized metaverse platforms because we believe that true VR experience is something that cannot be replaced we shouldn\u2019t lower quality for the sake of scale today. HighStreet Market also have two types of users Residents and Merchants, Residents are everyday users logging in with their wallet to buy, trade, and redeem products, whereas Merchants are approved sellers that populate our market place with infinite wonders. Our team will try our best to curate the best products for Residents, but eventually the ecosystem will be able to run itself through token staking process."}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Our market make use of a Proof of Play system of liquidity mining, where to incentivize users to join us in the metaverse, we\u2019ve partnered with HTC\u2019s Viveport platform to provide rewards in Street Tokens to any users that complete certain tasks inside the Metaverse version of our Market Place . To even further incentivize users, any product tokens purchased through depositing our platform are eligible for staking rewards carved out from our transaction fees. A purchase fee of 4% and sell fee of 2% is collected, 1% of pool each goes towards the merchant, 1% of each will go towards our insurance fund, but the final 2 percent from the purchase fee will be allocated as staking rewards."}),Object(f.jsx)("img",{src:je,alt:"tokenomics"})]})}),he=a(44),be=a(271),ue=a(423),Oe=a.n(ue),pe=a(117),xe=a(424),ge=function(e){var t=Object(c.useState)("Connect Wallet"),a=Object(B.a)(t,1)[0],n=Object(c.useState)({name:"Kalon Tea",ticker:"KLT",price:12,supply:500,available:500,img:K}),r=Object(B.a)(n,2),i=r[0],s=r[1],o=Object(c.useContext)(z.context),l=o.products,j=o.tokenBought;Object(c.useEffect)((function(){if(void 0!==e.active){var t=l.find((function(t){return t.name===e.active?t:null}));s(t)}}),[e]);return Object(f.jsx)("div",{style:e.style,children:Object(f.jsx)(d.a,{className:"cardJumbo",style:{margin:"0",background:"#0E0E0E",zIndex:"-1"},fluid:!0,children:Object(f.jsx)(h.a,{style:{width:"25rem",margin:"auto"},children:Object(f.jsx)(b.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(he.a,{className:"bg-dark text-white",style:{border:"none"},children:Object(f.jsxs)(he.a.Body,{style:{backgroundColor:"white",padding:"0"},children:[Object(f.jsx)(he.a.Img,{style:{margin:"none",padding:"none"},src:i.img}),Object(f.jsxs)(he.a.ImgOverlay,{children:[Object(f.jsx)(he.a.Header,{style:{padding:"0",backgroundColor:"none",border:"0"},children:Object(f.jsx)("strong",{children:i.name})}),Object(f.jsx)(he.a.Title,{children:i.ticker}),Object(f.jsx)(he.a.Text,{style:{margin:"0"},children:Object(f.jsxs)("h3",{children:[i.price.toFixed(4),"\xa0USD"," "]})}),Object(f.jsxs)(he.a.Footer,{style:{padding:"0",backgroundColor:"none",border:"0"},children:[i.available," ","out of"," ",i.supply,"\xa0stocks available"]})]}),Object(f.jsx)("div",{className:"dropDown",children:Object(f.jsxs)(xe.a,{variant:"secondary",title:"".concat(i.price.toFixed(4)," DAI"),style:{background:"#f1f2f6",width:"20rem",marginTop:"8px",marginBottom:"8px",marginLeft:"1.5rem"},children:[Object(f.jsxs)(pe.a.Item,{as:"button",children:[i.price.toFixed(4)," ","DAI"]}),Object(f.jsx)(pe.a.Item,{as:"button",children:"ETH"}),Object(f.jsx)(pe.a.Item,{as:"button",children:"BAT"}),Object(f.jsx)(pe.a.Item,{as:"button",children:"XXX"})]})}),Object(f.jsx)(u.a,{children:Object(f.jsxs)("div",{className:"curvyButton",children:[Object(f.jsx)(p.a,{variant:"primary",style:{background:"#4A90E2",width:"20rem",marginTop:"8px",marginBottom:"8px",marginLeft:"0.5rem"},onClick:function(){return j(i.name)},children:Object(f.jsx)("strong",{children:a})})," "]})}),Object(f.jsx)(u.a,{children:Object(f.jsxs)("div",{className:"curvyButton",children:[Object(f.jsx)(p.a,{variant:"primary",style:{background:"#F6BABA",width:"20rem",marginTop:"8px",marginBottom:"8px",marginLeft:"0.5rem"},onClick:function(){e.onChange("none")},children:Object(f.jsx)("strong",{children:"cancel"})})," "]})})]})})})})})})})},me=function(){var e=Object(c.useState)("none"),t=Object(B.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!1),i=Object(B.a)(r,1)[0];console.log("this is active",a);var s="none"!==a?Object(f.jsx)(ge,{onChange:function(){n("none")},active:a,style:{zIndex:"10",position:"fixed",top:"0px",width:"100vw",height:"100vh"}}):Object(f.jsx)(ge,{style:{display:"none"}}),o=Object(c.useContext)(z.context),l=o.products,j=o.tokenPrice,O=o.tokenAvailablity,x=o.tokenBuy,g=o.tokenSell,m=o.tokenRedeem;return console.log("here are the current states",l),Object(f.jsxs)("div",{children:[s,Object(f.jsx)(d.a,{className:"cardJumbo",style:{margin:"0",height:"100vh"},fluid:!0,children:Object(f.jsx)(be.a,{fade:!0,interval:null,indicators:!1,children:l.map((function(e){return Object(f.jsx)(be.a.Item,{style:{width:"25rem"},children:Object(f.jsxs)(h.a,{style:{margin:"auto"},children:[Object(f.jsx)(b.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(Oe.a,{style:{borderRadius:"8px"},options:{scale:1.01,max:10,glare:!0,"max-glare":1,speed:1e3},children:Object(f.jsxs)(he.a,{className:"bg-dark text-white",style:{border:"none"},children:[Object(f.jsx)(he.a.Img,{src:e.img}),Object(f.jsxs)(he.a.ImgOverlay,{children:[Object(f.jsx)(he.a.Header,{style:{padding:"0",backgroundColor:"none",border:"0"},children:Object(f.jsx)("strong",{children:e.name})}),Object(f.jsx)(he.a.Title,{children:e.ticker}),Object(f.jsx)(he.a.Text,{style:{margin:"0"},children:Object(f.jsxs)("h3",{children:[j(e)," ","USD"]})}),Object(f.jsxs)(he.a.Footer,{style:{padding:"0",border:"0"},children:[O(e.ticker)," ","out of",e.supply," ","stocks available"]})]})]})})})}),Object(f.jsx)(b.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)("div",{className:"curvyButton",children:Object(f.jsx)(p.a,{variant:"primary",style:{width:"23rem",marginTop:"8px",marginBottom:"8px"},onClick:function(){return x(e.ticker)},disabled:i,children:Object(f.jsx)("strong",{children:"Buy"})})})})}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{children:Object(f.jsx)("div",{className:"curvyButton",children:Object(f.jsx)(p.a,{variant:"secondary",style:{width:"10.6rem"},onClick:function(){return g(e.ticker)},disabled:i,children:Object(f.jsx)("strong",{children:"Sell"})})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)("div",{className:"curvyButton",children:Object(f.jsx)(p.a,{variant:"secondary",style:{width:"10.6rem"},onClick:function(){return m(e.ticker)},disabled:i,children:Object(f.jsx)("strong",{children:"Redeem"})})})})]})]})},e.name)}))})})]})};var fe=function(){var e=Object(c.useState)({days:0,hrs:0,mins:0,secs:0}),t=Object(B.a)(e,2),a=t[0],n=t[1];return setInterval((function(){var e=new Date("May 20, 2021").getTime()-(new Date).getTime(),t=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),c=Math.floor(e%36e5/6e4),r=Math.floor(e%6e4/1e3);n({days:t,hrs:a,mins:c,secs:r})}),1e3),Object(f.jsxs)("div",{className:"countdownTimer",children:[Object(f.jsx)("h1",{children:"Coming Soon!"}),Object(f.jsxs)("p",{children:[a.days," Days"]}),Object(f.jsxs)("p",{children:[a.hrs," Hours"]}),Object(f.jsxs)("p",{children:[a.mins," Minutes"]}),Object(f.jsxs)("p",{children:[a.secs," Seconds"]})]})},Ae=a(136),we=a.p+"static/media/instagram.9c21c529.png",ye=a.p+"static/media/merchantBackground.b0be6fad.png",ve=function(){var e=Object(c.useState)(""),t=Object(B.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(B.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(""),j=Object(B.a)(l,2),d=j[0],x=j[1];return Object(f.jsxs)("div",{className:"text-center merchant-signup",style:{backgroundImage:"url(".concat(ye,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",color:"white"},children:[Object(f.jsx)("h1",{children:"Merchant Portal"}),Object(f.jsx)("h4",{children:"Sign up with instagram for Early Access"}),Object(f.jsxs)(h.a,{className:"merchant-signup-box",children:[Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)("h3",{children:"Merchant Qualification"}),Object(f.jsxs)("ul",{className:"fa-ul",children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"fa-li",children:Object(f.jsx)("i",{className:"fas fa-check"})}),"Has an official Instagram Account"]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"fa-li",children:Object(f.jsx)("i",{className:"fas fa-check"})}),"Can produce physical product"]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"fa-li",children:Object(f.jsx)("i",{className:"fas fa-check"})}),"Willing to provide KYC"]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"fa-li",children:Object(f.jsx)("i",{className:"fas fa-check"})}),"Has a Metamask or ERC20 Wallet"]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{className:"fa-li",children:Object(f.jsx)("i",{className:"fas fa-check"})}),"Has an official Website"]})]})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)("h3",{children:"Signup"}),Object(f.jsx)("h4",{children:"Verify with Instagram and join our Waitlist"}),Object(f.jsx)(O.a,{src:we,fluid:!0,className:"ig-login-btn",onClick:function(){window.location.href="/auth/instagram"}}),Object(f.jsx)("h4",{children:"or"}),Object(f.jsx)("h4",{children:"Sing up with an official company account"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(Ae.a.Control,{type:"email",placeholder:"Enter name",value:a,onChange:function(e){return n(e.target.value)},style:{width:"50%"}}),Object(f.jsx)(Ae.a.Control,{type:"text",placeholder:"Enter email",value:s,onChange:function(e){return o(e.target.value)},style:{width:"50%"}}),Object(f.jsx)(Ae.a.Control,{type:"password",placeholder:"Enter password",value:d,onChange:function(e){return x(e.target.value)},style:{width:"50%"}}),Object(f.jsx)(p.a,{style:{width:"150px"},variant:"outline-success",children:"Signup"})]})]})]}),Object(f.jsxs)("h4",{className:"contact",children:["for support contact ",Object(f.jsx)("a",{href:"mailto:merchant@highstreet.market",children:"merchant@highstreet.market"})]})]})]})};a(272),a(138),a.p;var Be=function(){var e=s.Connectors.InjectedConnector,t=s.Connectors.NetworkOnlyConnector,a={Metamask:new e({supportedNetworks:[1,4]}),Infura:new t({providerURL:"https://mainnet.infura.io/v3/..."})};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(o.a,{connectors:a,libraryName:"ethers.js",children:Object(f.jsx)(l.a,{children:Object(f.jsx)(I,{children:Object(f.jsx)(z,{children:Object(f.jsxs)(D,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",component:le}),Object(f.jsx)(j.a,{exact:!0,path:"/about",component:de}),Object(f.jsx)(j.a,{exact:!0,path:"/market",component:me}),Object(f.jsx)(j.a,{exact:!0,path:"/merchant-signup",component:ve}),Object(f.jsx)(j.a,{exact:!0,path:"/coming-soon",component:fe})]})})})})})})},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,995)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};a(988);i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(Be,{})}),document.getElementById("root")),ke()}},[[989,1,2]]]);
//# sourceMappingURL=main.09cb0215.chunk.js.map