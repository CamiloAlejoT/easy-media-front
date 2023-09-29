import { Component } from '@angular/core';
import { PBL_FILTER_TITLE, PBL_PARAM_CREATIONDATE, PBL_PARAM_USER } from 'src/app/core/constants/constants';
import { SearchFromValues } from 'src/app/core/interfaces/forms.interface';
import { FilterPubResponse } from 'src/app/core/interfaces/http.interface';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent {

  //formFields: string[] = ['date', 'name', 'title']
  publications: FilterPubResponse[] = []
  formFields: string[] = ['date', 'title']
  constructor(
    private publicationsService: PublicationsService
  ) { }

  async getPost(url: string) {
    this.publications = await this.publicationsService.getPost(url)
  }


  dataHandler(event: SearchFromValues[]) {
    let isEdited: boolean = false
    let urlParams: string = ''
    event.forEach(value => {
      if (value.value) {
        switch (value.fieldName) {
          case 'date':
            let fixedDate = value.value.split('-')
            fixedDate[1] = `${(Number(fixedDate[1]) - 1)}`
            urlParams = urlParams + (`${isEdited ? '&' : ''}${PBL_PARAM_CREATIONDATE}=${fixedDate.join('-')}`)
            isEdited = true
            break;
          case 'title':
            urlParams = urlParams + (`${isEdited ? '&' : ''}${PBL_FILTER_TITLE}=${value.value}`)
            isEdited = true
            break;
        }
      }
    })
    this.getPost(urlParams)



  }

}
