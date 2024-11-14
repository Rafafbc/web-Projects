import { database } from "./firebase.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Exemplo de uso
const gameData = {
    id: "game3", // ID do jogo
    name: "Jogo de Exemplo",
    score: 100,
    timestamp: new Date().toISOString()
};

// Função para criar um novo jogo
function newGame(gameData) {
    const gameRef = ref(database, 'games/' + gameData.id);
    set(gameRef, gameData)
        .then(() => {
            console.log("Novo jogo salvo com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao salvar o novo jogo:", error);
        });
}
// Expondo a função "newGame" e "gameData" ao escopo global, para ser usado no 'data.html' e no 'game_database.js'
window.newGame = newGame;
window.gameData = gameData;
