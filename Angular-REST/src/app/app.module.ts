import { PostService } from './posts/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedService } from './shared/services/shared.service';


const appRoutes: Routes  = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  PostService,
  SharedService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
