import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1 } from './topic-1';

describe('Topic1', () => {
  let component: Topic1;
  let fixture: ComponentFixture<Topic1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topic1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
