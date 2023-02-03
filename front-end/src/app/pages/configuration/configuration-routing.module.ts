import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'symptom',
        loadChildren: () => import('./symptom/symptom.module').then(m => m.SymptomModule)
    },
    {
        path: 'treatment',
        loadChildren: () => import('./treatment/treatment.module').then(m => m.TreatmentModule)
    },
    {
        path: 'diagnostic',
        loadChildren: () => import('./diagnostic/diagnostic.module').then(m => m.DiagnosticModule)
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
