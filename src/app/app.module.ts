import { RouterModule } from '@angular/router';
import { SummaryPipe } from './courses.pipe';
import { CourseService } from './courses.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatterDirective } from './input-formatter.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GraphQLModule } from './graphql.module';
import { ComponentNameComponent } from './component-name/component-name.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { CommentPostComponent } from './comment-post/comment-post.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent, 
    CommentPostComponent,
    SummaryPipe, FavoriteComponent, InputFormatterDirective, SignupFormComponent, HttpPracticeComponent, NavbarComponent, HomeComponent, GithubProfileComponent, GithubFollowersComponent, ComponentNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AmplifyUIAngularModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent
      },
      { 
        path: 'followers', 
        component: GithubFollowersComponent
      },
      { 
        path: 'profile/:username', 
        component: GithubProfileComponent
      },
      { 
        path: 'posts', 
        component: HttpPracticeComponent
      },
      {
        path: 'comments',
        component: CommentPostComponent
      }
    ]), GraphQLModule
  ],
  providers: [
    CourseService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
