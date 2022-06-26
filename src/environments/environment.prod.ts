// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {SortOrder} from "../app/components/caterer/model/pagination/sort-order.enum";

export const environment = {
  production: true,
  api_success_status: ['API_200','API_201'],
  default_settings: {
    page: 0,
    size: 10,
    sort: 'id',
    order: 'asc'
  },
  api_url : (page: number, size: number, sort: string, order: string, city: string) => `https://virus-caterer.herokuapp.com/search?page=${page}&size=${size}&sort=${sort},${order}&search=${city}`,
  api_caterer_detail: (idOrName: string) => `https://virus-caterer.herokuapp.com/get/${idOrName}`,
  api_caterer_create:  `https://virus-caterer.herokuapp.com/add`
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in catererion mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
