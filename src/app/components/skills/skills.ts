import { Component } from '@angular/core';

type SkillIcon = 'typescript' | 'dotnet' | 'sql' | 'jenkins' | 'gcp' | 'angular';

interface Skill {
  name: string;
  icon: SkillIcon;
  color: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills: Skill[] = [
    { name: 'TypeScript', icon: 'typescript', color: '#3178c6' },
    { name: '.NET', icon: 'dotnet', color: '#8b5cf6' },
    { name: 'SQL', icon: 'sql', color: '#00a3bf' },
    { name: 'Jenkins', icon: 'jenkins', color: '#d24939' },
    { name: 'GCP', icon: 'gcp', color: '#4285f4' },
    { name: 'Angular', icon: 'angular', color: '#dd0031' },
  ];


  tecnologias = [
    {
      name : "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },

    {
      name : "Angular",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
    },

    {
      name : ".NET Core",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
    },

    {
      name : "Jenkins",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
    },

    {
      name : "SQL Server",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
    },
    {
      name: "Google Cloud Platform",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
    }
  ]
}
