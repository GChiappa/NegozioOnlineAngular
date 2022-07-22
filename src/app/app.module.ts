import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArticoliComponent } from './components/lista-articoli/lista-articoli.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormArticoloComponent } from './components/admin-components/form-articolo/form-articolo.component';
import { GestioneArticoliComponent } from './components/admin-components/gestione-articoli/gestione-articoli.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { OrdineComponent } from './components/ordine/ordine.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaArticoliComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent,
    NavComponent,
    FooterComponent,
    FormArticoloComponent,
    GestioneArticoliComponent,
    CarrelloComponent,
    OrdineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
