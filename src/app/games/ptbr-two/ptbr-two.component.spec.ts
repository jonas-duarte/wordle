import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtbrTwoComponent } from './ptbr-two.component';

describe('PtbrTwoComponent', () => {
  let component: PtbrTwoComponent;
  let fixture: ComponentFixture<PtbrTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtbrTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtbrTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
