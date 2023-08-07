import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddFrom: FormGroup;

  constructor(private formBuilder: FormBuilder,private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddFrom = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add(){
    if(this.productAddFrom.valid){
      let productModel=Object.assign({},this.productAddFrom.value);
      this.productService.add(productModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message,"Başarılı");
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      });
    }
    else{ 
      this.toastrService.error("Formunuz Eksik","Dikkat");
    }
  }

}
