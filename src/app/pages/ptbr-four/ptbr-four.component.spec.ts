import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtbrFourComponent } from './ptbr-four.component';

describe('PtbrFourComponent', () => {
  let component: PtbrFourComponent;
  let fixture: ComponentFixture<PtbrFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtbrFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtbrFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
