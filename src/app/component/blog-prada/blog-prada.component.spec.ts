import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPradaComponent } from './blog-prada.component';

describe('BlogPradaComponent', () => {
  let component: BlogPradaComponent;
  let fixture: ComponentFixture<BlogPradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
