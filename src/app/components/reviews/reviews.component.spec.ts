import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { ReviewsComponent } from './reviews.component';


describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsComponent],
      imports: [CustomAngularMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
