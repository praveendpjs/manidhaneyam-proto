import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject5Evs } from './subject-5-evs';

describe('Subject5Evs', () => {
  let component: Subject5Evs;
  let fixture: ComponentFixture<Subject5Evs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject5Evs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject5Evs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
