import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { RoteadorModule } from './app.routes';
import { FotoComponent } from './foto/foto.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoService } from './foto/foto.service';
import { MensagemComponent } from './mensagem/mensagem.component';
import { FiltroPorTitulo } from './listagem/lista.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    MensagemComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoteadorModule,
    FotoModule,
    PainelModule
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
