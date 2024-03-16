import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLoggedInComponent } from './nav-bar-logged-in.component';

describe('NavBarLoggedInComponent', () => {
  let component: NavBarLoggedInComponent;
  let fixture: ComponentFixture<NavBarLoggedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarLoggedInComponent]
    });
    fixture = TestBed.createComponent(NavBarLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
