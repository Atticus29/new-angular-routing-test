import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.sass']
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ComponentOneComponent entered");
  }

}
