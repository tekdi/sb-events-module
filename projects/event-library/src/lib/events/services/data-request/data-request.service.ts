import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ServerResponse, RequestParam, HttpOptions } from '../../interfaces';
import * as _ from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
     * Contains base Url for api end points
     */
  baseUrl = '';

  constructor(
    private http: HttpClient) {
  }

  /**
 * for preparing headers
 */
  private getHeader(headers?: HttpOptions['headers']): HttpOptions['headers'] {
    // tslint:disable-next-line:variable-name
    const default_headers = {
      Accept: 'application/json',
      // 'X-Consumer-ID': 'X-Consumer-ID',
      //'X-Source': 'web',
     // ts: '2020-12-31T16:23:27+05:30', // moment().format(),
      // tslint:disable-next-line:max-line-length
     // Authorization: '',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET , PUT , POST , DELETE",
      "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
    };

    return default_headers;
  }

  /**
 * for making post api calls
 * @param RequestParam requestParam interface
 */
  post(requestParam: RequestParam): Observable<any> {
    const httpOptions: HttpOptions = {
      headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
      params: requestParam.param
    };
    return this.http.post(this.baseUrl + requestParam.url, requestParam.data, httpOptions).pipe(
      mergeMap((data: any) => {
        return observableOf(data);
      }));
  }


  /**
 * for making get api calls
 *
 * @param requestParam interface
 */
  get(requestParam: RequestParam): Observable<ServerResponse> {
    const httpOptions: HttpOptions = {
      headers: requestParam.header ? requestParam.header : this.getHeader(),
      params: requestParam.param
    };

    return this.http.get(this.baseUrl + requestParam.url, httpOptions).pipe(
      mergeMap((data: ServerResponse) => {
        return observableOf(data);
      }));

  }
}


