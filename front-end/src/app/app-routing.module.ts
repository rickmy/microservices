import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {AppLayoutComponent} from "./layout/app.layout.component";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./pages/authz/authz.module').then(m => m.AuthzModule)
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'patients',
                loadChildren: () => import('./pages/patients/patients.module').then(m => m.PatientsModule)
            },
            {
                path: 'doctor',
                loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)
            },
            {
                path: 'configuration',
                loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
