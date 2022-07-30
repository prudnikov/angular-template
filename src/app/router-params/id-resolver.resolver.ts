import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdResolverResolver implements Resolve<number> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<number> {
    const idString = (route.params as unknown as { id: string }).id;
    const idNumber = parseInt(idString);
    return of(idNumber);
  }
}
