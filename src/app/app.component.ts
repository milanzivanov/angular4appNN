import { Component } from '@angular/core';
import {MdSidenav, MdDialog} from '@angular/material';
import { HomeComponent } from './home/home.component';
// decorator
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Working!!!';
  name = 'Milan Z';
  // @input
  // data = {
  //   firstName: 'Milan',
  //   lastName: 'Zivanov'
  // };

  // @output
  output(e) {
    alert('Working output!!!');
    // console.log(e);
  }

  selectedValue: string;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  dogs = [
    {rows: 2, name: "Mal", human: "Jeremy", age: 5},
    {rows: 1, name: "Molly", human: "David", age: 5},
    { rows: 1, name: "Sophie", human: "Alex", age: 8},
    {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
    { rows: 1, name: "Kobe", human: "Igor", age: 5},
    {rows: 2, name: "Porter", human: "Kara", age: 3},
    { rows: 1, name: "Stephen", human: "Stephen", age: 8},
    {rows: 1, name: "Cinny", human: "Jules", age: 3},
    { rows: 1, name: "Hermes", human: "Kara", age: 3},
  ];


currentDog = {};

  showDog(dog) {
    this.currentDog = dog;
    //this.sidenav.open();
  }

// lists angular material2
  folders = [
  {
    name: 'Photos'
  },
  {
    name: 'Recipes'
  },
  {
    name: 'Work'
  }
];
notes = [
  {
    name: 'Vacation Itinerary'
  },
  {
    name: 'Kitchen Remodel'
  }
];

}
