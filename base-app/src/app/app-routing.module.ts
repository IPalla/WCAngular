import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'acercade', component: AcercadeComponent},
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule'},
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
