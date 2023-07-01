import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './block-notas/directivas/directivas.component';
import { FooterComponent } from './block-notas/footer/footer.component';
import { ClientesComponent } from './block-notas/clientes/clientes.component';
const routes: Routes = [
  
  {path:'directivas',component: DirectivasComponent},
  {path:'footer', component: FooterComponent},
  {path: 'clientes', component: ClientesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
