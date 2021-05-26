import { Restaurant } from './../types/todo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Osama Tariq';
  isExpanded: boolean = true;
  public createForm: FormGroup;

  /* declare restaurants variable */
  restaurants: Array<Restaurant>;
  constructor(private api: APIService, private fb: FormBuilder) {
    this.restaurants = [];
    this.createForm = this.fb.group({
      'id': [''],
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }
  async ngOnInit() {
    this.createForm = this.fb.group({
      'id': [''],
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });

    /* fetch restaurants when app loads */
    this.api.ListTodos().then(event => {
      console.log(typeof event.items);
      this.restaurants = (event.items as Restaurant[]);
    });


    /* subscribe to new restaurants being created */
    this.api.OnCreateTodoListener.subscribe( (event: any) => {
      const newRestaurant = event.value.data.onCreateTodo;
      console.log(event);
      this.restaurants = [newRestaurant, ...this.restaurants];
    });

    this.api.OnUpdateTodoListener.subscribe((event : any) => {
      console.log('Updated Listen');
      // const newRestaurant = event.value.data.onUpdateTodo;

      // console.log(newRestaurant)
      this.api.ListTodos().then(event => {
        console.log(typeof event.items);
        this.restaurants = (event.items as Restaurant[]);
      });
    });

    this.api.OnDeleteTodoListener.subscribe((event: any) => {
      console.log('Deleted Listen')
      this.api.ListTodos().then(event => {
        console.log(typeof event.items);
        this.restaurants = (event.items as Restaurant[]);
      });
    })


  }

  //Creating new Todo
  public onCreate(restaurant: Restaurant) {
    this.api.CreateTodo(restaurant).then(event => {
      console.log('item created!');
      this.createForm?.reset();
      //this.restaurants.splice(0, 0, restaurant);
      //console.log('id is: '+ this.restaurants[0].id);
    })
    .catch(e => {
      console.log('error creating restaurant...', e);
    });
  }


  buttonClicked(titlee: any) {
    console.log('Clicked ', titlee)
  }

  toggle() {
    this.isExpanded = !(this.isExpanded);
  }

  //Delete function for Todo
  delTodo(todo: Restaurant) {
    console.log('befpre')
    let td = {
      id: todo.id
    }
    this.api.DeleteTodo(td as Restaurant).then(event => {
      console.log('Deleted');
      let i = this.restaurants.indexOf(todo);
      this.restaurants.splice(i, 1);
    })
    .catch(e => {
      console.log('error Deleting restaurant...', e);
    });
    console.log(todo);
  }

  //Update function for todo
  upTodo(todo : Restaurant) {
    let td = {
      id: todo.id,
      name: 'Updated',   
      description: 'Updated',
    }
    this.api.UpdateTodo(td as Restaurant).then(event => {
      console.log(event);
      console.log('Updated');
      let i = this.restaurants.indexOf(todo);
      this.restaurants.splice(i, 1);
      this.restaurants.splice(0,0, td as Restaurant);
    })
    .catch(e => {
      console.log('error Updating todo...', e);
    });
  }
}


