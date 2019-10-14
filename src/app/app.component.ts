import { Component, Inject } from '@angular/core';
import { APP_FOOTER_INFO_TOKEN } from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'plan-manage';
  constructor(@Inject(APP_FOOTER_INFO_TOKEN) public appFooterInfo) {}
}
