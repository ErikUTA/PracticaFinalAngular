import { Component, OnInit } from '@angular/core';
import { SingleUserService } from '../../services/singleUser/single-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public singleUserService: SingleUserService, private fb: FormBuilder) { 
    this.createForm();
  }
  
  users: any;
  form: FormGroup;


  ngOnInit() {

  }


  get Pass1(){
    return this.form.get('pass1').invalid && this.form.get('pass1').touched;
  }

  get Pass2(){
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;
    // If de operador ternario
    return (pass1 === pass2) ? false : true;
  }

  enviar(){
    console.log(this.form);
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control => {
        if(control instanceof FormGroup){
          return Object.values(control.controls).forEach( control => control.markAsTouched())
        }else{
          control.markAsTouched();
        }
      })
    }
  }

  createForm(){
    this.form = this.fb.group({
      // El primeri valor ('') representa el valor por defecto de cada control
      // Como segundo valor estaremos agregando las validaciones
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      job: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    },{
      validators: this.singleUserService.matchPassword('pass1', 'pass2')
    });
  }

  get ValidNombre(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get ValidJob(){
    return this.form.get('job').invalid && this.form.get('job').touched;
  }
  

  get ValidEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }




} 