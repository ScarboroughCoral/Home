import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SvgComponent } from './components/svg/svg.component';



@NgModule({
  declarations: [PageNotFoundComponent, SvgComponent],
  imports: [
    CommonModule
  ],
  exports: [SvgComponent]
})
export class SharedModule { }
