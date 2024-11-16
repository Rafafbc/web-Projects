import { database } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Define os arrays para armazenar os dados
var pressoes = [];
var luxs = [];
var temperaturas = [];
var umidades = [];
var timestamps = [];

// Função para buscar e exibir dados do Realtime Database
function fetchData() {
    const dataRef = ref(database, "kumagae");

    // Retorna uma Promise para garantir que os dados foram carregados
    return get(dataRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            let outputHtml = "";

            // Limpa os arrays para evitar dados duplicados
            pressoes = [];
            luxs = [];
            temperaturas = [];
            umidades = [];
            timestamps = [];

            // Extraindo e ordenando os IDs
            const keys = Object.keys(data).sort((a, b) => {
                // Extrair o número do ID e comparar
                const numA = parseInt(a.replace('ID', ''));
                const numB = parseInt(b.replace('ID', ''));
                return numA - numB; // Ordenação numérica
            });

            // Itera sobre cada nó filho
            keys.forEach((key) => {
                const childData = data[key];
            
                // Exibe o ID do nó principal
                // // outputHtml += `<h3>Nó principal ID: ${key}</h3>`;
            
                // Verifica se o nó principal possui subnós
                if (typeof childData === 'object') {
                    Object.keys(childData).forEach((subKey) => {
                        const subNodeData = childData[subKey];
            
                        // Verifica se o subnó é uma string JSON válida e faz o parse
                        try {
                            const parsedData = JSON.parse(subNodeData);
                            // Exibe o conteúdo de parsedData no console para verificação
                            console.log(`Conteúdo de parsedData do subnó ${subKey}:`, parsedData);
                            
                            // Verifica se os dados possuem os campos esperados
                            if (parsedData.dados) {
                                const [pressao, lux, temperatura, umidade] = parsedData.dados.split(",");
                                const timestamp = parsedData.timestamp || "Sem timestamp";
                                
                                // Adiciona os valores aos arrays correspondentes
                                pressoes.push(parseFloat(pressao));
                                luxs.push(parseFloat(lux));
                                temperaturas.push(parseFloat(temperatura));
                                umidades.push(parseFloat(umidade));
                                timestamps.push(timestamp);

                                // Exibe os dados no HTML
                                // // outputHtml += `
                                // //     <div>
                                // //         <h4>Subnó ID: ${subKey}</h4>
                                // //         <p>Temperatura: ${temperatura}</p>
                                // //         <p>Umidade: ${umidade}</p>
                                // //         <p>Pressão: ${pressao}</p>
                                // //         <p>Luz: ${lux}</p>
                                // //         <p>Timestamp: ${timestamp}</p>
                                // //     </div>
                                // //     <hr>
                                // // `;
                            } else {
                                console.log(`Subnó ${subKey} não possui o campo "dados".`, parsedData);
                            }
                        } catch (error) {
                            console.log(`Erro ao analisar o subnó ${subKey}:`, error);
                        }
                    });
                } else {
                    console.log(`Nó ${key} não possui subnós no formato esperado. Conteúdo do nó:`, childData);
                }
            });
            
            // Exibe o conteúdo na página
            document.getElementById("data-output").innerHTML = outputHtml;

            // Exibe o conteúdo no Console
            console.log("Temperaturas:", temperaturas);
            console.log("Umidades:", umidades);
            console.log("Pressões:", pressoes);
            console.log("Lux:", luxs);
            console.log("Timestamps:", timestamps);
        } else {
            console.log("Nenhum dado encontrado.");
            document.getElementById("data-output").innerHTML = "<p>Nenhum dado encontrado.</p>";
        }
    }).catch((error) => {
        console.error("Erro ao buscar os dados:", error);
    });
}

// Função para obter os dados
function getDataArrays() {
    console.log("DADOS COLETADOS")
    return {
        pressoes,
        luxs,
        temperaturas,
        umidades,
        timestamps
    };
}

// Expondo a função "fetchData" e "getDataArrays" ao escopo global
window.fetchData = fetchData;
window.getDataArrays = getDataArrays;