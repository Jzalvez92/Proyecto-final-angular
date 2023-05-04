import { ProductoComponent } from './components/producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"gestion", component: GestionComponent},
  {path:"productos", component: ProductosComponent},
  {path:"productos/:id", component: ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
