class Forca {

    constructor(palavraCerta) {
        this.palavraCerta = palavraCerta;
        this.letrasChutadas = [];
        this.vidas = 6;
        this.palavra = new Array(this.palavraCerta.length).fill("_");
    }

  chutar(letra) {
      if (letra.length === 1 && !this.letrasChutadas.includes(letra)) {
          this.letrasChutadas.push(letra);
          if (this.palavraCerta.includes(letra)) {
            var posicaoLetra = this.palavraCerta.indexOf(letra);
            while (posicaoLetra != -1) {
              this.palavra[posicaoLetra] = letra;
              posicaoLetra = this.palavraCerta.indexOf(letra, posicaoLetra + 1);
            }
          } else {
            this.vidas--;
              }      
      }
   }

  buscarEstado() { 
      let estado = "aguardando chute";
      if (this.vidas === 0) {
          estado = "perdeu";
      }
      if (this.vidas > 0 && !this.palavra.includes("_")) {
          estado = 'ganhou';
      }
      return estado; 
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

}

module.exports = Forca;
