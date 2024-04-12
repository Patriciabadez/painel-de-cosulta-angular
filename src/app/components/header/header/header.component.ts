import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from '../../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private location: Location,private sidenav: SidenavComponent) {}

  ngOnInit(): void {}

  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }
  voltar() {
    this.router.navigate(['/home']);
  }

  toggleSidebar(): void {
    this.sidenav.toggleSidebar(); // Chame o método toggleSidebar do componente do sidenav
  }
}
