import { Injectable } from '@angular/core';

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
  idsubrubros:number;
  nombre_subrubros:string;
  

}

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  idEliminarAlumno!:number;
  nombreEliminarAlumno!:any;
  idEditarCurso!:number;
  idEliminarCurso!:number;
  nombreCursoEliminar!:any;
  idEditarAlumno!:any;
  alumnoEditar:any;
  public cursoEditar: curso[]=[];
  tabla:any;
  constructor() { }

  metodoActualizarTabla(){
   this.tabla._updateChangeSubscription();
  }
}
