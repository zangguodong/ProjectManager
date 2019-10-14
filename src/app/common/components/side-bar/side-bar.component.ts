import { Component, Inject, OnInit } from '@angular/core';
import { ROUTE_CONFIG_DEFINITION_TOKEN } from '../../../constant';
import { NavigationEnd, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import { SideBarRouteType } from 'src/app/app-routing.module';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(
    @Inject(ROUTE_CONFIG_DEFINITION_TOKEN)
    public routeDefs: ReadonlyArray<SideBarRouteType>,
    private route: Router,
  ) {}
  urlPath$: Observable<string>;
  ngOnInit() {
    this.urlPath$ = this.route.events.pipe(
      switchMap(ev => {
        if (ev instanceof NavigationEnd) {
          return of(ev.urlAfterRedirects.split('/')[1]);
        }
        return EMPTY;
      }),
    );
  }
}
