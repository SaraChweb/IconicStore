import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLVComponent } from './blog-lv.component';

describe('BlogLVComponent', () => {
  let component: BlogLVComponent;
  let fixture: ComponentFixture<BlogLVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogLVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
