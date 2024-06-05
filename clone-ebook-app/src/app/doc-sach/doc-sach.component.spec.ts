import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSachComponent } from './doc-sach.component';

describe('DocSachComponent', () => {
  let component: DocSachComponent;
  let fixture: ComponentFixture<DocSachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
