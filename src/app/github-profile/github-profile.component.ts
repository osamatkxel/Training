import { Data } from './data';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-github-profile',
//   templateUrl: './github-profile.component.html',
//   styleUrls: ['./github-profile.component.scss']
// })
// export class GithubProfileComponent implements OnInit {

//   index = 1;
//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     console.log('Github Profile onInit')
//     this.route.paramMap
//     .subscribe((params) => {
//       let id = params.get('username');
//       console.log(id);
//     })
//   }

//   clicked() {
//     this.index = this.index + 1;
//   }

// }



import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'exchange-rates',
  templateUrl: './github-profile.component.html'
})
export class GithubProfileComponent implements OnInit {
  rates: any[] = [];
  loading = true;
  error: any;
  findLanguage : number = 2;
  allData : Data[] = [];
  name: string = '';
  love: string = '';
  res : Data = {id : 1, name : 'jj', loved : true};
  getData = gql`query {
    languages {
      id,
      name,
      loved
    }
  }`

  

  

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.getData
      })
      .valueChanges.subscribe((result: any) => {
        console.log('Inside subscribe');
        this.allData = result.data.languages;
        console.log(this.allData);
       
      });
  }

  submit(form: any) {
    console.log(form.value);
    this.findLanguage = form.value.findLanguage;
    console.log(this.findLanguage)


    let getDataa = gql`query {
      findID(id: ${this.findLanguage}) {
        id,
        name,
        loved
      }
    }`





    this.apollo
    .watchQuery({
      query: getDataa
    })
    .valueChanges.subscribe((result: any) => {
      console.log('Inside subscribe');
      let res = result.data.findID;
      console.log(res);
      this.allData = [];
      this.allData.push(res);
     
    })
    

    

  }

  addLanguage() {
    console.log('Name: ', typeof this.name)
    console.log('loved: ', this.love)

    let loved: boolean = true;
    let n:string = this.name; 
    // let n = (this.name as string)
    if(this.love === 'true') {
      loved = true;
    } else {
      loved = false;
    }
    const Post_ = gql` mutation {
      Mute(name: ${JSON.stringify(n)}, loved: ${loved}) {
        id,
        name,
        loved
      }
    }`



    this.apollo.mutate({
      mutation: Post_
    }).subscribe((result: any) => {
        let res = result.data.Mute;
        //as I get the error that object is inextensible so did this
        let newAllData = Object.assign([], this.allData);
        newAllData.push(res);
        this.allData = newAllData;
        
        //this.allData.push(res);
        console.log('Post done');

    })

  }
}