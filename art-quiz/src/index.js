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

//----------------------------------------------------------------------------

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
      )[0].style = `background-image:url("img/0.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[1].style = `background-image:url("img/10.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[2].style = `background-image:url("img/20.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[3].style = `background-image:url("img/30.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[4].style = `background-image:url("img/40.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[5].style = `background-image:url("img/50.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[6].style = `background-image:url("img/60.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[7].style = `background-image:url("img/70.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[8].style = `background-image:url("img/80.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[9].style = `background-image:url("img/90.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[10].style = `background-image:url("img/100.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[11].style = `background-image:url("img/110.jpg")`);
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
      )[0].style = `background-image:url("img/120.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[1].style = `background-image:url("img/130.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[2].style = `background-image:url("img/140.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[3].style = `background-image:url("img/150.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[4].style = `background-image:url("img/160.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[5].style = `background-image:url("img/170.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[6].style = `background-image:url("img/180.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[7].style = `background-image:url("img/190.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[8].style = `background-image:url("img/200.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[9].style = `background-image:url("img/210.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[10].style = `background-image:url("img/220.jpg")`) +
      (document.querySelectorAll(
        "th"
      )[11].style = `background-image:url("img/230.jpg")`);
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
    [...document.querySelectorAll("th")].includes(e.target)
  )
    (document.querySelector(".categories-container").style.marginLeft =
      "100%") +
      (document.querySelector("h3").innerText = "Who painted this canvas?") +
      (img.src = "full/0full.jpg") +
      getAnswers();

  // Переход к вопросам, чья картина

  if (
    (e.which = 1) &&
    !flag &&
    [...document.querySelectorAll("th")].includes(e.target)
  )
    (document.querySelector(".categories-container").style.marginLeft =
      "100%") +
      (document.querySelector("h3").innerText =
        "Which canvas was painted by?") +
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
