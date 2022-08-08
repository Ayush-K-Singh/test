import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hr1Component } from './hr1.component';

describe('Hr1Component', () => {
  let component: Hr1Component;
  let fixture: ComponentFixture<Hr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hr1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
