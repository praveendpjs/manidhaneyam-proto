import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject8Currentevents } from './subject-8-currentevents';

describe('Subject8Currentevents', () => {
  let component: Subject8Currentevents;
  let fixture: ComponentFixture<Subject8Currentevents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject8Currentevents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject8Currentevents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
