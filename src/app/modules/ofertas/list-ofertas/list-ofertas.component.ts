import { Component, OnInit } from '@angular/core';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {
 
  filterPost='';

  public ofertas: IOferta[] = [];

  constructor(private ofertaService: OfertaService) { }
 
  ngOnInit(): void {
    this.ofertaService.getAll().subscribe(r => {
      this.ofertas = r;
    })
    console.log(this.filterPost);
  }

}
