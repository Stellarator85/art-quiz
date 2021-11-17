import image from "./images/lazy.png";

const createImage = (src) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });

async function render() {
  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "This elements was created by js";
  const myImage = await createImage(image);
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage);
}

render();

document.querySelector("h1").addEventListener("click", function(e){
if (e.whichs=1) console.log("ghhghgg")
 // document.querySelector("h1").classList.add("invisible") +
}
)

//document.querySelector("h1").contains("")&& document.querySelector("h2")