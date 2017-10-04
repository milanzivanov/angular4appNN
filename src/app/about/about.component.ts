import { Component, OnInit } from '@angular/core';
// services
import { LoggingService } from './../services/logging.service';
// http
import { DataService } from './../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [LoggingService]
})
export class AboutComponent implements OnInit {

  constructor(private logger: LoggingService) { }

  logIt() {
    this.logger.log();
  }
  ngOnInit() {
  }

}
