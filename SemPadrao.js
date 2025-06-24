function clienteUsandoFormatador(formatador) {
  formatador.formatar("Mensagem adaptada para impressora antiga");
}
class ImpressoraAntiga {
  imprimirTexto(mensagem) {
    console.log("Impressora antiga: " + mensagem);
  }
}

const antiga = new ImpressoraAntiga();
