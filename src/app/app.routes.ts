import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

// Quitar los imports de PagesComponent, DashboardComponent,
// ProgressComponent, Graficas1Component

// Definir una constante para el arreglo de rutas
const appRoutes: Routes=[
    // Quitar todas las rutas el PagesComponent
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    // Para cualquier otra ruta no definida muestra pagenotfound
    { path:'**', component: NopagefoundComponent },
];

// Importar las rutas definniendo una constante APP_ROUTES
// mediante RouterModule y la funcion forRoot para enviar
// como rutas principales
export const APP_ROUTES=RouterModule.forRoot(appRoutes, { useHash: true});