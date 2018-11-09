import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
         { titulo: 'Dashboard', url: '/pages/dashboard' },
         { titulo: 'ProgressBAr', url: '/pages/progress' },
         { titulo: 'Gráficas1', url: '/pages/graficas1' }
      ]
    }
  ];

  constructor() { }
}
