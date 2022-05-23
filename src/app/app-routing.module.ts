import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { LoginComponent } from './component/login/login.component';
import { ManagerComponent } from './component/manager/manager.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'employee', component:EmployeeComponent,
  canActivate: [RoleGuard], data: { expectedRole: 2}},
  {path: 'manager', component:ManagerComponent,
  canActivate: [RoleGuard], data: { expectedRole: 1}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
