import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/service/rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {

  constructor(public rentalService:RentalService,public router:Router) { }

  ngOnInit() {
  }
  addProperty(addrentalform:NgForm){
    console.log(addrentalform.value)
    this.rentalService.addRental(addrentalform.value).then(data=>{
      console.log(data.id)
    }).catch(err=>{
      console.log(err)
    })  

  }
}
