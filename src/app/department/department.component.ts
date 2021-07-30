import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Department {
  department: string;
  count: string;
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  countHR = 0;
  countFinance = 0;
  countDev = 0;
  countOps = 0;
  arr: any[] = []
  arr2: any[] = [];
  temp: any;
 


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


  displayedColumns: string[] = ['department', 'count'];
  dataSource = new MatTableDataSource<Department>();

  constructor() { }

  ngOnInit(): void {
    const distinct = [...new Set(this.candidate_data.map(ele => ele.department))];
    this.candidate_data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        if (key == 'department') {
          if (value == 'Finance')
            this.countFinance++;
          else if (value == 'HR')
            this.countHR++;
          else if (value == 'Operations')
            this.countOps++;
          else if (value == 'Development')
            this.countDev++;
        }

      });
    });


    const dataSet = new Map();
    for (let i = 0; i < distinct.length; i++) {
      if (distinct[i] == 'HR') {
        dataSet.set(distinct[i], this.countHR);
      }
      if (distinct[i] == 'Finance') {
        dataSet.set(distinct[i], this.countFinance);
      }
      if (distinct[i] == 'Operations') {
        dataSet.set(distinct[i], this.countOps);
      }
      if (distinct[i] == 'Development') {
        dataSet.set(distinct[i], this.countDev);
      }


      for (const [key, value] of dataSet.entries()) {
        this.temp = {
          department: key,
          count: value
        }

      }
      this.arr2.push(this.temp)
    }
   
    this.dataSource = new MatTableDataSource(this.arr2);

  }
}