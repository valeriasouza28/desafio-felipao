# Desafio - Calculadora de partidas rankeadas.

Este programa em JavaScript calcula e avalia o desempenho de um herói em partidas ranqueadas com base no número de vitórias e derrotas. Ele fornece o equilíbrio entre vitórias e derrotas e determina o nível ranqueado do herói.

## Funções

### calculateWinLossBalance(victories, defeats)

Calcula o equilíbrio absoluto entre vitórias e derrotas, obtendo a diferença entre vitórias e derrotas.

### validateRankedMatches(victories)

Determina o nível ranqueado com base no número de vitórias.

### ranckedMatchesCalculator(victories, defeats)

Calcula o equilíbrio entre vitórias e derrotas e o nível ranqueado do herói. Registra o resultado no console.

### validateInputNumbers(value)

Valida se o valor de entrada é um número inteiro positivo.
Constantes
LIMITS

Define o valor mínimo para vitórias e derrotas.

```js 
const LIMITS = {
    VICTORIES_DEFEATS_MIN: 0
};
```

## Uso

```js

const result = ranckedMatchesCalculator(victories, defeats);
console.log(result);
```

Substitua victories e defeats pelo número real de vitórias e derrotas que o herói possui em partidas ranqueadas.
Níveis Ranqueados

- Ferro: 0-9 vitórias
- Bronze: 10-19 vitórias
- Prata: 20-49 vitórias
- Ouro: 50-79 vitórias
- Diamante: 80-89 vitórias
- Lendário: 90-99 vitórias
- Imortal: 100 ou mais vitórias

## Tratamento de Erros

O programa inclui tratamento de erros para garantir que os valores de entrada sejam números inteiros positivos válidos.