import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email1:string = "joker@gmail.com";
  contraseña1:string = "1234";
  email2:string ="jormendoza@gmail.com";
  contraseña2:string="1234";
  
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required]],
      contraseña:['',[Validators.required]]
    });
  }

  validarUsuario(){
    
      if((this.loginForm.value.email ==this.email1 && this.loginForm.value.contraseña==this.contraseña1)||(this.loginForm.value.email==this.email2&&this.loginForm.value.contraseña=="1234")){
          
           this.toastr.success("Bienvenido"," Datos correctos");
            this.router.navigate(['/administracion']);
        
        
      }else{
        this.toastr.error("Correo o Contraseña incorrecto","Vuelve ingresar tus Datos");
      }
  }

 
}
