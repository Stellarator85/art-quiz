



import path from "path";

//document.querySelector("h1").contains("")&& document.querySelector("h2")



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



promises.readdir(`${dirname(__filename)}/img`)
.catch(function (error) {
    console.log(error);
  })
  .then((files) => console.log(files.map(file => file.split("."))))
  .catch(function (error) {
    console.log(error);
  })
  /*
  fs.readFile(fs.promises.readFile(
      `${path.join(__dirname, "./project-dist", "index.html")}`,
      `utf8`
    ))
    */