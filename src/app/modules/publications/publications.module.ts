import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
