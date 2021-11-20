



  const settings = document.createElement(`div`);
    settings.innerHTML=`<div class="sound-settings">
        Volume</br>min<input type="range">max</div>
        <div class="time-settings">Time</br>5<input class="time-range" type="range" min="5" max="30" step="5">30</div>`;
        settings.setAttribute("id","settings");
        settings.classList.add("settings");
    

  // Флаг painters/paintings
   var flag;

   //

   function getRandomNum(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
            };

            

    //------------------------------------------------------------------------

        const img = new Image();

        img.onload = function () {
            document.querySelector(".canvas-frame").style.backgroundImage = `url(${img.src})`
        };

    //----------------------------------------------------------------------------
    
    
    
    

document.addEventListener("click", function (e) {
        // переход к выбору темы
        if (e.which = 1 && ((e.target===document.querySelector(".screen1")|| (e.target === document.querySelector("h1")
        || (e.target === document.querySelector("h2"))))))
        document.querySelector(".screen2").classList.add("game-mode");
        // переход к выбору категорий
        
        if (e.which = 1 && ((e.target === document.querySelector(".painters-poster")|| 
        (e.target === document.querySelector(".painters-label")))))
        document.querySelector(".screen2-quiz-categories-container").classList.add("categories-mode")+
        (flag=true)+
         (document.querySelectorAll("th")[0].style=`background-image:url("img/0.jpg")`)+
        (document.querySelectorAll("th")[1].style=`background-image:url("img/10.jpg")`)+
        (document.querySelectorAll("th")[2].style=`background-image:url("img/20.jpg")`)+
        (document.querySelectorAll("th")[3].style=`background-image:url("img/30.jpg")`)+
        (document.querySelectorAll("th")[4].style=`background-image:url("img/40.jpg")`)+
        (document.querySelectorAll("th")[5].style=`background-image:url("img/50.jpg")`)+
        (document.querySelectorAll("th")[6].style=`background-image:url("img/60.jpg")`)+
        (document.querySelectorAll("th")[7].style=`background-image:url("img/70.jpg")`)+
        (document.querySelectorAll("th")[8].style=`background-image:url("img/80.jpg")`)+
        (document.querySelectorAll("th")[9].style=`background-image:url("img/90.jpg")`)+
        (document.querySelectorAll("th")[10].style=`background-image:url("img/100.jpg")`)+
        (document.querySelectorAll("th")[11].style=`background-image:url("img/110.jpg")`)
        
        ;
        if (e.which = 1 && ((e.target === document.querySelector(".paintings-poster")|| 
        (e.target === document.querySelector(".paintings-label")))))
        document.querySelector(".screen2-quiz-categories-container").classList.add("categories-mode")+
        (flag=false)+
         (document.querySelectorAll("th")[0].style=`background-image:url("img/120.jpg")`)+
        (document.querySelectorAll("th")[1].style=`background-image:url("img/130.jpg")`)+
        (document.querySelectorAll("th")[2].style=`background-image:url("img/140.jpg")`)+
        (document.querySelectorAll("th")[3].style=`background-image:url("img/150.jpg")`)+
        (document.querySelectorAll("th")[4].style=`background-image:url("img/160.jpg")`)+
        (document.querySelectorAll("th")[5].style=`background-image:url("img/170.jpg")`)+
        (document.querySelectorAll("th")[6].style=`background-image:url("img/180.jpg")`)+
        (document.querySelectorAll("th")[7].style=`background-image:url("img/190.jpg")`)+
        (document.querySelectorAll("th")[8].style=`background-image:url("img/200.jpg")`)+
        (document.querySelectorAll("th")[9].style=`background-image:url("img/210.jpg")`)+
        (document.querySelectorAll("th")[10].style=`background-image:url("img/220.jpg")`)+
        (document.querySelectorAll("th")[11].style=`background-image:url("img/230.jpg")`);
        // возврат к первоначальному экрану от выбора темы
        if (e.which = 1 && ((e.target === document.querySelector(".quit-icon")|| 
        (e.target === document.querySelector(".quit-label"))))&& document.querySelector(".screen2").classList.contains("game-mode"))
        document.querySelector(".screen2").classList.remove("game-mode")+
        document.querySelector(".screen2-quiz-categories-container").classList.remove("categories-mode");
       // возврат к темам
       if (e.which = 1 && ((e.target === document.querySelector(".home-icon")|| 
        (e.target === document.querySelector(".home-label"))))
        && document.querySelector(".screen2-quiz-categories-container").classList.contains("categories-mode"))
       document.querySelector(".screen2-quiz-categories-container").classList.remove("categories-mode");

// Настройки
if (e.which = 1 && !document.querySelector(".settings").classList.contains("settings-active") 
 &&(e.target === document.querySelector(".home-icon")||
 e.target === document.querySelector(".home-label")))
document.querySelector(".screen3").classList.remove("options-mode");
    if (e.which = 1 && document.querySelector(".settings").classList.contains("settings-active") 
    &&(e.target === document.querySelector(".home-icon") ||
        e.target === document.querySelector(".home-label")))
        document.querySelector(".screen3").classList.remove("options-mode")+
        document.querySelector(".settings").classList.remove("settings-active");
if (e.which = 1 && !document.querySelector(".settings").classList.contains("settings-active") 
&& (e.target === document.querySelector(".settings-icon") ||
     e.target === document.querySelector(".settings-label")))
     return document.querySelector(".settings").classList.add("settings-active");
     if (e.which = 1 && document.querySelector(".settings").classList.contains("settings-active") 
     && (e.target === document.querySelector(".settings-icon") ||
     e.target === document.querySelector(".settings-label")|| e.target === document.querySelector(".close-icon")))
  return document.querySelector(".settings").classList.remove("settings-active");
    if (!document.getElementById("mute").checked) 
    (document.querySelector(".volume-range").style.opacity = "30%") +
        (document.querySelector(".volume-range").setAttribute("disabled", "disabled"))
        + (document.querySelector(".volume-value").innerHTML = "muted");
    if (document.getElementById("mute").checked)
        (document.querySelector(".volume-range").style.opacity = "100%") +
            document.querySelector(".volume-range").removeAttribute("disabled") +
            (document.querySelector(".volume-value").innerHTML = `${document.querySelector(".volume-range").value}%`);
    if (!document.getElementById("time").checked)
        (document.querySelector(".time-range").style.opacity = "30%") +
            (document.querySelector(".time-range").setAttribute("disabled", "disabled")) +
            (document.querySelector(".time-value").innerHTML = "disabled");
    if (document.getElementById("time").checked)
        (document.querySelector(".time-range").style.opacity = "100%") +
            (document.querySelector(".time-range").removeAttribute("disabled")) +
            (document.querySelector(".time-value").innerHTML = `${document.querySelector(".time-range").value} minutes`);

            // Переход к вопросам 
            
            
            
           // img.src = `full/${getRandomNum(0, 119).toString()}full.jpg`;
    
           //let canvasFrame = document.createElement("img");
          //  canvasFrame.className="canvas-frame";
            
         
           // document.body.style.backgroundImage = `url(${img.src})`;
                    

            
           // var paintersQuestions = document.createElement("div");
          //  paintersQuestions.className=`painters-questions`;
            // paintersQuestions.innerHTML=`<h3>Who Painted The Canvas?</h3>`;
            

          //  paintersQuestions.appendChild(canvasFrame);
            
       //     paintersQuestions.insertAdjacentHTML("beforeend","<ul><li>1111</li><li>2222</li><li>3333</li><li>4444</li></ul>")
            
            if ((e.which = 1) && (flag) && (e.target === (document.querySelectorAll("th")[0]||document.querySelectorAll("h5")[0])))
            
            (document.querySelector(".painters-questions").style.marginLeft="-0%");
                            
    
            
            let paintingsQuestions = document.createElement("div");
            paintingsQuestions.innerHTML=`<h3>Which canvas was painted by <span class="painter-name"></span>?</h3></br></br></br></br>
            <div class="question-container"></div>`;
            paintingsQuestions.style = "position:absolute";
            if ((e.which = 1) && (!flag) && (e.target === (document.querySelectorAll("th")[0]||document.querySelectorAll("h5")[0])))
    document.querySelector(".screen2-quiz-categories-container").insertAdjacentElement('afterbegin',paintingsQuestions);
            

         }
            )

      

                
