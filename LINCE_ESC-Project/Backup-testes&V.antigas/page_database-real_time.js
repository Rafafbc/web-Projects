// Referência ao nó no banco de dados
const dataRef = firebase.database().ref("kumagae/");

// Função para puxar os dados de cada nó filho e exibir
dataRef.on("value", (snapshot) => {
    const data = snapshot.val();
    let outputHtml = "";            // Variável para armazenar o conteúdo

    // Iteração sobre cada nó filho (ID0, ID1, ID2, [...])
    snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        
        // Extrai os dados e o timestamp de cada nó filho
        const dados = childData.dados;
        const timestamp = childData.timestamp;
        
        // Divide o campo "dados" em valores separados
        const [param1, param2, param3, param4] = dados.split(",");

        // Adiciona o conteúdo ao HTML para visualização
        outputHtml += `
            <div>
                <h4>ID: ${childSnapshot.key}</h4>
                <p>Parâmetro 1: ${param1}</p>
                <p>Parâmetro 2: ${param2}</p>
                <p>Parâmetro 3: ${param3}</p>
                <p>Parâmetro 4: ${param4}</p>
                <p>Timestamp: ${timestamp}</p>
            </div>
            <hr>
        `;
    });

    // Exibe o conteúdo na página
    document.getElementById("data-real_time").innerHTML = outputHtml;
});