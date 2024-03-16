import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarLoggedInComponent } from './components/nav-bar-logged-in/nav-bar-logged-in.component';
import { NavBarLoggedOutComponent } from './components/nav-bar-logged-out/nav-bar-logged-out.component';

@NgModule({
  declarations: [NavBarLoggedOutComponent, NavBarLoggedInComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [NavBarLoggedOutComponent, NavBarLoggedInComponent],
})
export class SharedModule {}
