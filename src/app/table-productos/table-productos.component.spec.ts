import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductosComponent } from './table-productos.component';

describe('TableProductosComponent', () => {
  let component: TableProductosComponent;
  let fixture: ComponentFixture<TableProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
