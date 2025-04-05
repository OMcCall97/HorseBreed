import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }
}

