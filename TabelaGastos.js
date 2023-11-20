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
    } else {
        console.log(`Campo inválido. Certifique-se de digitar um dos campos válidos: Energia, Água, Aluguel, Escola, Supermercado`)
    }
}

console.log(gastos)

editarGastosDoMes(0)