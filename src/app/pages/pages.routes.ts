import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pagesRoutes: Routes = [
    {
        // La ruta vacia redirecciona a PagesComponent
        // el cual tiene rutas hijas
        path: '',
        component: PagesComponent,
        children: [
            { path : 'dashboard', component: DashboardComponent },
            { path : 'progress', component: ProgressComponent },
            { path : 'graficas1', component: Graficas1Component },
            // En caso de una ruta vacia redirecciona a dashboard
            { path : '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

// Importar las rutas definniendo una constante PAGES_ROUTES
// mediante RouterModule y la funcion forChild para enviar
// como rutas hijas dentro de la ruta padre
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
