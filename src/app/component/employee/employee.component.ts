import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    this.tickets = [];
    this.ticketService.getEmployeeTickets().subscribe({
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
