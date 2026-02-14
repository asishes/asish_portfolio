import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
  offset: number;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  readonly navLinks: NavLink[] = [
    { label: 'Home', href: '#home', offset: 0 },
    { label: 'About', href: '#about', offset: 800 },
    { label: 'Skills', href: '#skills', offset: 1600 },
    { label: 'Experience', href: '#experience', offset: 2400 },
    { label: 'Projects', href: '#projects', offset: 3200 },
    { label: 'Contact', href: '#contact', offset: 4000 },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/asish-e-s%20-5235872aa', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:asish.es.off@gmail.com', icon: 'email' },
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
