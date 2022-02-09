import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: '',
      type: 'header'
    },
    {
      title: 'Materiales educativos',
      icon: 'fas fa-book',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Libros de texto',
          url:'/Materiales/libros'
        },
        {
          title: 'Materiales audiovisuales',

          url:'/Materiales/audiovisuales'
        },
        {
          title: 'Materiales informáticos',
          url:'/Materiales/informaticos'
        }
        ,
        {
          title: 'Programación regular'
        },
        {
          title: 'Ligas de interés'
        },
        {
          title: 'Mapa de periodos lectivos'
        },
        {
          title: 'Tablero didáctico'
        },
        {
          title: 'Matrices'
        },
        {
          title: 'Matriz de Recursos Audiovisuales'
        },
        {
          title: 'Matriz de Correspondencia'
        },
        {
          title: 'Círculos de lectura'
        },
        {
          title: 'Inglés en Telesecundaria'
        }
      ]
    },
    {
      title: 'Fortalecimiento de capacidades técnicas',
      icon: 'fas fa-edit',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Products',
        },
        {
          title: 'Orders'
        },
        {
          title: 'Credit cart'
        }
      ]
    },
    {
      title: 'Innovación, estadística y evaluación',
      icon: 'fas fa-chart-area',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'General',
        },
        {
          title: 'Panels'
        },
        {
          title: 'Tables'
        },
        {
          title: 'Icons'
        },
        {
          title: 'Forms'
        }
      ]
    },
    {
      title: 'Normatividad',
      icon: 'fas fa-list-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
        }
      ]
    },
    
    {
      title: '',
      type: 'header'
    },
   /* {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },*/
    {
      title: 'Calendario',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    }/*,
    {
      title: 'Examples',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple'
    }*/
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
