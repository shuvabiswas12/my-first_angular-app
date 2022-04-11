import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ErrorHandler } from '../common-error/error-handler';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    @Inject('string') private url: string,
    private http: HttpClient
  ) {}

  getAll(): Observable<any> {
    // now if I want to create a new global error for checking if global error handler is working correctly or not.
    // throw new Error('Hiii');

    /**
     * this way i can replace an error
     * this error can not get from component file. instead an object we are passing an
     * empty object by using this error replcing function 'of()'.
     */
    // return this.http.get(this.url).pipe(catchError((error: any) => of([])));
    //----------------X-----------------
    //
    //
    // now if we want to catch and handle th error then the following code will comes to point

    return this.http.get(this.url).pipe(catchError(ErrorHandler.handleError));
  }

  update(id: number | string) {
    return this.http.patch(this.url + '/' + id, {
      title: 'Hello new post',
    });
  }

  delete(id: number | string) {
    return this.http.delete(this.url + '/' + id);
  }

  create(post: any) {
    return this.http
      .post(this.url, post)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
