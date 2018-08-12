import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienesRaicesComponent } from './bienes-raices.component';

describe('BienesRaicesComponent', () => {
  let component: BienesRaicesComponent;
  let fixture: ComponentFixture<BienesRaicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienesRaicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienesRaicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
