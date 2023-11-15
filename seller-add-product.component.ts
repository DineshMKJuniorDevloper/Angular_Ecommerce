import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
authError:string="";
addProductMessage:string|undefined;
constructor(private product:ProductService){}

ngOnInit(): void {
    
}

submit(data:product){
  this.product.addProduct(data).subscribe((result)=>{
    console.warn(result);
    if(result){
      this.addProductMessage='Product is added Successfully ';
    }
  });
  setTimeout(()=>{
this.addProductMessage=undefined
  },5000);
}

}
