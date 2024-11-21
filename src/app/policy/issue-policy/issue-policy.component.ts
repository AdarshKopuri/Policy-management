import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../policy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue-policy',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './issue-policy.component.html',
  styleUrl: './issue-policy.component.css'
})
export class IssuePolicyComponent {

  issuepolicy={
    policyid: '',
    consumerid:'',
    businessid: '',
    paymentdetails: '',
    acceptancestatus:''
   }


   constructor(private policyService: PolicyService, private router: Router) {}

   onSubmit(){
    this.policyService.issuePolicy(this.issuepolicy).subscribe({


      next: () => this.router.navigate(['/admin/policies']),
      error: (err) => alert('Error creating policy')
    });
   }

}
