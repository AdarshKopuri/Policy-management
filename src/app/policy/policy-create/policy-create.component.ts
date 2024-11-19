import { Component } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-policy-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './policy-create.component.html',
  styleUrl: './policy-create.component.css'
})
export class PolicyCreateComponent {

  // Policy = { 
  //   name: '',
  //    amount: 0,
  //     type: '', 
  //     details: '' };


      policy ={

        consumerid:'',
        acceptedquotes:''

      }

  constructor(private policyService: PolicyService, private router: Router) {}

  onSubmit() {
    this.policyService.createPolicy(this.policy).subscribe({


      next: () => this.router.navigate(['/admin/policies']),
      error: (err) => alert('Error creating policy')
    });
  }

}
