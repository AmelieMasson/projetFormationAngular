import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationParParticipantsComponent } from './formation-par-participants.component';

describe('FormationParParticipantsComponent', () => {
  let component: FormationParParticipantsComponent;
  let fixture: ComponentFixture<FormationParParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationParParticipantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationParParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
