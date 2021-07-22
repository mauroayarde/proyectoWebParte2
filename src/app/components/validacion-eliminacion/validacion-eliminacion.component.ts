import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { EntrenadorService } from 'src/app/service/entrenador.service';

@Component({
  selector: 'app-validacion-eliminacion',
  templateUrl: './validacion-eliminacion.component.html',
  styleUrls: ['./validacion-eliminacion.component.scss']
})
export class ValidacionEliminacionComponent implements OnInit {
  nombreCurso:any;

  constructor(private servicio:EntrenadorService,private cService:ComunicacionService,private toastr:ToastrService) { 
    this.nombreCurso=this.cService.nombreCursoEliminar;
  }

  ngOnInit(): void {

  }

  eliminarCurso(){
    
      this.servicio.deleteCurso(this.cService.idEliminarCurso).subscribe(resp => {
        this.toastr.success("Se elimino correctamente el curso","Curso eliminado!!!");
        
        setTimeout(function(){
          window.location.reload()
        },2000);
         console.log(resp);
          
      })
   

  }
}
