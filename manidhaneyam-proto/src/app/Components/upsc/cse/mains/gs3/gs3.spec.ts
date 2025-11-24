import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs3 } from './gs3';

describe('Gs3', () => {
  let component: Gs3;
  let fixture: ComponentFixture<Gs3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gs3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gs3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
