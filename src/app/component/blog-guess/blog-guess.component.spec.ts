import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGuessComponent } from './blog-guess.component';

describe('BlogGuessComponent', () => {
  let component: BlogGuessComponent;
  let fixture: ComponentFixture<BlogGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGuessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
