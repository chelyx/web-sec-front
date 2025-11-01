import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorAlumnosComponent } from './buscador-alumnos.component';

describe('BuscadorAlumnosComponent', () => {
  let component: BuscadorAlumnosComponent;
  let fixture: ComponentFixture<BuscadorAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
