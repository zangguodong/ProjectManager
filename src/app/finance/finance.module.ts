import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRouterModule } from './finance.router.module';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@NgModule({
  declarations: [ExpenseListComponent],
  imports: [CommonModule, FinanceRouterModule],
})
export class FinanceModule {}
