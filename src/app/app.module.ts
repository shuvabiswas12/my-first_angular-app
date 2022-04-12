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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'posts', component: CommunicateWithBackendComponent },
      { path: 'followers', component: GithubFollowersComponent },
      {
        path: 'followers/:userid/:username',
        component: GithubProfileComponent,
      },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    CourseServices,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
