# 🔢 Desafio 02: Verificador de Números Primos (JavaScript)

Aplicação desenvolvida em JavaScript puro para verificar se um determinado número inteiro é primo ou não, integrando controle de fluxo com navegação dinâmica.

## 🎯 O Desafio
Criar um algoritmo que receba um número do usuário e determine sua primalidade sem utilizar bibliotecas externas, aplicando conceitos puros de laços de repetição, condicionais e otimização de execução.

## 💡 Lógica Utilizada
1. **Estrutura do Menu:** Uso de laço `while` combinado com `switch/case` para manter a aplicação ativa até que o usuário decida sair.
2. **Flag de Estado:** Definição de uma variável booleana (`ePrimo = true`) para controle da condição.
3. **Laço de Interação (`for`):** Varredura dos possíveis divisores do número, iniciando em `2` até `NumeroInicial - 1`.
4. **Otimização:** Se o resto da divisão (`NumeroInicial % i === 0`) for zero em qualquer ponto, o número **não é primo**. A flag `ePrimo` é definida como `false` e o laço é interrompido imediatamente com `break`.
5. **Retorno:** Exibição do resultado final via `alert()` com base no estado final da flag.

## 🛠️ Tecnologias e Ambiente
* **Linguagem:** JavaScript (ES6+)
* **Editor de Código:** Acode IDE
* **Terminal de Execução:** Termux (Node.js / Environment CLI)
* **Controle de Versão:** Git e GitHub		
