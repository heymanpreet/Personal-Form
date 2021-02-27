import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface profile {
  name: string;
  value: string;
}

interface gender {
  name: string;
  value: string;
}

interface genderOrientation {
  name: string;
  value: string;
}

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  @Output() registerFormCheck = new EventEmitter<boolean>();

  genderOptions: gender[] = [
    { name: 'Select Gender', value: '' },
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' },
    { name: 'Others', value: 'O' }
  ];

  orientationOptions: genderOrientation[] = [
    { name: 'Select Orientation', value: '' },
    { name: 'Homosexuality', value: 'HS' },
    { name: 'Heterosexuality', value: 'HT' },
    { name: 'Asexuality', value: 'AS' }
  ]

  profileOptions: profile[] = [
    { name: 'Select Title', value: '' },
    { name: 'Mr.', value: 'Mr' },
    { name: 'Mrs.', value: 'Mrs' },
    { name: 'Miss', value: 'Miss' }
  ]

  selectedGender:String;
  selectedOrientation:String;
  selectedProfile:String;
  registrationInfo: any;
  registerFormValid: boolean = false;

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.selectedGender = this.genderOptions[0].value;
    this.selectedOrientation = this.orientationOptions[0].value;
    this.selectedProfile = this.profileOptions[0].value;
    this.registerForm = this.fb.group({
      profile:[this.selectedProfile,[Validators.required]],
      firstName: ['',[Validators.required,Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
      middleName: ['',[Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
      lastName: ['',[Validators.required,Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
      gender:[this.selectedGender,[Validators.required]],
      orientation:[this.selectedOrientation],
      dob:['',[Validators.required]],
      suffix:[''],
      nickName:[''],
    })
  }

  get profile() {
    return this.registerForm.get('profile');
  }

  get dob() {
    return this.registerForm.get('dob');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get middleName() {
    return this.registerForm.get('middleName');
  }
  
  get lastName() {
    return this.registerForm.get('lastName');
  }

  get suffix() {
    return this.registerForm.get('suffix');
  }

  get nickName() {
    return this.registerForm.get('nickName');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get orientation() {
    return this.registerForm.get('orientation');
  }

  checkRegisterForm() {
    if(this.registerForm.invalid) {
      this.registerFormValid = false;
      this.registerFormCheck.emit(this.registerFormValid);
      console.log('false');
      
    } else {
      this.registerFormValid = true;
      this.registerFormCheck.emit(this.registerFormValid);
      console.log('true');
    }
  }

}
