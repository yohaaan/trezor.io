$(document).ready(function(){function c(){var a=$(window).scrollTop(),b=$("#comparison-table thead").offset().top,e=$("#comparison-table-footer").offset().top;a>b&&e>a?$("#comparison-header-sticky").addClass("active"):$("#comparison-header-sticky").removeClass("active")}$('[data-toggle="tooltip"]').tooltip();$.fn.shuffle=function(){var a=this.get(),b=$.map(a,function(){var b=Math.floor(Math.random()*a.length),f=$(a[b]).clone(!0)[0];a.splice(b,1);return f});this.each(function(a){$(this).replaceWith($(b[a]))});
return $(b)};$(".scrollTo").on("click touchstart",function(a){a.preventDefault();var b=this.hash;a=$(b);$("html, body").stop().animate({scrollTop:a.offset().top+20},500,"swing",function(){window.location.hash=b})});$(".endor").click(function(){$(this).hasClass("active")||($(".endor.active").removeClass("active"),$(this).addClass("active"),$("#quote-content").html($(this).data("quote")))});var d=$(".wallet-video .video.show video")[0];d.load();d.onloadeddata=function(){var a=$(".wallet-video .video.show").height();
$(".wallet-video").height(a)};$(".switcher").click(function(a){a.preventDefault();var b=$(this).data("video");$(".switcher.active").removeClass("active").addClass("inactive");$(this).removeClass("inactive").addClass("active");$(".wallet-video .video").removeClass("show");$(".wallet-video .video video").each(function(a,b){b.pause()});setTimeout(function(){$('.wallet-video .video[data-target="'+b+'"]').addClass("show");setTimeout(function(){$('.wallet-video .video[data-target="'+b+'"] video')[0].play()},
500)},500)});$("#HP_Header_GetTrezor").click(function(a){dataLayer.push({event:"InteractionUI",eventCategory:"Button",eventAction:"Click",eventLabel:"HP_Header_GetTrezor",eventValue:""})});$(".HP_Pick_GetTrezorOne").click(function(a){dataLayer.push({event:"InteractionUI",eventCategory:"Button",eventAction:"Click",eventLabel:"HP_Pick_GetTrezorOne",eventValue:""})});$(".HP_Pick_GetTrezorT").click(function(a){dataLayer.push({event:"InteractionUI",eventCategory:"Button",eventAction:"Click",eventLabel:"HP_Pick_GetTrezorT",
eventValue:""})});$("#HP_Safe_GetToday").click(function(a){dataLayer.push({event:"InteractionUI",eventCategory:"Button",eventAction:"Click",eventLabel:"HP_Safe_GetToday",eventValue:""})});$(".HP_Footer_Newsletter").click(function(a){dataLayer.push({event:"InteractionForm",eventCategory:"Form",eventAction:"Submit",eventLabel:"HP_Footer_Newsletter",eventValue:""})});$(window).scroll(function(a){c()});768>$(window).width()?($("#jumbo-video").removeAttr("autoplay"),$("#jumbo-video").attr("preload","none")):
$("#jumbo-video").attr("autoplay");(function(){c();canUseWebP()&&$("img[data-progressive]").each(function(a,b){a=$(b).data("progressive");$(b).attr("data-echo",a)});echo.init({offset:100,unload:!1,debounce:!1,callback:function(a,b){a.classList.add("loaded")}})})()});
