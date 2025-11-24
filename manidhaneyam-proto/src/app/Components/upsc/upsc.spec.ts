import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPSC } from './upsc';

describe('UPSC', () => {
  let component: UPSC;
  let fixture: ComponentFixture<UPSC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UPSC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPSC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
