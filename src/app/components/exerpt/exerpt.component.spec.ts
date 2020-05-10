import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerptComponent } from './exerpt.component';

describe('ExerptComponent', () => {
  let component: ExerptComponent;
  let fixture: ComponentFixture<ExerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
