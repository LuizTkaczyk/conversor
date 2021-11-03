import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: string): string {
    if(!dataEn){
      return ';'
    }

    const dataArr = dataEn.split('-')
    if(dataArr.length !== 3){
      return dataEn
    }

    return dataArr + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
