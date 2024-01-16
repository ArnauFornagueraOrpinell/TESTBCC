var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function k(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function F(s){if(s.__esModule)return s;var y=s.default;if(typeof y=="function"){var c=function f(){return this instanceof f?Reflect.construct(y,arguments,this.constructor):y.apply(this,arguments)};c.prototype=y.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(s).forEach(function(f){var _=Object.getOwnPropertyDescriptor(s,f);Object.defineProperty(c,f,_.get?_:{enumerable:!0,get:function(){return s[f]}})}),c}var j={exports:{}};function D(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var E={exports:{}};const $={},U=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),M=F(U);var R;function N(){return R||(R=1,function(s,y){(function(c,f){s.exports=f()})(I,function(){var c=c||function(f,_){var l;if(typeof window<"u"&&window.crypto&&(l=window.crypto),typeof self<"u"&&self.crypto&&(l=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(l=globalThis.crypto),!l&&typeof window<"u"&&window.msCrypto&&(l=window.msCrypto),!l&&typeof I<"u"&&I.crypto&&(l=I.crypto),!l&&typeof D=="function")try{l=M}catch{}var O=function(){if(l){if(typeof l.getRandomValues=="function")try{return l.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof l.randomBytes=="function")try{return l.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},S=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),C={},b=C.lib={},m=b.Base=function(){return{extend:function(t){var e=S(this);return t&&e.mixIn(t),(!e.hasOwnProperty("init")||this.init===e.init)&&(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),v=b.WordArray=m.extend({init:function(t,e){t=this.words=t||[],e!=_?this.sigBytes=e:this.sigBytes=t.length*4},toString:function(t){return(t||g).stringify(this)},concat:function(t){var e=this.words,r=t.words,o=this.sigBytes,a=t.sigBytes;if(this.clamp(),o%4)for(var u=0;u<a;u++){var d=r[u>>>2]>>>24-u%4*8&255;e[o+u>>>2]|=d<<24-(o+u)%4*8}else for(var h=0;h<a;h+=4)e[o+h>>>2]=r[h>>>2];return this.sigBytes+=a,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=f.ceil(e/4)},clone:function(){var t=m.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(O());return new v.init(e,t)}}),x=C.enc={},g=x.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,o=[],a=0;a<r;a++){var u=e[a>>>2]>>>24-a%4*8&255;o.push((u>>>4).toString(16)),o.push((u&15).toString(16))}return o.join("")},parse:function(t){for(var e=t.length,r=[],o=0;o<e;o+=2)r[o>>>3]|=parseInt(t.substr(o,2),16)<<24-o%8*4;return new v.init(r,e/2)}},w=x.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,o=[],a=0;a<r;a++){var u=e[a>>>2]>>>24-a%4*8&255;o.push(String.fromCharCode(u))}return o.join("")},parse:function(t){for(var e=t.length,r=[],o=0;o<e;o++)r[o>>>2]|=(t.charCodeAt(o)&255)<<24-o%4*8;return new v.init(r,e)}},n=x.Utf8={stringify:function(t){try{return decodeURIComponent(escape(w.stringify(t)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(t){return w.parse(unescape(encodeURIComponent(t)))}},i=b.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new v.init,this._nDataBytes=0},_append:function(t){typeof t=="string"&&(t=n.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var e,r=this._data,o=r.words,a=r.sigBytes,u=this.blockSize,d=u*4,h=a/d;t?h=f.ceil(h):h=f.max((h|0)-this._minBufferSize,0);var H=h*u,B=f.min(H*4,a);if(H){for(var A=0;A<H;A+=u)this._doProcessBlock(o,A);e=o.splice(0,H),r.sigBytes-=B}return new v.init(e,B)},clone:function(){var t=m.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});b.Hasher=i.extend({cfg:m.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){i.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}});var p=C.algo={};return C}(Math);return c})}(E)),E.exports}(function(s,y){(function(c,f){s.exports=f(N())})(I,function(c){return function(f){var _=c,l=_.lib,O=l.WordArray,S=l.Hasher,C=_.algo,b=[],m=[];(function(){function g(p){for(var t=f.sqrt(p),e=2;e<=t;e++)if(!(p%e))return!1;return!0}function w(p){return(p-(p|0))*4294967296|0}for(var n=2,i=0;i<64;)g(n)&&(i<8&&(b[i]=w(f.pow(n,1/2))),m[i]=w(f.pow(n,1/3)),i++),n++})();var v=[],x=C.SHA256=S.extend({_doReset:function(){this._hash=new O.init(b.slice(0))},_doProcessBlock:function(g,w){for(var n=this._hash.words,i=n[0],p=n[1],t=n[2],e=n[3],r=n[4],o=n[5],a=n[6],u=n[7],d=0;d<64;d++){if(d<16)v[d]=g[w+d]|0;else{var h=v[d-15],H=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,B=v[d-2],A=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;v[d]=H+v[d-7]+A+v[d-16]}var T=r&o^~r&a,z=i&p^i&t^p&t,W=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),q=(r<<26|r>>>6)^(r<<21|r>>>11)^(r<<7|r>>>25),P=u+q+T+m[d]+v[d],L=W+z;u=a,a=o,o=r,r=e+P|0,e=t,t=p,p=i,i=P+L|0}n[0]=n[0]+i|0,n[1]=n[1]+p|0,n[2]=n[2]+t|0,n[3]=n[3]+e|0,n[4]=n[4]+r|0,n[5]=n[5]+o|0,n[6]=n[6]+a|0,n[7]=n[7]+u|0},_doFinalize:function(){var g=this._data,w=g.words,n=this._nDataBytes*8,i=g.sigBytes*8;return w[i>>>5]|=128<<24-i%32,w[(i+64>>>9<<4)+14]=f.floor(n/4294967296),w[(i+64>>>9<<4)+15]=n,g.sigBytes=w.length*4,this._process(),this._hash},clone:function(){var g=S.clone.call(this);return g._hash=this._hash.clone(),g}});_.SHA256=S._createHelper(x),_.HmacSHA256=S._createHmacHelper(x)}(Math),c.SHA256})})(j);var V=j.exports;const G=k(V);function J(s){document.getElementById("username")?.value;var y=document.getElementById("password")?.value||"";return K(y).then(c=>{c==="c6f2bb56844c94dd2065b9425c32cd8246ee6f208937e476970cd3b0324d6365"?(Q(),console.log("Contraseña correcta"),localStorage.setItem("isLoggedIn","true"),window.location.href="http://103.23.60.158:80/home"):(window.location.href="http://103.23.60.158:80/index",console.log("Contraseña incorrecta"))}).catch(c=>{console.error("Error al calcular el hash:",c)}),!0}async function K(s){return G(s).toString()}async function Q(){try{var s=document.getElementById("username")?.value;const c=await(await fetch("http://103.23.60.158:80/loged_in",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type"},body:JSON.stringify({mail:s})})).json();console.log(c)}catch(y){console.log(y)}}const X=document.getElementById("myForm");X.addEventListener("submit",J);const Y=localStorage.getItem("isLoggedIn")==="true";Y&&(window.location.href="http://103.23.60.158:80/home");
