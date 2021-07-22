import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const cudOptionsXWWForm = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
};
const cudOptionsHtml = {
  headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8'})
};


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private urlBase = environment.url_servicios_base;
  private apiGetAlumnos = this.urlBase + '/alumnos/';
  private apiGetAlumnosId = this.urlBase + '/alumnos/';
  private apiputAlumnos = this.urlBase + '/alumnos/';
  private apiDeleteAlumnos = this.urlBase +'/alumnos/';

  constructor(public http: HttpClient) { }

  getAlumnosInscriptos(){
    return this.http.get(this.apiGetAlumnos);
  }

  getAlumnosId(id:any){
    return this.http.get(this.apiGetAlumnosId+id);
  }
  putAlumnos(id:any,alumnoEditar:any){
    return this.http.put(this.apiputAlumnos+id,alumnoEditar);
  }

  deleteAlumnosInscriptos(id:any){
    return this.http.delete(this.apiDeleteAlumnos+id);
  }
}
