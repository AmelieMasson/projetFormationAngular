import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFormationAccueilComponent } from './afficher-formation-accueil.component';

describe('AfficherFormationAccueilComponent', () => {
  let component: AfficherFormationAccueilComponent;
  let fixture: ComponentFixture<AfficherFormationAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFormationAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherFormationAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
