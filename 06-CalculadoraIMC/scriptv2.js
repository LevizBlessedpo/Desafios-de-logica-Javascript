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
   ResultadoImc.textContent = `Atençaõ seu IMC foi: ${imcFormatado} e você está abaixo do peso recomendado!`;
} else if (imc >= 18.5 && imc <= 24.9) {
   ResultadoImc.textContent = `seu IMC foi: ${imcFormatado} e você está no peso ideal parábens!`;
} else if (imc >= 25.0 && imc <= 29.9) {
   ResultadoImc.textContent = `Atenção seu IMC foi: ${imcFormatado} e você está em sobrepeso! É necessário um acompanhamento constante em seu peso!`;
} else {
  ResultadoImc.textContent = `Atenção seu IMC foi: ${imcFormatado} e a sua saúde está em perigo! Esses são os primeiros sinais de obesidade`;
}
});


