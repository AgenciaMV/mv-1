import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasBebidasComponent } from './comidas-bebidas.component';

describe('ComidasBebidasComponent', () => {
  let component: ComidasBebidasComponent;
  let fixture: ComponentFixture<ComidasBebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidasBebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
