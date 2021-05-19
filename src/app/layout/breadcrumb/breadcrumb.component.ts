import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';

const defaultItems: BreadCrumbItem[] = [
  {
      text: 'Home',
      title: 'Home',
      icon: 'home'
  },
  {
      text: 'Products',
      title: 'Products'
  },
  {
      text: 'Computer peripherals',
      title: 'Computer peripherals'
  },
  {
      text: 'Keyboards',
      title: 'Keyboards'
  },
  {
      text: 'Gaming keyboards',
      title: 'Gaming keyboards'
  }
];

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public items: BreadCrumbItem[] = [...defaultItems];
  constructor() { }

  ngOnInit(): void {
  }



    public onItemClick(item: BreadCrumbItem): void {
        const index = this.items.findIndex(e => e.text === item.text);
        this.items = this.items.slice(0, index + 1);
    }

    public refreshBreadCrumb(): void {
        this.items = [...defaultItems];
    }

}
