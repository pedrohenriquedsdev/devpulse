import { Component, input, inject, OnInit } from '@angular/core';
import { Github } from '../../../core/github';
@Component({
  imports: [],
  selector: 'app-profile-page',
  styleUrl: './profile-page.scss',
  templateUrl: './profile-page.html',
})
export class ProfilePage implements OnInit {
  private readonly service = inject(Github);
  username = input.required<string>();

  ngOnInit(): void {
    this.service.getUser(this.username()).subscribe((user) => {
      console.log(user);
    });
  }
}
