import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  architecture: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Trip Management System',
      description:
        'A comprehensive trip management platform with booking, itinerary planning, and expense tracking features.',
      techStack: ['C#', '.NET Core', 'Angular', 'MS SQL', 'Clean Architecture'],
      architecture: ['Clean Architecture', 'Repository Pattern', 'CQRS'],
      icon: '✈️',
    },
    {
      title: 'School Management System',
      description: 'Complete school administration system covering student records, attendance, and academic management.',
      techStack: ['C#', '.NET Core', 'ASP.NET MVC', 'MS SQL', 'WinForms'],
      architecture: ['Clean Architecture', 'N-Tier Architecture'],
      icon: '🎓',
    },
    {
      title: 'Yacht Management System',
      description: 'Premium yacht management platform with booking, maintenance, and crew scheduling capabilities.',
      techStack: ['C#', '.NET Core', 'Angular', 'Entity Framework', 'MS SQL'],
      architecture: ['Clean Architecture', 'CQRS', 'Event-Driven'],
      icon: '🛥️',
    },
    {
      title: 'Teacher Management System',
      description: 'Educational institution platform for teacher management, scheduling, and performance tracking.',
      techStack: ['C#', '.NET MVC', 'SQL Server', 'Bootstrap', 'jQuery'],
      architecture: ['MVC Architecture', 'Repository Pattern'],
      icon: '👨‍🏫',
    },
    {
      title: 'E-Commerce System',
      description: 'Full-stack e-commerce platform with product catalog, shopping cart, and payment processing.',
      techStack: ['C#', '.NET Core', 'Angular', 'Payment Gateway', 'MS SQL'],
      architecture: ['Clean Architecture', 'Microservices Ready', 'CQRS'],
      icon: '🛍️',
    },
    {
      title: 'Online Food Ordering System',
      description: 'Food delivery platform with restaurant management, order tracking, and real-time notifications.',
      techStack: ['C#', '.NET Core', 'Angular', 'Background Jobs', 'MS SQL'],
      architecture: ['Clean Architecture', 'Push Notifications', 'Real-time Updates'],
      icon: '🍔',
    },
  ];
}
