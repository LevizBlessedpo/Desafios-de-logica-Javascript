let PrimeiroTexto = prompt("Digite uma palavra de sua preferencia: ");

function StringReversa(PrimeiroTexto) 
{
  var ReceberAPalavra = '';
  for(var TextoInvertido = PrimeiroTexto.length - 1; TextoInvertido >= 0; TextoInvertido--) 
  {
    ReceberAPalavra += PrimeiroTexto[TextoInvertido]
  }
  return ReceberAPalavra;
}

console.log(StringReversa(PrimeiroTexto));
