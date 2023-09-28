import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canGoToAuthModule, canGoToPublicationsModule } from 'src/app/utilities/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    canActivate: [canGoToAuthModule]
  },
  {
    path: 'publications',
    loadChildren: () => import('./modules/publications/publications-routing.module').then(m => m.PublicationsRoutingModule),
    canActivate: [canGoToPublicationsModule]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
