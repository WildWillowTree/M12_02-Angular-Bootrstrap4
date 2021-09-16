import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})


export class RegisterFormComponent implements OnInit {
  name!:string;
  email!:string;
  password!:string;
  submitted = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    if(this.submitted){
      var myFormData = new FormData();

      myFormData.append('myUsername', this.form.value.name);
      myFormData.append('myEmail', this.form.value.email);
      this.crudservice.adduser(myFormData);
    }
  }

  constructor( private crudservice: CrudService) { }

  ngOnInit(): void {
  }

}
