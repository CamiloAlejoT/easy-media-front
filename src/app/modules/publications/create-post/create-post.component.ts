import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PUBLICATIONS } from 'src/app/core/enum/publications.enum';
import { PublicationsService } from 'src/app/services/publications.service';
import { CreatePost, CreateResponse } from 'src/app/core/interfaces/http.interface';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  publicationsEnum = PUBLICATIONS
  newPostForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private publicationsService: PublicationsService
  ) {

    this.newPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      message: ['', [Validators.required, Validators.maxLength(300)]]
    })

  }


  async onSubmit() {
    if (this.newPostForm.valid) {
      const postData: CreatePost = {
        author: localStorage.getItem('uuid'),
        ... this.newPostForm.value
      }
      try{
        const response = await this.publicationsService.createPost(postData)
        this.newPostForm.reset()
        console.log('created');
        
      } catch (error) {
        console.log('fail');
      }
      

    }
  }


}
