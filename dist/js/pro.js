!function(a,n){var r=0,e=null,o=null,i=0;function l(n){n=Math.round(n);var t=Math.floor(n/60),e=n-60*t;return t<10&&(t="0"+t),e<10&&(e="0"+e),t+":"+e}function u(n){var t=n*r;t=l(t);var e=100*(n-1)+"%";a(".pro-top").css({transform:"translateX("+e+")"}),a(".cur-time").html(t)}n.pro={renderAllTime:function(n){n=l(r=n),i=0,a(".all-time").html(n)},start:function(n){i=void 0===n?i:n,o=(new Date).getTime(),function n(){var t=(new Date).getTime();u(i+(t-o)/(1e3*r)),e=requestAnimationFrame(n)}()},stop:function(){cancelAnimationFrame(e);var n=(new Date).getTime();i+=(n-o)/(1e3*r)},update:u}}(window.Zepto,window.player||(window.player={}));