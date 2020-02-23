import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  check=false;
  pool=['','','','','','','','','',];
  constructor() { }
  
  ngOnInit() {
  }
  clicked(index){
    if(this.pool[index]=='X'||this.pool[index]=='O'){
      return;
    }
    if(!this.check){
      this.pool[index]='X';
    }
    else {
      this.pool[index]='O';
    }
    this.check=!this.check;
  }
  refresh(): void {
    window.location.reload();
  }
}
