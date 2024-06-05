import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-truyen-tranh',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './truyen-tranh.component.html',
  styleUrl: './truyen-tranh.component.scss'
})
export class TruyenTranhComponent {
  currentName: String = 'Truyện Tranh';

  btnDowLoad = "";

  constructor() {

  }

  ngOnInit(): void {

  }


}
