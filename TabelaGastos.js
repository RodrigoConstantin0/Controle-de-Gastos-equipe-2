let gastos = [
    {mes: 'Janeiro', gastosMensais: {}},
    {mes: 'Fevereiro', gastosMensais: {}},
    {mes: 'Março', gastosMensais: {}},
    {mes: 'Abril', gastosMensais: {}},
    {mes: 'Maio', gastosMensais: {}},
    {mes: 'Junho', gastosMensais: {}},
    {mes: 'Julho', gastosMensais: {}},
    {mes: 'Agosto', gastosMensais: {}},
    {mes: 'Setembro', gastosMensais: {}},
    {mes: 'Outubro', gastosMensais: {}},
    {mes: 'Novembro', gastosMensais:{}},
    {mes: 'Dezembro', gastosMensais: {}},
];

function preencherGastosDoMes(mes) {
    gastos[mes].gastosMensais.Energia = parseFloat(prompt(`Digite o valor gasto com Energia em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Água = parseFloat(prompt(`Digite o valor gasto com Água em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Aluguel = parseFloat(prompt(`Digite o valor gasto com Aluguel em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Escola = parseFloat(prompt(`Digite o valor gasto com Escola em ${gastos[mes].mes}`))
    gastos[mes].gastosMensais.Supermercado = parseFloat(prompt(`Digite o valor gasto com Supermercado em ${gastos[mes].mes}`))
}

// Preenchendo os gastos para cada mês
for (let i = 0; i < gastos.length; i++) {
    preencherGastosDoMes(i)
}

function editarGastosDoMes(mes) {
    let campo = prompt(`Digite o campo que deseja editar em ${gastos[mes].mes} (Energia, Água, Aluguel, Escola, Supermercado):`)
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
        console.log(`Campo inválido. Certifique-se de digitar um dos campos válidos: Energia, Água, Aluguel, Escola, Supermercado`)
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
editarGastosDoMes(0);

function totalGastosDoMes(mes) {
    let gastosMensais = gastos[mes].gastosMensais;
    let total = 0
    for (let categoria in gastosMensais) {
        total += gastosMensais[categoria]
    }
    return total
}

console.log(gastos)
editarGastosDoMes(0) //Janeiro
totalGastosDoMes(0) //Janeiro
totalGastosDoMes(1) //Fevereiro

//Gastos de todos os meses
for (let i = 0; i < gastos.length; i++) {
    console.log(`Total de gastos em ${gastos[i].mes}: R$${totalGastosDoMes(i).toFixed(2)}`);
}