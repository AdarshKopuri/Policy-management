import { Component } from '@angular/core';
import { PolicyService } from '../../policy/policy.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-policy-view',
  standalone: true,
  imports: [ FormsModule , NgIf],
  templateUrl: './policy-view.component.html',
  styleUrl: './policy-view.component.css'
})
export class PolicyViewComponent {

  consumerid='';
  policyid='';

  policy: any = {};

  constructor(
    private policyService: PolicyService,
    private route: ActivatedRoute
  ) {}



  getPolicy(){

    this.policyService.viewPolicy( this.consumerid, this.policyid).subscribe(data => {
      this.policy = data;
    });
  }

/*
  ngOnInit() {
    const policyId = this.route.snapshot.paramMap.get('id');

    const consumername= localStorage.getItem('username');
    console.log(policyId);
    if (policyId ) {
      this.policyService.getPolicy( policyId).subscribe(data => {
        this.policy = data;
      });
    }
    // else{
    //   console.log("login ....")
    // }

}
    */
  }








