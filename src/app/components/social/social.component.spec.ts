import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialComponent } from './social.component';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialComponent ],
      imports: [ CustomAngularMaterialModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
