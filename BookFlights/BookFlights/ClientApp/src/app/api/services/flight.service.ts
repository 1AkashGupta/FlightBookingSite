/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { FlightRm } from '../models/flight-rm';

@Injectable({ providedIn: 'root' })
export class FlightService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `searchFlight()` */
  static readonly SearchFlightPath = '/Flight';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchFlight$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlight$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FlightRm>>> {
    const rb = new RequestBuilder(this.rootUrl, FlightService.SearchFlightPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FlightRm>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchFlight$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlight$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<FlightRm>> {
    return this.searchFlight$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>): Array<FlightRm> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchFlight()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlight$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FlightRm>>> {
    const rb = new RequestBuilder(this.rootUrl, FlightService.SearchFlightPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FlightRm>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchFlight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlight(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<FlightRm>> {
    return this.searchFlight$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>): Array<FlightRm> => r.body)
    );
  }

  /** Path part for operation `findFlightFlight()` */
  static readonly FindFlightFlightPath = '/Flight/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFlightFlight$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlightFlight$Plain$Response(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FlightRm>> {
    const rb = new RequestBuilder(this.rootUrl, FlightService.FindFlightFlightPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FlightRm>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFlightFlight$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlightFlight$Plain(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<FlightRm> {
    return this.findFlightFlight$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightRm>): FlightRm => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFlightFlight()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlightFlight$Response(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FlightRm>> {
    const rb = new RequestBuilder(this.rootUrl, FlightService.FindFlightFlightPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FlightRm>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFlightFlight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlightFlight(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<FlightRm> {
    return this.findFlightFlight$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightRm>): FlightRm => r.body)
    );
  }

}
