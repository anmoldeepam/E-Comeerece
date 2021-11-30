import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8080/product/getAll`)
  }
}
