import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  throwError(msg: string) {
    throw new Error(msg);
  }

  throwTypeError(msg: string) {
    throw new ReferenceError(msg);
  }

  throwReferenceError(msg: string) {
    throw new TypeError(msg);
  }
}
