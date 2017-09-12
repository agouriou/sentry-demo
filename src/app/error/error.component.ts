import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'critical error';

  constructor() { }

  ngOnInit() {
  }

  throwError() {
    throw new Error(this.errorMessage);
  }

    throwOtherError(){
        throw new Error(this.errorMessage);
    }

    throwOtherOtherError(){
        throw new Error(this.errorMessage);
    }

}
