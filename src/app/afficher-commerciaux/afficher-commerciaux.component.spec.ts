import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCommerciauxComponent } from './afficher-commerciaux.component';

describe('AfficherCommerciauxComponent', () => {
  let component: AfficherCommerciauxComponent;
  let fixture: ComponentFixture<AfficherCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCommerciauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
