import { Component } from '@angular/core';
import { Horse } from '../../models/horse';
import { HorseService } from '../../services/horse.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  horses: Horse[] = [];

  constructor(private horseService: HorseService) { }

  ngOnInit(): void {
    this.horseService.getAllHorses().subscribe((horses: Horse[]) => {
      this.horses = horses;
    });
  }
}
