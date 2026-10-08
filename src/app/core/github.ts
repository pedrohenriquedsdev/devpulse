import { Service } from '@angular/core';
import { GithubUser } from '../models/github-user';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Github {
  private readonly http = inject(HttpClient);

  getUser(username: string) {
    return this.http.get<GithubUser>(`https://api.github.com/users/${username}`);
  }
}
