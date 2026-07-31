let contador = 0;
const Aumentar = document.getElementsByName('bt1')[0];
const Diminuir = document.getElementsByName('bt2')[0];
const TextoCont = document.getElementsByName('h1Pr')[0];
Aumentar.addEventListener('click', somar);
Diminuir.addEventListener('click', diminuir);
function somar() {
  contador = contador + 1;
  TextoCont.textContent = contador;
}
function diminuir() {
  contador = contador - 1;
  TextoCont.textContent = contador;
}