import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule,RouterOutlet],  

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'horsebreed';
}
