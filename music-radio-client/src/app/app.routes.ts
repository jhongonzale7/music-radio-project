import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { WelcomeComponent } from './welcome/welcome';
import { DashboardComponent } from './dashboard/dashboard';
import { ArtistasComponent }   from './artistas/artistas';
import { NovedadesComponent }  from './novedades/novedades';
import { CartComponent }       from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'artistas',   component: ArtistasComponent },
  { path: 'novedades',  component: NovedadesComponent },
  { path: '**',         redirectTo: '' }
];
