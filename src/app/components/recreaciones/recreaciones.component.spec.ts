import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreacionesComponent } from './recreaciones.component';

describe('RecreacionesComponent', () => {
  let component: RecreacionesComponent;
  let fixture: ComponentFixture<RecreacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
