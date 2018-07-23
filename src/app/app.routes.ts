import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

// Definir una constante para el arreglo de rutas
const appRoutes: Routes=[
    { 
        // La ruta vacia redirecciona a PagesComponent
        // el cual tiene rutas hijas
        path:'', 
        component: PagesComponent,
        children: [
            { path:'dashboard', component: DashboardComponent },
            { path:'progress', component: ProgressComponent },
            { path:'graficas1', component: Graficas1Component },
            // En caso de una ruta vacia redirecciona a dashboard
            { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
        ] 
    },
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    // Para cualquier otra ruta no definida muestra pagenotfound
    { path:'**', component: NopagefoundComponent },
];

// Importar las rutas definniendo una constante APP_ROUTES
// mediante RouterModule y la funcion forRoot para enviar
// como rutas principales
export const APP_ROUTES=RouterModule.forRoot(appRoutes, { useHash: true});