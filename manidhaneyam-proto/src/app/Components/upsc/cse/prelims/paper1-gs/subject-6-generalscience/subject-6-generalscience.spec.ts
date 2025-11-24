import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject6Generalscience } from './subject-6-generalscience';

describe('Subject6Generalscience', () => {
  let component: Subject6Generalscience;
  let fixture: ComponentFixture<Subject6Generalscience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject6Generalscience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject6Generalscience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
