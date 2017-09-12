import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  throwError(msg: string) {
    throw new Error(msg || 'error');
  }

  throwTypeError(msg: string) {
    throw new ReferenceError(msg || 'reference error');
  }

  throwReferenceError(msg: string) {
    throw new TypeError(msg || 'type error');
  }
}
