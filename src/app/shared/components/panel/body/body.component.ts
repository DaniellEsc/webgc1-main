import { Component, OnInit } from '@angular/core';
import { LEFT_NAV_ITEMS } from 'src/app/data/constants/ui/left-nav-menu.const';
import { ISideNavItem } from 'src/app/data/interfaces/ui/isidenavitem';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  sideNavStatus: boolean = false;
  username: string = '';
  authorities: any;
  leftNavItems: ISideNavItem[] = [];

  constructor(private authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.getUser();

  }

  getUser() {
    if (this.authService.getUser()) {
      this.username = this.authService.getUser().username;
      this.authorities = this.authService.getUser().authorities[0];
      console.log('🎢', this.authorities.authority);

      switch (this.authorities.authority) {
        case "ROLE_ESTUDIANTE":
          this.leftNavItems = LEFT_NAV_ITEMS.estudianate;
          break;
        case 'ROLE_EMPRESA':
          this.leftNavItems = LEFT_NAV_ITEMS.empresa;
          break;
        case 'ROLE_ADMINISTRADOR':
          this.leftNavItems = LEFT_NAV_ITEMS.administrador;
          break;
      }
    }
  }

}
