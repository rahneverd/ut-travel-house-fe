import { Component } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent {
  loggedInStatus$: Observable<boolean>;

  constructor(private sharedDataService: SharedDataService) {
    this.loggedInStatus$ = this.sharedDataService.loggedInStatus$;
  }

  ngOnInit() {}
}
