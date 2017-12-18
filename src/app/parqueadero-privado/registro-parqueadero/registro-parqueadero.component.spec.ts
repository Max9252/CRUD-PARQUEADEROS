import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroParqueaderoComponent } from './registro-parqueadero.component';

describe('RegistroParqueaderoComponent', () => {
  let component: RegistroParqueaderoComponent;
  let fixture: ComponentFixture<RegistroParqueaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroParqueaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
