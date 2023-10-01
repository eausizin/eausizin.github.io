let range = 100;
if ($link.length - kuma < 100 ) {
  range = $link.length % 100;
}

const element = document.querySelector("main");
const fragment = document.createDocumentFragment();
for (let index = 0; index < range; index++) {
  const article = document.createElement("article");
  fragment.appendChild(article);
  article.className = "item";
}

element.appendChild(fragment);

const articles = document.querySelectorAll(".item");
for (let index = 0; index < articles.length; index++) {
  const anchor = document.createElement("a");
  articles[index].appendChild(anchor);
  anchor.className = "link";
}

const anchors = document.querySelectorAll(".link");
for (let index = 0; index < articles.length; index++) {
  anchors[index].setAttribute("href", $link[index + kuma]);

  const division = document.createElement("div");
  anchors[index].appendChild(division);
  division.className = "image";

  const paragraph = document.createElement("p");
  anchors[index].appendChild(paragraph);
  paragraph.className = "title";
}

const divisions = document.querySelectorAll(".image");
const paragraphs = document.querySelectorAll(".title");
for (let index = 0; index < articles.length; index++) {
  divisions[index].style.backgroundImage = "url(" + $image[index + kuma] + ")";
  paragraphs[index].innerHTML = $title[index + kuma].slice(0, 7) + "<br>" + $title[index + kuma].slice(8);
}

const previous = document.querySelector(".previous");
if (kuma < 100) {
  previous.classList.add("anchor");
}

const next = document.querySelector(".next");
if ($link.length - kuma < 100) {
  next.classList.add("anchor");
}