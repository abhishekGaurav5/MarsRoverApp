import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoverServiceService } from '../rover-service.service';

@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.css'],
})
export class RoverDetailsComponent implements OnInit {
  dataFetched = [];
  rover: string = '';
  pno:number = 1;

  constructor(
    private route: ActivatedRoute,
    private api: RoverServiceService
  ) {}

  ngOnInit() {
    this.rover = this.route.snapshot.params['rover'];

    console.log(this.rover); // got the desired rover

    this.getData();
  }

  getData() {
    this.api.getCuriosity(this.rover).subscribe((data) => {
      this.dataFetched = data.photos;

      console.log(this.dataFetched);
      // console.log(this.dataFetched[0].camera.full_name);

      // this.dataFetched.forEach(element => {
      //   this.dataFetched=data.photos[element];
      //   console.lo
    });
  }
}
