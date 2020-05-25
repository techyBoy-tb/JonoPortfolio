import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeComponent } from './contact-me.component';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MyErrorStateMatcher } from 'src/app/utils/MyErrorStateMatcher';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeComponent ],
      imports: [ CustomAngularMaterialModule, BrowserAnimationsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
