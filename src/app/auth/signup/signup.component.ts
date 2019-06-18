import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public auth:AuthService) { }

  ngOnInit() {    
    
  }
  signup(signupForm:NgForm){
    console.log(signupForm.value)
    // code to sign up using firebase auth
    this.auth.signUp(signupForm.value.email,signupForm.value.password)
  }

}
