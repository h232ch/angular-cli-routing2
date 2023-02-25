import { Component } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent {

  heroes=HEROES


}
