import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialAdminComponent } from './commercial-admin.component';

describe('CommercialAdminComponent', () => {
  let component: CommercialAdminComponent;
  let fixture: ComponentFixture<CommercialAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
