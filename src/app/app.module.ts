import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteServiceService } from './services/cliente-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'cart', redirectTo: 'carrello' },
  { path: 'articoli', component: ListaArticoliComponent },
  { path: 'listaarticoli', redirectTo: 'articoli' },
  { path: 'shop', redirectTo: 'articoli' },
  { path: 'login', component: LoginComponent },
  { path: 'accedi', redirectTo: 'login' },
  { path: 'accesso', redirectTo: 'login' },
  { path: 'signin', component: SigninComponent },
  { path: 'registrati', redirectTo: 'signin' },
  { path: 'registrazione', redirectTo: 'signin' },
  { path: 'ordine', component: OrdineComponent },
  { path: 'formarticolo', component: FormArticoloComponent },
  { path: 'gestionearticoli', component: GestioneArticoliComponent }
];

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
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ClienteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
