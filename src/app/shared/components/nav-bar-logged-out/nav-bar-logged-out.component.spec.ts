import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLoggedOutComponent } from './nav-bar-logged-out.component';

describe('NavBarLoggedOutComponent', () => {
  let component: NavBarLoggedOutComponent;
  let fixture: ComponentFixture<NavBarLoggedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarLoggedOutComponent]
    });
    fixture = TestBed.createComponent(NavBarLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
