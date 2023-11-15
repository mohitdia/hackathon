import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from  '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, MatFormFieldModule, MatInputModule, MatIconModule, 
    MatButtonModule, FormsModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public title = 'Ask Me Anything!';
  public userInput: string = "";
  value:string = 'some value';

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:5000/home/3').subscribe((res) => {
      console.log('value of response', res)
    })
  }

  public submit(): void {
    console.log("you clicked submit");
    console.log("user input", this.userInput);
  }
}
