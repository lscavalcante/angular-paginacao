import { Aluno } from './../models/aluno';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {


  private baseURL: string = 'http://127.0.0.1:8000/aluno/';

  constructor(
    private http: HttpClient
  ) { }
  

  getAlunoPaginacao(page: number) : Observable<Page> {
    // http://127.0.0.1:8000/aluno/v1/?page=2
    return this.http.get<Page>(`${this.baseURL}v1/?page=${page}`);
  }

}
