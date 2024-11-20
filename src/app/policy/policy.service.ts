import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private apiUrl = `${environment.policyUrl}/policy-api`;
  
  constructor(private http: HttpClient, private authService:AuthService) { }

  createPolicy(policy: any): Observable<any> {

    console.log(policy)
    return this.http.post(`${this.apiUrl}/createPolicy`, policy ,
     { headers : this.authService.getHeaders() }
    );
  }

  updatePolicy(policy: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, policy);
  }



  issuePolicy(policy: any): Observable<any> {

    console.log(policy)
    return this.http.post(`${this.apiUrl}/issuePolicy`, policy ,
     { headers : this.authService.getHeaders() }
    );
  }


  deletePolicy(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getPolicy(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/view/${id}` ,
      { headers : this.authService.getHeaders() }
    );
  }

  viewPolicy(consumerid: string, policyid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/view/${consumerid}/${policyid}` ,
      { headers : this.authService.getHeaders() }
    );
  }

  getPoliciesByUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`,
      { headers : this.authService.getHeaders() }
    );
  }

  // getQuotation(business: number,amount: number, propertyType: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/quotation`, { params: {business: business.toString() ,amount: amount.toString(), propertyType } });
  // }

  getQuotation(business: number,amount: number, propertyType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getQuotes/${business}/${amount}/${propertyType}`,
      { headers : this.authService.getHeaders() }
      //  { params: {business: business.toString() ,amount: amount.toString(), propertyType } }
      );
  }
}
