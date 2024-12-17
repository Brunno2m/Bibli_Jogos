import { Jogo } from './jogo';

export class JogoTabuleiro extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public numeroJogadores: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): void {
    console.log(`Regras do Jogo de Tabuleiro "${this.titulo}":
    - Número de jogadores: ${this.numeroJogadores}
    - Fabricante: ${this.fabricante}
    - Ano de publicação: ${this.anoPublicacao}`);
  }
}
