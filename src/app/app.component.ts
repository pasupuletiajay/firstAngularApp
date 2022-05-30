import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//component
  title = 'hello-world';
  post = {
    title: "The book",
    isGood: true
  }
  courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }
  ]
  task = {
    name: "learn angular",
    assignee: null
  }
  add() {
    this.courses.push({ id: 4, name: "course4" });
  }
  remove(course: any) {
    let idx = this.courses.indexOf(course);
    this.courses.splice(idx, 1);
  }
  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" },
      { id: 4, name: "course4" }
    ]
  }
  trackCourse(course: any) {
    return course ? course.id : undefined;
  }
  viewMode = 'map';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed: ", eventArgs);
  }

  tweet = {
    isLiked: true,
    likesCount: 100
  }
}
