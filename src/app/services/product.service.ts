//Bunun vasıtasıyla artık bir backende istekte bulunabiliriz bu şekilde dataya ulaşırız
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

//Bunu görürse bu bir servis olduğunu anla
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44314/api/';

  //HttpClient'ı bir angular projesinde kullanabilmek için bizim angular'a bizim için bir HttpClient nesnesi oluşturmasını söylememiz gerekiyor
  //HttpClient'ı kullanabilmek için onu enjecte etmemiz gerekiyor
  constructor(private httpClient: HttpClient) {}

  //Apimize bağlanacağız burada
  getProducts(): Observable<ListResponseModel<Product>> {
    //HttpClient ile backend datalarına ulaşabiliriz api çağrısı yapıyoruz
    //Angular'da tanımlı HttpClient nesnesi yardımıyla api bağlantısı yapabiliyoruz
    //Gelen Datayı ProductResponseModel'ine map edeceksin haberin olsun
    //Observable
    //Bir fonksiyon içerisinde değişken tanımlamak istiyorsak let keywordünden yararlanırız
    //Sadece fonksiyon içerisinde geçerli değişken oluşturmamızı sağlar let keyword
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product);
  }
  
}

