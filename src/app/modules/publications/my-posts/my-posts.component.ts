import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';
import { FilterPubResponse } from 'src/app/core/interfaces/http.interface'

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  flag: boolean = true
  constructor(
    private publicationsService: PublicationsService
  ) { }

  ngOnInit(): void {
    this.getMyPost()
  }

  selectedDate = ""
  myPublications: FilterPubResponse[] = []


  async getMyPost() {

    if (this.selectedDate) {
      let fixedDate = this.selectedDate.split('-')
      fixedDate[1] = `${(Number(fixedDate[1]) - 1)}`
      this.myPublications =
        await this.publicationsService.getMyPost(
          {
            findUser: `${localStorage.getItem('uuid')}`,
            creationDate: fixedDate.join('-')
          })
    } else {
      this.myPublications = await this.publicationsService.getMyPost({ findUser: `${localStorage.getItem('uuid')}` })
    }




  }
}
