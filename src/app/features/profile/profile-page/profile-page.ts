import { Component, input, inject, OnInit, signal } from '@angular/core';
import { Github } from '../../../core/github';
import { GithubUser } from '../../../models/github-user';
import { RequestState } from '../../../models/request-state';
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

  // Três estados possíveis, nunca misturados: carregando, sucesso (com dado),
  // ou erro (com mensagem). O campo "status" é o que diferencia qual é qual.
  user = signal<RequestState<GithubUser>>({ status: 'loading' });

  ngOnInit(): void {
    // subscribe({ next, error }): "next" roda em caso de sucesso, "error" roda
    // quando o Observable emite uma falha (ex: 404 da API do GitHub).
    this.service.getUser(this.username()).subscribe({
      next: (user) => this.user.set({ status: 'success', data: user }),
      error: () => this.user.set({ status: 'error', error: 'Usuário não encontrado.' }),
    });
  }
}
