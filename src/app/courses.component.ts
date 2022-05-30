import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',//css selector -> class="a" ".a"  <div> "div"  id="a" "#id"
    template: `
        <!--<h2>{{title}} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul> -->

        <!-- <h2>{{title}} this is interpolation</h2>
        <h2 [textContent]="title + ' this is property binding'"></h2> -->
        <!-- property binding has style binding, class binding, attribute binding -->
        <!-- <table>
            <tr>
                <td [attr.colspan]="colSpan">colspan is an HTML attribute but not DOM element</td>
            </tr>
        </table> -->

        <!-- <button class="btn btn-primary" [class.active]="isActive">Class binding</button> -->
        <!-- <button [style.backgroundColor]="isActive?'Green':'white'">Style binding</button> -->
        <!-- <div (click)="onDivClick()">
            <button (click)="onClick($event)">Event binding</button>
        </div> -->
        <!-- Event filtering :<input (keyup.enter)="onKeyUp()"> -->
        <!-- Template variables :<input #email (keyup.enter)="onKeyUp(email.value)"> -->
        <!-- Two-way binding : <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"> -->
        <!-- <h2>{{course.title | uppercase}}</h2> <br>
        <h2>{{course.students | number}}</h2> <br>
        <h2>{{course.rating | number:'3.2-2'}}</h2> <br>
        <h2>{{course.price | currency:'INR':true:'3.2-2'}}</h2> <br>
        <h2>{{course.releaseDate | date:'shortDate'}}</h2> -->
        <h2> {{text | summary:1}}</h2>





    `
})

export class CoursesComponent {
    title = "Courses List";
    colSpan = 20;
    isActive = true;
    courses;
    email = "me@abc.com";
    text = "scbkhdbckhdbca cahhbcahdbciadbiadiuabiuabciu";
    onClick($event: any) {
        $event.stopPropagation();//used to stop bubbling
        console.log('You clicked the button', $event)
    }
    onDivClick() {
        console.log('Div clicked');
    }
    onKeyUp() {
        console.log(this.email);
    }
    course = {
        title: 'Angular basics',
        rating: 4.9753,
        price: 190.79,
        students: 102875,
        releaseDate: new Date()
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}