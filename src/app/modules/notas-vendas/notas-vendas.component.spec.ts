import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasVendasComponent } from './notas-vendas.component';

describe('NotasVendasComponent', () => {
  let component: NotasVendasComponent;
  let fixture: ComponentFixture<NotasVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
