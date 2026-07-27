let frase = prompt("Digite uma frase qualquer: ").toLowerCase();

function FuncaoFrase(frase) {
let FraseFinal = "";
if (/[^a-zA-Z\s]/.test(frase)) {
     console.log("Errado digite uma palavra/frase correta.");
} else {
for(var FraseCorrigida = frase.length - 1; FraseCorrigida >= 0; FraseCorrigida--) 
   {
  FraseFinal += frase[FraseCorrigida];
   }
   if (FraseFinal === frase) {
     console.log("Essa frase/palavra é um palíndromo!");
     } else {
       console.log("Esta frase/palavra não é um palíndromo!");
}
      }  
     return FraseFinal.toLowerCase().replaceAll(/[^a-zA-Z\s]/g, "");
}
   console.log(FuncaoFrase(frase));