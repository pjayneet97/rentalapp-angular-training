import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/service/rental.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {
  path=""
  isUploaded=false
  isPropertyAdded:boolean=false
  constructor(public rentalService:RentalService,private storage: AngularFireStorage,public router:Router,public authService:AuthService) { }

  ngOnInit() {
  }
  addProperty(addrentalform:NgForm){
    
    console.log(addrentalform.value)
    let ownerEmail = this.authService.getEmail()
    let image=this.path
    this.rentalService.addRental({image,ownerEmail,...addrentalform.value}).then(data=>{
      console.log(data.id)
      addrentalform.reset()
      this.isPropertyAdded=true
    }).catch(err=>{
      console.log(err)
    })  

  }

  selectFile(event){
    let file = event.target.files[0]
    console.log(event.target.files[0])
    let date = new Date()
    let unique = '/rentals/'+date
    let task = this.storage.upload(unique,file).then(data=>{
      this.isUploaded=true
      this.path=unique
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
  }
}
