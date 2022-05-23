import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  
  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'applicaiton/json',
    'Authorization':  `Bearer ${localStorage.getItem('auth-token')}`}),
    observe: 'response' as 'response',
  }

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getEmployeeTickets(): Observable<any>{
    console.log(URL + '/user/' + this.userService.getUser().id + '/tickets');
    console.log(localStorage.getItem('auth-token'));
    return this.http.get<any>(URL + '/user/' + this.userService.getUser().id + '/tickets', this.httpOptions)
  }
}
