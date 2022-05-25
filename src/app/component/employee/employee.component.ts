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
  image: string = '';


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
    this.ticketService.GetEmployeeTickets().subscribe({
      next: (data) => {
        //console.log(data.body);
        this.tickets =(data.body);
        
        this.tickets.forEach((ticket : any)=>{
          ticket.image = this.GetImage(ticket.id);
        })
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
    let form = {ticketName: ticketName, description: description, amount: amount, type: this.selectedType, image: this.image}
    const amountN = Number(amount);
    console.log(form);
    this.ticketService.PostTicket(form).subscribe({
      next: (data) => {
        console.log("posted");
        this.ShowForm();
        this.getTickets();
      },
      error: (err) => {
        console.log("did not post")
      }
    });
  }

  TypeChangeHandler(evant:any){
    this.selectedType = evant.target.value;
  }

  GetImage(id: any): any{
    console.log("img id: " + id);
    this.ticketService.GetImage(id).subscribe({
      next: (data) => {
        console.log("got image");
        return data.body;
      },
      error: (err: any) =>{
        console.log("did not get img id: " + id);
        return null;
      }
    })
  }

  OnFileSelected(event: any){
    console.log(event);
    this.image = event.target.files[0];
  }

}
