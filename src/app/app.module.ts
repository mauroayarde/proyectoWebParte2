import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PanelPrincipalComponent } from './components/panel-principal/panel-principal.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { EntrenadorService } from './service/entrenador.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ModalNuevoCursoComponent } from './components/modal-nuevo-curso/modal-nuevo-curso.component';
import { MatSortModule } from '@angular/material/sort';
import { ModalEditarComponent } from './components/modal-editar/modal-editar.component'; 
import { ToastrModule } from 'ngx-toastr';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ModalNuevaComisionComponent } from './components/modal-nueva-comision/modal-nueva-comision.component';
import { MatSnackBar, MatSnackBarModule, SimpleSnackBar } from '@angular/material/snack-bar';
import { ValidacionEliminacionComponent } from './components/validacion-eliminacion/validacion-eliminacion.component';
import { ComisionesComponent } from './components/comisiones/comisiones.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { VaAlumnoComponent } from './components/va-alumno/va-alumno.component';
import { ModalEditarAlumnoComponent } from './components/modal-editar-alumno/modal-editar-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelPrincipalComponent,
    CursosComponent,
    ModalNuevoCursoComponent,
    ModalEditarComponent,
    ModalNuevaComisionComponent,
    ValidacionEliminacionComponent,
    ComisionesComponent,
    AlumnosComponent,
    VaAlumnoComponent,
    ModalEditarAlumnoComponent,
    
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,  
    ToastrModule.forRoot(),
    MatSlideToggleModule,
    MatSnackBarModule
    
  ],
  providers: [EntrenadorService,
  {
    provide:MatPaginatorIntl
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
