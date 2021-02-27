import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactInfoComponent } from './emergency-contact-info.component';

describe('EmergencyContactInfoComponent', () => {
  let component: EmergencyContactInfoComponent;
  let fixture: ComponentFixture<EmergencyContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
