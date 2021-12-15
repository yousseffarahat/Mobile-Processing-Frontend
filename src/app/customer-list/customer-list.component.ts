import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RestApiService} from "../services/rest-api.service";
import {MatTableDataSource} from "@angular/material/table";
import {Customer} from "../models/Customer";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  displayedColumns: string[] = ['name', 'country', 'phone', 'countryCode', 'valid'];
  customersSource = new MatTableDataSource<Customer>(this.customers);
  filterUsed: any;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.restApiService.getAllCustomers().subscribe(data =>{
      this.customers = data;
      this.customersSource.data = this.customers;
    }, error => {
      console.log(error);
    })
  }

  ngAfterViewInit() {
    this.addDataSourceParams();
  }

  addDataSourceParams() {
    this.customersSource.paginator = this.paginator;
    this.customersSource.sort = this.sort;
    this.customersSource.paginator._intl.itemsPerPageLabel = 'No. of customers per page';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customersSource.filter = filterValue.trim().toLowerCase();
    this.filterUsed = true;
  }

}
