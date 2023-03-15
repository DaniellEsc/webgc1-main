import { Component, Input, OnInit } from '@angular/core';
import { CardOption } from 'src/app/data/interfaces/ui/card-option';

@Component({
  selector: 'app-card-option',
  templateUrl: './card-option.component.html',
  styleUrls: ['./card-option.component.css']
})
export class CardOptionComponent implements OnInit {

  @Input() data: CardOption = {
    icon: '',
    title: ''
  }
  constructor() {

  }

  ngOnInit(): void {
    console.log('🧣', this.data);
  }

}
