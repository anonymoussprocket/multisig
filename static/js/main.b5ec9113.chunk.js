(this.webpackJsonpmultisig=this.webpackJsonpmultisig||[]).push([[0],{148:function(e,t){},234:function(e,t,n){},235:function(e,t,n){},241:function(e,t){},243:function(e,t){},254:function(e,t){},256:function(e,t){},283:function(e,t){},285:function(e,t){},286:function(e,t){},291:function(e,t){},293:function(e,t){},312:function(e,t){},324:function(e,t){},327:function(e,t){},386:function(e){e.exports=JSON.parse('{"rpc":"https://mainnet.tezos.marigold.dev/","network":"mainnet","tokens":[{"tokenName":"USDtz","tokenAddr":"KT1LN4LPSqTMS7Sd2CJw4bbDGRkMv2t68Fy9","multisigAddr":"KT1DTxmuuEARtynHP2r6EX14PieaPmTu1vxF"},{"tokenName":"ETHtz","tokenAddr":"KT19at7rQUvyjxnZ2fBv7D9zc8rkyG7gAoU8","multisigAddr":"KT1KVx6hbPZERpszy9MsiK18XjrJewUJYYfW"},{"tokenName":"BTCtz","tokenType":"FA2","tokenIndex":0,"tokenAddr":"KT1T87QbpXEVgkwsNPzz8iRoah3SS3D1MDmh","multisigAddr":"KT18mL6WEyiJbevboKa8kEVRP2Rgvb8gxaJD"}]}')},387:function(e){e.exports=JSON.parse('{"rpc":"https://rpc.ghostnet.teztnets.xyz","network":"ghostnet","tokens":[{"tokenName":"USDtz","tokenAddr":"KT1HyFmqYFYiaKoCpYHo3ShZmhNGirZ5jv8i","multisigAddr":"KT1TzHGQoz3s4Jv2RPmnDajPphckaYup4pDn"},{"tokenName":"ETHtz","tokenAddr":"KT19at7rQUvyjxnZ2fBv7D9zc8rkyG7gAoU8","multisigAddr":"KT1TzHGQoz3s4Jv2RPmnDajPphckaYup4pDm"},{"tokenName":"BTCtz","tokenType":"FA2","tokenIndex":0,"tokenAddr":"KT1EdkbtJck2XKXxsQfW14MFDscfUJzUkQ3L","multisigAddr":"KT1L2o3A4PkdMKKZ1hkmDLXTD7HGU2AxZGPC"}]}')},397:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(25),s=n.n(i),c=(n(234),n(235),n(224)),o=n(29),u=n(0),l=n.n(u),p=n(32),d=n(23),m=n(428),b=n(429),g=n(18),v=n(12),j=n(37),h=n(93)("./config.".concat(process.env.REACT_APP_ENV||"mainnet",".json")),f=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new g.i({name:"Multisig"}),n="mainnet"===h.network?"mainnet":"ghostnet",e.next=4,t.requestPermissions({network:{type:n}});case 4:return e.next=6,t.getActiveAccount();case 6:return r=e.sent,console.log("connected to ".concat(n," at ").concat(h.rpc," as ").concat(r.address)),e.abrupt("return",{client:t,account:r.address});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.TezosNodeReader.getContractStorage(h.rpc,t);case 3:return n=e.sent,e.abrupt("return",Number(Object(j.JSONPath)({path:"$.args[0].args[0].int",json:n})[0])+1);case 7:return e.prev=7,e.t0=e.catch(0),console.error("could not read operation index for ".concat(t)),e.abrupt("return",0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e,t,n,r,a){var i=function(e,t,n,r,a){var i=v.TezosMessageUtils.writeBufferWithHint(e,"chain_id").toString("hex");return'{ "prim": "Pair", "args": [{ "bytes": "'.concat(i,'" }, { "prim": "Pair", "args": [{ "int": "').concat(t,'" }, [{ "prim": "DROP" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PUSH", "args": [{ "prim": "address" }, { "bytes": "').concat(v.TezosMessageUtils.writeAddress(n),'" }] }, { "prim": "CONTRACT", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }], "annots": ["%mint"] }, { "prim": "IF_NONE", "args": [ [{ "prim": "PUSH", "args": [{ "prim": "int" }, { "int": "10" }] }, { "prim": "FAILWITH" }], [] ] }, { "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "0" }] }, { "prim": "PUSH", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }, { "prim": "Pair", "args": [{ "bytes": "').concat(v.TezosMessageUtils.writeAddress(r),'" }, { "int": "').concat(a,'" }] }] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" }] ] }] }')}(e,t,n,r,a);return{operation:i,bytes:v.TezosMessageUtils.writePackedData(i,"")}},O=function(e,t,n,r,a){var i=function(e,t,n,r,a){var i=v.TezosMessageUtils.writeBufferWithHint(e,"chain_id").toString("hex");return'{ "prim": "Pair", "args": [{ "bytes": "'.concat(i,'" }, { "prim": "Pair", "args": [{ "int": "').concat(t,'" }, [{ "prim": "DROP" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PUSH", "args": [{ "prim": "address" }, { "bytes": "').concat(v.TezosMessageUtils.writeAddress(n),'" }] }, { "prim": "CONTRACT", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }], "annots": ["%burn"] }, { "prim": "IF_NONE", "args": [ [{ "prim": "PUSH", "args": [{ "prim": "int" }, { "int": "10" }] }, { "prim": "FAILWITH" }], [] ] }, { "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "0" }] }, { "prim": "PUSH", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }, { "prim": "Pair", "args": [{ "bytes": "').concat(v.TezosMessageUtils.writeAddress(r),'" }, { "int": "').concat(a,'" }] }] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" }] ] }] }')}(e,t,n,r,a);return{operation:i,bytes:v.TezosMessageUtils.writePackedData(i,"")}},k=function(e,t,n,r){var a=function(e,t,n,r){var a=v.TezosMessageUtils.writeBufferWithHint(e,"chain_id").toString("hex");return'{ "prim": "Pair", "args": [{ "bytes": "'.concat(a,'" }, { "prim": "Pair", "args": [{ "int": "').concat(t,'" }, [{ "prim": "DROP" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PUSH", "args": [{ "prim": "address" }, { "bytes": "').concat(v.TezosMessageUtils.writeAddress(n),'" }] }, { "prim": "CONTRACT", "args": [{ "prim": "address" }], "annots": ["%setAdministrator"] }, { "prim": "IF_NONE", "args": [ [{ "prim": "PUSH", "args": [{ "prim": "int" }, { "int": "10" }] }, { "prim": "FAILWITH" }], [] ] }, { "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "0" }] }, { "prim": "PUSH", "args": [{ "prim": "address" }, { "bytes": "').concat(v.TezosMessageUtils.writeAddress(r),'" }] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" }] ] }] }')}(e,t,n,r);return{operation:a,bytes:v.TezosMessageUtils.writePackedData(a,"")}},y=function(e,t,n,r){var a=function(e,t,n,r){var a=v.TezosMessageUtils.writeBufferWithHint(e,"chain_id").toString("hex");return'{ "prim": "Pair", "args": [ { "bytes": "'.concat(a,'" }, { "prim": "Pair", "args": [ { "int": "').concat(t,'" }, { "prim": "Pair", "args": [ { "int": "').concat(n,'" }, [ ').concat(r.map((function(e){return'{ "bytes": "'.concat(v.TezosMessageUtils.writePublicKey(e),'" }')})).join(", ")," ] ] } ] } ] }")}(e,t,n,r);return{operation:a,bytes:v.TezosMessageUtils.writePackedData(a,"")}},N=function(e,t,n,r,a,i){var s=function(e,t,n,r,a,i){var s=v.TezosMessageUtils.writeBufferWithHint(e,"chain_id").toString("hex"),c='{ "prim": "Pair", "args": [ { "bytes": "'.concat(v.TezosMessageUtils.writeAddress(a),'" }, { "prim": "Pair", "args": [ { "int": "').concat(r,'" }, { "int": "').concat(i,'" } ] } ] }'),o='{ "prim": "pair", "args": [ { "prim": "address" }, { "prim": "pair", "args": [ { "prim": "nat" }, { "prim": "nat" } ] } ] }';return'{ "prim": "Pair", "args": [ { "bytes": "'.concat(s,'" }, { "prim": "Pair", "args": [ { "int": "').concat(t,'" }, [ { "prim": "DROP" }, { "prim": "NIL", "args": [ { "prim": "operation" } ] }, { "prim": "PUSH", "args": [ { "prim": "address" }, { "bytes": "').concat(v.TezosMessageUtils.writeAddress(n),'" } ] }, { "prim": "CONTRACT", "args": [ ').concat(o,' ], "annots": [ "%mint" ] }, { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "10" } ] }, { "prim": "FAILWITH" } ], [] ] }, { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] }, { "prim": "PUSH", "args": [ ').concat(o,", ").concat(c,' ] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" } ] ] } ]}')}(e,t,n,r,a,i);return{operation:s,bytes:v.TezosMessageUtils.writePackedData(s,"")}},S=function(e,t,n,r,a,i){var s=function(e,t,n,r,a,i){var s=v.TezosMessageUtils.writeBufferWithHint(e,"chain_id").toString("hex"),c='{ "prim": "Pair", "args": [ { "bytes": "'.concat(v.TezosMessageUtils.writeAddress(a),'" }, { "prim": "Pair", "args": [ { "int": "').concat(r,'" }, { "int": "').concat(i,'" } ] } ] }'),o='{ "prim": "pair", "args": [ { "prim": "address" }, { "prim": "pair", "args": [ { "prim": "nat" }, { "prim": "nat" } ] } ] }';return'{ "prim": "Pair", "args": [ { "bytes": "'.concat(s,'" }, { "prim": "Pair", "args": [ { "int": "').concat(t,'" }, [ { "prim": "DROP" }, { "prim": "NIL", "args": [ { "prim": "operation" } ] }, { "prim": "PUSH", "args": [ { "prim": "address" }, { "bytes": "').concat(v.TezosMessageUtils.writeAddress(n),'" } ] }, { "prim": "CONTRACT", "args": [ ').concat(o,' ], "annots": [ "%burn" ] }, { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "10" } ] }, { "prim": "FAILWITH" } ], [] ] }, { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] }, { "prim": "PUSH", "args": [ ').concat(o,", ").concat(c,' ] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "CONS" } ] ] } ]}')}(e,t,n,r,a,i);return{operation:s,bytes:v.TezosMessageUtils.writePackedData(s,"")}},T=function(){var e=Object(p.a)(l.a.mark((function e(t,n,r,a){var i,s,c,o,u,p=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.client,s=t.account,c=p.length>4&&void 0!==p[4]?p[4]:"submit",o='{ "prim": "Pair", "args": [ [ '.concat(r.map((function(e){return'{ "prim": "Elt", "args": [{ "string": "'.concat(e.address,'" }, { "string": "').concat(e.signature,'" }] }')})).join(", ")," ], ").concat(a," ] }"),e.next=5,z({client:i,account:s},[{to:n,amtInMuTez:0,entrypoint:c,parameters:o}]);case 5:if("applied"===(u=e.sent).status){e.next=8;break}throw new Error("TEZOS TX FAILED");case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(l.a.mark((function e(t,n,r){var a,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.client,i=t.account,e.next=3,z({client:a,account:i},[{to:n,amtInMuTez:0,entrypoint:"execute",parameters:'{"int": "'.concat(r,'"}')}]);case 3:if("applied"===(s=e.sent).status){e.next=6;break}throw new Error("TEZOS TX FAILED");case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.TezosNodeReader.getChainId(h.rpc));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(p.a)(l.a.mark((function e(t,n){var r,a,i,s,c,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.client,a=t.account,o.length>2&&void 0!==o[2]?o[2]:500,o.length>3&&void 0!==o[3]?o[3]:50,e.prev=3,i=[],n.forEach((function(e){i.push({kind:g.D.TRANSACTION,amount:e.amtInMuTez,destination:e.to,source:a,parameters:{entrypoint:e.entrypoint,value:JSON.parse(e.parameters)}})})),s=0,e.prev=7,e.next=10,v.TezosNodeReader.getBlockHead(h.rpc);case 10:s=e.sent.header.level,e.next=15;break;case 13:e.prev=13,e.t0=e.catch(7);case 15:return e.next=17,r.requestOperation({operationDetails:i});case 17:if(c=e.sent,!(s>0)){e.next=26;break}return e.prev=19,e.next=22,v.TezosNodeReader.awaitOperationConfirmation(h.rpc,s,c.transactionHash,7);case 22:e.next=26;break;case 24:e.prev=24,e.t1=e.catch(19);case 26:return e.abrupt("return",c.transactionHash);case 29:throw e.prev=29,e.t2=e.catch(3),console.error(e.t2),e.t2;case 33:case"end":return e.stop()}}),e,null,[[3,29],[7,13],[19,24]])})));return function(t,n){return e.apply(this,arguments)}}(),I=n(423),F=Object(I.a)((function(e){return{menu:{display:"flex",margin:"0 auto"},menuItem:{color:"black",display:"block",fontSize:"2vw",margin:"1vw 2vw 2vw 2vw","&:hover":{textDecoration:"none"}},title:{fontSize:"5vw",margin:"2.5vw 1vw 1vw 1vw"},header:{display:"flex",justifyContent:"center"},wallet:{border:"0.2vw solid black",borderRadius:"0.3vw",width:"50%",margin:"2.5vw auto",padding:"1vw",background:"black",color:"white",fontWeight:"bold",textTransform:"none",fontSize:"1.1vw","&:hover":{cursor:"pointer",background:"white",color:"black"}},box:{width:"30%"},container:{width:"70%",margin:"0 auto",padding:"3vw"},select:{width:"fit-content",margin:"0.7vw"},label:{display:"inline-block",padding:"0.7vw",verticalAlign:"top"},input:{margin:"0.7vw"},display:{margin:"4vw"}}})),U=n(3),E=n(93)("./config.".concat(process.env.REACT_APP_ENV||"mainnet",".json")),C=function(){var e=F(),t=Object(r.useState)("mint"),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)("operation data"),c=Object(d.a)(s,2),o=c[0],u=c[1],v=Object(r.useState)("your signature"),j=Object(d.a)(v,2),h=j[0],T=j[1],A=Object(r.useState)(E.tokens[0].tokenAddr),z=Object(d.a)(A,2),I=z[0],C=z[1],D=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,i,s,c,o,p,m,b,v,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r=E.tokens.filter((function(e){return e.tokenAddr===I}))[0],a=r.multisigAddr,i=null!==(n=r.tokenType)&&void 0!==n?n:"FA1.2",console.log("bbb 1"),e.next=8,Promise.all([P(),x(a),f()]);case 8:return s=e.sent,c=Object(d.a)(s,3),o=c[0],p=c[1],m=c[2],b=m.client,m.account,console.log("bbb 2"),v="FA1.2"===i?w(o,p,I,t.target.address.value,t.target.amount.value):N(o,p,I,r.tokenIndex,t.target.address.value,t.target.amount.value),console.log("bbb 3"),e.next=20,b.requestSignPayload({signingType:g.B.MICHELINE,payload:v.bytes});case 20:j=e.sent,T(j.signature),u(v.operation),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(1),console.log("Failed to create operation",e.t0),alert("Failed to create operation");case 29:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}(),H=function(t){return Object(U.jsxs)("form",{onSubmit:t,children:[Object(U.jsx)("label",{className:e.label,children:"Address:"}),Object(U.jsx)("input",{className:e.input,type:"text",name:"address",placeholder:"Address",required:!0}),Object(U.jsx)("label",{className:e.label,children:"Amount:"}),Object(U.jsx)("input",{className:e.input,type:"number",name:"amount",placeholder:"Amount",required:!0}),Object(U.jsx)("input",{className:e.input,type:"submit",value:"Sign"})]})},R=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,i,s,c,o,p,m,b,v,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r=E.tokens.filter((function(e){return e.tokenAddr===I}))[0],a=r.multisigAddr,i=null!==(n=r.tokenType)&&void 0!==n?n:"FA1.2",e.next=7,Promise.all([P(),x(a),f()]);case 7:return s=e.sent,c=Object(d.a)(s,3),o=c[0],p=c[1],m=c[2],b=m.client,m.account,v="FA1.2"===i?O(o,p,I,t.target.address.value,t.target.amount.value):S(o,p,I,r.tokenIndex,t.target.address.value,t.target.amount.value),e.next=17,b.requestSignPayload({signingType:g.B.MICHELINE,payload:v.bytes});case 17:j=e.sent,T(j.signature),u(v.operation),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),console.log("Failed to create operation",e.t0),alert("Failed to create operation");case 26:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,i,s,c,o,p,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=E.tokens.filter((function(e){return e.tokenAddr===I}))[0].multisigAddr,e.next=5,Promise.all([P(),x(n),f()]);case 5:return r=e.sent,a=Object(d.a)(r,3),i=a[0],s=a[1],c=a[2],o=c.client,c.account,p=y(i,s,t.target.threshold.value,t.target.keys.value.split(",").map((function(e){return e.trim()}))),e.next=15,o.requestSignPayload({signingType:g.B.MICHELINE,payload:p.bytes});case 15:m=e.sent,T(m.signature),u(p.operation),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(1),console.log("Failed to create operation",e.t0),alert("Failed to create operation");case 24:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,i,s,c,o,p,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=E.tokens.filter((function(e){return e.tokenAddr===I}))[0].multisigAddr,e.next=5,Promise.all([P(),x(n),f()]);case 5:return r=e.sent,a=Object(d.a)(r,3),i=a[0],s=a[1],c=a[2],o=c.client,c.account,p=k(i,s,t.target.admin.value),e.next=15,o.requestSignPayload({signingType:g.B.MICHELINE,payload:p.bytes});case 15:m=e.sent,T(m.signature),u(p.operation),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(1),console.log("Failed to create operation",e.t0),alert("Failed to create operation");case 24:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{className:e.container,children:[Object(U.jsx)("label",{htmlFor:"token",className:e.label,children:"Token"}),Object(U.jsx)(m.a,{className:e.select,labelId:"token",id:"token",value:I,label:"token",onChange:function(e){C(e.target.value)},children:E.tokens.map((function(e){return Object(U.jsx)(b.a,{value:e.tokenAddr,children:e.tokenName},"menuItem".concat(e.tokenName))}))}),Object(U.jsx)("label",{htmlFor:"operations",className:e.label,children:"Action"}),Object(U.jsxs)(m.a,{className:e.select,labelId:"operations",id:"operations",value:a,label:"Operation",onChange:function(e){i(e.target.value)},children:[Object(U.jsx)(b.a,{value:"mint",children:"Mint"}),Object(U.jsx)(b.a,{value:"burn",children:"Burn"}),Object(U.jsx)(b.a,{value:"setadmin",children:"Set Admin"}),Object(U.jsx)(b.a,{value:"rotatekeys",children:"Rotate Keys"})]}),function(){switch(a){default:return H(D);case"burn":return H(R);case"setadmin":return Object(U.jsxs)("form",{onSubmit:_,children:[Object(U.jsx)("label",{className:e.label,children:"Admin:"}),Object(U.jsx)("input",{className:e.input,type:"text",name:"admin",placeholder:"New Admin Address",required:!0}),Object(U.jsx)("input",{className:e.input,type:"submit",value:"Sign"})]});case"rotatekeys":return t=M,Object(U.jsxs)("form",{onSubmit:t,children:[Object(U.jsx)("label",{htmlFor:"threshold",className:e.label,children:"Threshold"}),Object(U.jsx)("input",{className:e.input,type:"number",name:"threshold",placeholder:"2",required:!0}),Object(U.jsx)("label",{htmlFor:"keys",className:e.label,children:"Keys"}),Object(U.jsx)("input",{className:e.input,type:"text",name:"keys",placeholder:"edpk..., edpk..., edpk...",required:!0}),Object(U.jsx)("input",{className:e.input,type:"submit",value:"Sign"})]})}var t}(),Object(U.jsxs)("div",{className:e.display,children:[Object(U.jsx)("label",{htmlFor:"operation",className:e.label,children:"Operation"}),Object(U.jsx)("textarea",{name:"operation",className:e.input,readOnly:!0,style:{width:"600px"},value:o}),Object(U.jsx)("br",{}),Object(U.jsx)("label",{htmlFor:"signature",className:e.label,children:"Signature"}),Object(U.jsx)("input",{name:"signature",className:e.input,type:"text",value:h,readOnly:!0,style:{width:"600px"}})]})]})},D=Object(I.a)((function(e){return{menu:{display:"flex",margin:"0 auto"},menuItem:{color:"black",display:"block",fontSize:"2vw",margin:"1vw 2vw 2vw 2vw","&:hover":{textDecoration:"none"}},title:{fontSize:"5vw",margin:"2.5vw 1vw 1vw 1vw"},header:{display:"flex",justifyContent:"center"},wallet:{border:"0.2vw solid black",borderRadius:"0.3vw",width:"50%",margin:"2.5vw auto",padding:"1vw",background:"black",color:"white",fontWeight:"bold",textTransform:"none",fontSize:"1.1vw","&:hover":{cursor:"pointer",background:"white",color:"black"}},box:{width:"30%"},container:{width:"70%",margin:"0 auto",padding:"3vw"},select:{width:"fit-content",margin:"0.7vw"},label:{padding:"0.7vw"},input:{margin:"0.7vw"},display:{margin:"4vw"}}})),H=n(93)("./config.".concat(process.env.REACT_APP_ENV||"mainnet",".json")),R=function(){var e=D(),t=Object(r.useState)(H.tokens[0].multisigAddr),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(0),c=Object(d.a)(s,2),o=c[0],u=c[1];Object(r.useEffect)((function(){var e=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.prev=1,e.next=4,x(a);case 4:t=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:u(t-1);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[a]);var g=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f();case 4:return n=e.sent,e.next=7,A(n,a,t.target.id.value);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Failed to submit operation",e.t0),alert("Failed to submit operation");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{className:e.container,children:Object(U.jsxs)("form",{onSubmit:g,children:[Object(U.jsx)("label",{htmlFor:"token",className:e.label,children:"Token"}),Object(U.jsx)(m.a,{className:e.select,labelId:"token",id:"token",value:a,label:"token",onChange:function(e){i(e.target.value)},children:H.tokens.map((function(e){return Object(U.jsx)(b.a,{value:e.multisigAddr,children:e.tokenName},"menuItem".concat(e.tokenName))}))}),Object(U.jsx)("label",{htmlFor:"id",className:e.label,children:"Operation Index"}),Object(U.jsx)("input",{className:e.input,type:"number",name:"id",value:o,onChange:function(e){return u(e.target.value)},required:!0}),Object(U.jsx)("input",{className:e.input,type:"submit",value:"Execute"})]})})},M=Object(I.a)((function(e){return{menu:{display:"flex",margin:"0 auto"},menuItem:{color:"black",display:"block",fontSize:"2vw",margin:"1vw 2vw 2vw 2vw","&:hover":{textDecoration:"none"}},title:{fontSize:"5vw",margin:"2.5vw 1vw 1vw 1vw"},header:{display:"flex",justifyContent:"center"},wallet:{border:"0.2vw solid black",borderRadius:"0.3vw",width:"50%",margin:"2.5vw auto",padding:"1vw",background:"black",color:"white",fontWeight:"bold",textTransform:"none",fontSize:"1.1vw","&:hover":{cursor:"pointer",background:"white",color:"black"}},box:{width:"30%"},container:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}})),_=function(){var e=M();return Object(U.jsx)("div",{className:e.header,children:Object(U.jsxs)("div",{className:e.container,children:[Object(U.jsx)("h1",{className:e.title,children:"MultiSig"}),Object(U.jsxs)("div",{className:e.menu,children:[Object(U.jsx)("a",{href:"/create",className:e.menuItem,children:"Create"}),Object(U.jsx)("a",{href:"/Submit",className:e.menuItem,children:"Submit"}),Object(U.jsx)("a",{href:"/execute",className:e.menuItem,children:"Execute"}),Object(U.jsx)("a",{href:"/rotate",className:e.menuItem,children:"Rotate"})]})]})})},K=Object(I.a)((function(e){return{menu:{display:"flex",margin:"0 auto"},menuItem:{color:"black",display:"block",fontSize:"2vw",margin:"1vw 2vw 2vw 2vw","&:hover":{textDecoration:"none"}},title:{fontSize:"5vw",margin:"2.5vw 1vw 1vw 1vw"},header:{display:"flex",justifyContent:"center"},wallet:{border:"0.2vw solid black",borderRadius:"0.3vw",width:"50%",margin:"2.5vw auto",padding:"1vw",background:"black",color:"white",fontWeight:"bold",textTransform:"none",fontSize:"1.1vw","&:hover":{cursor:"pointer",background:"white",color:"black"}},box:{width:"30%"},container:{width:"70%",margin:"0 auto",padding:"3vw"},select:{width:"fit-content",margin:"0.7vw"},label:{padding:"0.7vw"},input:{margin:"0.7vw"},display:{margin:"4vw"},opID:{margin:"2vw"}}})),L=n(93)("./config.".concat(process.env.REACT_APP_ENV||"mainnet",".json")),q=function(){var e=K(),t=Object(r.useState)(1),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(0),c=Object(d.a)(s,2),o=c[0],u=c[1],g=Object(r.useState)(L.tokens[0].multisigAddr),j=Object(d.a)(g,2),h=j[0],w=j[1];Object(r.useEffect)((function(){var e=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.prev=1,e.next=4,x(h);case 4:t=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:u(t);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[h]);var O=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),e.prev=1,n=[],r=1;r<=a;r++)n.push({signature:t.target["signature".concat(r)].value,address:t.target["address".concat(r)].value});return n.sort((function(e,t){var n=BigInt("0x"+v.TezosMessageUtils.writeAddress(e.address)),r=BigInt("0x"+v.TezosMessageUtils.writeAddress(t.address));return n>r?1:n<r?-1:0})),e.next=7,f();case 7:return i=e.sent,e.next=10,x(h);case 10:return s=e.sent,e.next=13,T(i,h,n,t.target.operation.value,"submit");case 13:alert("operation submitted"),u(s),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.log("Failed to submit operation",e.t0),alert("Failed to submit operation");case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{className:e.container,children:[Object(U.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(e.target.count.value)},children:[Object(U.jsx)("label",{htmlFor:"count",className:e.label,children:"Signature Count"}),Object(U.jsx)("input",{className:e.input,type:"number",min:1,name:"count",placeholder:"Signature Count",required:!0}),Object(U.jsx)("input",{className:e.input,type:"submit",value:"Set"})]}),Object(U.jsx)("br",{}),function(){for(var t=[],n=1;n<=a;n++)t.push(Object(U.jsxs)("div",{children:[Object(U.jsxs)("label",{htmlFor:"address".concat(n),className:e.label,children:["Address ",n]}),Object(U.jsx)("input",{className:e.input,type:"text",name:"address".concat(n),placeholder:"Address",required:!0}),Object(U.jsxs)("label",{htmlFor:"signature".concat(n),className:e.label,children:["Signature ",n]}),Object(U.jsx)("input",{className:e.input,type:"text",name:"signature".concat(n),placeholder:"Signature",required:!0})]},"sigContainer".concat(n)));return Object(U.jsxs)("form",{onSubmit:O,children:[Object(U.jsx)("label",{htmlFor:"token",className:e.label,children:"Token"}),Object(U.jsx)(m.a,{className:e.select,labelId:"token",id:"token",value:h,label:"token",onChange:function(e){w(e.target.value)},children:L.tokens.map((function(e){return Object(U.jsx)(b.a,{value:e.multisigAddr,children:e.tokenName},"menuItem".concat(e.tokenName))}))}),Object(U.jsx)("label",{htmlFor:"operation",className:e.label,children:"Operation"}),Object(U.jsx)("input",{className:e.input,type:"text",name:"operation",placeholder:"Operation",required:!0}),Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),t,Object(U.jsx)("input",{className:e.input,type:"submit",value:"Submit"})]})}(),Object(U.jsxs)("div",{className:e.opID,children:["Operation Index: ",o]})]})},B=Object(I.a)((function(e){return{menu:{display:"flex",margin:"0 auto"},menuItem:{color:"black",display:"block",fontSize:"2vw",margin:"1vw 2vw 2vw 2vw","&:hover":{textDecoration:"none"}},title:{fontSize:"5vw",margin:"2.5vw 1vw 1vw 1vw"},header:{display:"flex",justifyContent:"center"},wallet:{border:"0.2vw solid black",borderRadius:"0.3vw",width:"50%",margin:"2.5vw auto",padding:"1vw",background:"black",color:"white",fontWeight:"bold",textTransform:"none",fontSize:"1.1vw","&:hover":{cursor:"pointer",background:"white",color:"black"}},box:{width:"30%"},container:{width:"70%",margin:"0 auto",padding:"3vw"},select:{width:"fit-content",margin:"0.7vw"},label:{padding:"0.7vw"},input:{margin:"0.7vw"},display:{margin:"4vw"},opID:{margin:"2vw"}}})),W=n(93)("./config.".concat(process.env.REACT_APP_ENV||"mainnet",".json")),J=function(){var e=B(),t=Object(r.useState)(1),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(W.tokens[0].multisigAddr),c=Object(d.a)(s,2),o=c[0],u=c[1],g=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),e.prev=1,n=[],r=1;r<=a;r++)n.push({signature:t.target["signature".concat(r)].value,address:t.target["address".concat(r)].value});return n.sort((function(e,t){var n=BigInt("0x"+v.TezosMessageUtils.writeAddress(e.address)),r=BigInt("0x"+v.TezosMessageUtils.writeAddress(t.address));return n>r?1:n<r?-1:0})),e.next=7,f();case 7:return i=e.sent,e.next=10,T(i,o,n,t.target.operation.value,"rotate");case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Failed to submit operation",e.t0),alert("Failed to submit operation");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{className:e.container,children:[Object(U.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(e.target.count.value)},children:[Object(U.jsx)("label",{htmlFor:"count",className:e.label,children:"Signature Count"}),Object(U.jsx)("input",{className:e.input,type:"number",min:1,name:"count",placeholder:"Signature Count",required:!0}),Object(U.jsx)("input",{className:e.input,type:"submit",value:"Set"})]}),Object(U.jsx)("br",{}),function(){for(var t=[],n=1;n<=a;n++)t.push(Object(U.jsxs)("div",{children:[Object(U.jsxs)("label",{htmlFor:"address".concat(n),className:e.label,children:["Address ",n]}),Object(U.jsx)("input",{className:e.input,type:"text",name:"address".concat(n),placeholder:"Address",required:!0}),Object(U.jsxs)("label",{htmlFor:"signature".concat(n),className:e.label,children:["Signature ",n]}),Object(U.jsx)("input",{className:e.input,type:"text",name:"signature".concat(n),placeholder:"Signature",required:!0})]},"sigContainer".concat(n)));return Object(U.jsxs)("form",{onSubmit:g,children:[Object(U.jsx)("label",{htmlFor:"token",className:e.label,children:"Token"}),Object(U.jsx)(m.a,{className:e.select,labelId:"token",id:"token",value:o,label:"token",onChange:function(e){u(e.target.value)},children:W.tokens.map((function(e){return Object(U.jsx)(b.a,{value:e.multisigAddr,children:e.tokenName},"menuItem".concat(e.tokenName))}))}),Object(U.jsx)("label",{htmlFor:"operation",className:e.label,children:"Operation"}),Object(U.jsx)("input",{className:e.input,type:"text",name:"operation",placeholder:"Operation",required:!0}),Object(U.jsx)("br",{}),Object(U.jsx)("br",{}),t,Object(U.jsx)("input",{className:e.input,type:"submit",value:"Rotate"})]})}()]})};var G=function(){return Object(U.jsx)(c.a,{basename:"/multisig",children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(_,{}),Object(U.jsxs)(o.c,{children:[Object(U.jsx)(o.a,{exact:!0,path:"/",children:Object(U.jsx)(C,{})})," ",Object(U.jsx)(o.a,{exact:!0,path:"/create",children:Object(U.jsx)(C,{})}),Object(U.jsx)(o.a,{exact:!0,path:"/submit",children:Object(U.jsx)(q,{})}),Object(U.jsx)(o.a,{exact:!0,path:"/execute",children:Object(U.jsx)(R,{})}),Object(U.jsx)(o.a,{exact:!0,path:"/rotate",children:Object(U.jsx)(J,{})})]})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,431)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(G,{})}),document.getElementById("root")),Z()},93:function(e,t,n){var r={"./config.mainnet.json":386,"./config.testnet.json":387};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=93}},[[397,1,2]]]);
//# sourceMappingURL=main.b5ec9113.chunk.js.map