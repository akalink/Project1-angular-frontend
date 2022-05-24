import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedType: string = '';
  types: any = [ 
    {type: '1', name:'Lodging'},
    {type: '2', name:'Travel'},
    {type: '3', name:'Food'},
    {type: '4', name:'Other'}
  ]


  displayForm : boolean = false;
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

  ShowForm(){
    this.displayForm = !this.displayForm;
  }

  Submit(ticketName: any, description : any, amount : any){
    let form = {ticketName: ticketName, description: description, amount: amount, type: this.selectedType}
    const amountN = Number(amount);
    console.log(form);
    

    this.ShowForm();
    this.getTickets();
  }

  typeChangeHandler(evant:any){
    this.selectedType = evant.target.value;
  }

}
