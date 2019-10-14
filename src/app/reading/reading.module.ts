import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { ReadingRouterModule } from './reading-router.module';

@NgModule({
  declarations: [ReadingListComponent],
  imports: [CommonModule, ReadingRouterModule],
})
export class ReadingModule {}
