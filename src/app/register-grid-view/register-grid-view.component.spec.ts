import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGridViewComponent } from './register-grid-view.component';

describe('RegisterGridViewComponent', () => {
  let component: RegisterGridViewComponent;
  let fixture: ComponentFixture<RegisterGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterGridViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
