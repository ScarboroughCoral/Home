import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { ThreejsTrainingRoutingModule } from './threejs-training-routing.module';



@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    ThreejsTrainingRoutingModule
  ]
})
export class ThreejsTrainingModule { }
