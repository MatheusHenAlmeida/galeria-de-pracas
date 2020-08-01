import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IPraca } from '../models/IPraca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracasService {
  private USER_URL = environment.user_url;
  private PRACAS = '/pracas'

  private PRACAS_URL = this.USER_URL.concat(this.PRACAS);

  constructor(private http: HttpClient) { }

  getPracas() {
    return this.http.get(this.PRACAS_URL);
  }

  getPraca(id: number): Observable<IPraca> {
    return this.http.get<IPraca>(this.PRACAS_URL + '/' + id);
  }
}
