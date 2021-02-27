import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface contactPref {
  name: string;
  value: string;
}

interface prefDays {
  name: string;
  value: string;
}

interface startTime {
  name: string;
  value: string;
}

interface country {
  name: string;
  value: string;
}

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  contactForm: FormGroup;
  @Output() contactFormCheck = new EventEmitter<boolean>();

  contactPrefOptions: contactPref[] = [
    { name: 'Select Preference', value: '' },
    { name: 'Home', value: 'H' },
    { name: 'Office', value: 'O' }
  ];


  PrefDaysOptions:prefDays[] = [
    { name: 'Select Days', value: '' },
    { name: 'Monday', value: 'M' },
    { name: 'Tuesday', value: 'T' },
    { name: 'Wednesday', value: 'W' },
    { name: 'Thursday', value: 'Th' },
    { name: 'Friday', value: 'F' }
  ]

  startTimeOptions:startTime[] = [
    { name: 'Select Time', value: '' },
    { name: '10 AM', value: '10AM' },
    { name: '11 AM', value: '11AM' },
    { name: '2 PM', value: '2PM' },
    { name: '5 AM', value: '5AM' },
    { name: '8 PM', value: '8PM' }
  ]

  endTimeOptions:startTime[] = [
    { name: 'Select Time', value: '' },
    { name: '10 AM', value: '10AM' },
    { name: '11 AM', value: '11AM' },
    { name: '2 PM', value: '2PM' },
    { name: '5 AM', value: '5AM' },
    { name: '8 PM', value: '8PM' }
  ]

  countryOptions:country[] = [
    { name: 'Select Country', value: '' },
    { name: 'India', value: 'India' },
    { name: 'Canada', value: 'Canada' },
    { name: 'USA', value: 'USA' },
    { name: 'Japan', value: 'Japan' },
    { name: 'UK', value: 'UK' }
  ]

  militaryOptions:country[] = [
    { name: 'Select Country', value: '' },
    { name: 'India', value: 'India' },
    { name: 'Canada', value: 'Canada' },
    { name: 'USA', value: 'USA' },
    { name: 'Japan', value: 'Japan' },
    { name: 'UK', value: 'UK' }
  ]


  selectedContactPref: any;
  selectedPrefDays:String;
  selectedstartTime:String;
  selectedEndTime:String;
  selectedCountry:String;
  selectedMilitary:String;
  contactFormValid: boolean = false;

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.selectedContactPref = this.contactPrefOptions[0].value;
    this.selectedPrefDays = this.PrefDaysOptions[0].value;
    this.selectedstartTime = this.startTimeOptions[0].value;
    this.selectedEndTime = this.endTimeOptions[0].value;
    this.selectedCountry = this.countryOptions[0].value;
    this.selectedMilitary = this.countryOptions[0].value;

    this.contactForm = this.fb.group({
      phone: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email,Validators.maxLength(50)]],
      address1:['',[Validators.required]],
      address2:[''],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      zipCode:['',[Validators.required]],
      contactPref:[this.selectedContactPref, [Validators.required]],
      country:[this.selectedCountry,[Validators.required]],
      prefDays:[this.selectedPrefDays, [Validators.required]],
      startTime:[this.selectedstartTime, [Validators.required]],
      endTime:[this.selectedEndTime, [Validators.required]],
      currentMilitary:[this.selectedMilitary],
      militaryName:[],
      fbName:[],
      twitterName:[],
      LinkedinName:[]
    })
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get contactPref() {
    return this.contactForm.get('contactPref');
  }

  get prefDays() {
    return this.contactForm.get('prefDays');
  }
  get startTime() {
    return this.contactForm.get('startTime');
  }

  get endTime() {
    return this.contactForm.get('endTime');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get currentMilitary() {
    return this.contactForm.get('currentMilitary');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get address1() {
    return this.contactForm.get('address1');
  }

  get address2() {
    return this.contactForm.get('address2');
  }

  get city() {
    return this.contactForm.get('city');
  }

  get state() {
    return this.contactForm.get('state');
  }

  get zipCode() {
    return this.contactForm.get('zipCode');
  }

  checkContactForm() {
    if(this.contactForm.invalid) {
      this.contactFormValid = false;
      this.contactFormCheck.emit(this.contactFormValid); 
    } else {
      this.contactFormValid = true;
      this.contactFormCheck.emit(this.contactFormValid); 
    }
  }

}
