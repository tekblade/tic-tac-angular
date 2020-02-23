import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-pool',
  templateUrl: './single-pool.component.html',
  styleUrls: ['./single-pool.component.css']
})
export class SinglePoolComponent implements OnInit {
  @Input() input: string;
  constructor() { }

  ngOnInit() {
  }

}
