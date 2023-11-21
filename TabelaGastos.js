let gastos = [
    { mes: 'Janeiro', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Fevereiro', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Março', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Abril', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Maio', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Junho', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Julho', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Agosto', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Setembro', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Outubro', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Novembro', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
    { mes: 'Dezembro', gastosMensais: {}, totalGastos: 0, Sobrou: 0, orcamentoMensal: 0 },
];

function orcamentoTotal() {

    let gastoAnual = parseFloat(prompt(`Qual o seu orçamento anual?`))

    for (let i = 0; i < gastos.length; i++) {
        gastos[i].orcamentoMensal = (gastoAnual / 12)
    }
}

function preencherGastosDoMes(mes) {
    gastos[mes].gastosMensais.Energia = parseFloat(prompt(`Digite o valor gasto com Energia em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Agua = parseFloat(prompt(`Digite o valor gasto com Agua em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Aluguel = parseFloat(prompt(`Digite o valor gasto com Aluguel em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Escola = parseFloat(prompt(`Digite o valor gasto com Escola em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Supermercado = parseFloat(prompt(`Digite o valor gasto com Supermercado em ${gastos[mes].mes}`))
}

// Preenchendo os gastos para cada mês
for (let i = 0; i < gastos.length; i++) {
    preencherGastosDoMes(i)
}
function menuEditarGastos(){
    let continuar = true;
    const meses = ['Janeiro','Fevereiro','Março',
    'Abril','Maio','Junho','Julho','Agosto',
    'Setembro','Outubro','Novembro','Dezembro'];

    while (continuar){
        let escolhaMes = prompt("Digite o nome do mês que deseja editar ou 'sair' para sair:");
        let escolhaIndex = meses.indexOf(escolhaMes.charAt(0).toUpperCase() + escolhaMes.slice(1).toLowerCase());
        
        if (escolhaIndex !== -1){
            editarGastosDoMes(escolhaIndex);
        } else if (escolhaMes.toLowerCase() === 'sair'){
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
function deletarGastoDoMes(mes, tipoGasto) {
    tipoGasto = tipoGasto.charAt(0).toUpperCase() + tipoGasto.slice(1).toLowerCase();

    if (tipoGasto in gastos[mes].gastosMensais) {
        delete gastos[mes].gastosMensais[tipoGasto];
        console.log(`Gasto de ${tipoGasto} em ${gastos[mes].mes} foi removido.`);
    } else {
        console.log(`Tipo de2 gasto inválido ou inexistente para o mês de ${gastos[mes].mes}.`);
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

//Gastos de todos os meses
for (let i = 0; i < gastos.length; i++) {
    console.log(`Total de gastos em ${gastos[i].mes}: R$${totalGastosDoMes(i).toFixed(2)}`);
    gastos[i].totalGastos = totalGastosDoMes(i).toFixed(2);
}


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

// Chamadas de funções
console.log(gastos)
menuEditarGastos()
totalGastosDoMes(0) //Janeiro
totalGastosDoMes(1) //Fevereiro
orcamentoTotal()
totalAno()
