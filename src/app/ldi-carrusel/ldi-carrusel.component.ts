import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-ldi-carrusel',
  templateUrl: './ldi-carrusel.component.html',
  styleUrls: ['./ldi-carrusel.component.scss']
})
export class LdiCarruselComponent implements OnInit {

  constructor() { }

  Images: Array<object> = [
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      name: 'Lengua Materna.español',
      alt: 'Image 1',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      name: 'Matematicas',
      alt: 'Image 2',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      name: 'Historia',
      alt: 'Image 3',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      name: 'Formación Civica y Etica',
      alt: 'Image 4',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      name: 'Ciencias',
      alt: 'Image 5',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      name: 'Lengua Materna.español',
      alt: 'Image 6',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }    
  ]

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 5,
    loop: false,
    loopFillGroupWithBlank: false,
    breakpoints: {
      1368: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      1023: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  };  
  ngOnInit(): void {
  }

}
