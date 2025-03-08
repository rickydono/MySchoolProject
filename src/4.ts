import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-school-project',
  templateUrl: './my-school-project.component.html',
  styleUrls: ['./my-school-project.component.css']
})
export class MySchoolProjectComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      console.log(res);
    });
  }
}
