import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value)
      return null;
    let prepositions = ["on", "of", "the"];
    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      let w = words[i].toLowerCase();
      if (prepositions.indexOf(w) == -1) {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
      else
        words[i] = w;

    }
    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1).toLowerCase();
    return words.join(' ');
  }

}
