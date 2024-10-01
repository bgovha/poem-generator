function generatePoem(event) {
  event.preventDefault();
  alert("generating poem...");

  new Typewriter("#poem", {
    strings:
      "I had a lamb I brought everywhere o only had one eye. At the train stations, all the grown-ups would say, be mindful of your things, little boy,",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
