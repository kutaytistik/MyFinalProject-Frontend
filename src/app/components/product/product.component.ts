import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
//Bunun vasıtasıyla artık bir backende istekte bulunabiliriz bu şekilde dataya ulaşırız
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  apiUrl = 'https://localhost:44314/api/products/getall';


  //HttpClient'ı bir angular projesinde kullanabilmek için bizim angular'a bizim için bir HttpClient nesnesi oluşturmasını söylememiz gerekiyor
  //HttpClient'ı kullanabilmek için onu enjecte etmemiz gerekiyor
  constructor(private httpClient: HttpClient) {

  }

  //Component açıldığında ilk çalışan metot
  ngOnInit(): void {
    console.log('Init Çalıştı');
  }

  
  //Apimize bağlanacağız burada
  getProducts() {
    //Gelen Datayı ProductResponseModel'ine map edeceksin haberin olsun
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products=response.data;
      });
  }
}
