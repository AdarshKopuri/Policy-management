import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-create-business',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-business.component.html',
  styleUrl: './create-business.component.css'
})
export class CreateBusinessComponent {

  // firstname  ='';
  // lastname=''
  // dob='';
  // businessname= '';
  // pandetails='';
  // email='';
  // phone='';
  // website='';
  // buisinessoverview='';
  // validity='';
  // agentname='';
  // agentid='';
  // buisinesscategory='';
  // businesstype='';
  // buisinessturnover='';
  // capitalinvested='';
  // totalemployees='';
  // buisinessage='';

  
  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  businessname: string = '';
  pandetails: string = '';
  email: string = '';
  phone: string = '';
  website: string = '';
  buisinessoverview: string = '';
  validity: string = '';
  agentname: string = '';
  agentid: string = '';
  buisinesscategory: string = '';
  businesstype: string = '';
  buisinessturnover: string = '';
  capitalinvested: string = '';
  totalemployees: string = '';
  buisinessage: string = '';

  constructor(private consumerService: ConsumerService, private router: Router) {}

  
  onSubmit() {
    const formValues = {
      firstname: this.firstname,
      lastname: this.lastname,
      dob: this.dob,
      businessname: this.businessname,
      pandetails: this.pandetails,
      email: this.email,
      phone: this.phone,
      website: this.website,
      businessoverview: this.buisinessoverview,
      validity: this.validity,
      agentname: this.agentname,
      agentid: this.agentid,
      businesscategory: this.buisinesscategory,
      businesstype: this.businesstype,
      businessturnover: this.buisinessturnover,
      capitalinvested: this.capitalinvested,
      totalemployees: this.totalemployees,
      businessage: this.buisinessage
    };
    console.log('Form submitted successfully with values: ', formValues);



    this.consumerService.createBusiness(formValues).subscribe(
      response=>
        console.log(response)
    )
    ;





  }
  //businessForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.businessForm = this.fb.group({
  //     firstname: ['', Validators.required],
  //     lastname: ['', Validators.required],
  //     dob: ['', Validators.required],
  //     businessname: ['', Validators.required],
  //     pandetails: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  //     website: [''],
  //     buisinessoverview: ['', Validators.required],
  //     validity: ['', Validators.required],
  //     agentname: ['' ],
  //     agentid: [''],
  //     buisinesscategory: ['', Validators.required],
  //     businesstype: ['', Validators.required],
  //     buisinessturnover: ['', Validators.required],
  //     capitalinvested: ['', Validators.required],
  //     totalemployees: ['', Validators.required],
  //     buisinessage: ['', Validators.required]
  //   });
 // }



    // onSubmit() {
    //   if (this.businessForm.valid) {
    //     const formValues = this.businessForm.value;
    //     console.log('Form submitted successfully with values: ', formValues);
    //     // Here you can send the form values to a server, e.g. through a service
    //   } else {
    //     console.log('Form is invalid!');
    //   }
    // }


}
  

