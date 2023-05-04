import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string= "http://localhost:3000/producto"

  constructor(private http: HttpClient) {}
  public dataJuegos = {
    name:"",
    price:"",
    description:"",
    image:"",
    id:"",
  }
  getProductos = ()=>{
    return this.http.get(this.baseUrl)
  };
  getProducto = (id:number)=>{
    return this.http.get(`${this.baseUrl}/${id}`)
  };
  postProducto = (producto: any) => {
    return this.http.post(this.baseUrl, producto);
  };
  deleteProducto = (id: number) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  };
  editItem = (producto: any) => {
    this.dataJuegos = producto;
  };
  cleanProducto = () => {
    this.dataJuegos= {
     name: '',
     price: '',
     description: '',
     image: '',
     id: '',
   };
 };
 putProducto = (productoId:any, editedProducto: any) => {
  return this.http.put(`${this.baseUrl}/${productoId}`, editedProducto);
}
}
