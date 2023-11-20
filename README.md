# Projeto final #1133

# Equipe 3 - Membros
 - Douglas Caique
 - Juliana Mesquita
 - Rodrigo Constantino

Para finalizar o modulo `Lógica de Programação I` vamos desenvolver um programa que faça o controle de uma lista.

Teremos algumas opções de listas que podem ser escolhidas para o desenvolvimento desse projeto:

[Lista de tarefas ](https://www.notion.so/Lista-de-tarefas-d3ae499d2613419594271eb252b0c294?pvs=21)

[Lista de contatos](https://www.notion.so/Lista-de-contatos-c899d7477fec4d39a9f0b2a1e2cde7a4?pvs=21)

[Lista de supermercado](https://www.notion.so/Lista-de-supermercado-5fe702005d7443bbbb31b3720c79c336?pvs=21)

[Lista de gastos mensais](https://www.notion.so/Lista-de-gastos-mensais-21ce10dbdee74ac6b640afa38fa2ecff?pvs=21)  

Cada grupo deve escolher **apenas um** dos temas acima para o desenvolvimento do projeto final.


------------------------------------------------------------------------------------------------------------------------

# Lista de gastos mensais

Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de gastos mensais

## Requisitos

Temos uma lista inicial que representa um ano inteiro e cada item da lista indica um mês.

```jsx
let gastos = [
	{ mes: 'Janeiro'},
	{ mes: 'Fevereiro'},
	{ mes: 'Março '},
	{ mes: 'Abril'},
	{ mes: 'Maio'},
	{ mes: 'Junho'},
	{ mes: 'Julho'},
	{ mes: 'Agosto'},
	{ mes: 'Setembro'},
	{ mes: 'Outubro'},
	{ mes: 'Novembro'},
	{ mes: 'Dezembro'},
]
```

Dentro de cada mes, podemos ter os seguintes gastos:

- Energia
- Água
- Aluguel
- Escola
- Supermercado

Dentre as funcionalidades, espera-se que seja possível:

- Adicionar um gasto mensal em um mês específico
    - Exemplo: Adicionar **valor** gasto de **Energia** no mes de **Janeiro**

- Editar um gasto mensal em um mês específico
    - Exemplo: Editar o valor gasto com Escola no mes de Agosto

- Remover um gasto mensal em um mês específico
    - Exemplo: Remover o valor gasto com Supermercado no mes de Dezembro

- Listas os gastos mensais por mês
    - Exemplo: `”No mes de Janeiro foi gasto com energiar R$ 153,67, com agua R$ 29,99, com aluguel R$ 1349,90, com escola R$ 1209,78 e com supermercado R$ 560,98”`

- Listar o total dos gastos mensais por mês
    - Exemplo: `”No mes de Abril foi gasto um total de R$ 17.300,00”`

- Mostrar um objeto que mostra o total gasto no ano por tipo de gasto
    - Exemplo:
        
        ```jsx
        const totaisNoAno = {
        	energia: 2190,
        	agua: 1235,
        	aluguel: 13245,
        	escola: 10233,
        	supermercado: 589,
        }
        ```
        

- Retornar uma nova lista que mostra o total gasto em casa mês e informar se ficou dentro do orçamento, **sendo que o orçamento é de $ 8.500,00.**

<aside>
💡 **Sugestão:** Utilize `prompt` para entrada de dados e `console.log` para saida dos dados. Também será aceito o uso de uma pagina `HTML`,  lembrando que não é obrigatório. 

**Uma dica:** Faça o **básico funcionar** e **depois** se sobrar tempo **pense melhorias**.

</aside>
