import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs1 } from './gs1';

describe('Gs1', () => {
  let component: Gs1;
  let fixture: ComponentFixture<Gs1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gs1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gs1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
