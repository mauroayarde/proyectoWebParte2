import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/service/alumnos.service';
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-va-alumno',
  templateUrl: './va-alumno.component.html',
  styleUrls: ['./va-alumno.component.scss']
})
export class VaAlumnoComponent implements OnInit {
nombreAlumno!:any;
  constructor(public servicioComunicacion:ComunicacionService, private servicioAlumno:AlumnosService,
    private toastr:ToastrService,private router:Router) {
    this.nombreAlumno = servicioComunicacion.nombreEliminarAlumno;
   }

  ngOnInit(): void {
  }

  eliminarAlumno(){
    this.servicioAlumno.deleteAlumnosInscriptos(this.servicioComunicacion.idEliminarAlumno).subscribe(resp=>{
      console.log(resp);
      this.toastr.success("Se elimino el Alumno "+this.nombreAlumno," realizado con exito")
      setTimeout(function(){
        window.location.reload()
      },2000);
      
    })
  }

}
