import { Component } from '@angular/core';

@Component({
  selector: 'app-notas-entradas',
  templateUrl: './notas-entradas.component.html',
  styleUrls: ['./notas-entradas.component.scss']
})
export class NotasEntradasComponent {
  consultas = [
    { id: 1, nome: 'Notas de Vendas', rota: '/notas-vendas' },
    { id: 2, nome: 'Notas de Entradas', rota: '/notas-entradas' },
    { id: 3, nome: 'Página Inicial', rota: '/' }
  ];
}
