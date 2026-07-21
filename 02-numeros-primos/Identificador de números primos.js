let Opcoes = +prompt("Escolha uma opção para comerçarmos a analise! (1) - Analisar Números, (2) - Sair. ");

while (Opcoes !== 2) {
 switch (Opcoes) {
   case 1:
  let NumeroInicial = +prompt("Digite um numero da sua escolha: ");
  let ePrimo = true;
for (let i = 2; i < NumeroInicial; i++) {
  if (NumeroInicial % i === 0) {
    ePrimo = false;
    break;
  } 
 }
 if (ePrimo === true) {
   alert("Esse número é primo!");
 } else {
   alert("Esse número não é primo!");
 }
 Opcoes = +prompt("Escolha uma opção para comerçarmos a analise! (1) - Analisar Números, (2) - Sair. ");
   case 2:
  alert("Obrigado pela preferência!");
  break;
  default:
  }
}