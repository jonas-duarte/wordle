import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtbrOneComponent } from './ptbr-one.component';

describe('PtbrOneComponent', () => {
  let component: PtbrOneComponent;
  let fixture: ComponentFixture<PtbrOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtbrOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtbrOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
