import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
   listaCurso: string []=['Typescript','Html','JavaScript','Spring Boot']

   habilitar:boolean =true

   constructor(){

   }
   setHabilitar(): void{
    this.habilitar =(this.habilitar==false)? true: false
   }
}
