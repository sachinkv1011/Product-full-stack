import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

   product:any=
  [{"id":1,"productCode":11,"productName":"tv","manufactureDate":"2021-10-11","expDate":"2023-10-11","brand":"redmi","price":15000,"sellerName":"seller11","distributorName":"distri11"},{"id":2,"productCode":12,"productName":"washing machine","manufactureDate":"2022-10-11","expDate":"2024-10-11","brand":"panasonic","price":10000,"sellerName":"seller12","distributorName":"distri12"},{"id":3,"productCode":13,"productName":"watch","manufactureDate":"2019-10-11","expDate":"2029-3-12","brand":"realme","price":3000,"sellerName":"seller13","distributorName":"distri13"},{"id":4,"productCode":14,"productName":"laptop","manufactureDate":"2012-10-11","expDate":"2028-3-12","brand":"vivobook","price":50000,"sellerName":"seller14","distributorName":"distri14"},{"id":5,"productCode":15,"productName":"fan","manufactureDate":"2023-10-11","expDate":"2028-3-12","brand":"crompton","price":4000,"sellerName":"seller15","distributorName":"distri15"}]

}
