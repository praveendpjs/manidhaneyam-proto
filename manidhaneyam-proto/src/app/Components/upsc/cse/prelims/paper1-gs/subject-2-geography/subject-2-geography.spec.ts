import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject2Geography } from './subject-2-geography';

describe('Subject2Geography', () => {
  let component: Subject2Geography;
  let fixture: ComponentFixture<Subject2Geography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject2Geography]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject2Geography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
