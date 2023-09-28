import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePostComponent,
    AppHeaderComponent,
    AllPostsComponent,
    MyPostsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicationsModule { }
