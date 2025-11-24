import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csat } from './csat';

describe('Csat', () => {
  let component: Csat;
  let fixture: ComponentFixture<Csat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
