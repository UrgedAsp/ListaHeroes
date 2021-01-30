import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor','Antman','Bruja Escarlata','Loki','Viuda Negra'];
  heroeBorrado: string = "";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }

}
