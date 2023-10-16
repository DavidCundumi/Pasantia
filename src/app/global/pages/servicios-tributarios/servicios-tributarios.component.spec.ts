import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTributariosComponent } from './servicios-tributarios.component';

describe('ServiciosTributariosComponent', () => {
  let component: ServiciosTributariosComponent;
  let fixture: ComponentFixture<ServiciosTributariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosTributariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosTributariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
