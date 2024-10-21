import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPolicyComponent } from './submit-policy.component';

describe('SubmitPolicyComponent', () => {
  let component: SubmitPolicyComponent;
  let fixture: ComponentFixture<SubmitPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
