import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { InputComponent } from '../input/input.component';
import { ContactMeComponent } from './contact-me.component';


describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMeComponent, InputComponent],
      imports: [
        CustomAngularMaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
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
