import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { EntrenadorService } from 'src/app/service/entrenador.service';
import { ToastrService } from 'ngx-toastr';
import { summaryFileName } from '@angular/compiler/src/aot/util';

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
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss']
})
export class ModalEditarComponent implements OnInit {
  imagenYes:any;
  arraySubrubros!:any;
  resultado!:any;
   i:any="data:image/png;base64,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";
  image:any;
  imagenJSON:any;
  urlImgbb:any;
  vistaImagen:any;
  title :string = "Editar Curso";
  public CursoRows:curso []=[];
  nombreSubrubro!:string;

  nuevoCursoForm!:FormGroup;

  selected: any;
  obtenemosPorId: any;

  /*
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
*/
  //,@Inject(MAT_DIALOG_DATA) public data:number
  constructor(private formBuilder:FormBuilder, private servicio:EntrenadorService,
    public comunicacionService:ComunicacionService,private toastr:ToastrService) {

      this.servicio.getSubrubros().subscribe((resp:any)=>{
        this.arraySubrubros = resp['rows'];
      //  console.log(this.arraySubrubros);
      });

      /*
      this.servicio.getCursosANDSubrubros(this.comunicacionService.idEditarCurso).subscribe(resp=>{
        console.log(resp);
      })

*/
      /*
      this.servicio.getSubrubrosId(this.comunicacionService.cursoEditar[0].id_subrubros).subscribe((resp:any)=>{
        this.obtenemosPorId = resp['rows'];
        console.log(this.obtenemosPorId);
      }); 
*/
   }

  ngOnInit(): void {

    
    
      this.selected = this.arraySubrubros;
      this.nuevoCursoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      publico_destinado: ['', [Validators.required]],
      requisitos: ['', [Validators.required]],
      url_imagen_presentacion: [this.imagenYes, [Validators.required]],
      url_video_presentacion: ['', [Validators.required]],
      precio_inscripcion: ['', [Validators.required]],
      precio_cuota: ['', [Validators.required]],
      cantidad_cuotas: ['', [Validators.required]],
      subrubro: ['']
    });
    this.editarCurso();
  }



  editarCurso(){
    
       
     //data 
      if(this.comunicacionService.idEditarCurso!==null){

        

        this.servicio.getCursosANDSubrubros(this.comunicacionService.idEditarCurso).subscribe((resp:any) =>{
          //this.CursoRows
          this.comunicacionService.cursoEditar=  resp['rows'];
        console.log(this.comunicacionService.cursoEditar[0]);

/*
        this.servicio.getSubrubrosId(this.comunicacionService.cursoEditar[0].id_subrubros).subscribe((resp:any)=>{
          this.obtenemosPorId = resp['rows'];
          console.log(this.obtenemosPorId);
        }); 
        */
         this.nuevoCursoForm.patchValue({
          //nombre: this.CursoRows[0].nombre
            nombre:this.comunicacionService.cursoEditar[0].nombre,
            descripcion:this.comunicacionService.cursoEditar[0].descripcion,
            publico_destinado:this.comunicacionService.cursoEditar[0].publico_destinado,
            requisitos:this.comunicacionService.cursoEditar[0].requisitos,
            url_imagen_presentacion:this.image,
            url_video_presentacion:this.comunicacionService.cursoEditar[0].url_video_presentacion,
            precio_inscripcion:this.comunicacionService.cursoEditar[0].precio_inscripcion,
            precio_cuota:this.comunicacionService.cursoEditar[0].precio_cuota,
            cantidad_cuotas:this.comunicacionService.cursoEditar[0].cantidad_cuotas,
            subrubro:this.comunicacionService.cursoEditar[0].id_subrubros
           
         })
         this.imagenYes = this.comunicacionService.cursoEditar[0].url_imagen_presentacion,
         this.nombreSubrubro=this.comunicacionService.cursoEditar[0].nombre_subrubros,
        // console.log(this.comunicacionService.cursoEditar[0].id_subrubros);
        this.nuevoCursoForm.get("url_imagen_presentacion")?.setValue(this.comunicacionService.cursoEditar[0].url_imagen_presentacion,{emitModelToViewChange:false});
        })
      }
  }

  /*
  editarCursoForm(curso:any){
    this.servicio.putCursos(curso).subscribe(resp =>{
        console.log(resp);
    })
  }

*/

  enviarReactivo() {
    
    
    if(!this.nuevoCursoForm.invalid){

    
    let curso = {
        nombre: this.nuevoCursoForm.get('nombre')?.value,
        descripcion: this.nuevoCursoForm.get('descripcion')?.value,
        publico_destinado: this.nuevoCursoForm.get('publico_destinado')?.value,
        requisitos: this.nuevoCursoForm.get('requisitos')?.value,
        url_imagen_presentacion: this.urlImgbb,
        url_video_presentacion: this.nuevoCursoForm.get('url_video_presentacion')?.value,
        precio_inscripcion: this.nuevoCursoForm.get('precio_inscripcion')?.value,
        precio_cuota: this.nuevoCursoForm.get('precio_cuota')?.value,
        cantidad_cuotas: this.nuevoCursoForm.get('cantidad_cuotas')?.value,
        id_subrubros: this.selected.id_subrubros
      
    };

    if(this.comunicacionService.cursoEditar[0].id_cursos!==null){
      this.servicio.putCursos(this.comunicacionService.cursoEditar[0].id_cursos,curso).subscribe(resp=>{
        this.toastr.success('El curso se edito correctamente','Curso Editado!!!');
        console.log(this.nuevoCursoForm.value);
        console.log(this.selected);
        setTimeout(function(){
          window.location.reload()
        },2000);
        console.log(resp);
      })
    }

  }else{
    this.toastr.error("Tiene que llenar todos los campos para la edicion","Intente de nuevo");
  }
    
      
  }


  readThis(event:any):void{
    
     let file:File = event.target.files[0];
     let myReader: FileReader = new FileReader();
     myReader.readAsDataURL(file);
     myReader.onloadend = async e =>{
       this.image = myReader.result;
       let imageSinDescripcion = '';

       if(this.image.includes('data:image/png;base64,','')){
         imageSinDescripcion = this.image.replace('data:image/png;base64,','');
         this.vistaImagen= await imageSinDescripcion;
         this.resultado =this.i + this.vistaImagen
       }
       if(this.image.includes('data:image/jpeg;base64,','')){
         console.log('jpg/jpeg')
         imageSinDescripcion = this.image.replace('data:image/jpeg;base64,','');
         this.vistaImagen= await imageSinDescripcion;
         this.resultado =this.i + this.vistaImagen
       }
     /*  let imageSinDescripcion = this.image.replace('data:image/jpeg;base64,','');
       this.vistaImagen= await imageSinDescripcion;
      this.resultado =this.i + this.vistaImagen;
      */
       this.servicio.imgbbPost(imageSinDescripcion).subscribe((resp:any)=>{
      
         this.imagenJSON=resp['data'];
         this.urlImgbb=this.imagenJSON.image.url;
         
       })
     }
     
     //this.servicio.upload(input.files[0]).subscribe(url=>console.log(url))
   }


}
