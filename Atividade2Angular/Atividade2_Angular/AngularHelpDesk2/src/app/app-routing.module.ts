import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; import { CategoriasComponent } from './categorias/categorias.component';
import { AdicionaCategoriaComponent } from './adiciona-categoria/adiciona-categoria.component'; 
const routes: Routes = [{ path: 'categorias', component: CategoriasComponent },
 { path: 'adicionaCategoria', component: AdicionaCategoriaComponent },
 {path: "", redirectTo: '/categorias', pathMatch: 'full'}]





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
