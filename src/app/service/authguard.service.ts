import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public authService:AuthService,public router:Router) { }
  canActivate():boolean{
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      this.router.navigateByUrl('/auth')
      return false
    }
  }
}
