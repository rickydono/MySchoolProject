import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-my-school-project',
  templateUrl: './my-school-project.component.html',
  styleUrls: ['./my-school-project.component.css']
})
export class MySchoolProjectComponent {
  constructor(private randomService: RandomService) {}

  generateRandomCode(): string {
    const code = this.randomService.generateCode();
    return code;
  }
}
