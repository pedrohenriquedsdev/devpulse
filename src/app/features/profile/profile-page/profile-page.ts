import { Component, input, inject, OnInit, signal } from '@angular/core';
import { Github } from '../../../core/github';
import { GithubUser } from '../../../models/github-user';
@Component({
  imports: [],
  selector: 'app-profile-page',
  styleUrl: './profile-page.scss',
  templateUrl: './profile-page.html',
})
export class ProfilePage implements OnInit {
  private readonly service = inject(Github);
  username = input.required<string>();

  user = signal<GithubUser | null>(null);

  ngOnInit(): void {
    this.service.getUser(this.username()).subscribe((user) => {
      this.user.set(user);
    });
  }
}
