import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products:IProduct[]=[]
  constructor(private productService:ProductService){
    this.productService.getAllProduct().subscribe(data=>{
      this.products = data
    })
  }
  
  onHandleRemove(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products =this.products.filter(item=>item.id !=id)
    })
  }
}
