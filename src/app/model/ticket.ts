export interface Ticket {
    id: number,
    ticketName: string;
    description: string;
    type: string;
    amount: string;
    createTime: string;
    resolutionTime: string;
    employeeUserName: string;
    financeManagerUserName: string;
    status: string;
}
