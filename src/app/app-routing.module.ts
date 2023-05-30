import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "admin", component: ProductListComponent },
  { path: "admin/product/add", component: AddProductComponent },
  { path: "admin/product/:id/update", component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
