import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }


  public getProvinces(): Observable<any> {
    return this.httpClient.get(`/api/administration/provinces`);
  }


  public getOfficeMaster(): Observable<any> {
    return this.httpClient.get(`/api/config/office/office-master`);
  }



  public getAreas(): Observable<any> {
    return this.httpClient.get(`/api/config/network/area-master`);
  }


  public getZones(): Observable<any> {
    return this.httpClient.get(`/api/config/office/office-master`);
  }

}