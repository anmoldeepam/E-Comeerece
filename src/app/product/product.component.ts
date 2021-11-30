import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products!:Product[]
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProduct().subscribe(
      (response:Product[])=>{
        console.log(response)
        this.products=response
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

}
