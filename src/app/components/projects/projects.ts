import { Component, computed, signal } from '@angular/core';
import { ProjectCarousel } from '../project-carousel/project-carousel';
import { Project } from '../../models/project.model';

// TODO: Reemplaza estos proyectos de ejemplo con los tuyos.
// - "images": pon la ruta de tus capturas en public/images/proyectos/... (deja "src: ''" para usar el placeholder).
// - "demoUrl" / "repoUrl" son opcionales; bórralos si no aplican.
const PROJECTS: Project[] = [
  {
    id: 'proyecto-1',
    name: 'Jenkins CI/CD',
    tagline: 'Breve frase que resuma el proyecto',
    description:
      'Describe aquí el problema que resolviste, tu rol y las decisiones técnicas más relevantes del proyecto.',
    tags: ['Terraform', 'TypeScript', '.NET'],
    images: [
      { src: '', alt: 'Proyecto 1 - captura 1' },
      { src: '', alt: 'Proyecto 1 - captura 2' },
      { src: '', alt: 'Proyecto 1 - captura 3' },
    ],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'proyecto-2',
    name: 'Dashboard ',
    tagline: 'Breve frase que resuma el proyecto',
    description:
      'Describe aquí el problema que resolviste, tu rol y las decisiones técnicas más relevantes del proyecto.',
    tags: ['SQL', 'GCP'],
    images: [
      { src: '', alt: 'Proyecto 2 - captura 1' },
      { src: '', alt: 'Proyecto 2 - captura 2' },
    ],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'proyecto-3',
    name: 'Proyecto 3',
    tagline: 'Breve frase que resuma el proyecto',
    description:
      'Describe aquí el problema que resolviste, tu rol y las decisiones técnicas más relevantes del proyecto.',
    tags: ['Jenkins', 'CI/CD'],
    images: [
      { src: '', alt: 'Proyecto 3 - captura 1' },
      { src: '', alt: 'Proyecto 3 - captura 2' },
      { src: '', alt: 'Proyecto 3 - captura 3' },
    ],
    demoUrl: '',
    repoUrl: '',
  },
];

@Component({
  selector: 'app-projects',
  imports: [ProjectCarousel],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly selectedId = signal<string>(PROJECTS[0].id);

  protected readonly selectedProject = computed<Project>(
    () => this.projects.find((project) => project.id === this.selectedId())!,
  );



  select(id: string): void {
    this.selectedId.set(id);
  }
}
