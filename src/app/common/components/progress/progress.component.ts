import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProgressComponent implements OnInit {
  constructor() {}
  @Input()
  footerInfo?: string;
  // 已完成进度比例，格式：0-100%
  fullFillRatio = '60%';
  // 已消费日期所占比例，格式：0-100%
  dayUsed = '30%';
  ngOnInit() {}
}
