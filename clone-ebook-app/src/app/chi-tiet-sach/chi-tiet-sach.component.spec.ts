import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietSachComponent } from './chi-tiet-sach.component';

describe('ChiTietSachComponent', () => {
  let component: ChiTietSachComponent;
  let fixture: ComponentFixture<ChiTietSachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiTietSachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChiTietSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
