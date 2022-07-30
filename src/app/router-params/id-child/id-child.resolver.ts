import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdChildResolver implements Resolve<boolean> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('Resolve IdChild', route.data, route.params, route.queryParams);
    console.log(
      'Resolve IdChild Parent',
      route.parent?.data,
      route.parent?.params,
      route.parent?.queryParams
    );
    return of(true);
  }
}
