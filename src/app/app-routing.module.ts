import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ComisionesComponent } from './components/comisiones/comisiones.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'administracion',component:PanelPrincipalComponent},
  {path:'cursosABM',component:CursosComponent},
  {path:'alumnosABM',component:AlumnosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
