import { Component } from '@angular/core';
import { Horse } from '../../models/horse';
import { HorseService } from '../../services/horse.service';

@Component({
  selector: 'app-horses',
  standalone: true,
  imports: [],
  templateUrl: './horses.component.html',
  styleUrl: './horses.component.css'
})
export class HorsesComponent {
  horses: Horse[] = [];

  constructor(private horseService: HorseService) { }

  ngOnInit(): void {
    this.horseService.getAllHorses().subscribe(horses => {
      this.horses = horses;
    });
  }
}
