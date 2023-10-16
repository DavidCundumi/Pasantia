import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosConsultoriaComponent } from './servicios-consultoria.component';

describe('ServiciosConsultoriaComponent', () => {
  let component: ServiciosConsultoriaComponent;
  let fixture: ComponentFixture<ServiciosConsultoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosConsultoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
