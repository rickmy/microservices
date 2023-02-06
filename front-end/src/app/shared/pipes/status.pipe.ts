import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: boolean): string {
    console.log(value);
    return value? 'Activo' : 'Inactivo';
  }

}
