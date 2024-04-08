import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNotasComponent } from './visualizar-notas.component';

describe('VisualizarNotasComponent', () => {
  let component: VisualizarNotasComponent;
  let fixture: ComponentFixture<VisualizarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
