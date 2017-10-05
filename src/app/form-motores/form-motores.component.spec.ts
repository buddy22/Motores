import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMotoresComponent } from './form-motores.component';

describe('FormMotoresComponent', () => {
  let component: FormMotoresComponent;
  let fixture: ComponentFixture<FormMotoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMotoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
