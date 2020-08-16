import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SvgComponent } from './components/svg/svg.component';
import { CircleProgressSvgComponent } from './components/circle-progress-svg/circle-progress-svg.component';



@NgModule({
  declarations: [PageNotFoundComponent, SvgComponent, CircleProgressSvgComponent],
  imports: [
    CommonModule
  ],
  exports: [SvgComponent, CircleProgressSvgComponent]
})
export class SharedModule { }
