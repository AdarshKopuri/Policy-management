import { Component } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-business',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './view-business.component.html',
  styleUrl: './view-business.component.css'
})
export class ViewBusinessComponent {

  consumerid=''
  
  constructor(
    private consumerService: ConsumerService,
    private route: ActivatedRoute
  ) {}

  business=''

  ngOnInit(){
    
    const consumerid = this.route.snapshot.paramMap.get('id');

    console.log(consumerid);
    if (consumerid ) {
      this.consumerService.getBusiness( consumerid).subscribe(data => {
        this.business = data;
      });
    }
  }

  getBusiness(){
    this.consumerService.getBusiness( this.consumerid ).subscribe(data => {
      this.business = data;
    });
  }
}
