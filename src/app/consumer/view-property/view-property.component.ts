import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumerService } from '../consumer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-property',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-property.component.html',
  styleUrl: './view-property.component.css'
})
export class ViewPropertyComponent {

  consumerid=''
  propertyid=''
  property:any={}

  constructor(
    private consumerService: ConsumerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    
   // const consumerid = this.route.snapshot.paramMap.get('id');

   // console.log(consumerid);
   // if (consumerid ) {
      // this.consumerService.getProperty( this.consumerid, this.propertyid).subscribe(data => {
      //   this.business = data;
    //  });
    }

  getProperty(){
    
    this.consumerService.getProperty( this.consumerid, this.propertyid).subscribe(data => {
      this.property = data;
  })
}
  
}




