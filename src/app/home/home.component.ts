import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// custom filter
import { FilterPipe } from '../filter.pipe';
// services
import { LoggingService } from './../services/logging.service';
// http
import { DataService } from './../data.service';
// firebase
declare var firebase: any;
// Get a reference to the database service
// var database = firebase.database();
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // services
  providers: [LoggingService, DataService]
})
export class HomeComponent implements OnInit {

  ninjas: any;
  name: string;
  belt: string;
  constructor(
    private logger: LoggingService,
    private dataService: DataService,
    private db: AngularFireDatabase
  ) {
      db.list('/').subscribe( data => {
        this.ninjas = data;
        console.log(this.ninjas);
      });

    // fbPostData(name, belt) {
    //   firebase.database.ref('/').push({name: name, belt: belt});
    // }

    }
    // nn
    fbPostData(name, belt) {
      console.log(this.name, this.belt);
      this.db.app.database().ref('/' + name + belt).set({
            name: name,
            belt: belt,
          });
    }

    // fb api
    // fbPostData(name, belt) {
    //   firebase.database().ref('/' + name + belt).set({
    //     name: name,
    //     belt: belt,
    //   });
    // }


  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    this.dataService.fetchData()
        // .subscribe (
        //   (data) => {
        //     // console.log('test');
        //     // console.log(data.json());
        //     // this.ninjas = data.json();
        //     this.ninjas = data;
        //   }
        // );
        // fire firebase
        // this.fbGetData();
  }

  // firebase
  // fbGetData() {
  //   firebase.database.ref('/').on('child_added', (snapshot) => {
  //     console.log(snapshot.val());
  //     // this.ninjas.push(snapshot.val());
  //   });
  // }





}
