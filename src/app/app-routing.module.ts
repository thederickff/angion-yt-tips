import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mask-input',
    loadChildren: () => import('./ytips/mask-input/mask-input.module').then(m => m.MaskInputPageModule)
  },
  {
    path: 'date-format',
    loadChildren: () => import('./ytips/date-format/date-format.module').then(m => m.DateFormatPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
