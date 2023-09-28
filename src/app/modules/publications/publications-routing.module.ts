import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from 'src/app/modules/publications/create-post/create-post.component';
import { AllPostsComponent } from 'src/app/modules/publications/all-posts/all-posts.component';
import { MyPostsComponent } from 'src/app/modules/publications/my-posts/my-posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-post', pathMatch: 'full' },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'all-posts', component: AllPostsComponent },
  { path: 'my-posts', component: MyPostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
