import { Component, signal } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly menuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
