import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScheduleAppointmentsComponent } from './schedule-appointments/schedule-appointments.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,                  // Root Component
    ScheduleAppointmentsComponent, // Component for scheduling appointments
    SignUpComponent                // Component for signup functionality
  ],
  imports: [
    BrowserModule,  // Required for applications running in browsers
    HttpClientModule, // Enables HTTP requests
    FormsModule      // Required for template-driven forms
  ],
  providers: [],
  bootstrap: [AppComponent]        // Specifies the root component
})
export class AppModule { }
