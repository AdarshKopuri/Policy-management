import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-policy-edit',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './policy-edit.component.html',
  styleUrl: './policy-edit.component.css'
})
export class PolicyEditComponent implements OnInit {

  
  policyId: string = '';
  policy: any = {};

  constructor(
    private policyService: PolicyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.policyId = this.route.snapshot.paramMap.get('id') || '';
    if (this.policyId) {
      this.policyService.getPolicy(this.policyId).subscribe(data => {
        this.policy = data;
      });
    }
  }

  onSubmit() {
    this.policyService.updatePolicy(this.policy).subscribe({
      next: () => this.router.navigate(['/admin/policies']),
      error: (err) => alert('Error updating policy')
    });
  }
}
