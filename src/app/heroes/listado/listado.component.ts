import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Hulk', 'antman', 'wolverine'];
  newArray: string[] = []
  borrarHeroe() {
    const heroeBorrado:undefined|string = this.heroes.shift() || ''
    this.newArray.push(heroeBorrado)
  }

}
