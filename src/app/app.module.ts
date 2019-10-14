import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexModule } from '@angular/flex-layout';
import {
  APP_FOOTER_CONTENT,
  APP_FOOTER_INFO_TOKEN,
  ROUTE_CONFIG_DEFINITION_TOKEN,
  ROUTE_CONFIG_DEFINITIONS,
} from './constant';
import { SideBarComponent } from './common/components/side-bar/side-bar.component';
import { PurePipe } from './common/pipe/pure.pipe';
import { SharedModule } from './common/components/module';

@NgModule({
  declarations: [AppComponent, SideBarComponent, PurePipe],
  imports: [BrowserModule, AppRoutingModule, FlexModule, SharedModule],
  providers: [
    { provide: APP_FOOTER_INFO_TOKEN, useValue: APP_FOOTER_CONTENT },
    {
      provide: ROUTE_CONFIG_DEFINITION_TOKEN,
      useValue: ROUTE_CONFIG_DEFINITIONS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
