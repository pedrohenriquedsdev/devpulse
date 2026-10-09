import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-search-page',
  styleUrl: './search-page.scss',
  templateUrl: './search-page.html',
})
export class SearchPage {
  private readonly router = inject(Router);
  username = '';

  onSearch(): void {
    this.router.navigate(['/perfil', this.username]);
  }
}
