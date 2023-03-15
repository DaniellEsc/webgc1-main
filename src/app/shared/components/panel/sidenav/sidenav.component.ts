import { Component, Input, OnInit } from '@angular/core';
import { LEFT_NAV_ITEMS } from 'src/app/data/constants/ui/left-nav-menu.const';
import { ISideNavItem } from 'src/app/data/interfaces/ui/isidenavitem';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;
  @Input() menuItems: ISideNavItem[] = [];
  public logOutItem: ISideNavItem;

  constructor(private authService: AuthService) {
    this.logOutItem = {
      title: 'Cerrar sesión',
      iconClass: 'bi bi-box-arrow-in-left',
      method: () => authService.logout()
    }
  }
  ngOnInit(): void {
  }

}
