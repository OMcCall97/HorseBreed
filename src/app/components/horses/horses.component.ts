import { Component } from '@angular/core';

@Component({
  selector: 'app-horses',
  standalone: true,
  imports: [],
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css'],
})
export class HorsesComponent {
  
  horses = [
    {
      breed: 'American Quarter Horse',
      description: 'Known for strength and agility',
      origin: 'USA',
      height: '14.2-16 hands',
      weight: '950-1200 lbs',
      temperament: 'Intelligent, calm, willing to please',
    
      image:
        'https://images.pexels.com/photos/11730924/pexels-photo-11730924.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      breed: 'Arabian',
      description: 'One of the oldest horse breeds',
      origin: 'Middle East',
      height: '14.1-16 hands',
      weight: '800-1100 lbs',
      temperament: 'Intelligent, athletic, gentle',

      image:
        'https://images.pexels.com/photos/29632854/pexels-photo-29632854/free-photo-of-dynamic-shot-of-horse-galloping-on-farm.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    // {
    //   breed: 'Appaloosa',
    //   description: 'Distinctive spotted coat pattern',
    //   origin: 'USA',
    //   height: '14.2-16 hands',
    //   weight: '950-1200 lbs',
    //   temperament: 'Friendly, curious, energetic',
    //   uses: ['Western disciplines', 'trail riding'],
    //   image: 'assets/image/appaloosa-horse.jpg',
    // },
    // {
    //   breed: 'Thoroughbred',
    //   description: 'Bred for speed and endurance',
    //   origin: 'England',
    //   height: '15.2-17 hands',
    //   weight: '900-1300 lbs',
    //   temperament: 'Athletic, focused, determined',
    //   uses: ['Racing', 'eventing', 'show jumping'],
    //   image: 'assets/image/thoroughbred-horse.jpg',
    // },
    // {
    //   breed: 'Tennessee Walking Horse',
    //   description: 'Known for smooth gait',
    //   origin: 'USA',
    //   height: '14.2-17 hands',
    //   weight: '900-1200 lbs',
    //   temperament: 'Gentle, calm, patient',
    //   uses: ['Trail riding', 'pleasure riding'],
    //   image: 'assets/image/tennessee-walking-horse.jpg',
    // },
  ];
}
