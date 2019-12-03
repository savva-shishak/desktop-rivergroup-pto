import { Pipe, PipeTransform } from '@angular/core';
import { EmplJust } from '../types';

@Pipe({
  name: 'initily'
})
export class InitilyPipe implements PipeTransform {

  transform(empl: EmplJust, ...args: any[]): string {
    return empl.surname + ' ' + empl.name[0] + '. ' + empl.patronymic[0] + '.';
  }
}
