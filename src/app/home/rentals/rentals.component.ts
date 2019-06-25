import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
  properties=[]
  selectedProperty
  mode='list' // list or single
  constructor(public rentalService:RentalService) { }

  ngOnInit() {
    this.getAllProperties()
  }

  getAllProperties(){
    this.rentalService.getAllRentals().subscribe(res=>{
      this.properties=res
      console.log(this.properties)
    })
  }
  ViewDetails(property){
    this.mode='single'
    this.selectedProperty=property
  }

  getOrdered(by:string){
    this.rentalService.getOrderedRentals(by).subscribe(data=>{
      this.properties=data
    })
  }

  search(searchkey:string){
    console.log(searchkey)
    this.rentalService.getByLocality(searchkey).subscribe(data=>{
      this.properties=data
    })
  }

}
