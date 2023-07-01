import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './block-notas/header/header.component';
import { DirectivasComponent } from './block-notas/directivas/directivas.component';
import { FooterComponent } from './block-notas/footer/footer.component';
import { ClienteService } from './block-notas/service/cliente.service';
import { ClientesComponent } from './block-notas/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectivasComponent,
    FooterComponent,
    ClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
