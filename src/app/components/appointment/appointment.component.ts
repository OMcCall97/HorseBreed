import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService, Appointment } from './appointment.service';
import { HorsesService } from '../horses/horses.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm: FormGroup;
  horses$ = this.horsesService.getHorses();
  services = ['Physical therapy', 'Emotional support', 'Therapeutic riding', 'Equine-assisted learning'];
  submitted = false;
  success = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private horsesService: HorsesService
  ) {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['', Validators.required],
      horseId: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    this.appointmentForm.get('date')?.addValidators(Validators.min(today));
  }

  onSubmit() {
    this.submitted = true;

    if (this.appointmentForm.valid) {
      const appointment: Appointment = this.appointmentForm.value;
      
      this.appointmentService.createAppointment(appointment).subscribe({
        next: () => {
          this.success = true;
          this.appointmentForm.reset();
          this.submitted = false;
        },
        error: (error: any) => {
          this.error = 'Failed to create appointment. Please try again.';
          console.error('Appointment creation error:', error);
        }
      });
    }
  }
}