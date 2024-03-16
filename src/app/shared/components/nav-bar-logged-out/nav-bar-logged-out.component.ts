import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-nav-bar-logged-out',
  templateUrl: './nav-bar-logged-out.component.html',
  styleUrls: ['./nav-bar-logged-out.component.scss'],
})
export class NavBarLoggedOutComponent {
  constructor(private sharedDataService: SharedDataService) {}
  isCollapsed: boolean = false;

  routeTo(route: string) {
    this.sharedDataService.routeTo(route);
  }
}
