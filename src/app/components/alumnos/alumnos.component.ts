import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosService } from 'src/app/service/alumnos.service';
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { ModalEditarAlumnoComponent } from '../modal-editar-alumno/modal-editar-alumno.component';
import { VaAlumnoComponent } from '../va-alumno/va-alumno.component';
import { ValidacionEliminacionComponent } from '../validacion-eliminacion/validacion-eliminacion.component';

export interface alumno {
  alumnos_id: number;
  nombres: string;
  apellidos: string;
  dni: string;
  celular: string;
  mail: string;
  direccionCalle: string;
  direccionNumero: string;
  direccionBarrio: string,
  direccionLocalidad: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
//'id'

  displayedColumns: string[] = ['id','nombres','apellidos','dni','celular','mail','direccion_calle','direccion_numero','direccion_barrio','direccion_localidad','acciones'];
  alumnos !:Array<alumno>;
  dataSource!: MatTableDataSource<alumno>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(private formBuilder:FormBuilder,private servicioAlumnos:AlumnosService,public dialog:MatDialog, public servicioComunicacion:ComunicacionService) { 
    this.alumnos = new Array<alumno>();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
     this.dataSource._updateChangeSubscription();
    this.alumnosListar();
  }

  async alumnosListar() {
    try {
     await   this.servicioAlumnos.getAlumnosInscriptos().toPromise().then((resp:any) => {
       console.log(resp);
        this.alumnos=resp['rows'];
       this.dataSource = new MatTableDataSource(this.alumnos);
       this.ngAfterViewInit();
      
      });
    } catch {
       console.log('');
    }

  }

  eliminarAlumno(id:number,nombre:any){
    this.servicioComunicacion.idEliminarAlumno = id;
    this.servicioComunicacion.nombreEliminarAlumno = nombre;
    this.dialog.open(VaAlumnoComponent)
  }

  modificarAlumno(id:any){
    this.dialog.open(ModalEditarAlumnoComponent);
    this.servicioComunicacion.idEditarAlumno = id;
    console.log(this.servicioComunicacion.idEditarAlumno)
  }

}
