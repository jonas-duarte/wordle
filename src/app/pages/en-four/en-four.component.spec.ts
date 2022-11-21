import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnFourComponent } from './en-four.component';

describe('EnFourComponent', () => {
  let component: EnFourComponent;
  let fixture: ComponentFixture<EnFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
