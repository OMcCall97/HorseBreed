import { Component } from '@angular/core';
import { Horse } from '../../models/horse';
import { HorseService } from '../../services/horse.service';

interface Horse {
  id: number;
  breed: string;
  description: string;
  origin: string;
  height: string;
  weight: string;
  temperament: string;
  therapyUses: string;
  uses: string[];
  image?: string;
}

@Component({
  selector: 'app-horses',
  standalone: true,
  imports: [],
  templateUrl: './horses.component.html',
  styleUrl: './horses.component.css'
})
export class HorsesComponent {
  horses: Horse[] = [
    {
      id: 1,
      breed: "American Quarter Horse",
      description: "Known for strength and agility",
      origin: "USA",
      height: "14.2-16 hands",
      weight: "950-1200 lbs",
      temperament: "Intelligent, calm, willing to please",
      therapyUses: "Physical therapy, emotional support",
      uses: ["Western pleasure", "barrel racing", "trail riding"],
      image: "assets/image/quarter-horse.jpg"
    },
    {
      id: 2,
      breed: "Arabian",
      description: "One of the oldest horse breeds",
      origin: "Middle East",
      height: "14.1-16 hands",
      weight: "800-1100 lbs",
      temperament: "Intelligent, athletic, gentle",
      therapyUses: "Therapeutic riding programs",
      uses: ["Endurance", "English pleasure", "show jumping"]
    },
    {
      id: 3,
      breed: "Appaloosa",
      description: "Distinctive spotted coat pattern",
      origin: "USA",
      height: "14.2-16 hands",
      weight: "950-1200 lbs",
      temperament: "Friendly, curious, energetic",
      therapyUses: "Equine-assisted learning",
      uses: ["Western disciplines", "trail riding"]
    },
    {
      id: 4,
      breed: "Thoroughbred",
      description: "Bred for speed and endurance",
      origin: "England",
      height: "15.2-17 hands",
      weight: "900-1300 lbs",
      temperament: "Athletic, focused, determined",
      therapyUses: "Physical rehabilitation",
      uses: ["Racing", "eventing", "show jumping"]
    },
    {
      id: 5,
      breed: "Tennessee Walking Horse",
      description: "Known for smooth gait",
      origin: "USA",
      height: "14.2-17 hands",
      weight: "900-1200 lbs",
      temperament: "Gentle, calm, patient",
      therapyUses: "Therapy programs, beginner riders",
      uses: ["Trail riding", "pleasure riding"]
    }
  ];
}



