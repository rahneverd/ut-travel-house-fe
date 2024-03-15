import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  // Behavior Subjects - Variables
  loggedInStatus = new BehaviorSubject<boolean>(false);

  // Observables - Getters
  loggedInStatus$ = this.loggedInStatus.asObservable();

  // Setters
  setLoggedInStatus(val: boolean) {
    this.loggedInStatus.next(val);
  }
}
