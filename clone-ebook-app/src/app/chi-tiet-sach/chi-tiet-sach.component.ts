import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-sach',
  standalone: true,
  imports: [],
  templateUrl: './chi-tiet-sach.component.html',
  styleUrl: './chi-tiet-sach.component.scss'
})
export class ChiTietSachComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

  }


}
