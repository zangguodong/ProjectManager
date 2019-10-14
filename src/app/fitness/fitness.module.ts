import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessRouterModule } from './fitness.router.module';
import { FitnessListComponent } from './fitness-list/fitness-list.component';
import { ProgressComponent } from '../common/components/progress/progress.component';
import { SharedModule } from '../common/components/module';

@NgModule({
  declarations: [FitnessListComponent, ProgressComponent],
  imports: [CommonModule, FitnessRouterModule, SharedModule],
})
export class FitnessModule {}
