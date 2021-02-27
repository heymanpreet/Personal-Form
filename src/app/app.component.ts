import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common'; 
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import { RegisterationComponent } from './registeration/registeration.component';

export interface Users {
  name: string;
  age: number;
  gender: string;
  role: string;
}

const Users_Data: Users[] = [
  {name: 'Aman', age: 21, gender: 'M', role: 'Admin'},
  {name: 'Abhishek', age: 22, gender: 'M', role: 'User'},
  {name: 'Piyush', age: 23, gender: 'F', role: 'User'},
  {name: 'Kunal', age: 24, gender: 'M', role: 'User'},
  {name: 'Manpreet', age: 25, gender: 'M', role: 'Admin'},
  {name: 'Jaspreet', age: 26, gender: 'F', role: 'User'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-validator';
  loginForm: FormGroup; 
  viewSelected: any = 'login';
  displayedColumns: string[] = ['name', 'age', 'gender', 'role'];
  dataSource = new MatTableDataSource(Users_Data);
  @ViewChild(RegisterationComponent) registerForm;
  loginInfo: any;
  registerFormValidity:any;
  contactFormValidity: any;
  emergencyContactFormValidity: any;
  familyInfoFormValidity: any;

  constructor(private fb:FormBuilder,private location: Location,private router: Router){}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]
    })
    this.location.replaceState("/login");
  } 

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  selectedView(view) {
    this.viewSelected = view;
    if(view == 'register') {
      this.location.replaceState("/register");
    } 
    if(view == 'login') {
      this.location.replaceState("/login");
    } 
    if(view == 'profile') {
      this.location.replaceState("/profile");
      // console.log(this.registerData.registrationInfo);
    } 
  }

  registerFormMessage($event) {
    this.registerFormValidity = $event;
    console.log(this.registerFormValidity);
  }
  contactFormMessage($event) {
    this.contactFormValidity = $event;
    console.log(this.contactFormValidity);
  }
  emergencyContactFormCheck($event) {
    this.emergencyContactFormValidity = $event;
    console.log(this.emergencyContactFormValidity);
  }
  familyInfoFormMessage($event) {
    this.familyInfoFormValidity = $event;
    console.log(this.familyInfoFormValidity);
  }
  
}
