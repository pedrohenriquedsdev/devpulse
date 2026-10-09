import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search-page',
  styleUrl: './search-page.scss',
  templateUrl: './search-page.html',
})
export class SearchPage {
  username = '';
}
