import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new',
  templateUrl: './my-new.component.html',
  styleUrls: ['./my-new.component.css']
})
export class MyNewComponent implements OnInit {
message: string  = 'I am o3rd generation comonent!'
  constructor() { }

  ngOnInit() {
  }

}
