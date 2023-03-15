import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

import { SidenavComponent } from './components/panel/sidenav/sidenav.component';
import { BodyComponent } from './components/panel/body/body.component';
import { TopbarComponent } from './components/panel/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { AddOptionComponent } from './components/add-option/add-option.component';
import { CardOptionComponent } from './components/card-option/card-option.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { StudentInfoClipComponent } from './components/student-info-clip/student-info-clip.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TopbarComponent,
    SidenavComponent,
    BodyComponent,
    TitleComponent,
    AddOptionComponent,
    CardOptionComponent,
    BackButtonComponent,
    ProfileComponent,
    DataCardComponent,
    StudentInfoClipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
    TitleComponent,
    AddOptionComponent,
    CardOptionComponent,
    BackButtonComponent,
    DataCardComponent,
    StudentInfoClipComponent
  ]
})
export class SharedModule { }
