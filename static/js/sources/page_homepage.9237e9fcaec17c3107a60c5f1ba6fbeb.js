$(document).ready(function(){function e(a,b){b||(b=window.location.href);a=a.replace(/[\[\]]/g,"\\$&");return(a=(new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)")).exec(b))?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}function c(a){$("a.shop-btn").each(function(b){b=$(this).attr("href");$(this).attr("href",b+a)})}function g(a){var b=$(document).scrollTop();$(".scrollTo").each(function(){var a=$(this),c=$(a.attr("href"));c.position().top<=b&&c.position().top+c.height()>b?($(".scrollTo").removeClass("active"),
a.addClass("active")):a.removeClass("active")})}$.fn.shuffle=function(){var a=this.get(),b=$.map(a,function(){var b=Math.floor(Math.random()*a.length),c=$(a[b]).clone(!0)[0];a.splice(b,1);return c});this.each(function(a){$(this).replaceWith($(b[a]))});return $(b)};var d="unknown";$("html");var h=$("#jumbotron"),k=$("#header"),f=window.innerHeight+260;-1!=navigator.appVersion.indexOf("Win")&&(d="win");-1!=navigator.appVersion.indexOf("Mac")&&(d="mac");-1!=navigator.appVersion.indexOf("X11")&&(d="linux");
-1!=navigator.appVersion.indexOf("Linux")&&(d="linux");$("#"+d).prependTo("#platforms");h.css("max-height",f+"px");k.css("max-height",f+"px");$("#headline").fitText(.7);$("#lead").fitText(2.1);(function(){var a=e("a");if(a)c("?a="+a);else if(a=e("h"))c("?h="+a);else{a=(a=document.referrer.match(/:\/\/(.[^\/]+)/))?a[1]:null;var b=document.createElement("a");b.href=a;if(a=(a=/([a-z-0-9]{2,63}).([a-z.]{2,5})$/.exec(b.hostname))&&1<a.length?a[1]+"."+a[2]:null){b="";for(var d=0;d<a.length;d++)b+=a.charCodeAt(d).toString(16);
c("?h="+b)}}})();(function(a){"undefined"!==typeof a&&a.shuffle()})($(".shuffle"));(function(a){if("undefined"!==typeof a)$(document).on("scroll",g)})($("#sticky-nav"));$(".scrollTo").on("click touchstart",function(a){a.preventDefault();var b=this.hash;a=$(b);$("html, body").stop().animate({scrollTop:a.offset().top+2},500,"swing",function(){window.location.hash=b})})});var pepitacounter=0;
$($(".team-section .person .header")[0]).click(function(){pepitacounter++;5===pepitacounter&&laundromat();6===pepitacounter&&(laundromatOff(),pepitacounter=0)});function laundromat(){$(".team-section .person .header, .team-section .person .header2").each(function(){var e=$(this),c=2*Math.random();.5>Math.random()?e.css("animation","laundromat-right "+c+"s linear infinite"):e.css("animation","laundromat-left "+c+"s linear infinite")})}
function laundromatOff(){$(".team-section .person .header, .team-section .person .header2").each(function(){$(this).css("animation","")})};