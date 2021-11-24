function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getAnswers() {
  const result = await fetch("images.json");
  const data = await result.json();
  document
    .querySelectorAll(".answer-button")
    .forEach(
      (element) => (element.innerText = data[getRandomNum(0, 240)].author)
    );
  document.querySelectorAll(".answer-button")[getRandomNum(0, 3)].innerText =
    data[0].author;
  paintersQuestionStep1 = true;
  document.addEventListener("click", function (e) {
    if (
      (e.which = 1) &&
      paintersQuestionStep1 &&
      e.target ===
        [...document.querySelectorAll(".answer-button")].filter(
          (x) => x.innerText === data[0].author
        )[0] &&
      document.querySelector(".result").style.visibility === ""
    )
      (document.querySelector(".result").style = "visibility: visible") +
        (document.querySelector(".h6").innerText = "Correct!") +
        (document.querySelector(
          ".p"
        ).innerText = `Artist ${data[0].author} painted "${data[0].name}" in ${data[0].year}.`);
    if (
      (e.which = 1) &&
      paintersQuestionStep1 &&
      [...document.querySelectorAll(".answer-button")]
        .filter((x) => x.innerText !== data[0].author)
        .includes(e.target) &&
      document.querySelector(".result").style.visibility === ""
    )
      (document.querySelector(".result").style = "visibility: visible") +
        (document.querySelector(".h6").style.color = "red") +
        (document.querySelector(".h6").innerText = "Wrong!") +
        (document.querySelector(
          ".p"
        ).innerText = `Artist ${data[0].author} painted "${data[0].name}" in ${data[0].year}.`);
    ///Скрытие сообщения об ответе
    if ((e.which = 1) && e.target === document.querySelector(".result-button"))
      document.querySelector(".result").style.visibility = "";
  });
}
/*
async function getInfo() {
  const quotes = "images.json";
  const ress = await fetch(quotes);
  const data = await ress.json();
  const arr = new Array.push(data[0].author);
  document
    .querySelectorAll(".answer-button")
    .forEach(
      (element) => (element.innerText = data[getRandomNum(0, 

240)].author)
  );
  
}
*/
/////////////////////////////////////////////////////////////

//////////
const settings = document.createElement(`div`);
settings.innerHTML = `<div class="sound-settings">
        Volume</br>min<input type="range">max</div>
        <div class="time-settings">Time</br>5<input 

class="time-range" type="range" min="5" max="30" 

step="5">30</div>`;
settings.setAttribute("id", "settings");
settings.classList.add("settings");

// Флаг painters/paintings
var flag;

var paintersQuestionStep1;

//

//------------------------------------------------------------------------
/*
const paintingsPoster = new Image();
paintingsPoster.src = "images/paintings1.jpg";
paintingsPoster.onload = function () {
  document.querySelector(".paintings-poster").src = 

paintingsPoster.src;
};
*/

const img = new Image();

const resultImg = new Image();

/* const paintingsPosterImage = new Image();

paintingsPosterImage.src = "images/paintings1.jpg"; */

function getImg() {
  resultImg.src = `full/${+resultImg.src.slice(27).split("f")[0] - 1}full.jpg`;
  img.src = `full/${+img.src.slice(27).split("f")[0] + 1}full.jpg`;
}

function getResultImg() {
  resultImg.src = `full/${+resultImg.src.slice(27).split("f")[0] - 1}full.jpg`;
}

img.onload = function () {
  document.querySelector(
    ".canvas-frame"
  ).style.backgroundImage = `url(${img.src})`;
  document.querySelector(
    ".result-canvas-frame"
  ).style.backgroundImage = `url(${img.src})`;
};

resultImg.onload = function () {
  document.querySelector(
    ".result-canvas-frame"
  ).style.backgroundImage = `url(${resultImg.src})`;
};
/*
paintingsPosterImage.onload = function () {
  document.querySelector(".paintings-poster").src = paintingsPosterImage.src;
};
*/
//----------------------------------------------------------------------------
// Картинки для категорий

