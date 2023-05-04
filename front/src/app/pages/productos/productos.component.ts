import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
listaProductos:any [] = []
constructor(private productoService: ApiService) {}

ngOnInit() :void{
  this.productoService.getProductos().subscribe((data:any)=>{
    this.listaProductos = [...data]
  })
}

}
