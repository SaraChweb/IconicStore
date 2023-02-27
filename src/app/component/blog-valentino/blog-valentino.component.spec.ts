import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogValentinoComponent } from './blog-valentino.component';

describe('BlogValentinoComponent', () => {
  let component: BlogValentinoComponent;
  let fixture: ComponentFixture<BlogValentinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogValentinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogValentinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
