// Estilo da página '02_users_details.html'
const usersDetailsStyleContent = `
    div{
        width: 100%;
    }   

    body > div img {
        padding: 0px;
        margin: 0px;
        height: 100px;
        border: 3px solid black;
        border-radius: 5px;
        margin-bottom: 0.5px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        border-right: 1px solid rgb(204, 204, 204);
        border-left: 1px solid rgb(204, 204, 204);
        border-bottom: 2px solid rgb(204, 204, 204);
    }
    /* Fundo para linhas ímpares */
    tr:nth-child(odd) {
        background-color: rgb(204, 204, 204);
    }
    /* Fundo para linhas pares */
    tr:nth-child(even) {
        background-color: transparent;
    }

    td:first-child{
        font-weight: bold;
        text-align: left;
        vertical-align: middle;
        width: 50%;
    }
    td:last-child{
        text-align: left;
        vertical-align: middle;
        width: 50%;
    }
`;

// Cria um elemento 'style' no head
//const styleElement = document.createElement("style");
//styleElement.textContent = usersDetailsStyleContent;
//document.head.appendChild(styleElement);         // Aplica o CSS na página

function carregarDetalhesMiguel() {
    fetch('02_users_details.html')
        .then(response => response.text())
        .then(data => {
            // Cria um elemento temporário para armazenamento do .html carregado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Seleciona a 'div' específica dentro do conteúdo do arquivo
            const divCorreta = tempDiv.querySelector('#miguel-info');

            // Inserção da 'div' correta no local desejado
            if (divCorreta) {
                // Insere o HTML
                document.getElementById("detalhes").innerHTML = divCorreta.outerHTML;
            } else {
                console.error("A 'div' de interesse não foi encontrada no arquivo .html!");
            }
        })
        .catch(error => console.error('Erro ao cerregar o .html: ', error));
}

// import { Users } from 'users.js';

// Users.forEach(user => {
//     // Cria um novo elemento <tr> para representar uma linha da tabela.
//     const tr = document.createElement('tr');

//     // Define o conteúdo da linha de tabela com informações do usuário.
//     const trContent = `
//         <td>${user.userName}</td>             // Nome do usuário
//         <td>${user.activityField}</td>        // Campo de atuação
//         <td>${user.affiliatedInstitute}</td>  // Instituto afiliado
//         <td class="primary">Details</td>      // Coluna de ação para detalhes
//     `;

//     // Define o conteúdo HTML dentro do elemento <tr>.
//     tr.innerHTML = trContent;

//     // Adiciona a linha (tr) ao corpo da tabela na página.
//     document.querySelector('table tbody').appendChild(tr);
// });

// // Importa o array Users de outro arquivo, se necessário
// import { Users } from './caminho/do/arquivo/onde/Users/esta.js';

// // Função que carrega os detalhes de um usuário específico
// function carregarDetalhesUsuario(userName) {
//     fetch('02_users_details.html')
//         .then(response => response.text())
//         .then(data => {
//             const tempDiv = document.createElement('div');
//             tempDiv.innerHTML = data;

//             // Encontra a div específica com base no ID do usuário
//             const divCorreta = tempDiv.querySelector(`#${userName.replace(/\s/g, '').toLowerCase()}-info`);

//             if (divCorreta) {
//                 document.getElementById("detalhes").innerHTML = divCorreta.outerHTML;
//             } else {
//                 console.error(`A 'div' de interesse não foi encontrada para ${userName}!`);
//             }
//         })
//         .catch(error => console.error('Erro ao carregar o .html: ', error));
// }

// // Exibição da tabela com os dados de Users
// Users.forEach(user => {
//     const tr = document.createElement('tr');

//     const trContent = `
//         <td>${user.userName}</td>
//         <td>${user.activityField}</td>
//         <td>${user.affiliatedInstitute}</td>
//         <td class="primary"><button class="details-btn" data-username="${user.userName}">Details</button></td>
//     `;

//     tr.innerHTML = trContent;

//     // Adiciona o evento de clique no botão "Details"
//     tr.querySelector('.btn-Miguel').addEventListener('click', () => {
//         carregarDetalhesUsuario(user.userName);
//     });

//     document.querySelector('table tbody').appendChild(tr);
// });
