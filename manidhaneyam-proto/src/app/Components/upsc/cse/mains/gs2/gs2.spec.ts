import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs2 } from './gs2';

describe('Gs2', () => {
  let component: Gs2;
  let fixture: ComponentFixture<Gs2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gs2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gs2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
