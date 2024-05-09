import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    //rota filha
    children: [
      {
        path: ':id/:username',
        component: AboutComponent,
      },
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
    .then(module => module.DashboardModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
  }
];
