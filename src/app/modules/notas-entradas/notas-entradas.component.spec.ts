import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEntradasComponent } from './notas-entradas.component';

describe('NotasEntradasComponent', () => {
  let component: NotasEntradasComponent;
  let fixture: ComponentFixture<NotasEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasEntradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
