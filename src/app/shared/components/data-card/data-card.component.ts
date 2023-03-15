import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from 'src/app/data/interfaces/ui/card-data';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input() data: DataCard = {
    total: 0,
    tag:'',
    background:''
  }
  constructor() { }

  ngOnInit(): void {

  }

  setCardColor(background: string) {
    return { background: background };
  }

}
