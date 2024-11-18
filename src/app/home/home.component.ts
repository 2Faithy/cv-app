import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], // Add RouterModule here if required
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',] // Corrected from 'styleUrl' to 'styleUrls'
})
export class HomeComponent {
  // Inject Router in the constructor
  constructor(private router: Router) {}

  // Method to navigate to the Projects page
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
