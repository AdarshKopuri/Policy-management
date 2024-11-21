import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule, NgIf],
  templateUrl: './create-property.component.html',
  styleUrl: './create-property.component.css'
})
export class CreatePropertyComponent {


  model = {
    businessId: '',
    consumerId: '',
    insurancetype: '',
    propertytype: '',
    buildingsqft: '',
    buildingtype: '',
    buildingstoreys: '',
    buildingage: '',
    costoftheasset: '',
    salvagevalue: '',
    usefullifeoftheAsset: ''
  };

  
    businessId= ''
    consumerId= ''
    insurancetype= ''
    propertytype= ''
    buildingsqft= ''
    buildingtype= ''
    buildingstoreys= ''
    buildingage= ''
    costoftheasset= ''
    salvagevalue= ''
    usefullifeoftheAsset= ''


  constructor(private consumerService: ConsumerService, private router: Router) {}

  // consumerPropertyForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   // Initialize the form with default values and validators
  //   this.consumerPropertyForm = this.fb.group({
  //     businessId: ['', [Validators.required]],
  //     consumerId: ['', [Validators.required]],
  //     insuranceType: ['', [Validators.required]],
  //     propertyType: ['', [Validators.required]],
  //     buildingSqFt: ['', [Validators.required, Validators.min(1)]],
  //     buildingType: ['', [Validators.required]],
  //     buildingStoreys: ['', [Validators.required, Validators.min(1)]],
  //     buildingAge: ['', [Validators.required, Validators.min(1)]],
  //     costOfTheAsset: ['', [Validators.required, Validators.min(1)]],
  //     salvageValue: ['', [Validators.required, Validators.min(0)]],
  //     usefulLifeOfTheAsset: ['', [Validators.required, Validators.min(1)]]
  //   });
  // }


  // get f() {
  //   return this.consumerPropertyForm.controls;
  // }


  onSubmit() {
    console.log('Form submitted successfully with values:', this.model);
    // Add logic to submit the data, like making an HTTP request to an API


   this.consumerService.createProperty(this.model).subscribe(
    response=> 
      console.log(response)
   );

  // console.log(response);
  }

  
}
