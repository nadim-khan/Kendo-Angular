import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =[];

  constructor(private sharedServices: SharedService) { }

  ngOnInit(): void {
    this.sharedServices.getAllProducts().subscribe(response =>{
this.products = response.data;
    })
  }

}
