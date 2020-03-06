import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(others: any, run4: any, run6: any): any {
    const sum: number = others + 4 * run4 + 6 * run6;
    return sum;
  }

}
