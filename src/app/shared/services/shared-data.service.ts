import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor(private router: Router) {}

  // Behavior Subjects - Variables
  loggedInStatus = new BehaviorSubject<boolean>(false);

  // Observables - Getters
  loggedInStatus$ = this.loggedInStatus.asObservable();

  // Setters
  setLoggedInStatus(val: boolean) {
    this.loggedInStatus.next(val);
  }

  // Global Functions
  routeTo(route: string) {
    this.router.navigate([route]);
  }
}
