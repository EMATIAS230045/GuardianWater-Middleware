import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { App } from './app';
//import { LoginComponent } from './components/login/login';
import { PerfilComponent } from './components/perfil/perfil';
import { CrearReporteComponent } from './components/crear-reporte/crear-reporte';
import { MainContainerComponent } from './components/main-container/main-container';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'login', component: App },
    { path: 'inicio', component: MainContainerComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'crear-reporte', component: CrearReporteComponent },
    { path: 'historial-admin', component: MainContainerComponent },
    { path: 'usuarios-admin', component: MainContainerComponent },
    { path: 'inicio', component: MainContainerComponent },
    { path: '**', redirectTo: 'login' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule {}