import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {

    // let backdrop: Element = document.querySelector('.popup');
    // (<any>backdrop).style.display = 'block';

    // console.dir(backdrop);

  }

}
