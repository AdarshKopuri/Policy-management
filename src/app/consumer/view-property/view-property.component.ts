import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-view-property',
  standalone: true,
  imports: [],
  templateUrl: './view-property.component.html',
  styleUrl: './view-property.component.css'
})
export class ViewPropertyComponent {

  business=''
  
  constructor(
    private consumerService: ConsumerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    
    const consumerid = this.route.snapshot.paramMap.get('id');

    console.log(consumerid);
    if (consumerid ) {
      this.consumerService.getBusiness( consumerid).subscribe(data => {
        this.business = data;
      });
    }
  }
}
