import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private http:HttpClient) { }

  getRates(base:string):Observable<ExchangeRatesResponse>{
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?base=${base}`);
  }
}
