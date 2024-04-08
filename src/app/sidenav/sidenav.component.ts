import { Component, computed, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  class: string;
};

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  loggedInUsername: string = '';
  constructor(private _snackBar: MatSnackBar, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.loggedInUsername = decodedToken.Nome;
    }
  }

  items: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
      class: 'custom-text-color',
    },
    {
      icon: 'local_shipping',
      label: 'Transportadoras',
      route: 'transportadoras',
      class: 'custom-text-color',
    },
    {
      icon: 'local_parking',
      label: 'Pátio',
      route: 'patios',
      class: 'custom-text-color',
    },
    {
      icon: 'directions_car',
      label: 'Estacionamento',
      route: 'estacionamento',
      class: 'custom-text-color',
    },
    {
      icon: 'assignment',
      label: 'Relatório de Movimentos',
      route: 'movimentos',
      class: 'custom-text-color',
    },
  ];

  collapsed = signal(true);

  logout(): void {
    this.router.navigate(['/login']);
    window.localStorage.clear();
    this._snackBar.open('Redirecionando para o login...', 'Fechar', {
      duration: 2000,
    });
  }

  sideNavWidth = computed(() => (this.collapsed() ? '58px' : '14vw'));
}
