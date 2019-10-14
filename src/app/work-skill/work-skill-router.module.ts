import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrainingListComponent } from './components/training-list/training-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: TrainingListComponent,
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
export class WorkSkillRouterModule {}
