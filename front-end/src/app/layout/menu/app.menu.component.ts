import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import {SecurityService} from "../../services/security.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private securityService: SecurityService
    ) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menú',
                items: [
                    { label: 'Panel de control', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Pacientes', icon: 'pi pi-fw pi-user', routerLink: ['/patients'] },
                    { label: 'Doctores', icon: 'pi pi-fw pi-users', routerLink: ['/doctor'] },
                    { label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['/configuration'] },
                    {label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out  ', command: () => {this.logout()}}
                ]
            }
        ];
    }

    logout() {
        this.securityService.logout();
    }
}
