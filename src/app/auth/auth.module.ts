import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import {NgZorroAntdModule, NzCardModule, NzTabsModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, PasswordResetComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzCardModule,
    NzTabsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  exports: [SignupComponent, LoginComponent, PasswordResetComponent, AuthComponent]
})
export class AuthModule { }
