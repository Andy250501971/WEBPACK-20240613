(()=>{var t={240:()=>{const t=document.forms.form,e=t.querySelector('button[type="submit"]'),n=Array.from(t.elements),a=[];function r(e){a.every((t=>"1"===t.getAttribute("is-valid")))?async function(){const e=new FormData(t);try{const n=await fetch("./mail.php",{method:"POST",body:e});if(!n.ok)throw new Error(`Ошибка на сервере: ${n.statusText}`);const a=n.headers.get("content-type");if(a&&-1!==a.indexOf("application/json")){const t=await n.json();alert(t.message||"Форма успешно отправлена!")}else{const t=await n.text();console.log("Сообщение сервера (текст):",t),alert(t)}t.reset(),o()}catch(t){console.error("Ошибка во время отправки данных:",t.message),alert("Произошла ошибка при отправке формы.")}}():console.log("Некоторые поля заполнены неверно")}function o(){const t=a.every((t=>"1"===t.getAttribute("is-valid")));e.disabled=!t}n.forEach((t=>{t.hasAttribute("data-reg")&&(t.setAttribute("is-valid","0"),a.push(t))})),console.log(a),t.addEventListener("input",(function(t){let{target:e}=t;e.hasAttribute("data-reg")&&function(t){const e=t.value,n=t.getAttribute("data-reg");let a=new RegExp(n).test(e);t.hasAttribute("required")&&(a=a&&""!==e.trim()),a?(t.style.color="#44751e",t.setAttribute("is-valid","1")):(t.style.color="red",t.setAttribute("is-valid","0"))}(e),o()})),t.addEventListener("submit",(function(t){t.preventDefault(),r.call(this,t)})),o()},202:()=>{document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelectorAll("input[data-tel-input]"),e=function(t){return t.value.replace(/\D/g,"")},n=function(t){let n=t.target,a=e(n),r=t.clipboardData||window.clipboardData;if(r){let t=r.getData("Text");if(/\D/g.test(t))return void(n.value=a)}},a=function(t){let n=t.target,a=e(n),r=n.selectionStart,o="";if(!a)return n.value="";if(n.value.length==r){if(["7","8","9"].indexOf(a[0])>-1){"9"==a[0]&&(a="7"+a);let t="8"==a[0]?"8":"+7";o=n.value=t+" ",a.length>1&&(o+="("+a.substring(1,4)),a.length>=5&&(o+=") "+a.substring(4,7)),a.length>=8&&(o+="-"+a.substring(7,9)),a.length>=10&&(o+="-"+a.substring(9,11))}else o="+"+a.substring(0,16);n.value=o}else t.data&&/\D/g.test(t.data)&&(n.value=a)},r=function(t){let e=t.target.value.replace(/\D/g,"");8==t.keyCode&&1==e.length&&(t.target.value="")};for(let e of t)e.addEventListener("keydown",r),e.addEventListener("input",a,!1),e.addEventListener("paste",n,!1)}))},930:()=>{let t=function(t){t.preventDefault,t.target.classList.remove("animate"),t.target.classList.add("animate"),setTimeout((function(){t.target.classList.remove("animate")}),700)},e=document.getElementsByClassName("button");for(var n=0;n<e.length;n++)e[n].addEventListener("click",t,!1)}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(930),n(202),n(240)})()})();
//# sourceMappingURL=bundle.89321a96f208a871caff.js.map