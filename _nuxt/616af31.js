(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1190:function(e,n,t){"use strict";(function(e){t.d(n,"c",(function(){return A})),t.d(n,"d",(function(){return k})),t.d(n,"b",(function(){return v})),t.d(n,"i",(function(){return j})),t.d(n,"g",(function(){return T})),t.d(n,"e",(function(){return F})),t.d(n,"h",(function(){return L})),t.d(n,"a",(function(){return B})),t.d(n,"f",(function(){return N}));t(73),t(53),t(86),t(63),t(46),t(79),t(87),t(67);var r=t(101),o=t(8),c=(t(34),t(621),t(26),t(114),t(618),t(77),t(3)),l=t(4),d=t(162),m=t(1),f=t(14),w=t(12),y=t(5),O=t(112);function S(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw o}}}}function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function A(e,n,t,r,o,c,l){var d=parseFloat(c),f=r,w=o;return f===m.b.mintAddress&&(f=m.c.WSOL.mintAddress),w===m.b.mintAddress&&(w=m.c.WSOL.mintAddress),f===e.quoteMintAddress.toBase58()&&w===e.baseMintAddress.toBase58()?function(e,n,t,r){var o,c=0,l=null,d=0,m=t,f=S(n.items(!1));try{for(f.s();!(o=f.n()).done;){var w=o.value,y=w.key,O=w.quantity,x=(null==e?void 0:e.priceLotsToNumber(y.ushrn(64)))||0,A=(null==e?void 0:e.baseSizeLotsToNumber(O))||0;l||0===x||(l=x);var k=x*A;if(d=x,k>=m){c+=m/x,m=0;break}c+=A,m-=k}}catch(e){f.e(e)}finally{f.f()}var v=(d-l)/l*100;return{side:"buy",maxInAllow:t-m,amountOut:c*=.993,amountOutWithSlippage:c*(100-r)/100,worstPrice:d=d*(100+r)/100,priceImpact:v}}(e,n,d,l):function(e,n,t,r){var o,c=0,l=null,d=0,m=t,f=S(n.items(!0));try{for(f.s();!(o=f.n()).done;){var w=o.value,y=w.key,O=w.quantity,x=e.priceLotsToNumber(y.ushrn(64))||0,A=(null==e?void 0:e.baseSizeLotsToNumber(O))||0;if(l||0===x||(l=x),d=x,m<=A){c+=m*x,m=0;break}c+=x*A,m-=A}}catch(e){f.e(e)}finally{f.f()}var k=(l-d)/l*100;return{side:"sell",maxInAllow:t-m,amountOut:c*=.993,amountOutWithSlippage:c*(100-r)/100,worstPrice:d=d*(100-r)/100,priceImpact:k}}(e,t,d,l)}function k(e,n,t,r,o){var c=e.coin,l=e.pc,d=e.fees,m=d.swapFeeNumerator,f=d.swapFeeDenominator;if(n===c.mintAddress&&t===l.mintAddress){var y=new w.a(r,c.decimals,!1),O=c.balance.wei.plus(y.wei),S=l.balance.wei.multipliedBy(y.wei).dividedBy(O),x=S.dividedBy(f).multipliedBy(f-m),A=x.dividedBy(1+o/100),k=l.balance.wei.minus(S),v=new w.a(parseFloat(new w.a(l.balance.wei,l.decimals).fixed())/parseFloat(new w.a(c.balance.wei,c.decimals).fixed()),l.decimals,!1),h=new w.a(parseFloat(new w.a(k,l.decimals).fixed())/parseFloat(new w.a(O,c.decimals).fixed()),l.decimals,!1),j=(parseFloat(v.fixed())-parseFloat(h.fixed()))/parseFloat(v.fixed())*100;return{amountIn:y,amountOut:new w.a(x,l.decimals),amountOutWithSlippage:new w.a(A,l.decimals),priceImpact:j}}var W=new w.a(r,l.decimals,!1),T=l.balance.wei.plus(W.wei),P=c.balance.wei.multipliedBy(W.wei).dividedBy(T),F=P.dividedBy(f).multipliedBy(f-m),K=F.dividedBy(1+o/100),I=c.balance.wei.minus(P),L=new w.a(parseFloat(new w.a(l.balance.wei,l.decimals).fixed())/parseFloat(new w.a(c.balance.wei,c.decimals).fixed()),l.decimals,!1),R=new w.a(parseFloat(new w.a(T,l.decimals).fixed())/parseFloat(new w.a(I,c.decimals).fixed()),l.decimals,!1),B=(parseFloat(R.fixed())-parseFloat(L.fixed()))/parseFloat(L.fixed())*100;return{amountIn:W,amountOut:new w.a(F,c.decimals),amountOutWithSlippage:new w.a(K,c.decimals),priceImpact:B}}function v(e,n,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function e(n,t,r){var o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new c.Transaction,l=[],d=t.publicKey,e.next=5,Object(f.g)(n,"",d,r,null,o,l);case 5:return e.next=7,Object(f.n)(n,t,o,l);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,n,t,r,o,c,l,d){return W.apply(this,arguments)}function W(){return(W=Object(o.a)(regeneratorRuntime.mark((function e(n,t,r,o,l,d,y,O){var S,x,A,k,v,h,j,W,T,address,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S=new c.Transaction,x=[],A=r.publicKey,k=Object(m.d)(o),v=new w.a(O,null==k?void 0:k.decimals,!1),e.next=7,Object(f.g)(t,d,A,o,null,S,x);case 7:return h=e.sent,e.next=10,Object(f.g)(t,y,A,l,null,S,x);case 10:return j=e.sent,e.next=13,n.post("https://swap.sollet.io/api/swap_to",{address:j.toString(),blockchain:"sol",coin:l,size:1,wusdtToUsdt:!0});case 13:if(W=e.sent,T=W.result,address=T.address,P=T.maxSize,address){e.next=17;break}throw new Error("Unwrap not available now");case 17:if(!(parseFloat(O)>P)){e.next=19;break}throw new Error("Max allow ".concat(P));case 19:return S.add(L(h,new c.PublicKey(address),A,v.toWei().toNumber())),S.add(R(j.toString())),e.next=23,Object(f.n)(t,r,S,x);case 23:return e.abrupt("return",e.sent);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,n,t,r,o,c,l,d,m){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(regeneratorRuntime.mark((function e(n,t,r,o,l,d,y,S,x){var A,k,v,h,j,W,T,P,F,K,L,R,B;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A=new c.Transaction,k=[],v=t.publicKey,h=Object(m.d)(o),j=Object(m.d)(l),h&&j){e.next=7;break}throw new Error("Miss token info");case 7:if(W=new w.a(S,h.decimals,!1),T=new w.a(x,j.decimals,!1),F=l,(P=o)===m.b.mintAddress&&(P=m.c.WSOL.mintAddress),F===m.b.mintAddress&&(F=m.c.WSOL.mintAddress),K=null,L=null,o!==m.b.mintAddress){e.next=19;break}return e.next=18,Object(f.g)(n,K,v,m.c.WSOL.mintAddress,W.wei.toNumber()+1e7,A,k);case 18:K=e.sent;case 19:if(l!==m.b.mintAddress){e.next=23;break}return e.next=22,Object(f.g)(n,L,v,m.c.WSOL.mintAddress,1e7,A,k);case 22:L=e.sent;case 23:return e.next=25,Object(f.g)(n,d,v,P,null,A,k);case 25:return R=e.sent,e.next=28,Object(f.g)(n,y,v,F,null,A,k);case 28:return B=e.sent,A.add(I(new c.PublicKey(r.programId),new c.PublicKey(r.ammId),new c.PublicKey(r.ammAuthority),new c.PublicKey(r.ammOpenOrders),new c.PublicKey(r.ammTargetOrders),new c.PublicKey(r.poolCoinTokenAccount),new c.PublicKey(r.poolPcTokenAccount),new c.PublicKey(r.serumProgramId),new c.PublicKey(r.serumMarket),new c.PublicKey(r.serumBids),new c.PublicKey(r.serumAsks),new c.PublicKey(r.serumEventQueue),new c.PublicKey(r.serumCoinVaultAccount),new c.PublicKey(r.serumPcVaultAccount),new c.PublicKey(r.serumVaultSigner),null!=K?K:R,null!=L?L:B,v,Math.floor(W.toWei().toNumber()),Math.floor(T.toWei().toNumber()))),K&&A.add(Object(O.closeAccount)({source:K,destination:v,owner:v})),L&&A.add(Object(O.closeAccount)({source:L,destination:v,owner:v})),e.next=34,Object(f.n)(n,t,A,k);case 34:return e.abrupt("return",e.sent);case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,n,t,r,o,c,l,d,m,f,w){return K.apply(this,arguments)}function K(){return(K=Object(o.a)(regeneratorRuntime.mark((function e(n,t,o,l,w,S,x,k,v,h,j){var W,T,P,F,K,I,L,R,B,M,N,z,E,_,U,V,C,D;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W=A(o,l,w,S,x,h,j),T=new c.Transaction,P=[],F=t.publicKey,e.next=6,o.findOpenOrdersAccountsForOwner(n,F,0);case 6:return K=e.sent,e.next=9,Object(f.e)(n,0===K.length?null:K[0].address.toBase58(),F,new c.PublicKey(y.l),null,d._OPEN_ORDERS_LAYOUT_V2,T,P);case 9:if(I=e.sent,L=null,S!==m.b.mintAddress){e.next=17;break}return"buy"===W.side?(R=Math.round(W.worstPrice*W.amountOut*1.01*c.LAMPORTS_PER_SOL),K.length>0&&(R-=K[0].quoteTokenFree.toNumber())):(R=Math.round(W.maxInAllow*c.LAMPORTS_PER_SOL),K.length>0&&(R-=K[0].baseTokenFree.toNumber())),R=Math.max(R,0)+1e7,e.next=16,Object(f.g)(n,L,F,m.c.WSOL.mintAddress,R,T,P);case 16:L=e.sent;case 17:return T.add(o.makePlaceOrderInstruction(n,{owner:F,payer:null!=L?L:new c.PublicKey(k),side:W.side,price:W.worstPrice,size:"buy"===W.side?parseFloat(W.amountOut.toFixed(6)):parseFloat(W.maxInAllow.toFixed(6)),orderType:"ioc",openOrdersAddressKey:I})),L&&T.add(Object(O.closeAccount)({source:L,destination:F,owner:F})),M=x,(B=S)===m.b.mintAddress&&(B=m.c.WSOL.mintAddress),M===m.b.mintAddress&&(M=m.c.WSOL.mintAddress),e.next=25,Object(f.g)(n,k,F,B,null,T,P);case 25:return N=e.sent,e.next=28,Object(f.g)(n,v,F,M,null,T,P);case 28:return z=e.sent,E=[N,z],o.baseMintAddress.toBase58()===M&&o.quoteMintAddress.toBase58()===B&&E.reverse(),_=E[0],U=E[1],V=null,o.supportsReferralFees&&(null==(C=Object(m.d)(o.quoteMintAddress.toBase58()))?void 0:C.referrer)&&(V=new c.PublicKey(null==C?void 0:C.referrer)),e.next=37,o.makeSettleFundsTransaction(n,new d.OpenOrders(I,{owner:F},new c.PublicKey(y.l)),_,U,V);case 37:return D=e.sent,e.next=40,Object(f.n)(n,t,Object(f.m)([T,D.transaction]),[].concat(P,Object(r.a)(D.signers)));case 40:return e.abrupt("return",e.sent);case 41:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(n,t,r,o,d,m,f,w,O,S,x,A,k,v,h,j,W,T,P,F){var K=Object(l.struct)([Object(l.u8)("instruction"),Object(l.nu64)("amountIn"),Object(l.nu64)("minAmountOut")]),I=[{pubkey:y.q,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:o,isSigner:!1,isWritable:!0},{pubkey:d,isSigner:!1,isWritable:!0},{pubkey:m,isSigner:!1,isWritable:!0},{pubkey:f,isSigner:!1,isWritable:!0},{pubkey:w,isSigner:!1,isWritable:!0},{pubkey:O,isSigner:!1,isWritable:!0},{pubkey:S,isSigner:!1,isWritable:!0},{pubkey:x,isSigner:!1,isWritable:!0},{pubkey:A,isSigner:!1,isWritable:!0},{pubkey:k,isSigner:!1,isWritable:!0},{pubkey:v,isSigner:!1,isWritable:!0},{pubkey:h,isSigner:!1,isWritable:!0},{pubkey:j,isSigner:!1,isWritable:!0},{pubkey:W,isSigner:!1,isWritable:!0},{pubkey:T,isSigner:!0,isWritable:!0}],data=e.alloc(K.span);return K.encode({instruction:9,amountIn:P,minAmountOut:F},data),new c.TransactionInstruction({keys:I,programId:n,data:data})}function L(source,n,t,r){var o=Object(l.struct)([Object(l.u8)("instruction"),Object(l.nu64)("amount")]),d=[{pubkey:source,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!0,isWritable:!1}],data=e.alloc(o.span);return o.encode({instruction:3,amount:r},data),new c.TransactionInstruction({keys:d,programId:y.q,data:data})}function R(n){return new c.TransactionInstruction({keys:[],data:e.from(n,"utf-8"),programId:y.i})}function B(e,n,t){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(regeneratorRuntime.mark((function e(n,t,r){var o,c,l,d,f,w,y,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(l=t.publicKey){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,null==r?void 0:r.findOpenOrdersAccountsForOwner(n,l,1e3);case 7:if(null==(d=e.sent)?void 0:d.length){e.next=10;break}return e.abrupt("return");case 10:return f=r.baseSplSizeToNumber(d[0].baseTokenTotal),w=r.quoteSplSizeToNumber(d[0].quoteTokenTotal),y=r.baseSplSizeToNumber(d[0].baseTokenFree),O=r.quoteSplSizeToNumber(d[0].quoteTokenFree),e.abrupt("return",{baseSymbol:null===(o=Object(m.d)(r.baseMintAddress.toString()))||void 0===o?void 0:o.symbol,quoteSymbol:null===(c=Object(m.d)(r.quoteMintAddress.toString()))||void 0===c?void 0:c.symbol,baseTotalAmount:f,quoteTotalAmount:w,baseUnsettledAmount:y,quoteUnsettledAmount:O,openOrders:d[0]});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,n,t,r,o,c,l,d){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(regeneratorRuntime.mark((function e(n,t,o,l,d,w,y,S){var x,A,k,v,h,j,W,T,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x=new c.Transaction,A=[],k=l.publicKey,d!==m.c.WSOL.mintAddress){e.next=7;break}return e.next=6,Object(f.g)(n,v,k,m.c.WSOL.mintAddress,1e7,x,A);case 6:v=e.sent;case 7:if(w!==m.c.WSOL.mintAddress){e.next=11;break}return e.next=10,Object(f.g)(n,h,k,m.c.WSOL.mintAddress,1e7,x,A);case 10:h=e.sent;case 11:return j=Object(m.d)(w),e.next=14,t.makeSettleFundsTransaction(n,o,null!=v?v:new c.PublicKey(y),null!=h?h:new c.PublicKey(S),j&&j.referrer?new c.PublicKey(j.referrer):null);case 14:return W=e.sent,T=W.transaction,P=W.signers,v&&T.add(Object(O.closeAccount)({source:v,destination:k,owner:k})),h&&T.add(Object(O.closeAccount)({source:h,destination:k,owner:k})),e.next=21,Object(f.n)(n,l,Object(f.m)([x,T]),[].concat(A,Object(r.a)(P)));case 21:return e.abrupt("return",e.sent);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,t(29).Buffer)}}]);