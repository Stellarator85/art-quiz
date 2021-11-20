(()=>{const e=document.createElement("div");var t;e.innerHTML='<div class="sound-settings">\n        Volume</br>min<input type="range">max</div>\n        <div class="time-settings">Time</br>5<input class="time-range" type="range" min="5" max="30" step="5">30</div>',e.setAttribute("id","settings"),e.classList.add("settings");const r=new Image;r.onload=function(){document.querySelector(".canvas-frame").style.backgroundImage=`url(${r.src})`},document.addEventListener("click",(function(e){if((e.which=e.target===document.querySelector(".screen1")||e.target===document.querySelector("h1")||e.target===document.querySelector("h2"))&&document.querySelector(".screen2").classList.add("game-mode"),(e.which=e.target===document.querySelector(".painters-poster")||e.target===document.querySelector(".painters-label"))&&(document.querySelector(".screen2-quiz-categories-container").classList.add("categories-mode"),t=!0,document.querySelectorAll("th")[0].style='background-image:url("img/0.jpg")',document.querySelectorAll("th")[1].style='background-image:url("img/10.jpg")',document.querySelectorAll("th")[2].style='background-image:url("img/20.jpg")',document.querySelectorAll("th")[3].style='background-image:url("img/30.jpg")',document.querySelectorAll("th")[4].style='background-image:url("img/40.jpg")',document.querySelectorAll("th")[5].style='background-image:url("img/50.jpg")',document.querySelectorAll("th")[6].style='background-image:url("img/60.jpg")',document.querySelectorAll("th")[7].style='background-image:url("img/70.jpg")',document.querySelectorAll("th")[8].style='background-image:url("img/80.jpg")',document.querySelectorAll("th")[9].style='background-image:url("img/90.jpg")',document.querySelectorAll("th")[10].style='background-image:url("img/100.jpg")',document.querySelectorAll("th")[11].style='background-image:url("img/110.jpg")'),(e.which=e.target===document.querySelector(".paintings-poster")||e.target===document.querySelector(".paintings-label"))&&(document.querySelector(".screen2-quiz-categories-container").classList.add("categories-mode"),t=!1,document.querySelectorAll("th")[0].style='background-image:url("img/120.jpg")',document.querySelectorAll("th")[1].style='background-image:url("img/130.jpg")',document.querySelectorAll("th")[2].style='background-image:url("img/140.jpg")',document.querySelectorAll("th")[3].style='background-image:url("img/150.jpg")',document.querySelectorAll("th")[4].style='background-image:url("img/160.jpg")',document.querySelectorAll("th")[5].style='background-image:url("img/170.jpg")',document.querySelectorAll("th")[6].style='background-image:url("img/180.jpg")',document.querySelectorAll("th")[7].style='background-image:url("img/190.jpg")',document.querySelectorAll("th")[8].style='background-image:url("img/200.jpg")',document.querySelectorAll("th")[9].style='background-image:url("img/210.jpg")',document.querySelectorAll("th")[10].style='background-image:url("img/220.jpg")',document.querySelectorAll("th")[11].style='background-image:url("img/230.jpg")'),(e.which=(e.target===document.querySelector(".quit-icon")||e.target===document.querySelector(".quit-label"))&&document.querySelector(".screen2").classList.contains("game-mode"))&&(document.querySelector(".screen2").classList.remove("game-mode"),document.querySelector(".screen2-quiz-categories-container").classList.remove("categories-mode")),(e.which=(e.target===document.querySelector(".home-icon")||e.target===document.querySelector(".home-label"))&&document.querySelector(".screen2-quiz-categories-container").classList.contains("categories-mode"))&&document.querySelector(".screen2-quiz-categories-container").classList.remove("categories-mode"),(e.which=!document.querySelector(".settings").classList.contains("settings-active")&&(e.target===document.querySelector(".home-icon")||e.target===document.querySelector(".home-label")))&&document.querySelector(".screen3").classList.remove("options-mode"),(e.which=document.querySelector(".settings").classList.contains("settings-active")&&(e.target===document.querySelector(".home-icon")||e.target===document.querySelector(".home-label")))&&(document.querySelector(".screen3").classList.remove("options-mode"),document.querySelector(".settings").classList.remove("settings-active")),e.which=!document.querySelector(".settings").classList.contains("settings-active")&&(e.target===document.querySelector(".settings-icon")||e.target===document.querySelector(".settings-label")))return document.querySelector(".settings").classList.add("settings-active");if(e.which=document.querySelector(".settings").classList.contains("settings-active")&&(e.target===document.querySelector(".settings-icon")||e.target===document.querySelector(".settings-label")||e.target===document.querySelector(".close-icon")))return document.querySelector(".settings").classList.remove("settings-active");document.getElementById("mute").checked||(document.querySelector(".volume-range").style.opacity="30%",document.querySelector(".volume-range").setAttribute("disabled","disabled"),document.querySelector(".volume-value").innerHTML="muted"),document.getElementById("mute").checked&&(document.querySelector(".volume-range").style.opacity="100%",document.querySelector(".volume-range").removeAttribute("disabled"),document.querySelector(".volume-value").innerHTML=`${document.querySelector(".volume-range").value}%`),document.getElementById("time").checked||(document.querySelector(".time-range").style.opacity="30%",document.querySelector(".time-range").setAttribute("disabled","disabled"),document.querySelector(".time-value").innerHTML="disabled"),document.getElementById("time").checked&&(document.querySelector(".time-range").style.opacity="100%",document.querySelector(".time-range").removeAttribute("disabled"),document.querySelector(".time-value").innerHTML=`${document.querySelector(".time-range").value} minutes`),(e.which=1)&&t&&e.target===(document.querySelectorAll("th")[0]||document.querySelectorAll("h5")[0])&&(document.querySelector(".painters-questions").style.marginLeft="-0%");let r=document.createElement("div");r.innerHTML='<h3>Which canvas was painted by <span class="painter-name"></span>?</h3></br></br></br></br>\n            <div class="question-container"></div>',r.style="position:absolute",(e.which=1)&&!t&&e.target===(document.querySelectorAll("th")[0]||document.querySelectorAll("h5")[0])&&document.querySelector(".screen2-quiz-categories-container").insertAdjacentElement("afterbegin",r)}))})();