const categoryPaintersImage0 = new Image();
categoryPaintersImage0.src = "img/0.jpg";
const categoryPaintersImage1 = new Image();
categoryPaintersImage1.src = "img/10.jpg";
const categoryPaintersImage2 = new Image();
categoryPaintersImage2.src = "img/20.jpg";
const categoryPaintersImage3 = new Image();
categoryPaintersImage3.src = "img/30.jpg";
const categoryPaintersImage4 = new Image();
categoryPaintersImage4.src = "img/40.jpg";
const categoryPaintersImage5 = new Image();
categoryPaintersImage5.src = "img/50.jpg";
const categoryPaintersImage6 = new Image();
categoryPaintersImage6.src = "img/60.jpg";
const categoryPaintersImage7 = new Image();
categoryPaintersImage7.src = "img/70.jpg";
const categoryPaintersImage8 = new Image();
categoryPaintersImage8.src = "img/80.jpg";
const categoryPaintersImage9 = new Image();
categoryPaintersImage9.src = "img/90.jpg";
const categoryPaintersImage10 = new Image();
categoryPaintersImage10.src = "img/100.jpg";
const categoryPaintersImage11 = new Image();
categoryPaintersImage11.src = "img/110.jpg";

const categoryPaintingsImage0 = new Image();
categoryPaintingsImage0.src = "img/120.jpg";
const categoryPaintingsImage1 = new Image();
categoryPaintingsImage1.src = "img/130.jpg";
const categoryPaintingsImage2 = new Image();
categoryPaintingsImage2.src = "img/140.jpg";
const categoryPaintingsImage3 = new Image();
categoryPaintingsImage3.src = "img/150.jpg";
const categoryPaintingsImage4 = new Image();
categoryPaintingsImage4.src = "img/160.jpg";
const categoryPaintingsImage5 = new Image();
categoryPaintingsImage5.src = "img/170.jpg";
const categoryPaintingsImage6 = new Image();
categoryPaintingsImage6.src = "img/180.jpg";
const categoryPaintingsImage7 = new Image();
categoryPaintingsImage7.src = "img/190.jpg";
const categoryPaintingsImage8 = new Image();
categoryPaintingsImage8.src = "img/200.jpg";
const categoryPaintingsImage9 = new Image();
categoryPaintingsImage9.src = "img/210.jpg";
const categoryPaintingsImage10 = new Image();
categoryPaintingsImage10.src = "img/220.jpg";
const categoryPaintingsImage11 = new Image();
categoryPaintingsImage11.src = "img/230.jpg";

//Полномасштабные Картинки для вопросов

const fullImage0 = new Image();

fullImage0.src = "full/0full.jpg";

