# 🔢 Calculadora de IMC (Índice de Massa Corporal)

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização e layout.
- **JavaScript (ES6+):** Lógica de controle e manipulação do DOM (`querySelector()`, escuta de eventos com `addEventListener('click', ...)`).
- **Framework Pico.css:** Integrado ao HTML para estilização automática e primeira experiência com frameworks!

## 🎯 Funcionalidades

- Cálculo do IMC dividindo o peso pela altura ao quadrado: `const imc = pesoCorrigido / Math.pow(AlturaCorrigida, 2);`
- Captura e tratamento dos valores dos inputs com `parseFloat()`: `const pesoCorrigido = parseFloat(Peso.value);`
- Arredondamento do resultado do IMC para uma casa decimal usando `imc.toFixed(1)`.

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, pratiquei e consolidei:
- Vínculo de scripts JS externos utilizando o atributo `defer` na tag `<script>`;
- Manipulação do DOM e leitura/alteração de elementos na página;
- Integração e uso de frameworks CSS (Pico.css);
- Uso de *Arrow Functions* no `addEventListener()` para manter a leitura do código simples e limpa;
- Conexão entre arquivos HTML, CSS e JavaScript.