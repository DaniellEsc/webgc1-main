import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AuthModule,
        SharedModule
    ]
})
export class HomeModule { }
