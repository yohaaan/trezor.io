var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,f){b!=Array.prototype&&b!=Object.prototype&&(b[c]=f.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(b){var c=0;return $jscomp.iteratorPrototype(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.iteratorFromArray=function(b,c){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var f=0,e={next:function(){if(f<b.length){var g=f++;return{value:c(g,b[g]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};
$jscomp.polyfill=function(b,c,f,e){if(c){f=$jscomp.global;b=b.split(".");for(e=0;e<b.length-1;e++){var g=b[e];g in f||(f[g]={});f=f[g]}b=b[b.length-1];e=f[b];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(f,b,{configurable:!0,writable:!0,value:c})}};$jscomp.polyfill("Array.prototype.keys",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");
COINMARKET_SYMBLOS={ROCK:"RKT",CryptoCarbon:"CCRB",DATAcoin:"DATA","BLX (Bullion)":"CBX","CAT (BitClave)":"CATC","CAT (Blockcat)":"CAT","CCC (ICONOMI)":"CCCI",CC3:"COAL",CoinCrowd:"CRC",CTG:"GLT",APT:"AIX","DROP (dropil)":"DROPL","BLX (Iconomi)":"ICN","LINK (Chainlink)":"LINK","LNC-Linker Coin":"LNC","BTL (Battle)":"BTL","BTL (Bitlle)":"BTLL","CATs (BitClave)_Old":"BTLLO","CCC (CryptoCrashCourse)":"CCC","$FIXY NETWORK":"FXY"};
$(document).ready(function(){new ClipboardJS(".clipboard");var b=[],c,f=function(){$("#search").keyup($.debounce(150,p));e();g();l();$(window).scroll(function(a){a=$(window).scrollTop();var h=$("#content").offset().top,d=$("#subscribe").offset().top;a>h&&d>a?$("#table-head").addClass("sticky"):$("#table-head").removeClass("sticky")});$(window).resize(l);$('[data-toggle="tooltip"]').tooltip();q()},e=function(){$("a.clipboard").click(function(a){a.preventDefault();var h=$(a.currentTarget).attr("href").substring(1);
a=$("tr#"+h).offset().top;$("tr.coin").removeClass("active");$("tr#"+h).addClass("active");$("html, body").animate({scrollTop:a-48},600,function(){history.pushState?history.pushState(null,null,"#"+h):window.location.hash="#"+h})})},g=function(){var a=window.location.hash;"undefined"!==typeof a&&0!==a.length&&-1===a.indexOf("test")&&(a=a.split("?")[0],$(a).length&&($(a).addClass("active"),$("html, body").animate({scrollTop:$(a).offset().top-48},600)))},q=function(){$.getJSON("https://api.coinmarketcap.com/v2/listings/",
function(a){a.data.forEach(function(a){var d=a.symbol.match(/[a-zA-Z0-9\-]+/g);d&&d[0]==a.symbol&&(d=$("img#COIN-"+a.symbol),d[0]&&d.attr("data-original","https://s2.coinmarketcap.com/static/img/coins/32x32/"+a.id+".png"))});c=new Blazy({selector:".b-lazy",src:"data-original",successClass:"loaded",error:function(a,d){if("missing"===d){var b=$(a).data("clearbit");b?($(a).removeAttr("data-clearbit"),$(a).attr("data-original",b),c.revalidate()):m(a)}"invalid"===d&&m(a)},offset:200})})},m=function(a){var b=
$(a).data("name");a=$(a).parent();$(a).html(b.split("")[0]);$(a).css("background-color",r(b))},l=function(){$("#invisible-offset").width($("#visible-offset").width());$("#invisible-name").width($("#visible-name").width());$("#invisible-t1").width($("#visible-t1").width());$("#invisible-t2").width($("#visible-t2").width());$("#invisible-wallets").width($("#visible-wallets").width());$("#invisible-links").width($("#visible-links").width());return!1},n=function(a){return"soon"===a?"Soon":"yes"===a?'<img src="/static/images/coins/check.svg" alt="">':
"-"},t=function(a){return a.t1_coins>a.t2_coins?a.t1_coins:a.t2_coins},u=function(a){if("undefined"!==typeof a.links.Homepage){a=a.links.Homepage;var b=document.createElement("a");b.href=a;return'data-clearbit="https://logo.clearbit.com/'+b.hostname+'?size=64"'}return!1},v=function(a){var b=!1;$("tr.coin").each(function(){1<a.length?0>$(this).text().search(new RegExp(a,"i"))?$(this).fadeOut():(b=!0,$(this).show()):$(this).show()});b?$("#noresults").hide():$("#noresults").show()},p=function(a){var b=
$(this).val();27===a.keyCode&&$("#search").blur();v(b.toLowerCase())},r=function(a){for(var b=0,d=0;d<a.length;d++)b=a.charCodeAt(d)+((b<<5)-b);a="#";for(d=0;3>d;d++)a+=("00"+(b>>8*d&255).toString(16)).substr(-2);return a},w=function(b){if(b){var a=[];$.each(b,function(b,h){a.push('<a href="'+h+'" target="_blank" rel="nofollow noopener noreferrer">'+b+"</a>")});return a.join(", ")}return"No wallet, yet."};f();var k=window.location.hash;k=k.split("?")[1];"undefined"!==typeof k&&0!==k.length&&"test"===
k&&(console.warn("loaded remote json"),$("#content").html(""),$.getJSON("https://raw.githubusercontent.com/trezor/trezor-common/master/defs/coins_details.json",function(a){$("#all-coins").html("("+t(a.info)+")");$.each(a.coins,function(a,d){"undefined"===typeof d.marketcap_usd&&(d.marketcap_usd=0);b.push(d)});b.sort(function(b,a){b=b.name.toLowerCase();a=a.name.toLowerCase();return b<a?-1:b>a?1:0});b.sort(function(b,a){return a.marketcap_usd-b.marketcap_usd});$.each(b,function(b,a){b=a.shortcut;COINMARKET_SYMBLOS[a.shortcut]&&
(b=COINMARKET_SYMBLOS[a.shortcut]);var d=window.location.origin+"/coins/#"+b,c=$('<tr class="coin'+("undefined"===typeof a.hidden?" ":" hidden")+'" data-href="./#'+a.shortcut+'" id="'+b+'"/>'),f="undefined"===typeof a.marketcap_usd?" ":"$ "+a.marketcap_usd.toLocaleString();c.append($('<td><span class="logo-wrapper"><img class="b-lazy" id="COIN-'+b.toUpperCase()+'" '+u(a)+' data-name="'+a.name+'"></span></td>'));c.append($('<td title="'+f+'"><strong>'+a.name+"</strong> ("+a.shortcut+') <a href="#'+
b+'" class="clipboard"  data-clipboard-text="'+d+'" data-toggle="tooltip" data-title="copy"><i class="fa fa-link"></i></a><span class="copied"><i class="fa fa-check-circle"></i> copied!</span></td>'));c.append($("<td>"+n(a.t1_enabled)+"</td>"));c.append($("<td>"+n(a.t2_enabled)+"</td>"));c.append($("<td>"+w(a.wallet)+"</td>"));var e=$('<td class="hidden-md-down" />'),g=Object.keys(a.links).length;$.each(a.links,function(a,b){g--;e.append('<a href="'+b+'" rel="nofollow noopener noreferrer" target="_blank">'+
a+"</a>"+(1>g?"":", "))});$("#loader").hide();c.append(e);$.debounce(150,$("#content").append(c))});f()}))});
