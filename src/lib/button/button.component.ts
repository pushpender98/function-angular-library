import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'pushpender-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() handleClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
