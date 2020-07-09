import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.component.html',
  styleUrls: ['./livestock.component.scss']
})
export class LivestockComponent implements OnInit {

  webcamActive = false;
  codeReader = false;

   codeText: string;

  changeText(result: string) {
    this.codeText = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
