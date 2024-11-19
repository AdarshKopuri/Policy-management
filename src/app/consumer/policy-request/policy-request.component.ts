import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../../policy/policy.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-policy-request',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './policy-request.component.html',
  styleUrl: './policy-request.component.css'
})
export class PolicyRequestComponent {


  
  policyRequest = { business:0 ,amount: 0, propertyType: '' };
  quotation: any = null;

  constructor(private policyService: PolicyService, private router: Router) {}

  onSubmit() {
    this.policyService.getQuotation(this.policyRequest.business ,this.policyRequest.amount, this.policyRequest.propertyType).subscribe(data => {
      this.quotation = data;
      console.log(data)
    });
  }
}
