!function(){var t=SyntaxHighlighter;t.autoloader=function(){var a,e,n=arguments,r=t.findElements(),i={},l={},o=(SyntaxHighlighter.all,!1),h=null;function d(t,a){for(var e=0;e<t.length;e++)i[t[e]]=a}for(SyntaxHighlighter.all=function(t){h=t,o=!0},a=0;a<n.length;a++){var c=(e=n[a]).pop?e:e.split(/\s+/),g=c.pop();d(c,g)}for(a=0;a<r.length;a++)(g=i[r[a].params.brush])&&void 0===l[g]&&("true"===r[a].params["html-script"]&&void 0===l[i.xml]&&(p(i.xml),l[g]=!1),l[g]=!1,p(g));function p(t){var a=document.createElement("script"),e=!1;a.src=t,a.type="text/javascript",a.language="javascript",a.onload=a.onreadystatechange=function(){e||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(e=!0,l[t]=!0,function(){for(var t in l)if(0==l[t])return;o&&SyntaxHighlighter.highlight(h)}(),a.onload=a.onreadystatechange=null,a.parentNode.removeChild(a))},document.body.appendChild(a)}}}();