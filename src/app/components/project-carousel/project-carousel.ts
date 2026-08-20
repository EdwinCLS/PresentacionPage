import { Component, effect, input, signal } from '@angular/core';
import { ProjectImage } from '../../models/project.model';

@Component({
  selector: 'app-project-carousel',
  imports: [],
  templateUrl: './project-carousel.html',
  styleUrl: './project-carousel.scss',
})
export class ProjectCarousel {
  readonly images = input.required<ProjectImage[]>();

  protected readonly activeIndex = signal(0);

  constructor() {
    // Vuelve a la primera imagen cada vez que cambia el set de imágenes (nuevo proyecto seleccionado).
    effect(() => {
      this.images();
      this.activeIndex.set(0);
    });
  }

  next(): void {
    const total = this.images().length;
    this.activeIndex.update((i) => (i + 1) % total);
  }

  prev(): void {
    const total = this.images().length;
    this.activeIndex.update((i) => (i - 1 + total) % total);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
