import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';
import bcrypt from 'bcryptjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;  // API base URL
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  rawString = "fetziLx4uNwPdhB67i1iFyVi8c3FmjhzZ";

  constructor(private http: HttpClient , private router:Router) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(userName: string, password: string): Observable<any> {
  
    return this.http.post<any>(`${this.apiUrl}/auth/authenticate`, { userName, password })
      .pipe(response => {
        console.log(response);
        // if (response && response.token) {
       
        
        
        return response;
      });
  }

  

  // logout(): void {
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }

   signup(userName: string, epassword: string): Observable<any> {

    console.log(userName, epassword);

   // password =  bcrypt.hashSync(this.rawString, password);
   const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(epassword, salt);

    console.log(password)

     const response=this.http.post<any>(`${this.apiUrl}/auth/signup`, { userName, password });
     console.log(response)
     return response;
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }


  
  logout() {
    localStorage.removeItem('token');
   // this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getHeaders() {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  
}
