import { Component, OnInit } from '@angular/core';
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
import { take } from 'rxjs/operators';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, MatFormFieldModule, MatInputModule, MatIconModule, 
    MatButtonModule, FormsModule, ButtonModule, ListboxModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public title = 'Ask Me Anything!';
  public userInput: string = "";
  value:string = '';
  ascentiaAnswer: string = '';
  questionAsked:string = '';
  recentQueries: string[] = [];
  selectedQueryFromRecentList = '';

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:5000/getanswer', {
      params: {ragQuery : 'what is ascentia'}
    }).pipe(take(1)).subscribe((res:any) => {
      
      this.ascentiaAnswer = res.data;
      this.questionAsked = 'What Is Ascentia'
    })
  }

  ngOnInit() {
    this.recentQueries = [
        'What is Ascentia'
    ];
}

  submit(): void {
    this.questionAsked = ''
    this.ascentiaAnswer = '';
    this.http.get('http://127.0.0.1:5000/getanswer', {
      params: {ragQuery : this.value}
    }).pipe(take(1)).subscribe((res:any) => {
      this.ascentiaAnswer = res.data;
      this.questionAsked = this.value;
      this.recentQueries.push(this.value);
      this.value = '';
    })
  }
}
