import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { Jogo } from '../models/jogo';
import { JogoTabuleiro } from '../models/jogo-tabuleiro';
import { JogoCarta } from '../models/jogo-carta';

@Component({
  selector: 'app-jogo-list',
  templateUrl: './jogo-list.component.html',
  styleUrls: ['./jogo-list.component.css']
})
export class JogoListComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    // Adicionando alguns jogos manualmente para teste
    this.bibliotecaService.adicionarJogo(new JogoTabuleiro('Xadrez', 1475, 'Desconhecido', 2));
    this.bibliotecaService.adicionarJogo(new JogoCarta('Uno', 1971, 'Mattel', 7));

    this.jogos = this.bibliotecaService.listarJogos();
  }

  removerJogo(titulo: string): void {
    this.bibliotecaService.removerJogo(titulo);
    this.jogos = this.bibliotecaService.listarJogos();
  }

  exibirDetalhes(jogo: Jogo): void {
    alert(jogo.exibirRegras());
  }
}
