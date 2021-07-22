import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlumnosService } from 'src/app/service/alumnos.service';
import { ComunicacionService } from 'src/app/service/comunicacion.service';

@Component({
  selector: 'app-modal-editar-alumno',
  templateUrl: './modal-editar-alumno.component.html',
  styleUrls: ['./modal-editar-alumno.component.scss']
})
export class ModalEditarAlumnoComponent implements OnInit {
  alumnoForm!:FormGroup;
  constructor(private formBuilder:FormBuilder , private toastr:ToastrService,private servicioAlumno:AlumnosService,
    private servicioComunicacion:ComunicacionService) { }

  ngOnInit(): void {

    
    this.alumnoForm = this.formBuilder.group({
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    dni: ['', [Validators.required]],
    celular: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    direccion_calle: ['', [Validators.required]],
    direccion_numero: ['', [Validators.required]],
    direccion_barrio: ['', [Validators.required]],
    direccion_localidad: ['', [Validators.required]],
  });
  this.editarCurso();
  }


  editarCurso(){
    
       
    //data 
     if(this.servicioComunicacion.idEditarAlumno!==null){

       

       this.servicioAlumno.getAlumnosId(this.servicioComunicacion.idEditarAlumno).subscribe((resp:any) =>{
        
         this.servicioComunicacion.alumnoEditar=  resp['rows'];
       console.log(this.servicioComunicacion.alumnoEditar[0]);


        this.alumnoForm.patchValue({
      
           nombres:this.servicioComunicacion.alumnoEditar[0].nombres,
           apellidos:this.servicioComunicacion.alumnoEditar[0].apellidos,
           dni:this.servicioComunicacion.alumnoEditar[0].dni,
           celular:this.servicioComunicacion.alumnoEditar[0].celular,
           mail:this.servicioComunicacion.alumnoEditar[0].mail,
           direccion_calle:this.servicioComunicacion.alumnoEditar[0].direccion_calle,
           direccion_numero:this.servicioComunicacion.alumnoEditar[0].direccion_numero,
           direccion_barrio:this.servicioComunicacion.alumnoEditar[0].direccion_barrio,
           direccion_localidad:this.servicioComunicacion.alumnoEditar[0].direccion_localidad
          
        })
        
       })
     }
 }


  enviarReactivo() {
    
    
    if(!this.alumnoForm.invalid){

    
    let alumno = {
        nombres: this.alumnoForm.get('nombres')?.value,
        apellidos: this.alumnoForm.get('apellidos')?.value,
        dni: this.alumnoForm.get('dni')?.value,
        celular: this.alumnoForm.get('celular')?.value,
        mail: this.alumnoForm.get('mail')?.value,
        direccion_calle: this.alumnoForm.get('direccion_calle')?.value,
        direccion_numero: this.alumnoForm.get('direccion_numero')?.value,
        direccion_barrio:this.alumnoForm.get('direccion_barrio')?.value,
        direccion_localidad: this.alumnoForm.get('direccion_localidad')?.value,
      
    };

    if(this.servicioComunicacion.alumnoEditar[0].id_cursos!==null){
      this.servicioAlumno.putAlumnos(this.servicioComunicacion.alumnoEditar[0].alumnos_id,alumno).subscribe(resp=>{
        this.toastr.success('El curso se edito correctamente','Curso Editado!!!');
        console.log(this.alumnoForm.value);
      
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


}
