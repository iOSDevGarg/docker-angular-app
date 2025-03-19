import { Component } from '@angular/core';
import { ApiService } from './api.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = '';
  response: string = '';
 
  constructor(private apiService: ApiService) {}
 
  hitApi() {
    if (!this.url) {
      this.response = '⚠️ Please enter a URL';
      return;
    }
 
    this.apiService.fetchData(this.url).subscribe(
      (res) => this.response = res,
      (err) => this.response = `❌ Error: ${err.message}`
    );
  }
}