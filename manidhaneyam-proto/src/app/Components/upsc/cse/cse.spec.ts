import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSE } from './cse';

describe('CSE', () => {
  let component: CSE;
  let fixture: ComponentFixture<CSE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
