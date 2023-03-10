import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import ParticipantComponent from './participant.component';
=======
import { ParticipantComponent } from './participant.component';
>>>>>>> main

describe('ParticipantComponent', () => {
  let component: ParticipantComponent;
  let fixture: ComponentFixture<ParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
