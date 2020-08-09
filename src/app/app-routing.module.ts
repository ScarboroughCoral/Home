import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'threejs-training',
    loadChildren: () => import("./modules/threejs-training/threejs-training.module").then(m => m.ThreejsTrainingModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
