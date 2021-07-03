import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPraca } from '../models/IPraca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracasService {
  private BASE_URL = environment.base_url;
  private PRACAS_PATH = '/pracas'

  private PRACAS_URL = this.BASE_URL.concat(this.PRACAS_PATH);

  constructor(private http: HttpClient) { }

  getPracas() {
    return this.http.get(this.PRACAS_URL);
  }

  getPraca(id: number): Observable<IPraca> {
    return this.http.get<IPraca>(this.PRACAS_URL + '/' + id);
  }
}
