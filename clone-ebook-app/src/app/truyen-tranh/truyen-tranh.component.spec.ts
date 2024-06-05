import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyenTranhComponent } from './truyen-tranh.component';

describe('TruyenTranhComponent', () => {
  let component: TruyenTranhComponent;
  let fixture: ComponentFixture<TruyenTranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruyenTranhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruyenTranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
