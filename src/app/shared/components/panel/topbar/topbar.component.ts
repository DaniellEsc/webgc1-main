import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  @Input() username: string = 'Usuario';
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}
