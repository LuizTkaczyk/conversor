import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data  para a data  em formato brasileiro', () =>{
    const pipe = new DataBrPipe();
    expect(pipe.transform('2021-11-04')).toEqual('04/11/2021')
  })
});
