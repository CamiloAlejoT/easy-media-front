import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CreatePost, CreateResponse } from 'src/app/core/interfaces/http.interface';
import { BASEURL, PBL_BASE, PBL_CREATE } from 'src/app/core/constants/constants';

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
}
