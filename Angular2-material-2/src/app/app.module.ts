import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Appproduct } from './product.component';
import { AppInventory} from './Inventory.component';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './NotFound.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import { MultiplierPipe } from './multiplier.pipe';
import { ChildComponent } from './child.component';
import { RouterModule, Routes } from '@angular/router';
// import { Ng2PaginationModule } from 'ng2-pagination';
import { HttpModule } from '@angular/http';

const appRoutes : Routes = [
  { path: 'Product', component: Appproduct },
  { path: 'Inventory', component: AppInventory },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, Appproduct, AppInventory, PageNotFoundComponent, ProductFormComponent, MultiplierPipe, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
