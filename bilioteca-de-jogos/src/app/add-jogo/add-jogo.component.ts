import { Component } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { JogoTabuleiro } from '../models/jogo-tabuleiro';
import { JogoCarta } from '../models/jogo-carta';

@Component({
  selector: 'app-add-jogo',
  templateUrl: './add-jogo.component.html',
  styleUrls: ['./add-jogo.component.css']
})
export class AddJogoComponent {
  titulo: string = '';
  anoPublicacao: number = 0;
  fabricante: string = '';
  numeroJogadores: number = 0;
  idadeMinima: number = 0;
  tipo: string = 'tabuleiro';

  constructor(private bibliotecaService: BibliotecaService) {}

  adicionarJogo(): void {
    if (this.tipo === 'tabuleiro') {
      const novoJogo = new JogoTabuleiro(this.titulo, this.anoPublicacao, this.fabricante, this.numeroJogadores);
      this.bibliotecaService.adicionarJogo(novoJogo);
    } else {
      const novoJogo = new JogoCarta(this.titulo, this.anoPublicacao, this.fabricante, this.idadeMinima);
      this.bibliotecaService.adicionarJogo(novoJogo);
    }
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.titulo = '';
    this.anoPublicacao = 0;
    this.fabricante = '';
    this.numeroJogadores = 0;
    this.idadeMinima = 0;
    this.tipo = 'tabuleiro';
  }
}
