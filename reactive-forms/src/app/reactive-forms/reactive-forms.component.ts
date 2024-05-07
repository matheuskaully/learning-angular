import { JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public cadastroForm: FormGroup = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', [Validators.minLength(8), Validators.maxLength(32), Validators.required]],
    confirmPassword: ['', [Validators.minLength(8), Validators.maxLength(32), Validators.required]]
  })

  public submitForm() {
   if (this.cadastroForm.valid) {
    if (this.cadastroForm.value.password === this.cadastroForm.value.confirmPassword) {
      console.log(this.cadastroForm.value)
      alert('Cadastrado com sucesso!')
    } else {
      alert('Senhas diferentes')
    }
   } else if (this.cadastroForm.invalid) {
    alert('Cadastro inválidado! Tente novamente.')
   }
  }

  constructor(private formBuilder: FormBuilder) {

  }
}
