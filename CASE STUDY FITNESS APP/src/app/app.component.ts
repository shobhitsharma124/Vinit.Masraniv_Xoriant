import { FormGroup,FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angularSPA';

  


  


  constructor(private router: Router,private fb: FormBuilder) { }
  landingpage() {
    this.router.navigateByUrl("landing-page");
  }
  placeAppointment() {
    this.router.navigateByUrl("place-fitness-trainer-appointment");
  }
  viewAppointment() {
    this.router.navigateByUrl("view-appointment");
  }
  contactUspage() {
    this.router.navigateByUrl("contact-us");
  }

  navpage() {
    this.router.navigateByUrl("place-gift-card-order-page");
  }


}
