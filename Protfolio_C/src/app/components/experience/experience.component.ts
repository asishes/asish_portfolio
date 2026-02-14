import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  position: string;
  company: string;
  duration: string;
  isActive: boolean;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: '.NET Core Developer',
      company: 'NGXP Technologies',
      duration: '2024 – Present',
      isActive: true,
      responsibilities: [
        'Payment Gateway Integration',
        'Background Job APIs Development',
        'Email & SMS Notification APIs',
        'Developed 200+ REST APIs',
        'Angular API Integration',
        'Clean Architecture & Repository Pattern Implementation',
      ],
    },
    {
      position: '.NET Developer',
      company: 'Aitrich Technologies',
      duration: '2023 – 2024',
      isActive: false,
      responsibilities: [
        'Email Job APIs Development',
        'WinForms UI Design and Implementation',
        'Console Applications Development',
        'ADO.NET & MS SQL Database Management',
        'ASP.NET MVC Development',
      ],
    },
  ];
}
