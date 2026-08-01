const Botao = document.querySelector('#bt1');
const Peso = document.querySelector('#Peso');
const Altura = document.querySelector('#Alt');
const ResultadoImc = document.querySelector('#result');

Botao.addEventListener('click', () => {
  const pesoCorrigido = parseFloat(Peso.value);
  const AlturaCorrigida = parseFloat(Altura.value);
  const imc = pesoCorrigido / Math.pow(AlturaCorrigida, 2);
  const imcFormatado = imc.toFixed(1);
  if (imc < 18.5) {
   ResultadoImc.textContent('Atenção você está abaixo do peso recomendado!');
} else if (imc >= 18.5 && imc <= 24.9) {
   ResultadoImc.textContent('Você está no peso ideal!');
} else if (imc >= 25.0 && imc <= 29.9) {
   ResultadoImc.textContent('Atenção você está em sobrepeso! É necessário um acompanhamento constante em seu peso!');
} else {
  ResultadoImc.textContent('Atenção! Atençao a sua saúde você está em perigo!');
}
});


