import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  booksName = [
    'Kể Truyện Hay Dựng Nghiệp Lớn',
    'Tư Duy Lại Tương Lai',
    'Vì Sao Bạn Nghèo',
  ];

  constructor() {

  }
  handleClick(event: Event): void {
    console.log('Bạn đã nhấn vào tôi', event);
  }

  ngOnInit(): void {

  }
}
