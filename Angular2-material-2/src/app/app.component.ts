import { Component } from '@angular/core';
// import { PaginatePipe, PaginationService } from 'ng2-pagination';
import { IProduct } from './product';
import { ProductService } from './products.service';
// import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ChildComponent } from './child.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: '<child-app></child-app>'
  // template: `<ul>
  //             <li *ngFor="let item of collection | paginate: { itemsPerPage: 5, currentPage: p }">...</li>
  //           <ul>
  //           <pagination-controls (pageChange) = "p=$event"></pagination-controls>`
  // template: `<product-form></product-form>`
  // template: `<ul>
  //   <li><a [routerLink] =  "['/Product']">Product</a></li>
  //   <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
  //   </ul>
  //   <router-outlet></router-outlet>`,
  // providers: [ProductService]
  // templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  // iproducts: IProduct[];

  // constructor(private _product: ProductService) {
  // }

  // ngOnInit() : void {
  //   this._product.getproducts()
  //   .subscribe(iproducts => this.iproducts = iproducts);
  // }
  // name: string = 'Welcome';
  // appStatus: boolean = true;
  // appList: any[] = [
  //   {
  //     "ID": "1",
  //     "url": "app/Images/One.jpg"
  //   },
  //   {
  //     "ID": "2",
  //     "url": "app/Images/Two.jpg"
  //   }
  // ]
  TutorialName: string = "Angular JS2";
  appList: string[] = ["Binding", "Display", "Services"];
  // Status: boolean = true;
  // clicked(event) {
  //   this.Status = false;
  // }
}
