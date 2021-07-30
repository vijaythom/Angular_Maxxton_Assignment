import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: 'employee-details', pathMatch: 'full', component: EmployeeComponent },
  { path: 'department-details', component: DepartmentComponent },
  // { path: '',   redirectTo: '/employee-details', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
