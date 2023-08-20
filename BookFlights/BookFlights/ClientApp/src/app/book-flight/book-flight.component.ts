import { Component, OnInit } from '@angular/core';
import { FlightRm } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../api/services';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit{

  constructor(private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService) { }

  flightId:string = 'not loaded'
  flight: FlightRm = {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(r => this.findFlight(r.get("flightId")))
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed'

    this.flightService.findFlightFlight({ id: this.flightId })
      .subscribe(r => this.flight = r,
        this.handleError)
  }

  private handleError = (err: any)=> {
    if (err.status == 404) {
      alert("Flight not found")
      this.router.navigate(['/search-flight'])
    }
    console.log("Response Error. Status: " + err.status)
    console.log("Response Error. Status Trxt: " + err.statusText)
    console.log(err)  
  }

}
