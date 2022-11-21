import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnOneComponent } from './en-one.component';

describe('EnOneComponent', () => {
  let component: EnOneComponent;
  let fixture: ComponentFixture<EnOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
