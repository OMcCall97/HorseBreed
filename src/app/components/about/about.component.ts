import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'The Horse Center';
  content = {
    introduction: `Welcome to The Horse Center, your premier destination for all equestrian activities. Our facility offers a comprehensive range of programs designed to meet every rider's needs, from therapeutic benefits to competitive excellence and recreational enjoyment.`,
    therapy: {
      title: 'Horse Therapy Programs',
      description: `Our certified equine-assisted therapy programs are designed to provide physical, emotional, and cognitive benefits. Our specially trained therapy horses work with certified therapists to create personalized treatment plans for individuals of all ages and abilities. Our therapy programs include:`,
      services: [
        'Physical rehabilitation and mobility improvement',
        'Emotional support and mental wellness',
        'Cognitive development and learning assistance',
        'Social skills development and integration'
      ]
    },
    competitive: {
      title: 'Competitive Equestrian Programs',
      description: `For riders seeking to advance their skills in competitive disciplines, we offer comprehensive training programs led by experienced instructors. Our competitive programs include:`,
      disciplines: [
        'Dressage training and competition preparation',
        'Show jumping and hunter/jumper development',
        'Eventing and cross-country training',
        'Western pleasure and performance classes'
      ]
    },
    trail: {
      title: 'Trail Riding Adventures',
      description: `Experience the joy of horseback riding in a relaxed, natural setting. Our guided trail rides offer a unique opportunity to connect with nature while enjoying quality time with our gentle trail horses. Perfect for:`,
      activities: [
        'Family outings and group adventures',
        'Nature photography excursions',
        'Scenic rides through local trails',
        'Beginner riding experiences'
      ]
    }
  };
}

