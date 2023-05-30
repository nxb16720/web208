import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private rt: Router) { }

  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.rt.navigateByUrl('admin')
    }
    )
  }
}
