import { Service } from '@angular/core';
import { GithubUser } from '../models/github-user';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Github {
  private readonly http = inject(HttpClient);

  // Retorna um Observable "frio": nenhuma requisição HTTP acontece aqui.
  // Ele só é disparado quando alguém chama .subscribe() (feito no ProfilePage).
  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`https://api.github.com/users/${username}`);
  }
}
