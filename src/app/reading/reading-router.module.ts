import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadingListComponent } from './components/reading-list/reading-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: ReadingListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ReadingRouterModule {}
