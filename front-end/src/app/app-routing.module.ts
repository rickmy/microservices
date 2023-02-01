import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./pages/authz/authz.module').then(m => m.AuthzModule)
    },
    {
        path: 'citas',
        loadChildren: () => import('./pages/appoinment/appoinment.module').then(m => m.AppoinmentModule)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
