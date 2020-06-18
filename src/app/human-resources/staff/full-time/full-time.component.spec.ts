import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeComponent } from './full-time.component';

describe('FullTimeComponent', () => {
  let component: FullTimeComponent;
  let fixture: ComponentFixture<FullTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
