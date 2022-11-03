function createGame(player1, hour, player2) {
return `
<li>
  <img src="./assets/icon-${player1}.svg" alt="${player1}">
  <strong>${hour}</strong>
  <img src="./assets/icon-${player2}.svg" alt="${player2}">
</li>
`
}

function createCard (date, day, games) {
  return `<div class="card">
  <h2>${date} <span>${day}</span></h2>
  <ul>
  ${games}
  </ul>
</div>`
}




document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo-NLW">
</header>
<main id="cards">
  ${createCard(`12/12`, "segunda", 
  createGame('brazil', '16:00', 'cameroon') + createGame('switzerland', '16:00', 'portugal'))}
  ${createCard(`10/10`, "sexta", createGame('switzerland', '13:00','brazil' ))} 
  ${createCard(`02/03`, "quinta", createGame('brazil', '16:00', 'portugal'))} 
</main>
`