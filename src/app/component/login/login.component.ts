import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  loginClick(username: string, password: string){
    let auth = {username, password};
    console.log("I am clicked");
    this.loginService.login(auth).subscribe({
      next: (data) => {
        this.userService.setToken(data.headers.get('token'));
        this.userService.setUser(data.body);
        const role = data.body.userRole;
        console.log(role);
        if(role === "Employee"){
          this.router.navigate(['/employee'])
        }
        
      },
      error: (err: any) => {
        console.log("didn't log in");
      }
    })
    
  }

}
