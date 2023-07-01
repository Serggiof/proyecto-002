import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente-model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes!: Array<Cliente>

  constructor(private clienteService: ClienteService){

  }
  ngOnInit() {
    this.clientes = this.clienteService.getClientes()
  }
 
}
