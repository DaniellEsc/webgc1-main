import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roleName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  displayStyle1 = "none";

  OpenPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  selectEntity(option: number) {
    switch (option) {
      case 1:
        this.roleName = 'ROLE_ESTUDIANTE';
        break;
      case 2:
        this.roleName = 'ROLE_EMPRESA';
        break;
      case 3:
        this.roleName = 'ROLE_ADMINISTRADOR';
        break;
    }

    console.log(this.roleName);
    
  }

}
