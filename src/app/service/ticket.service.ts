import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TicketService {

  
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'applicaiton/json'  })
  }

  constructor(
    private http: HttpClient
  ) { }
}
