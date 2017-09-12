import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

Raven
    .config('https://12f96595f52d46b1beaaf085d3c5abe6@sentry.io/215970', <any>{
        allowDuplicates: true,
        debug: true
    })
    .install();

export class RavenErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        console.error(err);
        Raven.captureException(err);
    }
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      {provide: ErrorHandler, useClass: RavenErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
