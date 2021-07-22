import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { endWith, map, shareReplay } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { EntrenadorService } from 'src/app/service/entrenador.service';
import { FormGroup } from '@angular/forms';
import { ModalNuevoCursoComponent } from '../modal-nuevo-curso/modal-nuevo-curso.component';
import {Router} from '@angular/router';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ModalNuevaComisionComponent } from '../modal-nueva-comision/modal-nueva-comision.component';
import { ValidacionEliminacionComponent } from '../validacion-eliminacion/validacion-eliminacion.component';
//import { MatSnackBar } from '@angular/material/snack-bar';

export interface curso{
  id_cursos: number;
  nombre: string;
  descripcion: string;
  publico_destinado: string;
  requisitos: string;
  url_imagen_presentacion: string;
  url_video_presentacion: string;
  precio_inscripcion: number;
  precio_cuota: number;
  cantidad_cuotas:number;
  id_subrubros: number;

}


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})


export class CursosComponent implements OnInit,AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
      //'id','descripcion','publico_destinado''requisitos','url_video_presentacion','cantidad_cuotas','id_rubros'
  displayedColumns: string[] = ['id','url_imagen_presentacion','nombre','habilitaInscripcion','cursoPublicado','precio_inscripcion','precio_cuota','acciones'];
  cursos !:Array<curso>;
  dataSource!: MatTableDataSource<curso>;
  cursoForm!: FormGroup;
  selected: any;


  subrubros: any = [
    {
      id_subrubro: '1',
      nombre: 'FUTBOL'
    },
    {
      id_subrubro: '2',
      nombre: 'BASQUET'
    },
    {
      id_subrubro: '3',
      nombre: 'NATACION'
    }

  ];
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
  //, private snackBar : MatSnackBar
  constructor(private breakpointObserver: BreakpointObserver,private entrenador:EntrenadorService,
    public modal:MatDialog , private router:Router,public comunicacionService:ComunicacionService,
    private toastr:ToastrService) { 

    this.cursos = new Array<curso>();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource._updateChangeSubscription();
    this.listar();
    
  }

  async listar() {
    try {
     await   this.entrenador.getCursos().toPromise().then(resp => {
       // console.log(resp);
        this.cursos=resp['rows'];
       this.dataSource = new MatTableDataSource(this.cursos);
       this.ngAfterViewInit();
      
      });
    } catch {
       console.log('');
    }

  }

   nuevoCurso(){
    this.modal.open(ModalNuevoCursoComponent);
    this.listar();
    this.dataSource._updateChangeSubscription();

  }

  modificarCurso(idEditar:number){
    this.comunicacionService.idEditarCurso=idEditar;
  //  console.log(this.comunicacionService.idEditarCurso);
 
    this.modal.open(ModalEditarComponent,{
      data:idEditar
    });
  }

  eliminarCurso( idEliminar:number,nombre:any){
    this.comunicacionService.idEliminarCurso = idEliminar;
    this.comunicacionService.nombreCursoEliminar = nombre;
    this.modal.open(ValidacionEliminacionComponent);
    
   // console.log(this.comunicacionService.idEliminarCurso);
  /* this.entrenador.deleteCurso(idEliminar).subscribe(resp => {
  this.snackBar.open("Curso Eliminado",'Aceptar',{
     duration:1000,
      horizontalPosition:'end'
      })
   this.toastr.success("Se elimino correctamente el curso","Curso eliminado!!!");
     this.router.navigate(['/cursosABM']);
      console.log(resp);
    });*/
  }

  nuevaComision(otraComision:any){
    this.modal.open(ModalNuevaComisionComponent);
  }

}
