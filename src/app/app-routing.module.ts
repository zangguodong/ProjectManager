import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export interface SideBarRouteType extends Route {
  sideBarName: string;
}
export const REAL_ROUTES_DEFINITION: ReadonlyArray<
  SideBarRouteType
> = Object.freeze([
  {
    path: 'work-skill',
    loadChildren: './work-skill/work-skill.module#WorkSkillModule',
    sideBarName: '工作技能',
  },
  {
    path: 'finance',
    loadChildren: './finance/finance.module#FinanceModule',
    sideBarName: '财务',
  },
  {
    path: 'reading',
    loadChildren: './reading/reading.module#ReadingModule',
    sideBarName: '阅读',
  },
  {
    path: 'fitness',
    loadChildren: './fitness/fitness.module#FitnessModule',
    sideBarName: '健身',
  },
]);
export const PROJECT_ROUTES: Route[] = [
  ...REAL_ROUTES_DEFINITION,
  {
    path: '',
    redirectTo: 'work-skill',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'work-skill',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(PROJECT_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
