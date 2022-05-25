import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  getPendingTickets(){
    this.tickets = [];
    
    this.ticketService.GetAllPendingTickets().subscribe({
      next: (data) => {
        console.log(data.body);
        this.tickets =(data.body);
        console.log(this.tickets);
      },
       error: (err: any) => {
         console.log("Did not get tickets");
       }
    })
  }

  getAllTickets(){
    this.tickets = [];
    
    this.ticketService.GetAllTickets().subscribe({
      next: (data) => {
        console.log(data.body);
        this.tickets =(data.body);
        console.log(this.tickets);
      },
       error: (err: any) => {
         console.log("Did not get tickets");
       }
    })
  }



}
