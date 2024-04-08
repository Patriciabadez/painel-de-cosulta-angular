import { Component } from '@angular/core';

@Component({
  selector: 'app-notas-entradas',
  templateUrl: './notas-entradas.component.html',
  styleUrls: ['./notas-entradas.component.scss']
})
export class NotasEntradasComponent {
  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
  consultas = [
    { id: 1, nome: 'Notas de Vendas', rota: '/notas-vendas' },
    { id: 2, nome: 'Notas de Entradas', rota: '/notas-entradas' },
    { id: 3, nome: 'Voltar ao inicio', rota: '/home' },
    { id: 3, nome: 'Sair', rota: '/' }
  ];

  notas = [
    {
      nome: 'Nota 1',
      numero: '123',
      cnpjCpf: '000.000.000-00',
      empresa: 'Empresa A',
      valor: 100.00,
      rota: '/nota-1',
      link: 'Ver detalhes'
    },
    {
      nome: 'Nota 2',
      numero: '456',
      cnpjCpf: '00.000.000/0001-00',
      empresa: 'Empresa B',
      valor: 150.00,
      rota: '/nota-2',
      link: 'Ver detalhes'
    },
    {
      nome: 'Nota 3',
      numero: '789',
      cnpjCpf: '000.000.000-00',
      empresa: 'Empresa C',
      valor: 200.00,
      rota: '/nota-3',
      link: 'Ver detalhes'
    }
    // Adicione mais notas conforme necessário
  ];
}
