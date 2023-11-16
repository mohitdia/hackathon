import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from  '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, MatFormFieldModule, MatInputModule, MatIconModule, 
    MatButtonModule, FormsModule, ButtonModule, ProgressSpinnerModule],
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
  isLoading: boolean = false;
  tocQuestion: string = 'What are the top table of contents sections?';
  faqs: string[] = [];
  commonFaqs: string[] = ['Contact', 'FAQs'];

  constructor(private http: HttpClient) {
    this.isLoading = true;
    this.http.get('http://127.0.0.1:5000/getanswer', {
      params: {ragQuery : this.tocQuestion}
    }).pipe(
      take(1),
      ).subscribe((res:any) => {
      this.isLoading = false;
      const tocSectionsResponse: string = res.data;
      this.faqs = tocSectionsResponse.split('\n');
      const regex = /[0-9]/g;
      this.faqs = this.faqs.map(res => res.replace('.', '').replace(regex, ""))
      this.faqs = this.faqs.concat(this.commonFaqs);
      // this.ascentiaAnswer = res;
      // this.questionAsked = this.tocQuestion;
    })
  }

  ngOnInit() {
}

  submit(): void {
    this.isLoading = true;
    this.questionAsked = ''
    this.ascentiaAnswer = '';
    this.http.get('http://127.0.0.1:5000/getanswer', {
      params: {ragQuery : this.value}
    }).pipe(
      take(1),
      map((response: any) => response.data?.replaceAll('\n', '<br>'))
      )
    .subscribe((res:any) => {
      this.isLoading = false;
      this.ascentiaAnswer = res;
      this.questionAsked = this.value;
      this.recentQueries.push(this.value);
      this.value = '';
    })
  }

  onBtnClick(tocSection: string) {
    if (!tocSection.includes('Contact') && !tocSection.includes('FAQs')) {
      const regex = /[0-9]/g;
      const lettersOnlyString = tocSection.replace('.', '').replace(regex, "");
      const ragQuery = 'Summarize the section ' + lettersOnlyString;
      this.value = ragQuery;
    }
    else if(tocSection.includes('Contact')) {
      this.value = 'What is the contact number and email address?';
    }
    else {
      this.value = 'What are the FAQs?';
    }
    this.submit();

  }
}
