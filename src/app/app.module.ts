import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { GithubFollowersService } from './services/github-followers.service';
import { ResuableComponent } from './reusable.component';
import { TitleCasePipe } from './course/custom-pipes/title-case.pipe';
import { SummaryPipe } from './course/custom-pipes/summary.pipe';
import { CourseServices } from './course/course.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './textbox/textbox.component';
import { ChildComponent } from './child/child.component';
import { InputFormatDirective } from './customDirectives/input-format.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommunicateWithBackendComponent } from './communicate-with-backend/communicate-with-backend.component';
import { PostService } from './services/post.service';
import { GlobalErrorHandler } from './common-error/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TextboxComponent,
    SignupFormComponent,
    SummaryPipe,
    TitleCasePipe,
    ChildComponent,
    ResuableComponent,
    InputFormatDirective,
    TemplateDrivenFormComponent,
    FormArrayComponent,
    FormBuilderComponent,
    CommunicateWithBackendComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NavbarComponent,
    HomeComponent,
    NoAccessComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'posts', component: CommunicateWithBackendComponent },
      { path: 'followers', component: GithubFollowersComponent },
      {
        path: 'followers/:userid/:username',
        component: GithubProfileComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    AuthService,
    CourseServices,
    PostService,
    AuthGuardService,
    GithubFollowersService,
    AdminAuthGuardService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
