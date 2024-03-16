import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from './shared/services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedInStatus$: Observable<boolean>;

  constructor(private sharedDataService: SharedDataService) {
    this.loggedInStatus$ = this.sharedDataService.loggedInStatus$;
  }
}
