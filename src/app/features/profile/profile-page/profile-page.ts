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

  // Preenchido automaticamente pelo Router: a rota é 'perfil/:username'
  // e o app.config.ts tem withComponentInputBinding(), que liga o pedaço
  // da URL (:username) a este input de mesmo nome. Nenhum código nosso
  // atribui esse valor na mão.
  username = input.required<string>();

  // Estado reativo: a HTML "observa" este signal e se re-renderiza
  // sozinha sempre que o valor dele muda (de null para o usuário real).
  user = signal<GithubUser | null>(null);

  ngOnInit(): void {
    // .subscribe() é o "play": só agora a requisição HTTP é de fato disparada.
    // O callback roda quando a resposta chega, com o dado já tipado como GithubUser.
    this.service.getUser(this.username()).subscribe((user) => {
      this.user.set(user);
    });
  }
}
