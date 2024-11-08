var XRegExp;if(XRegExp)throw Error("can't load XRegExp twice in the same frame");!function(e){(XRegExp=function(t,n){var a,p,c,s,o,u=[],f=XRegExp.OUTSIDE_CLASS,d=0;if(XRegExp.isRegExp(t)){if(n!==e)throw TypeError("can't supply flags when constructing one RegExp from another");return x(t)}if(l)throw Error("can't call the XRegExp constructor within token definition functions");for(n=n||"",a={hasNamedCapture:!1,captureNames:[],hasFlag:function(e){return n.indexOf(e)>-1},setFlag:function(e){n+=e}};d<t.length;)(p=h(t,d,f,a))?(u.push(p.output),d+=p.match[0].length||1):(c=i.exec.call(g[f],t.slice(d)))?(u.push(c[0]),d+=c[0].length):("["===(s=t.charAt(d))?f=XRegExp.INSIDE_CLASS:"]"===s&&(f=XRegExp.OUTSIDE_CLASS),u.push(s),d++);return(o=RegExp(u.join(""),i.replace.call(n,r,"")))._xregexp={source:t,captureNames:a.hasNamedCapture?a.captureNames:null},o}).version="1.5.1",XRegExp.INSIDE_CLASS=1,XRegExp.OUTSIDE_CLASS=2;var t,n=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,r=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,a=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,l=!1,p=[],i={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},c=i.exec.call(/()??/,"")[1]===e,s=(t=/^/g,i.test.call(t,""),!t.lastIndex),o=RegExp.prototype.sticky!==e,g={};function x(e,t){if(!XRegExp.isRegExp(e))throw TypeError("type RegExp expected");var n=e._xregexp;return e=XRegExp(e.source,u(e)+(t||"")),n&&(e._xregexp={source:n.source,captureNames:n.captureNames?n.captureNames.slice(0):null}),e}function u(e){return(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":"")}function h(e,t,n,r){var a,i,c,s=p.length;l=!0;try{for(;s--;)if(n&(c=p[s]).scope&&(!c.trigger||c.trigger.call(r))&&(c.pattern.lastIndex=t,(i=c.pattern.exec(e))&&i.index===t)){a={output:c.handler.call(r,i,n),match:i};break}}catch(e){throw e}finally{l=!1}return a}function f(e,t,n){if(Array.prototype.indexOf)return e.indexOf(t,n);for(var r=n||0;r<e.length;r++)if(e[r]===t)return r;return-1}g[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/,g[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,XRegExp.addToken=function(e,t,n,r){p.push({pattern:x(e,"g"+(o?"y":"")),handler:t,scope:n||XRegExp.OUTSIDE_CLASS,trigger:r||null})},XRegExp.cache=function(e,t){var n=e+"/"+(t||"");return XRegExp.cache[n]||(XRegExp.cache[n]=XRegExp(e,t))},XRegExp.copyAsGlobal=function(e){return x(e,"g")},XRegExp.escape=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},XRegExp.execAt=function(e,t,n,r){var a,l=x(t,"g"+(r&&o?"y":""));return l.lastIndex=n=n||0,a=l.exec(e),r&&a&&a.index!==n&&(a=null),t.global&&(t.lastIndex=a?l.lastIndex:0),a},XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}},XRegExp.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},XRegExp.iterate=function(e,t,n,r){for(var a,l=x(t,"g"),p=-1;a=l.exec(e);)t.global&&(t.lastIndex=l.lastIndex),n.call(r,a,++p,e,t),l.lastIndex===a.index&&l.lastIndex++;t.global&&(t.lastIndex=0)},XRegExp.matchChain=function(e,t){return function e(n,r){var a,l=t[r].regex?t[r]:{regex:t[r]},p=x(l.regex,"g"),i=[];for(a=0;a<n.length;a++)XRegExp.iterate(n[a],p,(function(e){i.push(l.backref?e[l.backref]||"":e[0])}));return r!==t.length-1&&i.length?e(i,r+1):i}([e],0)},RegExp.prototype.apply=function(e,t){return this.exec(t[0])},RegExp.prototype.call=function(e,t){return this.exec(t)},RegExp.prototype.exec=function(t){var n,r,a,l;if(this.global||(l=this.lastIndex),n=i.exec.apply(this,arguments)){if(!c&&n.length>1&&f(n,"")>-1&&(a=RegExp(this.source,i.replace.call(u(this),"g","")),i.replace.call((t+"").slice(n.index),a,(function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(n[t]=e)}))),this._xregexp&&this._xregexp.captureNames)for(var p=1;p<n.length;p++)(r=this._xregexp.captureNames[p-1])&&(n[r]=n[p]);!s&&this.global&&!n[0].length&&this.lastIndex>n.index&&this.lastIndex--}return this.global||(this.lastIndex=l),n},RegExp.prototype.test=function(e){var t,n;return this.global||(n=this.lastIndex),(t=i.exec.call(this,e))&&!s&&this.global&&!t[0].length&&this.lastIndex>t.index&&this.lastIndex--,this.global||(this.lastIndex=n),!!t},String.prototype.match=function(e){if(XRegExp.isRegExp(e)||(e=RegExp(e)),e.global){var t=i.match.apply(this,arguments);return e.lastIndex=0,t}return e.exec(this)},String.prototype.replace=function(e,t){var r,a,l,p,c=XRegExp.isRegExp(e);return c?(e._xregexp&&(r=e._xregexp.captureNames),e.global||(p=e.lastIndex)):e+="","[object Function]"===Object.prototype.toString.call(t)?a=i.replace.call(this+"",e,(function(){if(r){arguments[0]=new String(arguments[0]);for(var n=0;n<r.length;n++)r[n]&&(arguments[0][r[n]]=arguments[n+1])}return c&&e.global&&(e.lastIndex=arguments[arguments.length-2]+arguments[0].length),t.apply(null,arguments)})):(l=this+"",a=i.replace.call(l,e,(function(){var e=arguments;return i.replace.call(t+"",n,(function(t,n,a){if(!n){var l=+a;return l<=e.length-3?e[l]:(l=r?f(r,a):-1)>-1?e[l+1]:t}switch(n){case"$":return"$";case"&":return e[0];case"`":return e[e.length-1].slice(0,e[e.length-2]);case"'":return e[e.length-1].slice(e[e.length-2]+e[0].length);default:var p="";if(!(n=+n))return t;for(;n>e.length-3;)p=String.prototype.slice.call(n,-1)+p,n=Math.floor(n/10);return(n?e[n]||"":"$")+p}}))}))),c&&(e.global?e.lastIndex=0:e.lastIndex=p),a},String.prototype.split=function(t,n){if(!XRegExp.isRegExp(t))return i.split.apply(this,arguments);var r,a,l=this+"",p=[],c=0;if(n===e||+n<0)n=1/0;else if(!(n=Math.floor(+n)))return[];for(t=XRegExp.copyAsGlobal(t);(r=t.exec(l))&&!(t.lastIndex>c&&(p.push(l.slice(c,r.index)),r.length>1&&r.index<l.length&&Array.prototype.push.apply(p,r.slice(1)),a=r[0].length,c=t.lastIndex,p.length>=n));)t.lastIndex===r.index&&t.lastIndex++;return c===l.length?i.test.call(t,"")&&!a||p.push(""):p.push(l.slice(c)),p.length>n?p.slice(0,n):p},XRegExp.addToken(/\(\?#[^)]*\)/,(function(e){return i.test.call(a,e.input.slice(e.index+e[0].length))?"":"(?:)"})),XRegExp.addToken(/\((?!\?)/,(function(){return this.captureNames.push(null),"("})),XRegExp.addToken(/\(\?<([$\w]+)>/,(function(e){return this.captureNames.push(e[1]),this.hasNamedCapture=!0,"("})),XRegExp.addToken(/\\k<([\w$]+)>/,(function(e){var t=f(this.captureNames,e[1]);return t>-1?"\\"+(t+1)+(isNaN(e.input.charAt(e.index+e[0].length))?"":"(?:)"):e[0]})),XRegExp.addToken(/\[\^?]/,(function(e){return"[]"===e[0]?"\\b\\B":"[\\s\\S]"})),XRegExp.addToken(/^\(\?([imsx]+)\)/,(function(e){return this.setFlag(e[1]),""})),XRegExp.addToken(/(?:\s+|#.*)+/,(function(e){return i.test.call(a,e.input.slice(e.index+e[0].length))?"":"(?:)"}),XRegExp.OUTSIDE_CLASS,(function(){return this.hasFlag("x")})),XRegExp.addToken(/\./,(function(){return"[\\s\\S]"}),XRegExp.OUTSIDE_CLASS,(function(){return this.hasFlag("s")}))}();