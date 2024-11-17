// const { colorText, colorLine, colorBackground } = window.appThemeVariables;

let myChart = null; // Variável global para armazenar a instância do gráfico

// Função para filtrar os dados conforme a quantidade selecionada
function filterDataByQuantity(data, quantity) {
    return {
        timestamps: data.timestamps.slice(0, quantity),
        temperaturas: data.temperaturas.slice(0, quantity),
        umidades: data.umidades.slice(0, quantity),
        pressoes: data.pressoes.slice(0, quantity),
        luxs: data.luxs.slice(0, quantity)
    };
}

// Função para plotar o gráfico de Pressão
function plotPressChart(quantity = 100) {
    // Seleciona a div desejada
    const infoData1 = document.getElementById("data-info_1");

    // Remove o canvas existente se já estiver presente
    const existingCanvas = document.getElementById('my-Chart');
    if (existingCanvas) {
        existingCanvas.remove();
    }

    // Cria um novo elemento <canvas> para exibir o gráfico
    const plotedChart = document.createElement("canvas");
    plotedChart.id = 'my-Chart';
    plotedChart.width = 800;  // Largura
    plotedChart.height = 400; // Altura
    infoData1.appendChild(plotedChart);

    console.log("plotChart!!!!!");

    // Recupera os dados completos
    const data = getDataArrays();
    console.log("Dados totais: ", data);

    // Filtra os dados com base na quantidade selecionada
    const filteredData = filterDataByQuantity(data, quantity);
    console.log("Dados filtrados: ", filteredData);

    // Define o contexto 2D do novo canvas
    const ctx = plotedChart.getContext('2d');

    // Verifica se já existe um gráfico. Se sim, destrói o gráfico anterior.
    if (myChart !== null) {
        myChart.destroy();
    }

    // Cria o gráfico
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: filteredData.timestamps, // Eixo X
            datasets: [
                {
                    label: 'Pressão',
                    data: filteredData.pressoes,
                    borderColor: 'rgb(78, 212, 78, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            //maintainAspectRatio: false, // Permite personalizar o tamanho
            plugins: {
                title: {
                    display: true, // Habilita o título
                    text: 'Série temporal dos dados', // Texto do título
                    font: {
                        size: 18, // Tamanho da fonte do título
                        weight: 'bold' // Peso da fonte
                    },
                    //color: '#333', // Cor do título
                    padding: {
                        top: 10, // Espaçamento superior
                        bottom: 10 // Espaçamento inferior
                    }
                }
            },
            scales: {
                x: {
                    title: {                // Título do eixo x
                        display: true,
                        text: 'Tempo',
                        //color: '#333'
                    },
                    ticks: {                // Rótulos do eixo x
                        //color: '#333'
                    }
                },
                y: {
                    title: {                // Título do eixo y
                        display: true,
                        text: 'Valores',
                        //color: '#333'
                    },
                    ticks: {                // Rótulos do eixo y
                        //color: '#333'
                    }
                }
            }
        }
    });

    console.log("Gráfico plotado com sucesso!");
}

// Função para plotar o gráfico de Lux
function plotLuxChart(quantity = 100) {
    // Seleciona a div desejada
    const infoData1 = document.getElementById("data-info_1");

    // Remove o canvas existente se já estiver presente
    const existingCanvas = document.getElementById('my-Chart');
    if (existingCanvas) {
        existingCanvas.remove();
    }

    // Cria um novo elemento <canvas> para exibir o gráfico
    const plotedChart = document.createElement("canvas");
    plotedChart.id = 'my-Chart';
    plotedChart.width = 800;  // Largura
    plotedChart.height = 400; // Altura
    infoData1.appendChild(plotedChart);

    console.log("plotChart!!!!!");

    // Recupera os dados completos
    const data = getDataArrays();
    console.log("Dados totais: ", data);

    // Filtra os dados com base na quantidade selecionada
    const filteredData = filterDataByQuantity(data, quantity);
    console.log("Dados filtrados: ", filteredData);

    // Define o contexto 2D do novo canvas
    const ctx = plotedChart.getContext('2d');

    // Verifica se já existe um gráfico. Se sim, destrói o gráfico anterior.
    if (myChart !== null) {
        myChart.destroy();
    }

    // Cria o gráfico
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: filteredData.timestamps, // Eixo X
            datasets: [
                {
                    label: 'Lux',
                    data: filteredData.luxs, // Eixo Y
                    borderColor: 'rgb(210, 210, 0, 1)',
                    backgroundColor: 'rgb(210, 210, 0, 0.2)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            //maintainAspectRatio: false, // Permite personalizar o tamanho
            plugins: {
                title: {
                    display: true, // Habilita o título
                    text: 'Série temporal dos dados', // Texto do título
                    font: {
                        size: 18, // Tamanho da fonte do título
                        weight: 'bold' // Peso da fonte
                    },
                    //color: '#333', // Cor do título
                    padding: {
                        top: 10, // Espaçamento superior
                        bottom: 10 // Espaçamento inferior
                    }
                }
            },
            scales: {
                x: {
                    title: {                // Título do eixo x
                        display: true,
                        text: 'Tempo',
                        //color: '#333'
                    },
                    ticks: {                // Rótulos do eixo x
                        //color: '#333'
                    }
                },
                y: {
                    title: {                // Título do eixo y
                        display: true,
                        text: 'Valores',
                        //color: '#333'
                    },
                    ticks: {                // Rótulos do eixo y
                        //color: '#333'
                    }
                }
            }
        }
    });

    console.log("Gráfico plotado com sucesso!");
}

// Função para lidar com a seleção da quantidade de dados
function handleDataQuantitySelection() {
    const quantityInput = document.getElementById('data-quantity'); // Seletor de quantidade de dados

    const quantity = parseInt(quantityInput.value);

    // Chama a função de plotagem passando a quantidade de dados selecionada
    plotPressChart(quantity);
    plotLuxChart(quantity);
}

// Exemplo de como integrar com a interface de usuário (HTML)
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
        .then(() => {
            getDataArrays();
        });

    // Adiciona um ouvinte para o evento de mudança no campo de quantidade de dados
    document.getElementById('data-quantity').addEventListener('change', handleDataQuantitySelection);
});

// Expondo a função "plotChart" ao escopo global
window.plotPressChart = plotPressChart;
window.plotLuxChart = plotLuxChart;
window.handleDataQuantitySelection = handleDataQuantitySelection;