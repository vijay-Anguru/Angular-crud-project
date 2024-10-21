import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendardemoComponent } from './calendardemo.component';

describe('CalendardemoComponent', () => {
  let component: CalendardemoComponent;
  let fixture: ComponentFixture<CalendardemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendardemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
