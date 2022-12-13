import { Component, OnInit } from '@angular/core';
import { RegService } from './shared/reg.service';
import { IRegdetails } from './shared/regdetails.model';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    updateSubscription!: Subscription;

  constructor(public service: RegService) { }
   
  TableData!: IRegdetails[];
  

  ngOnInit(): void {
   this.service.getRegList().subscribe((res) => {
      this.TableData = res;
      console.log(this.TableData);
    });
 
    this.updateSubscription = interval(3000).subscribe(
      (val) => { this.getData() });
    
    
}
  getData() {
    this.service.getRegList().subscribe((data: any) => {
      console.log(data);
      this.TableData = data;
    });

}
  reloadCurrentPage() {
    window.location.reload();
  }
 
}
