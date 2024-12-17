import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';
import { Biblioteca } from '../models/biblioteca';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  private biblioteca = new Biblioteca();

  adicionarJogo(jogo: Jogo): void {
    this.biblioteca.adicionarJogo(jogo);
  }

  removerJogo(titulo: string): void {
    this.biblioteca.removerJogo(titulo);
  }

  listarJogos(): Jogo[] {
    return this.biblioteca.listarJogos(); 
  }
}

