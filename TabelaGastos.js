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
    gastos[mes].gastosMensais.Energia = parseFloat(prompt(`Digite o valor gasto com Energia em ${gastos[mes].mes}`));
    gastos[mes].gastosMensais.Água = parseFloat(prompt(`Digite o valor gasto com Água em ${gastos[mes].mes}`));
    gastos[mes].gastosMensais.Aluguel = parseFloat(prompt(`Digite o valor gasto com Aluguel em ${gastos[mes].mes}`));
    gastos[mes].gastosMensais.Escola = parseFloat(prompt(`Digite o valor gasto com Escola em ${gastos[mes].mes}`));
    gastos[mes].gastosMensais.Supermercado = parseFloat(prompt(`Digite o valor gasto com Supermercado em ${gastos[mes].mes}`));
}

// Preenchendo os gastos para cada mês
for (let i = 0; i < gastos.length; i++) {
    preencherGastosDoMes(i);
}
