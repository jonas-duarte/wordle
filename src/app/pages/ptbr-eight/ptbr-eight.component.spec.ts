import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtbrEightComponent } from './ptbr-eight.component';

describe('PtbrEightComponent', () => {
  let component: PtbrEightComponent;
  let fixture: ComponentFixture<PtbrEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtbrEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtbrEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
