import {Injectable } from "@angular/core";
import { Cliente } from "../model/cliente-model";

@Injectable()
export class ClienteService{
    /*Creamos el array para los clientes */
    clientes: Array<Cliente>
    constructor(){
        this.clientes =[
            new Cliente (1, 'Sergio', 'Flores', 'sergioflores.vt@gmail.com', '18.02.91'),
            new Cliente (2, 'Ainelen', 'Flores', 'ainetrini@gmail.com', '15.07.98')
        ]
    }
    /*Cargo un metodo con el array para enviarlo
    a los componetes que lo necesite */
    getClientes(): Array <Cliente>{
        return this.clientes
    }
}