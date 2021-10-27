
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'client/add', component:AddClientComponent},
  {path:'client/edit/:id', component:EditClientComponent},
  {path:"client/:id", component:ClientDetailsComponent},
  {path:'settings', component:SettingsComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
