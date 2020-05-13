import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista.component';
import { UsuarioDetalheComponent } from './components/usuario-detalhe/usuario-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListaComponent,
    UsuarioDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
