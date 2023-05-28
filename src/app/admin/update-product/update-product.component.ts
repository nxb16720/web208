import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product:IProduct={
    name:"",
    price:0
  }
  constructor (private productService:ProductService, private router:ActivatedRoute){
    this.router.paramMap.subscribe(param=>{
      const id = Number(param.get('id'))
      this.productService.getProduct(id).subscribe(data=>{
        this.product=data
      })
    })
  }

  onHandleSubmit(){
    this.productService.updateProduct(this.product).subscribe(()=>console.log('cap nhat thanh cong')
    )
  }
}
