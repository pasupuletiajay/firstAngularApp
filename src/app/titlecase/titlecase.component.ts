import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  str: string = "abc";
  constructor() { }

  ngOnInit(): void {
  }

}
