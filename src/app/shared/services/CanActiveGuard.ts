import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router, public authSvr:AuthService){

  }

  canActivate():
    boolean {
    if(true){
      console.log('puede acceder')
      return true;
    }else{
      console.log('no puede acceder')
      this.router.navigate(['/login']);
      return false;
    }
  }

}
