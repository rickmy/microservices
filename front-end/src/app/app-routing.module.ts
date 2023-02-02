import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./pages/authz/authz.module').then(m => m.AuthzModule)
    },
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
