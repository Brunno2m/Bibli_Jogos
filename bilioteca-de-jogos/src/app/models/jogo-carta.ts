import { Jogo } from './jogo';

export class JogoCarta extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public idadeMinima: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): void {
    console.log(`Regras do Jogo de Cartas "${this.titulo}":
    - Idade mínima: ${this.idadeMinima} anos
    - Fabricante: ${this.fabricante}
    - Ano de publicação: ${this.anoPublicacao}`);
  }
}
