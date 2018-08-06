import { NgModule } from '@angular/core';

// Importar el SharedModule
import { SharedModule } from '../shared/shared.module';
// Importar modulo para usar ngModel en las vistas
import { FormsModule } from '@angular/forms';

// Importar los componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Importa el archivo de rutas
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    // Declaramos las paginas a utilizar
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
    ],
    // Para usar las paginas fuera del componente del modulo,
    // las exportamos
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        // Agregar a SharedModule como importado
        SharedModule,
        // Agregar al archivo de rutas como importado
        PAGES_ROUTES,
        // Agregar el FormsModule
        FormsModule,
    ],
})
export class PagesModule { }

