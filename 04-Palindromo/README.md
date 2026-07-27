# 🧩 Desafio de Lógica: Palíndromo

Neste projeto foi desenvolvido um algoritmo para verificar se uma palavra ou frase é um palíndromo (se pode ser lida da mesma forma de trás para frente).

---

## 🎯 O Desafio
O programa recebe uma frase do usuário e passa por duas etapas principais:
1. **Validação de Entrada:** Utiliza uma Expressão Regular (Regex) para verificar se o texto contém apenas letras e espaços. Caso contenha símbolos ou números, o programa exibe uma mensagem de aviso.
2. **Inversão e Comparação:** Transforma o texto para letras minúsculas com `toLowerCase()` e utiliza um laço `for` regressivo para inverter a string, comparando a versão invertida com a original para definir se é um palíndromo.

---

## 🧠 Aprendizados e Conceitos Aplicados
* **Validação de Dados com Regex:** Uso de Expressões Regulares em conjunto com o método `.test()` para sanitização de entradas do usuário.
* **Manipulação de Strings:** Aplicação de métodos como `toLowerCase()` para padronização de caracteres.
* **Laços de Repetição (`for`):** Construção de um loop regressivo (`length - 1` até `0`) para inversão manual de textos.
* **Controle de Fluxo (`if/else`):** Estrutura de validação antes de executar a lógica principal.
