import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-policy-list',
  standalone: true,
  imports: [ FormsModule, NgFor,RouterModule],
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.css'
})
export class PolicyListComponent implements OnInit {

  
  policies: any[] = [];

  constructor(private policyService: PolicyService) {}

  ngOnInit() {
    this.policyService.getPoliciesByUser('admin').subscribe(data => {
      this.policies = data;
    });
  }

  deletePolicy(id: string) {
    this.policyService.deletePolicy(id).subscribe({
      next: () => {
        this.policies = this.policies.filter(policy => policy.id !== id);
      },
      error: (err) => alert('Error deleting policy')
    });
  }
}
