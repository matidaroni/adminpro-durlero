import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
         { titulo: 'Dashboard', url: '/dashboard' },
         { titulo: 'ProgressBAr', url: '/progress' },
         { titulo: 'Gráficas1', url: '/graficas1' }
      ]
    }
  ];

  constructor() { }
}
