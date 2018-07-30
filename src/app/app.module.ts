import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Obtener la constante de rutas
import { APP_ROUTES } from './app.routes';

// Importar los modulos
import { PagesModule } from './pages/pages.module';

// Importar los componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Eliminar los demas imports DashboardComponent, ProgressComponent, Graficas1Component,
// HeaderComponent, SidebarComponent, BreadcrumbsComponent, NopagefoundComponent, PagesComponent

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // Eliminar los: DashboardComponent, ProgressComponent, Graficas1Component,
    // HeaderComponent, SidebarComponent, BreadcrumbsComponent, NopagefoundComponent, PagesComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule, // Importar el modulo PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
