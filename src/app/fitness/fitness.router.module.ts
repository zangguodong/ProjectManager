import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FitnessListComponent } from './fitness-list/fitness-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: FitnessListComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class FitnessRouterModule {}
