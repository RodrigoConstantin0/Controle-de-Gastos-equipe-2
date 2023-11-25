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

function adicionarGasto() {
    const form = document.getElementById('gastoForm');
    const escolhaMes = form.elements['mes'].value.trim();
    const tipoGasto = form.elements['tipoGasto'].value.trim();
    const novoValor = parseFloat(form.elements['valor'].value);
    const escolhaIndex = gastos.findIndex(item => item.mes.toLowerCase() === escolhaMes.toLowerCase());
    if (gastos[escolhaIndex].gastosMensais[tipoGasto] != 0) {
        editarGastosDoMes(escolhaIndex);
    } else {
        gastos[escolhaIndex].gastosMensais[tipoGasto] += parseInt(novoValor);
        gastos[escolhaIndex].totalGastos = parseInt(gastos[escolhaIndex].totalGastos) + parseInt(novoValor);
        gastos[escolhaIndex].sobrou = parseInt(gastos[escolhaIndex].sobrou) - parseInt(novoValor);
        gastosTotal[tipoGasto] = parseInt(gastosTotal[tipoGasto]) + parseInt(novoValor);

        console.log(`Gasto adicionado com sucesso! ${tipoGasto} em ${gastos[escolhaIndex].mes}: ${novoValor}`);
        form.reset();
    }
    criarTabela()
}


function orcamentoTotal() {
    const orcamento = parseFloat(document.getElementById('orcamento').value.trim());
    const gastoForm = document.getElementById('gastoForm');

    if (!isNaN(orcamento)) {
        for (let i = 0; i < gastos.length; i++) {
            gastos[i].orcamentoMensal = orcamento / 12;
            gastos[i].sobrou = orcamento / 12; // total
        }
        console.log(`O Orçamento adicionado é de R$:${orcamento}, divido em ${orcamento / 12} por mês.`);
        
        if(gastoForm.style.display === 'none'){
            gastoForm.style.display = 'block';  
        }else{
            criarTabela();
        }

    } else {
        console.log('Por favor, insira um valor válido para o orçamento.');
    }
}

function editarGastosDoMes(mes) {
    let campo = prompt(`Digite o campo que deseja editar em ${gastos[mes].mes} (Energia, Agua, Aluguel, Escola, Supermercado):`)
    campo = campo.charAt(0).toUpperCase() + campo.slice(1).toLowerCase()

    if (campo in gastos[mes].gastosMensais) {
        let novoValor = parseFloat(prompt(`Digite o novo valor para ${campo} em ${gastos[mes].mes}:`));
        let aux = gastos[mes].gastosMensais[campo]
        gastos[mes].gastosMensais[campo] = novoValor
        gastos[mes].totalGastos = parseInt(gastos[mes].totalGastos) + parseInt(novoValor) - aux;
        gastos[mes].sobrou = parseInt(gastos[mes].sobrou) - parseInt(novoValor) + aux;
        gastosTotal[campo] = parseInt(gastosTotal[campo]) + parseInt(novoValor) - aux;
        console.log(`Gasto editado com sucesso! Novo valor de ${campo} em ${gastos[mes].mes}: ${novoValor}`)
    } else {
        console.log(`Campo inválido. Certifique-se de digitar um dos campos válidos: Energia, Agua, Aluguel, Escola, Supermercado`)
    }
    criarTabela();
}

function removerGasto(indice) {
    let tipoGasto = prompt(`Digite o campo que deseja editar em ${gastos[indice].mes} (Energia, Agua, Aluguel, Escola, Supermercado):`);
    tipoGasto = tipoGasto.charAt(0).toUpperCase() + tipoGasto.slice(1).toLowerCase()
    if (tipoGasto in gastos[indice].gastosMensais) {
        let valorRemovido = gastos[indice].gastosMensais[tipoGasto];
        //delete gastos[indice].gastosMensais[tipoGasto];
        gastos[indice].gastosMensais[tipoGasto] -= valorRemovido;
        gastos[indice].totalGastos -= valorRemovido;
        gastos[indice].sobrou += valorRemovido;
        gastosTotal[tipoGasto] -= valorRemovido; 
        criarTabela();
        console.log(`Gasto de ${tipoGasto} no mês de ${gastos[indice].mes} foi removido.`);       
    } else {
        console.log(`Tipo de gasto inválido ou inexistente para o mês de ${gastos[indice].mes}.`);
    }
}

function criarTabelaTotalAno() {
    const tabelaBody = document.getElementById('tabelaGastosTotalAnoBody');
    const tabelaGastos = document.getElementById('tabelaGastosTotalAno');

    // Limpar o conteúdo anterior da tabela
    tabelaBody.innerHTML = '';

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${gastosTotal.Energia || 0}</td>
    <td>${gastosTotal.Agua || 0}</td>
    <td>${gastosTotal.Aluguel || 0}</td>
    <td>${gastosTotal.Escola || 0}</td>
    <td>${gastosTotal.Supermercado || 0}</td>`;
    tabelaBody.appendChild(row);

    // Mostrar a tabela
    tabelaGastos.style.display = 'table';
    // Função para remover um gasto específico para o mês correspondente
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
            <td><button onclick="removerGasto(${i})">Remover</button></td>
            <td><button class="btn-warning-yellow" onclick="editarGastosDoMes(${i})">Editar</button></td>`;
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
    tabelaGastos.style.display = 'table';  
}

orcamentoTotal()