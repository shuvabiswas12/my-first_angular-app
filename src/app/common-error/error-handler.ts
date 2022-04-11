import { Observable, throwError } from 'rxjs';
export class ErrorHandler {
  static handleError(error: any): Observable<never> {
    // here we can handle error in two way
    //// this is the one way
    // ...
    let errorMessage: any = null;

    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = `error: ${error.error.message} \nerrorCode: ${error.status}`;
    } else {
      // server side error
      errorMessage = `error: ${error.message} \nerrorCode: ${error.status}`;
    }

    return throwError(() => errorMessage);

    //....
    //// this is the another way
    //...

    // switch (error.status) {
    //   case 404: {
    //     return throwError(() => `{notFound: ${error.message}, status: 404}`);
    //   }
    //   case 403: {
    //     return throwError(() => `Access Denied: ${error.message}`);
    //   }
    //   case 500: {
    //     return throwError(() => `Internal Server Error: ${error.message}`);
    //   }
    //   default: {
    //     return throwError(
    //       () => `An unexpected error occured! Error: ${error.message}`
    //     );
    //   }
    // }
  }
}
