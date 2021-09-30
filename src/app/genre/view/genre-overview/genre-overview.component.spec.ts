import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreOverviewComponent } from './genre-overview.component';

describe('GenreOverviewComponent', () => {
  let component: GenreOverviewComponent;
  let fixture: ComponentFixture<GenreOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
