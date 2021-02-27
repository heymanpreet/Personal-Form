import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface relationship {
  name: string;
  value: string;
}

@Component({
  selector: 'app-emergency-contact-info',
  templateUrl: './emergency-contact-info.component.html',
  styleUrls: ['./emergency-contact-info.component.css']
})
export class EmergencyContactInfoComponent implements OnInit {
  emergencyContactForm: FormGroup;
  @Output() registerData: EventEmitter<boolean> =   new EventEmitter();

  relationshipData: relationship[] = [
    { name: 'Select Releationship', value: '' },
    { name: 'Single', value: 'single' },
    { name: 'Married', value: 'married' }
  ];
  selectedRelationship:string;
  emergencyContactValid: boolean = false;
  @Output() emergencyContactFormCheck = new EventEmitter<boolean>();

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.selectedRelationship = this.relationshipData[0].value;
    this.emergencyContactForm = this.fb.group({
      relationship:[this.selectedRelationship],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email,Validators.maxLength(50)]],
      firstName: ['',[Validators.required,Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
      middleName: ['',[Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
      lastName: ['',[Validators.required,Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
    })
  }

  get relationship() {
    return this.emergencyContactForm.get('relationship');
  }

  get email() {
    return this.emergencyContactForm.get('email');
  }

  get phone() {
    return this.emergencyContactForm.get('phone');
  }

  get firstName() {
    return this.emergencyContactForm.get('firstName');
  }

  get middleName() {
    return this.emergencyContactForm.get('middleName');
  }
  
  get lastName() {
    return this.emergencyContactForm.get('lastName');
  }

  checkEmergencyContactForm() {
    if(this.emergencyContactForm.invalid) {
      this.emergencyContactValid = false;
      this.emergencyContactFormCheck.emit(this.emergencyContactValid); 
    } else {
      this.emergencyContactValid = true;
      this.emergencyContactFormCheck.emit(this.emergencyContactValid); 
    }
  }

}
