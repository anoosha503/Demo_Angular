import { DatePipe } from '@angular/common';

export class IRegdetails {

  Id?: number;
  name?: string;
  message?: string;
  LogTime!: DatePipe;
}
export class Regdetails implements IRegdetails {

  Id: number = 0;
  name: string = '';
  message: string = '';
  LogTime!: DatePipe;
}
