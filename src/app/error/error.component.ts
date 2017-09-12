import { ErrorService } from './error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'critical error';

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
  }

  throwError() {
    this.errorService.throwError(this.errorMessage);
  }

  throwOtherError() {
    this.errorService.throwReferenceError(this.errorMessage);
  }

  throwOtherOtherError() {
    this.errorService.throwTypeError(this.errorMessage);
  }

}
