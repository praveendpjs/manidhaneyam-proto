import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject3Polity } from './subject-3-polity';

describe('Subject3Polity', () => {
  let component: Subject3Polity;
  let fixture: ComponentFixture<Subject3Polity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject3Polity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject3Polity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
