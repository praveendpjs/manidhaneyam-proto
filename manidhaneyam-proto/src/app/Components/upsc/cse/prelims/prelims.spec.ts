import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prelims } from './prelims';

describe('Prelims', () => {
  let component: Prelims;
  let fixture: ComponentFixture<Prelims>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prelims]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prelims);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
