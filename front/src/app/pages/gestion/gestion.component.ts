import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  productoForm!: FormGroup;

  constructor(private servicio: ApiService, private form: FormBuilder, private router: Router) { }

  public nuevoProducto = this.servicio.dataJuegos;
  public productoId = this.servicio.dataJuegos.id ;

  ngOnInit(): void {
    this.productoForm = this.form.group({
      name: [
        this.nuevoProducto.name,
        [Validators.required],
      ],
      price: [
        this.nuevoProducto.price,
        [Validators.required],
      ],
      description: [
        this.nuevoProducto.description,
        [Validators.required],
      ],
      image: [
        this.nuevoProducto.image,
        [Validators.required],
      ],
      id: [this.nuevoProducto.id, [Validators.required, ]],

    });
 
 
  
    this.productoForm.valueChanges.subscribe((changes) => { this.nuevoProducto = changes })
  }
  onSubmit = () => {
    this.servicio.cleanProducto();
    
    if (this.productoId !== '') {
     
      this.servicio.putProducto(this.productoId, this.nuevoProducto).subscribe();
      alert("producto editado")
      this.router.navigate(["/productos"])
    } else {
      
      this.servicio.postProducto(this.nuevoProducto).subscribe();
      alert("producto nuevo añadido")
      this.router.navigate(["/productos"])


    }
    this.productoForm.reset();
  };




//   onSubmit = () => {
//     this.servicio.cleanProducto();
  
//     if (this.nuevoProducto.id === '' ) {
//       this.servicio.postProducto(this.nuevoProducto).subscribe()  
//         alert("Producto creado exitosamente");
//         this.router.navigate(['/productos']);
//       }
//       };
//     } else {
//       this.servicio.putProducto(Number(this.nuevoProducto.id), this.nuevoProducto).subscribe(() => {
//         alert("Producto actualizado exitosamente");
//         this.router.navigate(['/productos']);
//       },
//       };
    
  
//     this.servicio.cleanProducto();
//     this.productoForm.reset();
//   }
//   crearProducto = () => {
//     this.servicio.cleanProducto();
//     this.router.navigate(['/gestion/crear']);
//   }
// }
}