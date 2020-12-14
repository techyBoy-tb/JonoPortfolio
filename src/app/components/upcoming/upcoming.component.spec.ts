import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAngularMaterialModule } from 'src/app/shared/angular-material.module';
import { UpcomingComponent } from './upcoming.component';


describe('UpcomingComponent', () => {
  let component: UpcomingComponent;
  let fixture: ComponentFixture<UpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingComponent],
      imports: [CustomAngularMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
