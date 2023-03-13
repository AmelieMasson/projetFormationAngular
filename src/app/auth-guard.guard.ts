import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from './services/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  


constructor(private router:Router, private utilisateurService:UtilisateurService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(sessionStorage.getItem('token') && sessionStorage.getItem('nomRole') === 'admin')
      
      {
          return true;
        
      }
      else{
        this.router.navigateByUrl('auth')
        return false;
      }
    }

  }
  
    
