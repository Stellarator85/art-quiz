//import image from "./images/lazy.png";

const createImage = (src) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
/*
async function render() {
  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "This elements was created by js";
  const myImage = await createImage(image);
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage);
}

render();
*/


//document.querySelector("h1").contains("")&& document.querySelector("h2")



const readline = require("readline").createInterface(
  process.stdin,
  process.stdout
);

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

/*       
var img = document.createElement("img");

img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay().slice(
  5
)}/${getRandomNum(1, 20).toString().padStart(2, 0)}.jpg`;

img.onload = function () {
  document.body.style.backgroundImage = `url(${img.src})`;
};
*/
//


/*
fs.promises.readdir(`${path.dirname(__filename)}/img`)
.catch(function (error) {
    console.log(error);
  })
  .then((files) => console.log(files.map(file => file.split("."))))
  .catch(function (error) {
    console.log(error);
  })
  
  fs.readFile(fs.promises.readFile(
      `${path.join(__dirname, "./project-dist", "index.html")}`,
      `utf8`
    ))
    */