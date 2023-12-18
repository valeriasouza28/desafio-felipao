# Desafio - Escrevendo as classes de um jogo

## Classe Heroi

A classe Heroi representa um herói em um mundo fictício e fornece métodos para criar, validar e exibir informações sobre um herói.
Construtor
constructor(name, age, type)

    Parâmetros:
        nome (string): O nome do herói.
        idade (número): A idade do herói.
        tipo (string): O tipo do herói.

    Descrição:
        O construtor cria uma nova instância da classe Heroi com os valores fornecidos para nome, idade e tipo.
        Internamente, ele chama métodos de validação para garantir que os dados fornecidos estejam dentro dos limites especificados.

Constantes Estáticas
LIMITES

    Descrição:
        Define constantes estáticas representando os limites mínimos e máximos para atributos do herói, como comprimento do nome, comprimento do tipo e faixa etária.

Métodos de Validação
validarNomeHeroi(nome)

    Parâmetros:
        nome (string): O nome do herói.

    Descrição:
        Valida o nome do herói com base no comprimento e regras de caracteres.

validarTipoHeroi(tipo)

    Parâmetros:
        tipo (string): O tipo do herói.

    Descrição:
        Valida o tipo do herói com base no comprimento, regras de caracteres e existência nos tipos de heróis predefinidos.
        Define a propriedade tipoAtaque para o ataque específico associado ao tipo do herói.

validarIdadeHeroi(idade)

    Parâmetros:
        idade (número): A idade do herói.

    Descrição:
        Valida a idade do herói com base no formato numérico e faixa etária.

Método de Exibição
exibirInformacoesHeroi()

    Descrição:
        Exibe informações sobre o herói, incluindo nome, tipo e idade.

Método de Ataque
atacar()

    Descrição:
        Exibe uma mensagem indicando o ataque do herói usando o tipo de ataque associado (tipoAtaque).
        Este método é específico para o tipo do herói e fornece uma mensagem de ataque única.

Teste
testeHeroi()

    Descrição:
        Cria uma instância de teste da classe Heroi com dados de exemplo (nome: "NomeHeroi", idade: 25, tipo: "mago").
        Exibe informações do herói e aciona o método de ataque do herói.

Exemplo de Uso

```js 

// Criar e testar uma instância de herói
const heroi = new Heroi("NomeHeroi", 25, "mago");
heroi.exibirInformacoesHeroi();
heroi.atacar();
```

Este exemplo demonstra a criação de um herói, a exibição de informações do herói e a iniciação de um ataque do herói, proporcionando uma visão das capacidades da classe Heroi