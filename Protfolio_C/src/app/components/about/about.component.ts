import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  label: string;
  value: string;
  icon: string;
}

const ICON_MAP: Record<string, string> = {
  briefcase: '👔',
  api: '🔌',
  project: '📊',
  stack: '📚',
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly highlights: Highlight[] = [
    { label: 'Years Experience', value: '2+', icon: 'briefcase' },
    { label: 'REST APIs Built', value: '200+', icon: 'api' },
    { label: 'Projects Completed', value: '6', icon: 'project' },
    { label: 'Tech Stack Items', value: '15+', icon: 'stack' },
  ];

  getIcon(iconName: string): string {
    return ICON_MAP[iconName] || '✨';
  }
}
