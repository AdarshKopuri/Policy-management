import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private apiUrl = `${environment.consumerUrl}/consumer-api`;

  
  constructor(private http: HttpClient ,private authService:AuthService) { }

  createBusiness( business :any): Observable<any>{
    console.log(business)
     return this.http.post(`${this.apiUrl}/createConsumerBusiness`, business
      ,{ headers: this.authService.getHeaders() }
     )
  }

  getBusiness(consumerid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/viewConsumerBusiness/${consumerid}` ,
      { headers : this.authService.getHeaders() }
    );
  }

  createProperty(property :any) : Observable<any>{
const token =this.authService.getToken()
    return this.http.post(`${this.apiUrl}/createBusinessProperty`, property  
     // , `Bearer ${token}`,
      ,{ headers: this.authService.getHeaders() }
    )

  }


  getProperty(propertyid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/viewConsumerProperty/${propertyid}` ,
      { headers : this.authService.getHeaders() }
    );
  }
}
