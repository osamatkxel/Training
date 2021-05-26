import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  name = 'arslan'
  view = 'map';
  title = {
    name: null
  }
  contactMethods = [
    {
      id: 1,
      name: 'Email'
    },
    {
      id: 2,
      name: 'Phone'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

  log(x: any) {
    console.log(x)
  }

  submit(x:any) {
    console.log(x.value );
    console.log('form submitted')
  }

}
