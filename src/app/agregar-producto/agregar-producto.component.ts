import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';




@Component({
  selector: 'app-agregar-producto',
  standalone: false,
  
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(private productoServicio: ProductoService,
    private enrutador: Router){};

  onSubmit(){
    this.guardarProducto();
  }  

  guardarProducto() {
    this.productoServicio.agregarProducto(this.producto).subscribe(
      {
      next: (datos) => {
        this.irListaProductos();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos'])
  }

}
