//Bunun vasıtasıyla artık bir backende istekte bulunabiliriz bu şekilde dataya ulaşırız
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

//Bunu görürse bu bir servis olduğunu anla
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  apiUrl = 'https://localhost:44314/api/products/getall';

  //HttpClient'ı bir angular projesinde kullanabilmek için bizim angular'a bizim için bir HttpClient nesnesi oluşturmasını söylememiz gerekiyor
  //HttpClient'ı kullanabilmek için onu enjecte etmemiz gerekiyor
  constructor(private httpClient: HttpClient) {}

  //Apimize bağlanacağız burada
  getProducts() :Observable<ProductResponseModel>{

    //HttpClient ile backend datalarına ulaşabiliriz api çağrısı yapıyoruz
    //Angular'da tanımlı HttpClient nesnesi yardımıyla api bağlantısı yapabiliyoruz
    //Gelen Datayı ProductResponseModel'ine map edeceksin haberin olsun
    //Observable

    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
      
  }

}
