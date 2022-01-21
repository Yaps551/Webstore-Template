import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroccoliAnimationComponent } from './broccoli-animation.component';

describe('BroccoliAnimationComponent', () => {
  let component: BroccoliAnimationComponent;
  let fixture: ComponentFixture<BroccoliAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroccoliAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroccoliAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
