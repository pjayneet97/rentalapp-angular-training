import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(public db:AngularFirestore) { }
  addEnquiry(enquiry){
    return this.db.collection('enquiry').add(enquiry)
  }
}
