const txtToTranslate = document.querySelectorAll("[data-section]");
const timelineDiv = document.getElementsByClassName("timeline")[0];

document.getElementById("spainFlag").addEventListener("click", () => {
  changeLanguage("es");
});

document.getElementById("ukFlag").addEventListener("click", () => {
  changeLanguage("en");
});

const changeLanguage = async (language) => {
  timelineDiv.innerHTML = "";
  console.log(language);
  timelineDiv, (innerHTML = "");
  let requestJson;
  if (language == "es") {
    requestJson = await fetch(`./languages/es.json`);
  } else {
    requestJson = await fetch(`./languages/en.json`);
  }
  const json = await requestJson.json();

  let index = 0;
  for (const key in json) {
    const section = json[key];

    section.forEach((element) => {
      console.log(element);

      const containerDiv = document.createElement("div");
      containerDiv.classList.add("container");

      if (index % 2 == 0) {
        containerDiv.classList.add("left");
      } else {
        containerDiv.classList.add("right");
      }

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content");

      const titleH2 = document.createElement("h2");
      titleH2.textContent = element.title;

      const subtitleP = document.createElement("p");
      subtitleP.classList.add("subtitle");
      subtitleP.textContent = element.date;

      const descriptionP = document.createElement("p");
      descriptionP.classList.add("description");
      descriptionP.textContent = element.description;

      contentDiv.appendChild(titleH2);
      contentDiv.appendChild(subtitleP);
      contentDiv.appendChild(descriptionP);
      containerDiv.appendChild(contentDiv);
      timelineDiv.appendChild(containerDiv);

      index++;
    });
  }
};

changeLanguage();