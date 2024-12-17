import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoListComponent } from './jogo-list/jogo-list.component';
import { AddJogoComponent } from './add-jogo/add-jogo.component';
import { BibliotecaService } from './services/biblioteca.service';

@NgModule({
  declarations: [
    AppComponent,
    JogoListComponent,
    AddJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BibliotecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
