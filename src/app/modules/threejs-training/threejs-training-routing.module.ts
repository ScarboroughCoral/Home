import { TrainingComponent } from './training.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'training', component: TrainingComponent },
  {
    path: '',
    redirectTo: 'training'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreejsTrainingRoutingModule { }
