import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'other';
  proficiency: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', icon: '⚛️', category: 'frontend', proficiency: 30 },
    { name: 'HTML5', icon: '🏗️', category: 'frontend', proficiency: 50 },
    { name: 'CSS/SCSS', icon: '🎨', category: 'frontend', proficiency: 55 },
    { name: 'JavaScript', icon: '⚡', category: 'frontend', proficiency: 65 },
    { name: 'jQuery', icon: '🔧', category: 'frontend', proficiency: 65 },

    // Backend
    { name: 'C#', icon: '💻', category: 'backend', proficiency: 95 },
    { name: '.NET Core', icon: '🚀', category: 'backend', proficiency: 95 },
    { name: 'Web API', icon: '🔌', category: 'backend', proficiency: 90 },
    { name: 'ASP.NET MVC', icon: '📊', category: 'backend', proficiency: 85 },
    { name: 'Entity Framework', icon: '🗄️', category: 'backend', proficiency: 90 },
    { name: 'ADO.NET', icon: '📈', category: 'backend', proficiency: 85 },
    { name: 'MS SQL', icon: '💾', category: 'backend', proficiency: 90 },

    // Other
    { name: 'WinForms', icon: '🖥️', category: 'other', proficiency: 80 },
    { name: 'PuTTY', icon: '🖧', category: 'other', proficiency: 85 },
  ];

  frontendSkills = this.skills.filter(s => s.category === 'frontend');
  backendSkills = this.skills.filter(s => s.category === 'backend');
  otherSkills = this.skills.filter(s => s.category === 'other');
}
