!function(){function e(e){return e&&e.__esModule?e.default:e}var a,n,t,o=!1;function i(e){for(var a=Object.keys(e),t=0;t<a.length;t++)n[a[t]]=e[a[t]]}function r(e){var a=n[e];if(null==a)throw new Error("Could not resolve bundle with id "+e);return a}function l(){return o||(o=!0,n={},(a={}).register=i,t=r,a.resolve=t),a}l().register(JSON.parse('{"4YEf5":"index.e4ebb415.js","4rM4t":"service-worker.js"}'));var s,h,u=!1;function c(){return h||(h=function(){try{throw new Error}catch(a){var e=(""+a.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return(""+e[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}()),h}function d(){return u||(u=!0,h=null,(s={}).getBundleURL=c),s}var p,f,A,T,v=!1;function g(e){if(""===e)return".";var a="/"===e[e.length-1]?e.slice(0,e.length-1):e,n=a.lastIndexOf("/");return-1===n?".":a.slice(0,n)}function m(e,a){if(e===a)return"";var n=e.split("/");"."===n[0]&&n.shift();var t,o,i=a.split("/");for("."===i[0]&&i.shift(),t=0;(t<i.length||t<n.length)&&null==o;t++)n[t]!==i[t]&&(o=t);var r=[];for(t=0;t<n.length-o;t++)r.push("..");return i.length>o&&r.push.apply(r,i.slice(o)),r.join("/")}function w(){return v||(v=!0,p={},f=l().resolve,p=function(e,a){return m(g(f(e)),f(a))},A=g,p._dirname=A,T=m,p._relative=T),p}var y,b=!1;var S={};!function(e){var a;if("object"==typeof S&&(S=e(),a=!0),!a){var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}((function(){function e(){for(var e=0,a={};e<arguments.length;e++){var n=arguments[e];for(var t in n)a[t]=n[t]}return a}function a(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(t){function o(){}function i(a,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var r=JSON.stringify(n);/^[\{\[]/.test(r)&&(n=r)}catch(e){}n=t.write?t.write(n,a):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),a=encodeURIComponent(String(a)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var l="";for(var s in i)i[s]&&(l+="; "+s,!0!==i[s]&&(l+="="+i[s].split(";")[0]));return document.cookie=a+"="+n+l}}function r(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],r=0;r<i.length;r++){var l=i[r].split("="),s=l.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var h=a(l[0]);if(s=(t.read||t)(s,h)||a(s),n)try{s=JSON.parse(s)}catch(e){}if(o[h]=s,e===h)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return r(e,!1)},o.getJSON=function(e){return r(e,!0)},o.remove=function(a,n){i(a,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}));var C=e(S);const M="https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions";let k;async function j(){[k]=await D([M+".min.json"]),await async function(){const e=[];for(const a of Object.values(k)){let n;n=/\-la$/i.test(a.name)?a.language+" Latin - "+a.author:/\-lad$/i.test(a.name)?a.language+" LatinD - "+a.author:a.language+" - "+a.author,e.push([n,a.name,a.direction])}e.sort();for(const[a,n,t]of e)$("#translationdropdown").append('<option value="'+n+'" data-dir="'+t+'">'+a+"</option>");for(let e=1;e<=114;e++)$("#chapter").append('<option value="'+e+'">'+e+" - "+q[e-1]+" ("+H[e-1]+")</option>")}(),function(){const e=new URL(window.location).searchParams;if(null!==e.get("editions"))return void e.get("editions").split(",").map((e=>$('#translationdropdown option[value="'+e+'"]').prop("selected",!0)));const a=C.get("editions");if(void 0!==a)return void JSON.parse(a).map((e=>$('#translationdropdown option[value="'+e+'"]').prop("selected",!0)));$('#translationdropdown option[value="eng-miraneesuddin"]').prop("selected",!0)}(),function(){if(""!==window.location.hash){const e=window.location.hash.substring(1).split(":");return void $('#chapter option[value="'+e[0]+'"]').prop("selected",!0)}const e=C.get("chapter");if(void 0!==e)return void $('#chapter option[value="'+e+'"]').prop("selected",!0);$('#chapter option[value="1"]').prop("selected",!0)}(),await window.showTranslations(),window.location.hash.substring(1).split(":").length>1&&(window.location=window.location.hash,$('#verse option[value="'+window.location.hash+'"]').prop("selected",!0)),$("select").select2({theme:"bootstrap4"}),$("#verse").on("select2:select",(function(e){location=location.hash}))}async function D(e){return await Promise.all(e.map((e=>fetch(e).then((e=>e.json()))))).catch(console.error)}window.showTranslations=async function(){$("#versescolumn").empty(),$("#versescolumn").append('<ul id="verseslist" class="card list-group list-group-flush"></ul>');const e=$("#translationdropdown").val().filter((e=>!/^\s*$/.test(e)));let a=[];const n=$("#chapter").val(),t=[];if(""===n)return;e.length>0&&(C.set("editions",JSON.stringify(e),{expires:1e3,path:""}),C.set("chapter",n,{expires:1e3,path:""}),0===$("#spinningwheel").length&&$("#versescolumn").prepend('<div  id="spinningwheel">\n    <div class="text-center">\n      <div class="spinner-border m-5" role="status">\n      </div>\n      </div>\n      </div>\n      '));for(const a of e){const e=M+"/"+a+"/"+n+".min.json";t.push(e)}a=(await async function(e){return(await D(e)).map((e=>e.chapter.map((e=>e.text))))}(t)).map(((a,n)=>[a,e[n],$('#translationdropdown option[value="'+e[n]+'"]').attr("data-dir"),$('#translationdropdown option[value="'+e[n]+'"]').text()]));let o;$("#verseslist").append('<span id="'+n+':1"> </span>'),$("#spinningwheel").remove();for(let e=1;e<=O[n-1];e++)for(const[t,i,r,l]of a){const a=n+":"+(e+1);o="rtl"===r?i+" text-right list-group-item p-2":i+" list-group-item p-2",$("#verseslist").append('<li class="'+o+'" dir="auto" id="'+a+'"><span class="badge bg-light text-dark" data-bs-toggle="tooltip" title="'+l+'">'+e+"</span> - "+t[e-1]+"</li>")}[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)})),function(){$("#verse").empty(),$("#verse").append('<option value="" selected>Verse</option>');const e=$("#chapter").val();for(let a=1;a<=O[e-1];a++){const n="#"+e+":"+a;$("#verse").append('<option value="'+n+'">'+a+"</option>")}}()};const O=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6],x=[],N=[];for(let e=1;e<=114;e++)for(let a=1;a<=O[e-1];a++)x.push([e,a]),N.push(e+","+a);const R={"Al-Faatiha":"The Opening","Al-Baqara":"The Cow","Aal-i-Imraan":"The Family of Imraan","An-Nisaa":"The Women","Al-Maaida":"The Table","Al-An'aam":"The Cattle","Al-A'raaf":"The Heights","Al-Anfaal":"The Spoils of War","At-Tawba":"The Repentance",Yunus:"Jonas",Hud:"Hud",Yusuf:"Joseph","Ar-Ra'd":"The Thunder",Ibrahim:"Abraham","Al-Hijr":"The Rock","An-Nahl":"The Bee","Al-Israa":"The Night Journey","Al-Kahf":"The Cave",Maryam:"Mary","Taa-Haa":"Taa-Haa","Al-Anbiyaa":"The Prophets","Al-Hajj":"The Pilgrimage","Al-Muminoon":"The Believers","An-Noor":"The Light","Al-Furqaan":"The Criterion","Ash-Shu'araa":"The Poets","An-Naml":"The Ant","Al-Qasas":"The Stories","Al-Ankaboot":"The Spider","Ar-Room":"The Romans",Luqman:"Luqman","As-Sajda":"The Prostration","Al-Ahzaab":"The Clans",Saba:"Sheba",Faatir:"The Originator",Yaseen:"Yaseen","As-Saaffaat":"Those drawn up in Ranks",Saad:"The letter Saad","Az-Zumar":"The Groups",Ghafir:"The Forgiver",Fussilat:"Explained in detail","Ash-Shura":"Consultation","Az-Zukhruf":"Ornaments of gold","Ad-Dukhaan":"The Smoke","Al-Jaathiya":"Crouching","Al-Ahqaf":"The Dunes",Muhammad:"Muhammad","Al-Fath":"The Victory","Al-Hujuraat":"The Inner Apartments",Qaaf:"The letter Qaaf","Adh-Dhaariyat":"The Winnowing Winds","At-Tur":"The Mount","An-Najm":"The Star","Al-Qamar":"The Moon","Ar-Rahmaan":"The Beneficent","Al-Waaqia":"The Inevitable","Al-Hadid":"The Iron","Al-Mujaadila":"The Pleading Woman","Al-Hashr":"The Exile","Al-Mumtahana":"She that is to be examined","As-Saff":"The Ranks","Al-Jumu'a":"Friday","Al-Munaafiqoon":"The Hypocrites","At-Taghaabun":"Mutual Disillusion","At-Talaaq":"Divorce","At-Tahrim":"The Prohibition","Al-Mulk":"The Sovereignty","Al-Qalam":"The Pen","Al-Haaqqa":"The Reality","Al-Ma'aarij":"The Ascending Stairways",Nooh:"Noah","Al-Jinn":"The Jinn","Al-Muzzammil":"The Enshrouded One","Al-Muddaththir":"The Cloaked One","Al-Qiyaama":"The Resurrection","Al-Insaan":"Man","Al-Mursalaat":"The Emissaries","An-Naba":"The Announcement","An-Naazi'aat":"Those who drag forth",Abasa:"He frowned","At-Takwir":"The Overthrowing","Al-Infitaar":"The Cleaving","Al-Mutaffifin":"Defrauding","Al-Inshiqaaq":"The Splitting Open","Al-Burooj":"The Constellations","At-Taariq":"The Morning Star","Al-A'laa":"The Most High","Al-Ghaashiya":"The Overwhelming","Al-Fajr":"The Dawn","Al-Balad":"The City","Ash-Shams":"The Sun","Al-Lail":"The Night","Ad-Dhuhaa":"The Morning Hours","Ash-Sharh":"The Consolation","At-Tin":"The Fig","Al-Alaq":"The Clot","Al-Qadr":"The Power, Fate","Al-Bayyina":"The Evidence","Az-Zalzala":"The Earthquake","Al-Aadiyaat":"The Chargers","Al-Qaari'a":"The Calamity","At-Takaathur":"Competition","Al-Asr":"The Declining Day, Epoch","Al-Humaza":"The Traducer","Al-Fil":"The Elephant",Quraish:"Quraysh","Al-Maa'un":"Almsgiving","Al-Kawthar":"Abundance","Al-Kaafiroon":"The Disbelievers","An-Nasr":"Divine Support","Al-Masad":"The Palm Fibre","Al-Ikhlaas":"Sincerity","Al-Falaq":"The Dawn","An-Naas":"Mankind"},q=Object.keys(R),H=Object.values(R);let E;"serviceWorker"in navigator&&navigator.serviceWorker.register((b||(b=!0,y={},y=d().getBundleURL()+w()("4YEf5","4rM4t")),y)),window.addEventListener("DOMContentLoaded",(e=>{E=j()}))}();
//# sourceMappingURL=index.e4ebb415.js.map
