import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface martialStatus {
  name: string;
  value: string;
}

interface children {
  name: string;
  value: string;
}

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css']
})
export class FamilyInfoComponent implements OnInit {
  familyInfoForm: FormGroup;
  @Output() familyInfoData: EventEmitter<boolean> =   new EventEmitter();

  martialStatusOptions: martialStatus[] = [
    { name: 'Select Martial Status', value: '' },
    { name: 'Married', value: 'M' },
    { name: 'Unmarried', value: 'UM' },
  ];

  childrenOptions: children[] = [
    { name: '', value: '' },
    { name: 'Yes', value: 'Y' },
    { name: 'No', value: 'N' },
  ];
  selectedMartialStatus:String;
  selectedChildren:String;
  familyInfoFormValid: boolean = false;

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.selectedMartialStatus = this.martialStatusOptions[0].value;

    this.familyInfoForm = this.fb.group({
      spouse:[''],
      martialStatus:[this.selectedMartialStatus, [Validators.required]],
      children:[this.selectedChildren],
      dob:[''],
    })
  }

  get martialStatus() {
    return this.familyInfoForm.get('martialStatus');
  }

  get children() {
    return this.familyInfoForm.get('children');
  }

  get password() {
    return this.familyInfoForm.get('password');
  }

  get dob() {
    return this.familyInfoForm.get('dob');
  }
  get spouse() {
    return this.familyInfoForm.get('spouse');
  }

  checkFamilyInfoForm() {
    if(this.familyInfoForm.invalid) {
      this.familyInfoFormValid = false;
      this.familyInfoData.emit(this.familyInfoFormValid); 
    } else {
      this.familyInfoFormValid = true;
      this.familyInfoData.emit(this.familyInfoFormValid); 
    }
  }
}

