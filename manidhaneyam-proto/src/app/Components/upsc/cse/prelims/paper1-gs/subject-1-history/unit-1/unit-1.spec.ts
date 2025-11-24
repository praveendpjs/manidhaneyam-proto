import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unit1 } from './unit-1';

describe('Unit1', () => {
  let component: Unit1;
  let fixture: ComponentFixture<Unit1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unit1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unit1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
