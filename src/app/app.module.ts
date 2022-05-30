import { PostService } from './services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlecasePipe } from './titlecase.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { CourseFormExampleComponent } from './course-form-example/course-form-example.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlecaseComponent,
    TitlecasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    CourseFormExampleComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [//dependencies
    CoursesService,
    AuthorsService,
    HttpClient,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
