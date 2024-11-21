import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router) {}

   onSubmit(): void {

   // password =  bcrypt.hashSync(this.rawString, password);


    this.authService.login(this.username, this.password).subscribe(response => {
// try sending  encoded password
      console.log(response.token)
     localStorage.setItem("token",response.token)
     localStorage.setItem("currentUser",this.username)
      if (response.token) {

        console.log("dashboard")
        this.router.navigate(['/dashboard']);
      }
    });

    // if (localStorage.getItem("token")!="") {

    //   console.log("dashboard")
    //   this.router.navigate(['/dashboard']);
    // }
  }




}
