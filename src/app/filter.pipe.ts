import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if (sName === '') {
      return value;
    }
    const playersArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      const teamName: string = value[i].team;
      if (teamName.toLowerCase().startsWith(sName.toLowerCase())) {
        playersArray.push(value[i]);
      }
    }
    return playersArray;
  }

}
