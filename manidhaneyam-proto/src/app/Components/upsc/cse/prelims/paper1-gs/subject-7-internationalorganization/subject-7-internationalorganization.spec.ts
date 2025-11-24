import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject7Internationalorganization } from './subject-7-internationalorganization';

describe('Subject7Internationalorganization', () => {
  let component: Subject7Internationalorganization;
  let fixture: ComponentFixture<Subject7Internationalorganization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject7Internationalorganization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject7Internationalorganization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
