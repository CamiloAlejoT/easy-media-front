import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CreatePost, CreateResponse, FilterPubResponse, FilterPubGet } from 'src/app/core/interfaces/http.interface';
import { BASEURL, PBL_BASE, PBL_CREATE, PBL_FILTER } from 'src/app/core/constants/constants';


@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(
    private http: HttpClient
  ) { }

  async createPost(data: CreatePost): Promise<CreateResponse> {
    const url = `${BASEURL}/${PBL_BASE}/${PBL_CREATE}`
    return await firstValueFrom(this.http.post<CreateResponse>(url, data))
  }

  async getMyPost(data: FilterPubGet): Promise<any> {
    let multipleParams: boolean = false
    let url = `${BASEURL}/${PBL_BASE}/${PBL_FILTER}?`
    for (let param in data) {
      url = url + `${multipleParams ? '&' : ''}${param}=${data[param as keyof FilterPubGet]}`
      multipleParams = true
    }
    return await firstValueFrom(this.http.get(url))
  }


}
