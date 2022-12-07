import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productCode=""
  productName=""
  manufactureDate=""
  expDate=""
  brand=""
  price=""
  sellerName=""
  distributorName=""

  constructor(private api:ApiService){ }

  readValue=()=>{
    let data:any={

      "productCode":this.productCode,
      "productName":this.productName,
      "manufactureDate":this.manufactureDate,
     "expDate":this.expDate,
      "brand":this.brand,
      "price":this.price,
      "sellerName":this.sellerName,
      "distributorName":this.distributorName

    }
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response)=>{
        console.log(response)
        
      }
    )
  }

}
