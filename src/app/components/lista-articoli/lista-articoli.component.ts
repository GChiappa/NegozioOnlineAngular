import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/models/articolo';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})
export class ListaArticoliComponent implements OnInit {

  articoli!: Articolo[];

  constructor(private _clienteService: ClienteServiceService) { }

  ngOnInit(): void {
    this._clienteService.getArticoli().subscribe({
      next: (articoli) => (this.articoli = articoli),
      error: (e) => (console.error(e))
    }
    );
  }


  addToCart(articolo: Articolo): void {

  }

  removeToCart(articolo: Articolo): void {

  }

}
