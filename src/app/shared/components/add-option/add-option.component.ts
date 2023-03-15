import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent implements OnInit {

  @Input() link: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
