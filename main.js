let active;
let clicked = 0;
let name = document.createElement("h1");
let imdb = document.createElement("span");
let rating = document.createElement("span");
let year = document.createElement("span");
let time = document.createElement("span");
let type = document.createElement("span");
imdb.className = "imdb";
imdb.textContent = "IMDb";
let dat = document.createElement("div");
dat.className = "dat";
dat.appendChild(imdb);
dat.appendChild(rating);
dat.appendChild(year);
dat.appendChild(time);
dat.appendChild(type);
let text = document.createElement("p");
let cont = document.createElement("div");
cont.className = "cont";
cont.appendChild(name);
cont.appendChild(dat);
cont.appendChild(text);
document.querySelector(".container").appendChild(cont);
let boxs = document.createElement("div");
let scrollLeft = document.createElement("span");
let scrL = document.createTextNode("<");
scrollLeft.className = "scrollLeft";
scrollLeft.appendChild(scrL);
let scrollRight = document.createElement("span");
let scrR = document.createTextNode(">");
scrollRight.appendChild(scrR);
scrollRight.className = "scrollRight";
let scroll = document.createElement("div");
scroll.className = "scroll";
scroll.appendChild(scrollLeft);
scroll.appendChild(scrollRight);
boxs.className = "boxs";
document.body.appendChild(boxs);
let loading = document.getElementById("status");
loading.style.display = "flex";
fetch("https://api.imdbapi.dev/titles")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 20; i++) {
      let box = document.createElement("div");
      box.className = "box";
      let img = document.createElement("img");
      img.src = data.titles[i].primaryImage.url;
      let value = document.createElement("option");
      value.value = data.titles[i].originalTitle;
      document.querySelector("#movies").appendChild(value);
      box.appendChild(img);
      document.querySelector(".boxs").appendChild(box);
      img.style.opacity = "0.3";
      img.style.transition = " 0.3s";
      box.style.cursor = "pointer";
      if (i === 0) {
        img.style.margin = "0 12px";
        loading.style.display = "none";
        img.classList.add("active");
        img.style.opacity = "1";
        if (window.matchMedia("(max-width: 768px)").matches) {
          img.style.transform = "scaleX(1.18) scaleY(1.189)";
        } else {
          img.style.transform = "scaleX(1.18) scaleY(1.189)";
        }
        img.style.transformOrigin = "bottom center";
        document.querySelector(".left").style.background = `
  linear-gradient(to right, rgba(0,0,0,0.53) 10% , transparent 100%),
  url(${data.titles[0].primaryImage.url}) center / cover no-repeat
`;
        if (window.matchMedia("(max-width: 768px)").matches) {
          document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.53) 60%),
  url(${data.titles[0].primaryImage.url}) center / cover no-repeat `;
        } else {
          document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.53) 100%),
  url(${data.titles[0].primaryImage.url}) center / cover no-repeat `;
        }

        name.textContent = data.titles[i].originalTitle;
        rating.textContent = data.titles[i].rating.aggregateRating;
        year.textContent = " " + data.titles[i].startYear + " year ";
        time.textContent =
          "|  " +
          Math.floor(data.titles[i].runtimeSeconds / 3600) +
          " hour " +
          Math.floor((data.titles[i].runtimeSeconds % 3600) / 60) +
          " minutes";
        let gen = data.titles[i].genres;
        type.textContent += " | " + gen[0];
        text.textContent = data.titles[i].plot;
        cont.style.display = "block";
        active = img;
      }
      img.addEventListener("click", function () {
        if (active) {
          active.style.margin = "0";
          active.classList.remove("active");
          active.style.opacity = "0.7";
          active.style.transform = "scale(1)";
          active.parentElement.style.margin = "0px";
          cont.style.display = "none";
        }
        img.classList.add("active");
        img.style.opacity = "1";
        if (window.matchMedia("(max-width: 768px)").matches) {
          img.style.transform = "scaleX(1.18) scaleY(1.189)";
        } else {
          img.style.transform = "scaleX(1.18) scaleY(1.189)";
        }

        img.style.transformOrigin = "bottom center";
        img.style.margin = "0 12px";
        img.parentElement.style.margin = "0px 10px0";
        cont.style.display = "block";
        name.textContent = data.titles[i].originalTitle;
        rating.textContent = data.titles[i].rating.aggregateRating;
        year.textContent = " " + data.titles[i].startYear + " year ";
        time.textContent =
          "|  " +
          Math.floor(data.titles[i].runtimeSeconds / 3600) +
          " hour " +
          Math.floor((data.titles[i].runtimeSeconds % 3600) / 60) +
          " minutes";
        let gen = data.titles[i].genres;
        type.textContent = "";

        type.textContent += " | " + gen[0];
        text.textContent = data.titles[i].plot;
        clicked = i;
        document.querySelector(".left").style.background = `
  linear-gradient(to right, rgba(0,0,0,0.53), rgba(0,0,0,0)),
  url(${data.titles[i].primaryImage.url}) center / cover no-repeat  `;
        if (window.matchMedia("(max-width: 768px)").matches) {
          document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.53) 60%),
  url(${data.titles[i].primaryImage.url}) center / cover no-repeat `;
        } else {
          document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.53) 100%),
  url(${data.titles[i].primaryImage.url}) center / cover no-repeat `;
        }

        active = img;
      });
      img.addEventListener("mouseover", function () {
        img.style.opacity = "1";
        img.style.margin = "0 12px";
        if (window.matchMedia("(max-width: 768px)").matches) {
          img.style.transform = "scaleX(1.18) scaleY(1.189)";
        } else {
          img.style.transform = "scaleX(1.18) scaleY(1.189)";
        }
        img.style.transformOrigin = "bottom center";
        document.querySelector(".left").style.background = `
  linear-gradient(to right, rgba(0,0,0,0.53), rgba(0,0,0,0)),
  url(${data.titles[i].primaryImage.url}) center / cover no-repeat  `;
        if (window.matchMedia("(max-width: 768px)").matches) {
          document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.53) 60%),
  url(${data.titles[i].primaryImage.url}) center / cover no-repeat `;
        } else {
          document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.53) 100%),
  url(${data.titles[i].primaryImage.url}) center / cover no-repeat `;
        }

        name.textContent = data.titles[i].originalTitle;
        rating.textContent = data.titles[i].rating.aggregateRating;
        year.textContent = " " + data.titles[i].startYear + " year ";
        time.textContent =
          "|  " +
          Math.floor(data.titles[i].runtimeSeconds / 3600) +
          " hour " +
          Math.floor((data.titles[i].runtimeSeconds % 3600) / 60) +
          " minutes";
        let gen = data.titles[i].genres;
        type.textContent = "";

        type.textContent += " | " + gen[0];
        text.textContent = data.titles[i].plot;
        cont.style.display = "block";
      });
      img.addEventListener("mouseout", function () {
        if (img !== active) {
          img.style.opacity = "0.5";
          img.style.margin = "0 ";
          img.style.transform = "scale(1)";
          document.querySelector(".left").style.background = `
  linear-gradient(to right, rgba(0,0,0,0.53), rgba(0,0,0,0)),
  url(${data.titles[clicked].primaryImage.url}) center / cover no-repeat  `;
          if (window.matchMedia("(max-width: 768px)").matches) {
            document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.53) 60%),
  url(${data.titles[clicked].primaryImage.url}) center / cover no-repeat `;
          } else {
            document.querySelector(".right").style.background = `
  linear-gradient(to left, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.53) 100%),
  url(${data.titles[clicked].primaryImage.url}) center / cover no-repeat `;
          }

          name.textContent = data.titles[clicked].originalTitle;
          rating.textContent = data.titles[clicked].rating.aggregateRating;
          year.textContent = " " + data.titles[clicked].startYear + " year ";
          time.textContent =
            "|  " +
            Math.floor(data.titles[clicked].runtimeSeconds / 3600) +
            " hour " +
            Math.floor((data.titles[clicked].runtimeSeconds % 3600) / 60) +
            " minutes";
          let gen = data.titles[clicked].genres;
          type.textContent = "";

          type.textContent += " | " + gen[0];
          text.textContent = data.titles[clicked].plot;
          cont.style.display = "block";
        }
      });
    }
    document.querySelector(".container").appendChild(boxs);
    document.querySelector(".container").appendChild(scroll);
  });
scrollLeft.addEventListener("click", () => {
  document.querySelector(".boxs").scrollBy({
    left: -300,
    behavior: "smooth",
  });
});
scrollRight.addEventListener("click", () => {
  document.querySelector(".boxs").scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
