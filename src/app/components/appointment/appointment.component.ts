import { Component, OnInit } from "@angular/core";
import { Horse } from "../../models/horse";
import { AppointmentService } from "../../services/appointment.service";
import { HorseService } from "../../services/horse.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule], 
})
export class AppointmentsComponent implements OnInit {
  newAppointment = {
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
    status: 'pending',
    horseId: null
  };

  horses: Horse[] = [];
  services: any[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private horseService: HorseService,
    private http: HttpClient 
  ) {}

  ngOnInit(): void {
    this.horseService.getAllHorses().subscribe((data: Horse[]) => {
      this.horses = data;
    });

    this.http.get<any[]>('http://localhost:3000/services').subscribe((data) => {
      this.services = data;
    });
  }

  submitAppointment() {
    const appointmentWithTimestamp = {
      ...this.newAppointment,
      createdAt: new Date().toISOString()
    };

    this.appointmentService.createAppointment(appointmentWithTimestamp).subscribe({
      next: (res) => {
        alert('Appointment successfully created!');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error submitting appointment:', err);
        alert('Failed to submit appointment. Try again.');
      }
    });
  }

  resetForm() {
    this.newAppointment = {
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
      status: 'pending',
      horseId: null
    };
  }
}
