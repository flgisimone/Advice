const bodyEl = document.querySelector("body")

function createCard (){
    const containerCard = document.createElement("div")
    containerCard.className = "containerCard";
    const card = document.createElement("div")
    card.className = "card";

    const idADvice = document.createElement("p")
    idADvice.textContent = `# `;

    const advice = document.createElement("h4")
    advice.textContent = `advice`;

    const imgPattern = document.createElement("img")
    imgPattern.setAttribute("src", "./assets/pattern-divider-desktop.svg")
    imgPattern.setAttribute("alt", "pattern img")

    const btn = document.createElement("button")
    const imgBtn = document.createElement("img")
    imgBtn.setAttribute("src", "./assets/icon-dice.svg")
    imgBtn.setAttribute("alt", "button")

    btn.append(imgBtn)
    card.append(idADvice, advice, imgPattern, btn)
    containerCard.append(card)
    bodyEl.appendChild(containerCard)
}
createCard ()

fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
.then ((response) => response.json())
.then ((response) => {

    const advice = document.querySelector("h4")
    const idAdvice = document.querySelector("p")

    advice.innerText = `"` + response.slip.advice + `"`;
    idAdvice.innerText = "ADVICE #"+response.slip.id;

    const btnReload = document.querySelector("button") 
    btnReload.addEventListener("click", () =>{
        location.reload();
    })})
.catch((e) => console.log("Error:" + e));










