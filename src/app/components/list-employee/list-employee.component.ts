import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { MatDialog } from '@angular/material/dialog';
import { MessagesComponent } from '../../shared/messages/messages.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  displayedColumns: string[] = ['name', 'civilStatus', 'admissionDate', 'sex','phone','actions'];
  dataSource = new MatTableDataSource<Employee>();
  employeeList:Employee[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeService:EmployeeService,
    public dialog:MatDialog,
    public snackBar:MatSnackBar
  ){
    this.paginator=new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype)
    this.sort=new MatSort()
    this.employeeList=[]
  }

  ngAfterViewInit() {
    this.getEmployees();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.employeeList=this.employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.employeeList);
  }

  deleteEmployee(index:number){

    const dialogRef = this.dialog.open(MessagesComponent, {
      width:'350px',
      data: {msg:'Are you sure you want to delete?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==='delete'){
        this.employeeService.deleteEmployee(index);
        this.getEmployees()
        this.snackBar.open('Employee deleted succesfully','',{duration:2000})
      }
    });

  }
}
