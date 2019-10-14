import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'list', component: ExpenseListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class FinanceRouterModule {}
