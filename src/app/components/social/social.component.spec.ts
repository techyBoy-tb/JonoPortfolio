import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { SocialComponent } from './social.component';


describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialComponent],
      imports: [
        CustomAngularMaterialModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
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
