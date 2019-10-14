import { InjectionToken } from '@angular/core';
import { REAL_ROUTES_DEFINITION } from './app-routing.module';

export const APP_FOOTER_INFO_TOKEN = new InjectionToken('Footer Info');
export const APP_FOOTER_CONTENT = 'designed and developed by gdzang@alauda.io';

export const ROUTE_CONFIG_DEFINITION_TOKEN = new InjectionToken(
  'Router Config',
);
export const ROUTE_CONFIG_DEFINITIONS = REAL_ROUTES_DEFINITION;
