import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	states: string[] = [
    'San José', 'Alajuela', 'Cartago', 'Heredia', 'Limón', 'Puntarenas', 'Guanacaste'
  ];

  constructor() { }

  ngOnInit() {
  }


}
