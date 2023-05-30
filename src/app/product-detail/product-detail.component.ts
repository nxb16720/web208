import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProduct(id).subscribe((data) => {
        this.product = data
      })
    })
  }
}
