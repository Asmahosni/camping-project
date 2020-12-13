import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PopularCenterComponent } from './components/popular-center/popular-center.component';
import { PopularOneCenterComponent } from './components/popular-one-center/popular-one-center.component';
import { CentersComponent } from './components/centers/centers.component';
import { PageNameComponent } from './components/page-name/page-name.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { CentersAdminComponent } from './components/centers-admin/centers-admin.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { EditCenterComponent } from './components/edit-center/edit-center.component';
import { SingleCenterComponent } from './components/single-center/single-center.component';
import { CenterComponent } from './components/center/center.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { WlcHomeComponent } from './components/wlc-home/wlc-home.component';
import { VideoHomeComponent } from './components/video-home/video-home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BeginnerComponent } from './components/beginner/beginner.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PopularCenterComponent,
    PopularOneCenterComponent,
    CentersComponent,
    PageNameComponent,
    AddCenterComponent,
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    CentersAdminComponent,
    EditCenterComponent,
    SingleCenterComponent,
    CenterComponent,
    SignupComponent,
    LoginComponent,
    UsersAdminComponent,
    EditUserComponent,
    WlcHomeComponent,
    VideoHomeComponent,
    ReservationComponent,
    TestimonialsComponent,
    BeginnerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DemoMaterialModule,
    Ng2PageScrollModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
