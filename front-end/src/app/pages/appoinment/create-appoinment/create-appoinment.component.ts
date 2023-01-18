import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../../services/api/person.service";

@Component({
    selector: 'app-create-appoinment',
    templateUrl: './create-appoinment.component.html',
    styleUrls: ['./create-appoinment.component.scss']
})
export class CreateAppoinmentComponent implements OnInit {

    constructor(
        private personService: PersonService
    ) {
    }

    ngOnInit(): void {
        this.getPersons();
    }

    getPersons(){
        this.personService.getPersonas()
            .subscribe({
                next: (data) => {
                    console.log(data)
                }
                ,
                error: (err) => {
                    console.log(err)
                }
            })
    }

}
