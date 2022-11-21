import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnTwoComponent } from './en-two.component';

describe('EnTwoComponent', () => {
  let component: EnTwoComponent;
  let fixture: ComponentFixture<EnTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
