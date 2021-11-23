(()=>{function e(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}async function t(){const t=await fetch("images.json"),r=await t.json();document.querySelectorAll(".answer-button").forEach((t=>t.innerText=r[e(0,240)].author)),document.querySelectorAll(".answer-button")[e(0,3)].innerText=r[0].author,document.addEventListener("click",(function(e){(e.which=1)&&e.target===[...document.querySelectorAll(".answer-button")].filter((e=>e.innerText===r[0].author))[0]&&""===document.querySelector(".result").style.visibility&&(document.querySelector(".result").style="visibility: visible",document.querySelector(".h6").innerText="Correct!",document.querySelector(".p").innerText=`Artist ${r[0].author} painted "${r[0].name}" in ${r[0].year}.`),(e.which=1)&&[...document.querySelectorAll(".answer-button")].filter((e=>e.innerText!==r[0].author)).includes(e.target)&&""===document.querySelector(".result").style.visibility&&(document.querySelector(".result").style="visibility: visible",document.querySelector(".h6").style.color="red",document.querySelector(".h6").innerText="Wrong!",document.querySelector(".p").innerText=`Artist ${r[0].author} painted "${r[0].name}" in ${r[0].year}.`),(e.which=1)&&e.target===document.querySelector(".result-button")&&(document.querySelector(".result").style.visibility="")}))}const r=document.createElement("div");var c;r.innerHTML='<div class="sound-settings">\n        Volume</br>min<input type="range">max</div>\n        <div class="time-settings">Time</br>5<input \n\nclass="time-range" type="range" min="5" max="30" \n\nstep="5">30</div>',r.setAttribute("id","settings"),r.classList.add("settings");const o=new Image,n=new Image;o.onload=function(){document.querySelector(".canvas-frame").style.backgroundImage=`url(${o.src})`,document.querySelector(".result-canvas-frame").style.backgroundImage=`url(${o.src})`},n.onload=function(){document.querySelector(".result-canvas-frame").style.backgroundImage=`url(${n.src})`},document.addEventListener("click",(function(e){return(e.which=e.target===document.querySelector(".screen1")||e.target===document.querySelector("h1")||e.target===document.querySelector("h2"))&&document.querySelector(".screen2").classList.add("game-mode"),(e.which=e.target===document.querySelector(".painters-poster")||e.target===document.querySelector(".painters-label"))&&(document.querySelector(".scree2-quiz-categories-and-options-container").style.marginLeft="-0%",c=!0,document.querySelectorAll("th")[0].style='background-image:url("img/0.jpg")',document.querySelectorAll("th")[1].style='background-image:url("img/10.jpg")',document.querySelectorAll("th")[2].style='background-image:url("img/20.jpg")',document.querySelectorAll("th")[3].style='background-image:url("img/30.jpg")',document.querySelectorAll("th")[4].style='background-image:url("img/40.jpg")',document.querySelectorAll("th")[5].style='background-image:url("img/50.jpg")',document.querySelectorAll("th")[6].style='background-image:url("img/60.jpg")',document.querySelectorAll("th")[7].style='background-image:url("img/70.jpg")',document.querySelectorAll("th")[8].style='background-image:url("img/80.jpg")',document.querySelectorAll("th")[9].style='background-image:url("img/90.jpg")',document.querySelectorAll("th")[10].style='background-image:url("img/100.jpg")',document.querySelectorAll("th")[11].style='background-image:url("img/110.jpg")'),(e.which=e.target===document.querySelector(".paintings-poster")||e.target===document.querySelector(".paintings-label"))&&(document.querySelector(".scree2-quiz-categories-and-options-container").style.marginLeft="-0%",c=!1,document.querySelectorAll("th")[0].style='background-image:url("img/120.jpg")',document.querySelectorAll("th")[1].style='background-image:url("img/130.jpg")',document.querySelectorAll("th")[2].style='background-image:url("img/140.jpg")',document.querySelectorAll("th")[3].style='background-image:url("img/150.jpg")',document.querySelectorAll("th")[4].style='background-image:url("img/160.jpg")',document.querySelectorAll("th")[5].style='background-image:url("img/170.jpg")',document.querySelectorAll("th")[6].style='background-image:url("img/180.jpg")',document.querySelectorAll("th")[7].style='background-image:url("img/190.jpg")',document.querySelectorAll("th")[8].style='background-image:url("img/200.jpg")',document.querySelectorAll("th")[9].style='background-image:url("img/210.jpg")',document.querySelectorAll("th")[10].style='background-image:url("img/220.jpg")',document.querySelectorAll("th")[11].style='background-image:url("img/230.jpg")'),(e.which=(e.target===document.querySelector(".quit-icon")||e.target===document.querySelector(".quit-label"))&&document.querySelector(".screen2").classList.contains("game-mode"))&&(document.querySelector(".screen2").classList.remove("game-mode"),document.querySelector(".scree2-quiz-categories-and-options-container").style.marginLeft="-100%",document.querySelector(".screen2-quiz-categories-container").classList.remove("categories-mode"),document.querySelector(".categories-container").style.marginLeft="-100%",document.querySelector(".settings").classList.remove("settings-active")),!(e.which=1)||e.target!==document.querySelector(".home-icon")&&e.target!==document.querySelector(".home-label")||(document.querySelector(".scree2-quiz-categories-and-options-container").style.marginLeft="-100%",document.querySelector(".screen2-quiz-categories-container").classList.remove("categories-mode"),document.querySelector(".categories-container").style.marginLeft="-100%"),(e.which=!document.querySelector(".settings").classList.contains("settings-active")&&(e.target===document.querySelector(".settings-icon")||e.target===document.querySelector(".settings-label")))?document.querySelector(".settings").classList.add("settings-active"):(e.which=document.querySelector(".settings").classList.contains("settings-active")&&(e.target===document.querySelector(".settings-icon")||e.target===document.querySelector(".settings-label")||e.target===document.querySelector(".close-icon")))?document.querySelector(".settings").classList.remove("settings-active"):(document.getElementById("mute").checked||(document.querySelector(".volume-range").style.opacity="30%",document.querySelector(".volume-range").setAttribute("disabled","disabled"),document.querySelector(".volume-value").innerHTML="muted"),document.getElementById("mute").checked&&(document.querySelector(".volume-range").style.opacity="100%",document.querySelector(".volume-range").removeAttribute("disabled"),document.querySelector(".volume-value").innerHTML=`\n\n${document.querySelector(".volume-range").value}%`),document.getElementById("time").checked||(document.querySelector(".time-range").style.opacity="30%",document.querySelector(".time-range").setAttribute("disabled","disabled"),document.querySelector(".time-value").innerHTML="disabled"),document.getElementById("time").checked&&(document.querySelector(".time-range").style.opacity="100%",document.querySelector(".time-range").removeAttribute("disabled"),document.querySelector(".time-value").innerHTML=`${document.querySelector(".time-range").value} minutes`),(e.which=1)&&c&&[...document.querySelectorAll("th")].includes(e.target)&&(document.querySelector(".categories-container").style.marginLeft="100%",document.querySelector("h3").innerText="Who painted this canvas?",o.src="full/0full.jpg",t()),void((e.which=1)&&!c&&[...document.querySelectorAll("th")].includes(e.target)&&(document.querySelector(".categories-container").style.marginLeft="100%",document.querySelector("h3").innerText="Which canvas was painted by?",o.src="full/0full.jpg",document.querySelector("h3").classList.add("h3-questions-on-paintings"),t())))}))})();