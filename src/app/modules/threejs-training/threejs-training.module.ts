import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { ThreejsTrainingRoutingModule } from './threejs-training-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    ThreejsTrainingRoutingModule,
    NzLayoutModule
  ]
})
export class ThreejsTrainingModule { }
