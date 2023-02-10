import {Component, OnInit} from '@angular/core';
import {ReportService} from "../../../services/api/report.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    formDonwload: FormGroup;

    constructor(
        private reportService: ReportService,
        private fb: FormBuilder
    ) {

    }


    ngOnInit(): void {
        this.formDonwload = this.fb.group({
            id: [null, [Validators.min(1), Validators.required]]
        })
    }

    getReportPDF() {
        const data = this.formDonwload.value;
        console.log(data.id)
        this.reportService.getReportById(data.id)
            .subscribe({
                next: (res) => {
                    console.log(res)
                    let filePath = window.URL.createObjectURL(res);
                    window.open(filePath)
                },
                error: (err) => {
                    console.log(err);
                }
            })
    }

}
