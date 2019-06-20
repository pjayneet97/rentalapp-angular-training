import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/service/rental.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {
  isPropertyAdded:boolean=false
  constructor(public rentalService:RentalService,public router:Router,public authService:AuthService) { }

  ngOnInit() {
  }
  addProperty(addrentalform:NgForm){
    
    console.log(addrentalform.value)
    let ownerEmail = this.authService.getEmail()
    this.rentalService.addRental({ownerEmail,...addrentalform.value}).then(data=>{
      console.log(data.id)
      addrentalform.reset()
      this.isPropertyAdded=true
    }).catch(err=>{
      console.log(err)
    })  

  }
}
