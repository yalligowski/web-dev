let elem = document.createElement("div");
elem.innerHTML="<link rel='stylesheet' href='https://yalligowski.github.io/web-dev/header.css'></link>"
document.body.prepend(elem);

fetch("https://yalligowski.github.io/web-dev/globalheader.html")
  .then((output) => output.text())
  .then((text) => {elem.innerHTML = elem.innerHTML + text;})
  .then((e) => console.error());
