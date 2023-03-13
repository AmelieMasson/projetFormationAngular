import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantGuard implements CanActivate {


  
constructor(private router:Router){}


canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if(sessionStorage.getItem('token') && sessionStorage.getItem('nomRole') === 'participant')
    
    {
        return true;
      
    }
    else{
      this.router.navigateByUrl('auth')
      return false;
    }
  }

}