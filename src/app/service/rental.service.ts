import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private db:AngularFirestore) { }

  addRental(rental){
    let createdOn = new Date()
    return this.db.collection('rentals').add({createdOn,...rental})

  }

  getAllRentals(){
    return this.db.collection('rentals').valueChanges()
  }
}
