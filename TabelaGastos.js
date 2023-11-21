let gastos = [
    {mes: 'Janeiro', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Fevereiro', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Março', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Abril', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Maio', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Junho', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Julho', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Agosto', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Setembro', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Outubro', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Novembro', gastosMensais:{}, totalGastos: 0, Sobrou: 0 },
    {mes: 'Dezembro', gastosMensais: {}, totalGastos: 0, Sobrou: 0 },
];

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

console.log(gastos)
editarGastosDoMes(0) //Janeiro
totalGastosDoMes(0) //Janeiro
totalGastosDoMes(1) //Fevereiro

//Gastos de todos os meses
for (let i = 0; i < gastos.length; i++) {
    console.log(`Total de gastos em ${gastos[i].mes}: R$${totalGastosDoMes(i).toFixed(2)}`);
    gastos[i].totalGastos = totalGastosDoMes(i).toFixed(2)
}