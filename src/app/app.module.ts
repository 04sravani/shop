
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { AddClientComponent } from './componets/add-client/add-client.component';
import { ClientDetailsComponent } from './componets/client-details/client-details.component';
import { ClientsComponent } from './componets/clients/clients.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { EditClientComponent } from './componets/edit-client/edit-client.component';
import { LoginComponent } from './componets/login/login.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { RegisterComponent } from './componets/register/register.component';
import { SettingsComponent } from './componets/settings/settings.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientsComponent,
    DashboardComponent,
    EditClientComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
