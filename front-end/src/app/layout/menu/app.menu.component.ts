import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menú',
                items: [
                    { label: 'Panel de control', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Pacientes', icon: 'pi pi-fw pi-users', routerLink: ['/patients'] },
                    { label: 'Doctores', icon: 'pi pi-fw pi-users', routerLink: ['/doctor'] },
                    { label: 'Configuración', icon: 'pi pi-fw pi-bookmark', routerLink: ['/configuration'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out  ', routerLink: ['/auth/login'] },

                ]
            }
        ];
    }
}
