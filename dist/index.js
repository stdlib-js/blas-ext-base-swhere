"use strict";var j=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=j(function(P,_){
var A=require('@stdlib/strided-base-reinterpret-boolean/dist');function D(r,e,i,o,v,q,s,c,n,f,a,y,p){var R,x,h,l,t,w;if(r<=0)return a;for(R=A(e,0),x=o,h=s,l=f,t=p,w=0;w<r;w++)R[x]?a[t]=v[h]:a[t]=c[l],x+=i,h+=q,l+=n,t+=y;return a}_.exports=D
});var B=j(function(Q,b){
var u=require('@stdlib/strided-base-stride2offset/dist'),F=m();function G(r,e,i,o,v,q,s,c,n){var f=u(r,i),a=u(r,v),y=u(r,s),p=u(r,n);return F(r,e,i,f,o,v,a,q,s,y,c,n,p)}b.exports=G
});var k=j(function(S,g){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=B(),I=m();H(E,"ndarray",I);g.exports=E
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=k(),d,z=K(J(__dirname,"./native.js"));L(z)?d=M:d=z;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
