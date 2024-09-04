import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { PasionesComponent } from './pages/pasiones/pasiones.component';
import { AuthGuard } from '@angular/fire/auth-guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viajes', component: ViajesComponent, canActivate: [AuthGuard] },
  { path: 'juegos', component: JuegosComponent, canActivate: [AuthGuard] },
  { path: 'pasiones', component: PasionesComponent, canActivate: [AuthGuard] },

];
