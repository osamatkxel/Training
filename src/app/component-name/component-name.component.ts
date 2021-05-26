import { Component,  ElementRef,  OnInit, ViewChild,  } from '@angular/core';

@Component({
  selector: 'svg-task',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss']
})
export class ComponentNameComponent implements OnInit {

  @ViewChild("polygon1", { static: false }) myButton?: ElementRef;
  constructor() {

     } 
     ngAfterViewInit() {
      console.log("Hello ");
     } 

  ngOnInit(): void {
    // let first = document.getElementById('one'); //chnage the id to numbering to enable typescript animation option
    // let second = document.getElementById('two');
    // let third = document.getElementById('three');
    // let forth = document.getElementById('four');
    // let fifth = document.getElementById('five');
    // if(first && second && third && forth && fifth) {
    //   first.style.display = "none";
    //   second.style.display = "none";
    //   third.style.display = "none";
    //   forth.style.display = "none";
    //   fifth.style.display = "none";

    // }
    //console.log(second);
    // setTimeout(() => {
    //   if(first) {
    //     first.style.display = "block";
    //     }
    //   setTimeout(() => {
    //     if(second) {
    //       second.style.display = "block";
    //     }
    //     setTimeout(() => {
    //       if(third) {
    //         third.style.display = "block";
    //       }
    //       setTimeout(() => {
    //         if(forth) {
    //           forth.style.display = "block";
    //         }
    //         setTimeout(() => {
    //           if(fifth) {
    //             fifth.style.display = "block";
    //           }
    //         }, 1000);
    //       }, 1000);
    //     }, 1000);
    //   }, 1000);  
    // }, 3000)
    
  }

  SVGManipulation() {
    console.log('clickked');
    let yy = this.myButton?.nativeElement.points[0].y;
    let newy = yy - 8;
    console.log(this.myButton?.nativeElement);
    if(this.myButton?.nativeElement.points[0].y && newy >-71) {
      console.log(this.myButton.nativeElement.points[0].y = newy);
  }
  }

}
