import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject1History } from './subject-1-history';

describe('Subject1History', () => {
  let component: Subject1History;
  let fixture: ComponentFixture<Subject1History>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject1History]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject1History);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
