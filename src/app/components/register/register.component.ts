import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe, NgFor, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userReisterForm:FormGroup
  constructor(private formBuilder: FormBuilder) {

    this.userReisterForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,10}')]],
        email: [''],
        password: [''],
        address:this.formBuilder.group({
          city:[''],
          street:[''],
        }),
        phoneNums:this.formBuilder.array([['', [Validators.pattern('^[0-9]{10}$')]]]),
      });

    // this.userReisterForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,10}')]),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl(''),
    //   }),
    //   phoneNums:new FormArray([new FormControl('', [Validators.pattern('')])]),
    // });
  }
  ngOnInit(): void {
    // get user id >> id in url
    // this.userReisterForm.setValue({
    //   name: 'John Doe',
    //   email: 'john.doe@example.com',
    //   // password: 'password123',
    //   address:{
    //     city: 'New York',
    //     street: '123 Main St'
    //   }
    this.userReisterForm.patchValue({
      name: 'John Doe',
      email: 'john.doe@example.com'

    });
    // })

  }

  registerUser(){
    console.log(this.userReisterForm.value)

  }
  get name(){
    return this.userReisterForm.get('name')

  }

  get phones(){
    return this.userReisterForm.get('phoneNums') as FormArray
  }

  addNewPhone(){
    this.phones.push(this.formBuilder.control('', [Validators.pattern('^[0-9]{10}$')]));
    // this.phones.push(new FormControl('', [Validators.pattern('')]));
  }

  removePhone(index:number){
      this.phones.removeAt(index);

  }
}
