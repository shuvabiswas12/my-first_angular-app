import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateWithBackendComponent } from './communicate-with-backend.component';

describe('CommunicateWithBackendComponent', () => {
  let component: CommunicateWithBackendComponent;
  let fixture: ComponentFixture<CommunicateWithBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicateWithBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateWithBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
