import { MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

export const MAT_MODULE = [MatProgressBarModule, BrowserAnimationsModule];

/**
 *  Entry shared module containers source with app_admin and app_user
 */
@NgModule({
  imports: [...MAT_MODULE],
  exports: [...MAT_MODULE],
})
export class SharedModule {}
