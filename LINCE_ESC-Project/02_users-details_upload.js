// Plotagem dos detalhes do 1° usuário
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

// Plotagem dos detalhes do 2° usuário
function carregarDetalhesCarla() {
    fetch('02_users_details.html')
        .then(response => response.text())
        .then(data => {
            // Cria um elemento temporário para armazenamento do .html carregado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Seleciona a 'div' específica dentro do conteúdo do arquivo
            const divCorreta = tempDiv.querySelector('#carla-info');

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

// Plotagem dos detalhes do 3° usuário
function carregarDetalhesRafael() {
    fetch('02_users_details.html')
        .then(response => response.text())
        .then(data => {
            // Cria um elemento temporário para armazenamento do .html carregado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Seleciona a 'div' específica dentro do conteúdo do arquivo
            const divCorreta = tempDiv.querySelector('#rafael-info');

            // Inserção da 'div' correta no local desejado
            if (divCorreta) {
                // Insere o HTML
                document.getElementById("detalhes").innerHTML = divCorreta.outerHTML;
            } else {
                console.error("A 'div' de interesse não foi encontrada no arquivo .html!");
            }
        })
        .catch(error => console.error('Erro ao cerregar o .html: ', error));
    document.createElement('hr');
}

// Plotagem dos detalhes de todos
function carregarDetalhesTodos() {
    fetch('02_users_details.html')
        .then(response => response.text())
        .then(data => {
            // Cria um elemento temporário para armazenamento do .html carregado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Seleciona as 'div' específica dentro do conteúdo do arquivo
            const divCorreta1 = tempDiv.querySelector('#miguel-info');
            const divCorreta2 = tempDiv.querySelector('#carla-info');
            const divCorreta3 = tempDiv.querySelector('#rafael-info');

            // Supondo que `parentDiv` seja o elemento onde você quer adicionar as divs
            const parentDiv = document.getElementById('parentDiv');

            // Adicionando as divs em sequência ao `parentDiv`
            parentDiv.appendChild(divCorreta1);
            parentDiv.appendChild(divCorreta2);
            parentDiv.appendChild(divCorreta3);

            // Inserção da 'div' correta no local desejado
            if (divCorreta) {
                // Insere o HTML
                document.getElementById("detalhes").innerHTML = parentDiv.outerHTML;
            } else {
                console.error("A 'div' de interesse não foi encontrada no arquivo .html!");
            }
        })
        .catch(error => console.error('Erro ao cerregar o .html: ', error));
    document.createElement('hr');
}