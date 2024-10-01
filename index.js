function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();
  let instructions= document.querySelector("#instructions")
let apiKey = "2abt3d4e02aa5e6116ef006dbocad3a0";
let prompt=`generate a poem about ${instructions.value}`;
let context="you are a romantic poem expert and love to write short poems. your mission is to write 4 line poems, make sure to folow the user instructions";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML= `<div class = "generating">⌛generating a poem...</div>`;

  axios.get(apiUrl).then(displayPoem);

}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
