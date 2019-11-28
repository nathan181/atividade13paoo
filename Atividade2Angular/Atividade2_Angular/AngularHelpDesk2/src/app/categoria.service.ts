import { Injectable } from '@angular/core';
import { Categoria } from './model/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  categorias: Categoria[] = [
    { id: 1, nome: 'Infantojuvenis' },
    { id: 2, nome: 'Poesia' },
    { id: 3, nome: 'Romances' }
  ];

  adicionaCategoria(categoria: Categoria): void {
    this.categorias.push(categoria);
  }
  getCategorias(): Categoria[] {
    return this.categorias;
  }
  nextId(): number {      
     return this.categorias.length <= 0 ? 1 : Math.max(...this.categorias.map(categoria => categoria.id)) + 1;  }


  }
