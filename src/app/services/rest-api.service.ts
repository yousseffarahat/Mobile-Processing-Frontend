import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Customer} from "../models/Customer";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllCustomers() {
    return this.http.get<Customer[]>(this.apiUrl + '/customers/', this.httpOptions);
  }
}
