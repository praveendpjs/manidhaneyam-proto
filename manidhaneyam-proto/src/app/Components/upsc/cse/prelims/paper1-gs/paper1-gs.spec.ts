import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paper1GS } from './paper1-gs';

describe('Paper1GS', () => {
  let component: Paper1GS;
  let fixture: ComponentFixture<Paper1GS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paper1GS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paper1GS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
