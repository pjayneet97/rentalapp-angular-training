import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singleproperty',
  templateUrl: './singleproperty.component.html',
  styleUrls: ['./singleproperty.component.css']
})
export class SinglepropertyComponent implements OnInit {
  @Input('property') property
           
  constructor() { }

  ngOnInit() {
  }

}