document.addEventListener("click", function (e) {
  // переход к выбору темы
  if (
    (e.which =
      1 &&
      (e.target === document.querySelector(".screen1") ||
        e.target === document.querySelector("h1") ||
        e.target === document.querySelector("h2")))
  )
    document.querySelector(".screen2").classList.add("game-mode");
  // переход к выбору категорий с вопросами по художникам

  if (
    (e.which =
      1 &&
      (e.target === document.querySelector(".painters-poster") ||
        e.target === document.querySelector(".painters-label")))
  )
    (document.querySelector(
      ".scree2-quiz-categories-and-options-container"
    ).style.marginLeft = "-0%") +
      (flag = true) +
      (document.querySelectorAll(
        "th"
      )[0].style = `background-image:url("${categoryPaintersImage0.src}")`) +
      (document.querySelectorAll(
        "th"
      )[1].style = `background-image:url("${categoryPaintersImage1.src}")`) +
      (document.querySelectorAll(
        "th"
      )[2].style = `background-image:url("${categoryPaintersImage2.src}")`) +
      (document.querySelectorAll(
        "th"
      )[3].style = `background-image:url("${categoryPaintersImage3.src}")`) +
      (document.querySelectorAll(
        "th"
      )[4].style = `background-image:url("${categoryPaintersImage4.src}")`) +
      (document.querySelectorAll(
        "th"
      )[5].style = `background-image:url("${categoryPaintersImage5.src}")`) +
      (document.querySelectorAll(
        "th"
      )[6].style = `background-image:url("${categoryPaintersImage6.src}")`) +
      (document.querySelectorAll(
        "th"
      )[7].style = `background-image:url("${categoryPaintersImage7.src}")`) +
      (document.querySelectorAll(
        "th"
      )[8].style = `background-image:url("${categoryPaintersImage8.src}")`) +
      (document.querySelectorAll(
        "th"
      )[9].style = `background-image:url("${categoryPaintersImage9.src}")`) +
      (document.querySelectorAll(
        "th"
      )[10].style = `background-image:url("${categoryPaintersImage10.src}")`) +
      (document.querySelectorAll(
        "th"
      )[11].style = `background-image:url("${categoryPaintersImage11.src}")`);
  //переход к выбору категорий с вопросами по картинами
  if (
    (e.which =
      1 &&
      (e.target === document.querySelector(".paintings-poster") ||
        e.target === document.querySelector(".paintings-label")))
  )
    (document.querySelector(
      ".scree2-quiz-categories-and-options-container"
    ).style.marginLeft = "-0%") +
      (flag = false) +
      (document.querySelectorAll(
        "th"
      )[0].style = `background-image:url("${categoryPaintingsImage0.src}")`) +
      (document.querySelectorAll(
        "th"
      )[1].style = `background-image:url("${categoryPaintingsImage1.src}")`) +
      (document.querySelectorAll(
        "th"
      )[2].style = `background-image:url("${categoryPaintingsImage2.src}")`) +
      (document.querySelectorAll(
        "th"
      )[3].style = `background-image:url("${categoryPaintingsImage3.src}")`) +
      (document.querySelectorAll(
        "th"
      )[4].style = `background-image:url("${categoryPaintingsImage4.src}")`) +
      (document.querySelectorAll(
        "th"
      )[5].style = `background-image:url("${categoryPaintingsImage5.src}")`) +
      (document.querySelectorAll(
        "th"
      )[6].style = `background-image:url("${categoryPaintingsImage6.src}")`) +
      (document.querySelectorAll(
        "th"
      )[7].style = `background-image:url("${categoryPaintingsImage7.src}")`) +
      (document.querySelectorAll(
        "th"
      )[8].style = `background-image:url("${categoryPaintingsImage8.src}")`) +
      (document.querySelectorAll(
        "th"
      )[9].style = `background-image:url("${categoryPaintingsImage9.src}")`) +
      (document.querySelectorAll(
        "th"
      )[10].style = `background-image:url("${categoryPaintingsImage10.src}")`) +
      (document.querySelectorAll(
        "th"
      )[11].style = `background-image:url("${categoryPaintingsImage11.src}")`);
  // возврат к первоначальному экрану от выбора темы
  if (
    (e.which =
      1 &&
      (e.target === document.querySelector(".quit-icon") ||
        e.target === document.querySelector(".quit-label")) &&
      document.querySelector(".screen2").classList.contains("game-mode"))
  )
    document.querySelector(".screen2").classList.remove("game-mode") +
      (document.querySelector(
        ".scree2-quiz-categories-and-options-container"
      ).style.marginLeft = "-100%") +
      document
        .querySelector(".screen2-quiz-categories-container")
        .classList.remove("categories-mode") +
      (document.querySelector(".categories-container").style.marginLeft =
        "-100%") +
      document.querySelector(".settings").classList.remove("settings-active");
  // возврат к темам
  if (
    (e.which = 1) &&
    (e.target === document.querySelector(".home-icon") ||
      e.target === document.querySelector(".home-label"))
  )
    (document.querySelector(
      ".scree2-quiz-categories-and-options-container"
    ).style.marginLeft = "-100%") +
      (document
        .querySelector(".screen2-quiz-categories-container")
        .classList.remove("categories-mode") +
        (document.querySelector(".categories-container").style.marginLeft =
          "-100%"));

  // Настройки
  /* if (
    (e.which =
      1 &&
      !document
        .querySelector(".settings")
        .classList.contains("settings-active") &&
      (e.target === document.querySelector(".home-icon") ||
        e.target === document.querySelector(".home-label")))
  )
    document.querySelector(".screen3").classList.remove("options-mode"); */
  /*  if (
    (e.which =
      1 &&
      document
        .querySelector(".settings")
        .classList.contains("settings-active") &&
      (e.target === document.querySelector(".home-icon") ||
        e.target === document.querySelector(".home-label")))
  )
    document.querySelector(".screen3").classList.remove("options-mode") +
      document.querySelector(".settings").classList.remove("settings-active"); */
  if (
    (e.which =
      1 &&
      !document
        .querySelector(".settings")
        .classList.contains("settings-active") &&
      (e.target === document.querySelector(".settings-icon") ||
        e.target === document.querySelector(".settings-label")))
  )
    return document.querySelector(".settings").classList.add("settings-active");
  if (
    (e.which =
      1 &&
      document
        .querySelector(".settings")
        .classList.contains("settings-active") &&
      (e.target === document.querySelector(".settings-icon") ||
        e.target === document.querySelector(".settings-label") ||
        e.target === document.querySelector(".close-icon")))
  )
    return document
      .querySelector(".settings")
      .classList.remove("settings-active");
  if (!document.getElementById("mute").checked)
    (document.querySelector(".volume-range").style.opacity = "30%") +
      document
        .querySelector(".volume-range")
        .setAttribute("disabled", "disabled") +
      (document.querySelector(".volume-value").innerHTML = "muted");
  if (document.getElementById("mute").checked)
    (document.querySelector(".volume-range").style.opacity = "100%") +
      document.querySelector(".volume-range").removeAttribute("disabled") +
      (document.querySelector(".volume-value").innerHTML = `

${document.querySelector(".volume-range").value}%`);
  if (!document.getElementById("time").checked)
    (document.querySelector(".time-range").style.opacity = "30%") +
      document
        .querySelector(".time-range")
        .setAttribute("disabled", "disabled") +
      (document.querySelector(".time-value").innerHTML = "disabled");
  if (document.getElementById("time").checked)
    (document.querySelector(".time-range").style.opacity = "100%") +
      document.querySelector(".time-range").removeAttribute("disabled") +
      (document.querySelector(".time-value").innerHTML = `${
        document.querySelector(".time-range").value
      } minutes`);

  // Переход к вопросам, кто художник

  if (
    (e.which = 1) &&
    flag &&
    ([...document.querySelectorAll("th")].includes(e.target) ||
      [...document.querySelectorAll("h5")].includes(e.target))
  )
    return (
      (document.querySelector(
        ".canvas-frame"
      ).style.backgroundImage = `url(${fullImage0.src}`) +
      (document.querySelector(".categories-container").style.marginLeft =
        "100%") +
      (document.querySelector("h3").innerText = "Who painted this canvas?") +
      getAnswers()
    );

  // Переход к вопросам, чья картина

  if (
    (e.which = 1) &&
    !flag &&
    ([...document.querySelectorAll("th")].includes(e.target) ||
      [...document.querySelectorAll("h5")].includes(e.target))
  )
    (document.querySelector(".categories-container").style.marginLeft =
      "100%") +
      (document.querySelector("h3").innerText = "Which canvas was painted by?") +
      (img.src = "full/0full.jpg") +
      document.querySelector("h3").classList.add("h3-questions-on-paintings") +
      getAnswers();

  //реакция на правильный ответ

  /////////////////////////////////////////// Вопросы про картины;
  /*
 let paintingsQuestions = document.createElement("div");
  paintingsQuestions.innerHTML = `<h3>Which canvas was 

painted by <span class="painter-name"></span>?

</h3></br></br></br></br>
            <div class="question-container"></div>`;
  
  paintingsQuestions.style = "position:absolute";
  if (
    (e.which = 1) &&
    !flag &&
    e.target ===
      (document.querySelectorAll("th")[0] || document.querySelectorAll("h5")[0])
  )
    document
      .querySelector(".screen2-quiz-categories-container")
      .insertAdjacentElement(
        "afterbegin",

        paintingsQuestions
      );
*/
});
