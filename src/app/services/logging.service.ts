import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  // services
  log() {
    console.log('Service working!!!');
  }

  constructor() { }

}
