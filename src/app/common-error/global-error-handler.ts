import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('Other unknown error occured!');
    console.log(error);
    throw new Error(error.error);
  }
}
