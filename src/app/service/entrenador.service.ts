import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



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
export class EntrenadorService {
  private url = 'https://api.imgbb.com/1/upload';
  urlAndexpiration : any = 'https://api.imgbb.com/1/upload?expiration=600';
  expiration : any = '600';
  private  apiKey  = 'fbf7b71a9f97fba68613eb97d7b32d77';
  private urlBase = environment.url_servicios_base;
  private apiGetCursos = this.urlBase + '/cursos';
  private apitGetObtenerCurso = this.urlBase+'/cursos/';
  private apiPostCurso = this.urlBase +'/cursos/';
  private apiPutCurso = this.urlBase +'/cursos/'
  private apiDeleteCurso = this.urlBase+'/cursos/';
  private apiPostImgbb =  this.url;
  private apiGetSubrubros = this.urlBase + '/subrubros/';
  private apiGetSubrubrosId = this.urlBase + '/subrubro/';
  private apiGetcursosSubRubrosId = this.urlBase + '/cursosSubrubros/';
  

  constructor(public http: HttpClient) { }

    getCursos():Observable<any>{
      return this.http.get(this.apiGetCursos);
    }
    getObtenerCurso(id:number){
      return this.http.get(this.apitGetObtenerCurso+id);
    }
    postCurso(curso:any):Observable<any>{
      const newSession = Object.assign({},curso);
      return this.http.post<any>(this.apiPostCurso,newSession,cudOptions)
    }
    putCursos(id:any,cursoEditar:any){
      return this.http.put(this.apiPutCurso+id,cursoEditar);
    }
    deleteCurso(id:number){
      return this.http.delete(this.apiDeleteCurso+id);
    }
    imgbbPost(image:string){
      const formData = new FormData();
      formData.append("image",image)
      return this.http.post(this.apiPostImgbb+'?key='+this.apiKey,formData);
  }
  
  getSubrubros():Observable<any>{
    return this.http.get(this.apiGetSubrubros);
  }

  getSubrubrosId(id:any):Observable<any>{
    return this.http.get(this.apiGetSubrubrosId+id);
  }

  getCursosANDSubrubros(id:any){
    return this.http.get(this.apiGetcursosSubRubrosId+id);
  }
  /*
  upload(file:File):Observable<String>{
      const formData = new FormData();
      formData.append('image',file);
      return this.http
      .post('/upload',formData,{params:{key:this.apiKey}})
      .pipe(map((response:any) =>  response ['data'] ['url']));
  
  }
  */
    

}