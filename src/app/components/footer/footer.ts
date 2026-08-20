import { Component } from '@angular/core';

type ContactIcon = 'mail' | 'phone' | 'linkedin' | 'github';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'edwincals01@gmail.com',
      href: 'mailto:edwincals01@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Teléfono',
      value: '951 250 2867',
      href: 'tel:+529512502867',
      icon: 'phone',
    },
    {
      // TODO: reemplaza el href con la URL de tu perfil de LinkedIn.
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
    },
    {
      // TODO: reemplaza el href con la URL de tu perfil de GitHub.
      label: 'GitHub',
      value: 'GitHub',
      href: '#',
      icon: 'github',
    },
  ];
}
