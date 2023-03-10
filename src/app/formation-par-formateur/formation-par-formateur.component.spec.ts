import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationParFormateurComponent } from './formation-par-formateur.component';

describe('FormationParFormateurComponent', () => {
  let component: FormationParFormateurComponent;
  let fixture: ComponentFixture<FormationParFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationParFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationParFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
