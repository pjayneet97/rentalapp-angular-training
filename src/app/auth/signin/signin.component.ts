import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signin(signinForm:NgForm){
    console.log(signinForm.value)
    // code to sign in using firebase auth
    signinForm.reset()
  }

}
