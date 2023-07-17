import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((x) => x.MainModule),
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./movie/movies.module').then((x) => x.MoviesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ScreenRoutingModule {}
