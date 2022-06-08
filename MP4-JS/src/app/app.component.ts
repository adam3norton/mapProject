import { Component, OnInit } from '@angular/core';
import { pinService } from 'src/shared/pinService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MP4-JS';
  displayPinEdit: boolean = false;

  constructor(private pinService: pinService) {}

  ngOnInit(): void {
    this.displayPinEdit = this.pinService.getPinEditBool();
  }

  onClickButton() {
    this.displayPinEdit = this.pinService.togglePinEdit();
  }


}
