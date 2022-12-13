import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Regdetails, IRegdetails } from './regdetails.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegService {
  apiUrl = "http://localhost:5011/api/client/GetAllData";
  constructor(private httpClient: HttpClient) { }
 
  RegData: Regdetails = new Regdetails();
  RegList!: Regdetails[];

  getRegList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  
  }


}


