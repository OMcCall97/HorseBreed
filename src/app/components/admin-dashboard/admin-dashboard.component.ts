import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- THIS IS THE FIX
import { AppointmentService } from '../../services/appointment.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,HttpClientModule], // <-- MAKE SURE THIS IS INCLUDED
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  appointmentService = inject(AppointmentService);
  appointments: any[] = [];

  constructor() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        console.log('Loaded appointments:', this.appointments);
      },
      error: (err) => console.error('Error loading appointments', err)
    });
  }

  approve(id: number) {
    this.appointmentService.updateAppointmentStatus(id, 'approved').subscribe(() => {
      this.loadAppointments();
    });
  }

  deny(id: number) {
    this.appointmentService.updateAppointmentStatus(id, 'denied').subscribe(() => {
      this.loadAppointments();
    });
  }

  delete(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.loadAppointments();
    });
  }
}
