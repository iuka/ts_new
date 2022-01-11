import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SidebarComponent } from './sidebar/sidebar.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  exports:[SidebarComponent],
  providers: [
   {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }
]
})
export class SharedModule { }
