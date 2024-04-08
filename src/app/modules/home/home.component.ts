import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { AuthRequest } from './../../models/auth/AuthRequest';
import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;
  loginForm: FormGroup;
  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private cookieService: CookieService,
    private MessageService:MessageService,
    private router: Router

  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.cadastroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitLoginForm(): void {
    if (this.loginForm.valid) {
      this.UserService.authUser(this.loginForm.value as AuthRequest).subscribe({
        next: (response) => {
          if (response) {
            this.cookieService.set('USER_INFO', response.token);
            this.loginForm.reset();

            this.router.navigate(['/notas-fiscais']);

            this.MessageService.add({
              severity:'sucess',
              summary:'Sucesso',
              detail: `Bem vindo de volta${response?.name}!`,
              life: 2000,
            })
          }
        },
        error: (err) =>{
          this.MessageService.add({
            severity:'error',
            summary:'Erro',
            detail: `Errro ao efetuar login!`,
            life: 2000,
          })
        }
      });
    }
  }

  onSubmitCadastroForm(): void {
    if (this.cadastroForm.valid) {
      this.UserService.signupUser(
        this.cadastroForm.value as SignupUserRequest
      ).subscribe({
        next: (response) => {
          if (response) {
            // reseta o formulario e ....
            this.cadastroForm.reset();
            // redireciona para o login...
            this.loginCard = true;
            this.MessageService.add({
              severity:'sucess',
              summary:'Sucesso',
              detail: `Usuário criado com sucesso`,
              life: 2000,
            })
          }
        },
        error: (err) =>{
          this.MessageService.add({
            severity:'error',
            summary:'Erro',
            detail: `Errro ao criar usuário!`,
            life: 2000,
          })
        }
      });
    }
  }
}
