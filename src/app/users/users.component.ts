import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageChangeEvent } from '@progress/kendo-angular-pager';
import { SharedService } from '../Services/shared.service';

interface User  {
  code:Number,
  meta:any,
  data:[]
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public pageSize = 10;
  public skip = 0;
  public pagedDestinations = [];
  public total = 0;
  usersList = [];

  constructor(private userService:SharedService,private router:Router){
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(response => {
      this.usersList = response.data;
      this.pageData();
      this.total = this.usersList.length;
    })
  }


  public onPageChange(e: PageChangeEvent): void {
    console.log(e)
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = this.usersList.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }

}
