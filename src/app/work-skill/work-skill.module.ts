import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSkillRouterModule } from './work-skill-router.module';
import { TrainingListComponent } from './components/training-list/training-list.component';

@NgModule({
  declarations: [TrainingListComponent],
  imports: [CommonModule, WorkSkillRouterModule],
})
export class WorkSkillModule {}
