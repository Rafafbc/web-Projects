import { database } from "../firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Função para puxar os dados de cada nó filho e exibir no clique de um botão
function fetchData() {
    const dataRef = ref(database, "kumagae/");

    get(dataRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            let outputHtml = ""; // Variável para armazenar o conteúdo a ser exibido

            // Itera sobre cada nó filho (ID0, ID1, ID2, ...)
            Object.keys(data).forEach((key) => {
                const childData = data[key];
                
                // Verifica se o campo "dados" existe antes de fazer o split
                if (childData && childData.dados) {
                    const dados = childData.dados;
                    const timestamp = childData.timestamp || "Sem timestamp";

                    // Divide o campo "dados" em valores separados
                    const [param1, param2, param3, param4] = dados.split(",");

                    // Adiciona o conteúdo ao HTML para visualização
                    outputHtml += `
                        <div>
                            <h4>ID: ${key}</h4>
                            <p>Parâmetro 1: ${param1}</p>
                            <p>Parâmetro 2: ${param2}</p>
                            <p>Parâmetro 3: ${param3}</p>
                            <p>Parâmetro 4: ${param4}</p>
                            <p>Timestamp: ${timestamp}</p>
                        </div>
                        <hr>
                    `;
                } else {
                    console.log(`Nó ${key} não possui o campo "dados" ou está vazio.`);
                }
            });

            // Exibe o conteúdo na página
            document.getElementById("data-output").innerHTML = outputHtml;
        } else {
            console.log("Nenhum dado encontrado.");
            document.getElementById("data-output").innerHTML = "<p>Nenhum dado encontrado.</p>";
        }
    }).catch((error) => {
        console.error("Erro ao buscar os dados:", error);
    });
}
// Expondo a função fetchData ao escopo global
window.fetchData = fetchData;