import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { Ticket } from '../model/ticket';

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

  GetEmployeeTickets(): Observable<any>{
    console.log(URL + '/user/' + this.userService.getUser().id + '/tickets');
    console.log(localStorage.getItem('auth-token'));
    return this.http.get<any>(URL + '/user/' + this.userService.getUser().id + '/tickets', this.httpOptions)
  }

  GetAllTickets(): Observable<any>{ //not tested
    return this.http.get<any>(URL + '/tickets', this.httpOptions)
  }

  GetAllPendingTickets(): Observable<any>{ //not tested
    return this.http.get<any>(URL + '/tickets/pending', this.httpOptions)
  }

  GetImage(id:any): Observable<any>{
    return this.http.get<any>(URL + '/tickets/' + id + '/image');
  }


  PostTicket(ticket:any): Observable<any>{ //not tested
    return this.http.post<any>(URL+ '/users/' + this.userService.getUser().id + '/tickets', ticket, this.httpOptions)
  }
}
