import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject4Economics } from './subject-4-economics';

describe('Subject4Economics', () => {
  let component: Subject4Economics;
  let fixture: ComponentFixture<Subject4Economics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject4Economics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject4Economics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
