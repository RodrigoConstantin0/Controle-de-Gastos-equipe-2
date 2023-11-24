let gastos = [
    { mes: 'Janeiro', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Fevereiro', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Março', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Abril', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Maio', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Junho', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Julho', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Agosto', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Setembro', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Outubro', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Novembro', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Dezembro', gastosMensais: { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }, totalGastos: 0, sobrou: 0, orcamentoMensal: 0 },
];

let gastosTotal = { Energia: 0, Agua: 0, Aluguel: 0, Escola: 0, Supermercado: 0 }


//Segunda versão em prompt adicionar gastos
function adicionarGasto() {
    const form = document.getElementById('gastoForm');
    const escolhaMes = form.elements['mes'].value.trim();
    const tipoGasto = form.elements['tipoGasto'].value.trim();
    const novoValor = parseFloat(form.elements['valor'].value);
    const escolhaIndex = gastos.findIndex(item => item.mes.toLowerCase() === escolhaMes.toLowerCase());

    gastos[escolhaIndex].gastosMensais[tipoGasto] += parseInt(novoValor);
    gastos[escolhaIndex].totalGastos = parseInt(gastos[escolhaIndex].totalGastos) + parseInt(novoValor);
    gastos[escolhaIndex].sobrou = parseInt(gastos[escolhaIndex].sobrou) - parseInt(novoValor);
    gastosTotal[tipoGasto] = parseInt(gastosTotal[tipoGasto]) + parseInt(novoValor);

    console.log(`Gasto adicionado com sucesso! ${tipoGasto} em ${gastos[escolhaIndex].mes}: ${novoValor}`);
    form.reset();
    console.log(gastos)
    console.log(gastosTotal)
}

function orcamentoTotal() {
    let gastoAnual = parseFloat(prompt(`Qual o seu orçamento anual?`))

    for (let i = 0; i < gastos.length; i++) {
        gastos[i].orcamentoMensal = (gastoAnual / 12)
        gastos[i].sobrou = (gastoAnual / 12)
    }
}

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

function editarGastosDoMes(mes) {
    let campo = prompt(`Digite o campo que deseja editar em ${gastos[mes].mes} (Energia, Agua, Aluguel, Escola, Supermercado):`)
    campo = campo.charAt(0).toUpperCase() + campo.slice(1).toLowerCase()

    if (campo in gastos[mes].gastosMensais) {
        let novoValor = parseFloat(prompt(`Digite o novo valor para ${campo} em ${gastos[mes].mes}:`));
        gastos[mes].gastosMensais[campo] = novoValor
        console.log(`Gasto editado com sucesso! Novo valor de ${campo} em ${gastos[mes].mes}: ${novoValor}`)

        let deletar = prompt(`Deseja deletar algum gasto de ${gastos[mes].mes}? (sim/não)`);
        if (deletar.toLowerCase() === 'sim') {
            let tipoGasto = prompt(`Digite o tipo de gasto que deseja deletar de ${gastos[mes].mes}:`);
            deletarGastoDoMes(mes, tipoGasto);
        }
    } else {
        console.log(`Campo inválido. Certifique-se de digitar um dos campos válidos: Energia, Agua, Aluguel, Escola, Supermercado`)
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


function removerGasto(indice) {
    const tipoGasto = prompt(`Digite o tipo de gasto que deseja remover para o mês ${gastos[indice].mes}:`);
    if (tipoGasto in gastos[indice].gastosMensais) {
        delete gastos[indice].gastosMensais[tipoGasto];
        console.log(`Gasto de ${tipoGasto} no mês de ${gastos[indice].mes} foi removido.`);
        criarTabela(); // Atualiza a tabela após a remoção do gasto
    } else {
        console.log(`Tipo de gasto inválido ou inexistente para o mês de ${gastos[indice].mes}.`);
    }
}

function criarTabela() {
    const tabelaBody = document.getElementById('tabelaGastosBody');
    const tabelaGastos = document.getElementById('tabelaGastos');
    const botaoGastos = document.getElementById('botaoGastos');

    // Limpar o conteúdo anterior da tabela
    tabelaBody.innerHTML = '';

    // Iterar sobre os gastos e adicionar linhas à tabela
    for (let i = 0; i < gastos.length; i++) {
        const mes = gastos[i].mes;
        const gastosMensais = gastos[i].gastosMensais;

        // Verificar se algum gasto é diferente de zero
        const temGasto = Object.values(gastosMensais).some(valor => valor !== 0);

        if (temGasto) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${mes}</td>
            <td>${gastosMensais.Energia || 0}</td>
            <td>${gastosMensais.Agua || 0}</td>
            <td>${gastosMensais.Aluguel || 0}</td>
            <td>${gastosMensais.Escola || 0}</td>
            <td>${gastosMensais.Supermercado || 0}</td>
            <td>${gastos[i].totalGastos || 0}</td>
            <td>${gastos[i].sobrou < 0 ? "Orçamento insuficiente!" : "Orçamento suficiente para quitar gastos!"}</td>
            <td>${gastos[i].orcamentoMensal || 0}</td>
            <td><button onclick="removerGasto(${i})">Remover</button></td>`;
            tabelaBody.appendChild(row);
        }
     
    }    
    const botoesRemover = document.querySelectorAll('.remover-gasto');
    botoesRemover.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            removerGasto(indice);
        });
    });

    criarTabelaTotalAno();
    // Mostrar a tabela e o título
    tabelaGastos.style.display = 'table';
    //Retirar botão da tela
    // botaoGastos.style.display = 'none';    
}
function criarTabelaTotalAno() {
    const tabelaBody = document.getElementById('tabelaGastosTotalAnoBody');
    const tabelaGastos = document.getElementById('tabelaGastosTotalAno');
    
    // Limpar o conteúdo anterior da tabela
    tabelaBody.innerHTML = '';
    
    const row = document.createElement('tr');
    row.innerHTML = `       <td>${gastosTotal.Energia || 0}</td>
    <td>${gastosTotal.Agua || 0}</td>
    <td>${gastosTotal.Aluguel || 0}</td>
    <td>${gastosTotal.Escola || 0}</td>
    <td>${gastosTotal.Supermercado || 0}</td>`;
    tabelaBody.appendChild(row);
    
    // Mostrar a tabela
    tabelaGastos.style.display = 'table';
    // Função para remover um gasto específico para o mês correspondente
}
// let divgastos = document.getElementById('gastos', '<br>');
// divgastos.innerHTML = JSON.stringify(gastos);
// document.write(gastos)
// menuEditarGastos()
// totalGastosDoMes(0) //Janeiro
// totalGastosDoMes(1) //Fevereiro
orcamentoTotal()
totalAno()