//Primeira versão em prompt orcamento
// function orcamentoTotal() {
//     // let gastoAnual = parseFloat(prompt(`Qual o seu orçamento anual?`))

//     for (let i = 0; i < gastos.length; i++) {
//         gastos[i].orcamentoMensal = (gastoAnual / 12)
//         gastos[i].sobrou = (gastoAnual / 12)
//     }
// }

//Primeira versão em prompt adicionar gastos
// function preencherGastosDoMes(mes) {
//     gastos[mes].gastosMensais.Energia = parseFloat(prompt(`Digite o valor gasto com Energia em ${gastos[mes].mes}`))
//     gastos[mes].gastosMensais.Agua = parseFloat(prompt(`Digite o valor gasto com Agua em ${gastos[mes].mes}`))
//     gastos[mes].gastosMensais.Aluguel = parseFloat(prompt(`Digite o valor gasto com Aluguel em ${gastos[mes].mes}`))
//     gastos[mes].gastosMensais.Escola = parseFloat(prompt(`Digite o valor gasto com Escola em ${gastos[mes].mes}`))
//     gastos[mes].gastosMensais.Supermercado = parseFloat(prompt(`Digite o valor gasto com Supermercado em ${gastos[mes].mes}`))
// }

// // Preenchendo os gastos para cada mês
// for (let i = 0; i < gastos.length; i++) {
//     preencherGastosDoMes(i)
// }

function menuEditarGastos() {
    let continuar = true;
    const meses = ['Janeiro', 'Fevereiro', 'Março',
        'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    while (continuar) {
        let escolhaMes = prompt("Digite o nome do mês que deseja editar ou 'sair' para sair:");
        let escolhaIndex = meses.indexOf(escolhaMes.charAt(0).toUpperCase() + escolhaMes.slice(1).toLowerCase());

        if (escolhaIndex !== -1) {
            editarGastosDoMes(escolhaIndex);
        } else if (escolhaMes.toLowerCase() === 'sair') {
            continuar = false;
        } else {
            console.log("Nome do mês inválido. Tente novamente ou digite 'sair' para sair.");
        }
    }
}



function totalGastosDoMes(mes) {
    let gastosMensais = gastos[mes].gastosMensais;
    let total = 0
    for (let categoria in gastosMensais) {
        total += gastosMensais[categoria]
    }
    return total
}

// //Gastos de todos os meses
// for (let i = 0; i < gastos.length; i++) {
//     document.write(`Total de gastos em ${gastos[i].mes}: R$${totalGastosDoMes(i).toFixed(2)} <br>`);
//     gastos[i].totalGastos = totalGastosDoMes(i).toFixed(2);
// }


//total ano 
//total gastos no ano
function totalAno() {
    let totaisNoAno = {
        energia: totalEnergia(),
        agua: totalAgua(),
        aluguel: totalAluguel(),
        escola: totalEscola(),
        supermercado: totalSupermercado()
    }
    console.log(`${JSON.stringify(totaisNoAno)}`)
}

//Funções por tipo de gasto
function totalEnergia() {
    let totalAnualEnergia = 0;
    for (let i = 0; i < gastos.length; i++) {
        totalAnualEnergia += gastos[i].gastosMensais.Energia || 0
    }
    return totalAnualEnergia
}

//Agua
function totalAgua() {
    let totalAnualAgua = 0;

    for (let i = 0; i < gastos.length; i++) {
        totalAnualAgua += gastos[i].gastosMensais.Agua || 0
    }
    return totalAnualAgua;
}

//Aluguel
function totalAluguel() {
    let totalAnualAluguel = 0;

    for (let i = 0; i < gastos.length; i++) {
        totalAnualAluguel += gastos[i].gastosMensais.Aluguel || 0
    }
    return totalAnualAluguel;
}

//Escola
function totalEscola() {
    let totalAnualEscola = 0;

    for (let i = 0; i < gastos.length; i++) {
        totalAnualEscola += gastos[i].gastosMensais.Escola || 0
    }
    return totalAnualEscola;
}

//Supermercado
function totalSupermercado() {
    let totalAnualSupermercado = 0;

    for (let i = 0; i < gastos.length; i++) {
        totalAnualSupermercado += gastos[i].gastosMensais.Supermercado || 0
    }
    return totalAnualSupermercado;
}