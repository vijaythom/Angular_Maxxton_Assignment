import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  department: string;
  joining_date: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  candidate_data = [
    {
      id: 11,
      name: "Ash",
      department: "Finance",
      joining_date: '8 / 10 / 2016'
    },
    { "id": 12, "name": "John", "department": "HR", "joining_date": '18/1/2011' },
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": '28/11/2019' },
    { "id": 14, "name": "Vish", "department": "Development", "joining_date": '7/7/2017' },
    { "id": 15, "name": "Barry", "department": "Operations", "joining_date": '19/8/2014' },
    { "id": 16, "name": "Ady", "department": "Finance", "joining_date": '5/10/2014' },
    { "id": 17, "name": "Gare", "department": "Development", "joining_date": '6/4/2014' },
    { "id": 18, "name": "Hola", "department": "Development", "joining_date": '8/12/2010' },
    { "id": 19, "name": "Ola", "department": "HR", "joining_date": '7/5/2011' },
    { "id": 20, "name": "Kim", "department": "Finance", "joining_date": '20/10/2010' }]


  newEvent!: PageEvent;
  pageSize: number = 5;
  length: number = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20];
  result: string[] = [];
  other_result: Date[] = [];
  distinctResultof: any[] = []

  displayedColumns: string[] = ['id', 'name', 'department', 'joining_date'];
  dataSource = new MatTableDataSource<UserData>();


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.candidate_data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCandidateWithExperience() {
    let exp;
    let candidate = this.candidate_data;
    this.candidate_data = [];
    candidate.map(ele => {
      exp = new Date(ele.joining_date)
      let currentYearOfJoining = new Date().getFullYear();
      let joiningYear = exp.getFullYear();
      let diffe = currentYearOfJoining - joiningYear
      if (diffe > 2) {
        this.candidate_data.push(ele);
       
      }

    });
    this.dataSource = new MatTableDataSource(this.candidate_data);
  }

  deleteItems() {
    var filtered = this.candidate_data.filter(function (item) {
      return item.department !== 'Development';
    });

    this.dataSource = new MatTableDataSource(filtered);
  }

  distinctResult() {
    this.router.navigate(['/department-details']);

  }
}
