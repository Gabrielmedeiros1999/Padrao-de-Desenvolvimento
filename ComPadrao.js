class ImpressoraAntiga {
  imprimirTexto(mensagem) {
    console.log("Impressora antiga: " + mensagem);
  }
}
class ImpressoraAdapter {
  constructor(impressoraAntiga) {
    this.impressora = impressoraAntiga;
  }
  formatar(texto) {
    this.impressora.imprimirTexto(texto);
  }
}
function clienteUsandoFormatador(formatador) {
  formatador.formatar("Mensagem adaptada para impressora antiga");
}
const antiga = new ImpressoraAntiga();
const adaptador = new ImpressoraAdapter(antiga);
clienteUsandoFormatador(adaptador); 
