import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Skills, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
