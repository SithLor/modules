String.prototype.padStart||(String.prototype.padStart=function(t,r){return(t>>=0,r=String(r||" "),this.length>t)?String(this):((t-=this.length)>r.length&&(r+=r.repeat(t/r.length)),r.slice(0,t)+String(this))}),"undefined"==typeof Uint32Array&&(window.Uint32Array=function(t){this.length=t,this.data=[];for(var r=0;r<t;r++)this.data[r]=0},Uint32Array.prototype={get:function(t){return this.data[t]},set:function(t,r){this.data[t]=r}});export class CRC32{constructor(){this.table=new Uint32Array(256);for(let t=0;t<256;t++){let r=t;for(let t=0;t<8;t++)r=1&r?3988292384^r>>>1:r>>>1;this.table[t]=r}}compute(t,r){let e=4294967295;for(let r=0;r<t.length;r++)e=this.table[(e^t.charCodeAt(r))&255]^e>>>8;return 0===r?this.toBinary(4294967295^e):1===r?this.toHex(4294967295^e):void 0===r?4294967295^e:void 0}compare(t,r){return t===r}toHex(t){return t.toString(16).padStart(8,"0")}toBinary(t){return t.toString(2).padStart(32,"0")}}let t=new CRC32;console.log(t.compute("lamo",0)),console.log(t.compute("lamo",1)),console.log(t.compute("lamo"));