import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressSvgComponent } from './circle-progress-svg.component';

describe('CircleProgressSvgComponent', () => {
  let component: CircleProgressSvgComponent;
  let fixture: ComponentFixture<CircleProgressSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleProgressSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleProgressSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
