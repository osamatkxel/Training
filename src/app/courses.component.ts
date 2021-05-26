//This is a component
//1st step - Create a component
import { Component, Output, EventEmitter } from '@angular/core'; // to make a class as Component, we have to import components from Angular core library
import { CourseService } from './courses.service';

@Component({
    selector: 'course', //How Css Selector will pick it. If class then dot, if ID then #
    template: `
                <h2>{{ getTitle() | uppercase}}</h2>
                <h3> There are total {{ courses.length }} Courses</h3>
                <h4> Summary: {{text | summary:20 | titlecase}} </h4>
                <div [hidden] = "courses.length < 0">
                    <ul>
                        <li *ngFor="let course of courses">
                            {{ course | titlecase}}
                        </li>
                    </ul>
                </div>
                <div [hidden] = "courses.length > 0">
                    No courses yet
                </div>
                <button class = "btn btn-primary" (click) = "clicked()">Click</button>
                ` // What to render on HTML template -- If there is more items then we place it in a separte file and name it here
})


export class CoursesComponent {
    title = "List of Courses";
    text = "programming fundamentals, Object Oriented Programming, Data Structures and Algorithms, Database System, Operating System";
    courses: any[];
    @Output() change = new EventEmitter();
    constructor(service: CourseService) { //Now we have to add dependency injection in app Module in Providers
        //let service = new CourseService(); //this line can be used as dependency injection by adding it to constructor
        this.courses = service.getCurses();
        //this.courses = [];
    }

    getTitle() {
        return this.title;
    }

    clicked() {
        this.change.emit(this.title);
        this.title = "changed";
         this.courses = []
        //this.courses.splice(0,1);
    }
}


//2nd step is to register it into a module - for now we have an AppModule so we register it there